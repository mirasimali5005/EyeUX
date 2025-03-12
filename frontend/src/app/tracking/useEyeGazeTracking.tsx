'use client';

//eslint-disable-file


import { useState, useEffect, useCallback, useRef } from 'react';
import webgazerMod from 'webgazer';
// Extend the Window interface to include webgazer
declare global {
    interface Window {
        webgazer: unknown;
    }
}

// Custom hook for eye gaze tracking logic
const useEyeGazeTracking = () => {
    const [trackingData, setTrackingData] = useState<{ x: number, y: number, elapsedTime: number }[]>([]);
    const [isTracking, setIsTracking] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    
    const webgazerRef = useRef<any>(null);
    const addTrackingData = useCallback((data: { x: number, y: number, elapsedTime: number }) => {
        setTrackingData((prevData) => [...prevData, data]);
    }, []);

    // Remove tracking data at a specific index
    const removeTrackingData = useCallback((index?: number) => {
        if (index === undefined) {
            console.log("Clearing all data");
            setTrackingData([]);
            return;
        }
        setTrackingData((prevData) => prevData.filter((_, i) => i !== index));
    }, []);

    useEffect(() => {
        if(!window || typeof window === 'undefined') {
            return;
        }
        const webgazer = webgazerMod;
        if (!webgazer) {
            setError('WebGazer not initialized');
            return;
        }
        webgazerRef.current = webgazer;
        window.webgazer = webgazer;

        // Set up webgazer
        webgazerRef.current.setGazeListener((data: { x: number, y: number, elapsedTime: number }) => {
            
            webgazerRef.current.util.bound(data);
            
            if (isTracking) {
                console.log("New data",data);
                addTrackingData(data);
            }
        });

        return () => {
            webgazerRef.current.clearGazeListener();
        }
    

    }, [isTracking, webgazerRef, addTrackingData]);



    const startTracking = useCallback(() => {
        setIsTracking(true);

        // Start tracking
        webgazerRef.current.begin();
        webgazerRef.current.showPredictionPoints(true);



    }, []);

    // Stop tracking function
    const stopTracking = useCallback(() => {
        setIsTracking(false);

        // Stop tracking
        webgazerRef.current.pause();

    }, []);



    // Return all relevant data and functions
    return {
        trackingData,
        isTracking,
        startTracking,
        stopTracking,
        addTrackingData,
        removeTrackingData,
        error
    };
};

export default useEyeGazeTracking;
