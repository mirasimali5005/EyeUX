"use client"
import dynamic from "next/dynamic";

const EyeGazeSSR = dynamic(() => import("./EyeGazeTrackingContainer"), {
    ssr: false,
    });
    
export default EyeGazeSSR;