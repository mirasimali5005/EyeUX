import { useCallback } from 'react';
import useBackend from './useBackend';



interface GazeData {
    x: number;
    y: number;
    timestamp: number;
}


const useSendOneDataPointForSession = (sessionId: string) => {
    const { postData } = useBackend();

    const sendGazeData = useCallback((gazeData: GazeData) => {
        postData('/eye-track', { session_id: sessionId, x: gazeData.x, y: gazeData.y, timestamp: gazeData.timestamp });
    }, [postData, sessionId]);

    



    return { sendGazeData };
};

export default useSendOneDataPointForSession;