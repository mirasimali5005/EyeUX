'use client'
import useSendOneDataPointForSession from '@/externalApiCalls/useSendOneDataPointForSession';
import useEyeGazeTracking from './useEyeGazeTracking';  // Import the custom hook
import { useEffect, useState } from 'react';
import { randomBytes } from 'crypto';

const EyeGazeTrackingContainer = () => {
    const [sessionId, setSessionId] = useState<string>('');
    useEffect(() => {

        //Load from the backend
        const sessionId = randomBytes(16).toString('hex');
        // const sessionId = '6eabb159-a867-4cf7-b3ee-b3fd65ce6fa3';
        setSessionId(sessionId);
    }, []);
    
    // Use the custom hook to handle eye gaze tracking
    const { 
        trackingData, 
        isTracking, 
        startTracking, 
        stopTracking, 
        removeTrackingData,
        error
    } = useEyeGazeTracking();



    const {sendGazeData} = useSendOneDataPointForSession(sessionId);
    useEffect(() => {
        if(isTracking && trackingData.length > 0) {
            const lastData = trackingData[trackingData.length - 1];

            sendGazeData({
                x: lastData.x,
                y: lastData.y,
                timestamp: lastData.elapsedTime
            });
        }
    }, [trackingData, isTracking, sendGazeData]);



    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Eye Gaze Tracking</h2>

            {isTracking && (
                <div className="bg-gray-100 p-4 rounded mb-4">
                    <p>Tracking...</p>
                </div>
            )}


            <div className="flex w-12 gap-2 right-48 absolute mb-4">
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={startTracking}
                    disabled={isTracking}  // Disable button while tracking is active
                >
                    Start
                </button>
                <button 
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={stopTracking}
                    disabled={!isTracking}  // Disable button when not tracking
                >
                    Stop
                </button>
                <button 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    onClick={() =>{
                        removeTrackingData();
                    }}
                    disabled={!isTracking}  // Disable button when not tracking
                >
                    Clear
                </button>


                {error && <div className='text-red-500'>{error}</div>}
            </div>
            <ul className="list-disc pl-5">

                {trackingData && trackingData.map((data, index) => (
                    <li key={index} className="mb-2">
                        <div className="flex justify-between items-center">
                            <span>{`x: ${data.x}, y: ${data.y}, timestamp: ${data.elapsedTime}`}</span>
                            <button 
                                className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400 ml-4"
                                onClick={() => removeTrackingData(index)}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default EyeGazeTrackingContainer;