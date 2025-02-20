import { apiConnector } from "../apiConnector";
import { AUDIO_DETECTION_URL, TEXT_DETECTION_URL, VIDEO_DETECTION_URL } from "../apis";

export const checkFraud = async (text: string) => {
    try {
        const response = await apiConnector(
            "POST", 
            `${TEXT_DETECTION_URL}`, 
            { message: text }
        );


        return response; 
    } catch (error) {
        console.error("Error in checkFraud:", error);
        throw error;
    }
};
export const checkAudioFraud = async (file: File): Promise<{ isFraud: boolean, transcript:String, protectionTips:String, scamProbability:Number }> => {
    try {
        const formData = new FormData();
        formData.append("audio", file);

        const response = await apiConnector(
            "POST",
            `${AUDIO_DETECTION_URL}`,
            formData, // Sending the file
            { "Content-Type": "multipart/form-data" } // Important for file uploads
        );

        // console.log(response.scamResult.ans !== "LABEL_0");

        return { isFraud: response.scamResult.ans !== "LABEL_0", transcript:response.transcript, protectionTips: response.scamResult.protectionTips, scamProbability: response.scamResult.scamProbability}; 
    } catch (error) {
        console.error("Error in checkFraud:", error);
        throw error;
    }
};

export const checkVideoFraud = async (file: File) => {
    try {
        const formData = new FormData();
        formData.append("video", file);

        const response = await apiConnector(
            "POST",
            `${VIDEO_DETECTION_URL}`,
            formData, // Sending the file
            { "Content-Type": "multipart/form-data" } // Important for file uploads
        );

       return response;
    } catch (error) {
        console.error("Error in checkFraud:", error);
        throw error;
    }
};
