const BASE_URL = import.meta.env.REACT_APP_BASE_URL ?? "https://cyber-challenge-backend.onrender.com";

export const TEXT_DETECTION_URL = BASE_URL + "/api/text/analyze-text";
export const AUDIO_DETECTION_URL = BASE_URL + "/api/audio/analyze-audio";
export const VIDEO_DETECTION_URL = BASE_URL + "/api/video/analyze-video";


export const REPORT_SCAM_URL = BASE_URL + '/api/report-scam';