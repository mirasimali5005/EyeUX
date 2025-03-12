// import { useState, useCallback } from 'react';
// import useBackend from './useBackend';



// interface GazeData {
//     x: number;
//     y: number;
//     timestamp: number;
// }

// const BUFFER_SIZE = 50; // Adjust the buffer size as needed

// const useBufferedSendGazeDataForSession = (sessionId: string) => {
//     const [gazeBuffer, setGazeBuffer] = useState<GazeData[]>([]);
//     const { postData } = useBackend();

//     const sendGazeData = useCallback((gazeData: GazeData[], startTime: number, endTime: number) => {
//         console.log("Sending gaze data", gazeData, 'gb', gazeBuffer);

//         postData('/gaze-data', { gazeData, startTime, endTime });
//     }, [postData]);

    

//     const addGazeData = useCallback((gazeData: GazeData) => {
//         console.log("Adding gaze data for ",sessionId);
//         setGazeBuffer((prevBuffer) => {
//             const newBuffer = [...prevBuffer, gazeData];
//             if (newBuffer.length >= BUFFER_SIZE) {
//                 const startTime = newBuffer[0].timestamp;
//                 const endTime = newBuffer[newBuffer.length - 1].timestamp;
//                 sendGazeData(newBuffer, startTime, endTime);
//                 return [];
//             }
//             return newBuffer;
//         });
//     }, [sendGazeData]);


//     return { addGazeData };
// };

// export default useBufferedSendGazeDataForSession;