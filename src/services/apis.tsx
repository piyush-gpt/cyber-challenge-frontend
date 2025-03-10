const BASE_URL = import.meta.env.REACT_APP_BASE_URL ?? "http://localhost:5000/api";

export const TEXT_DETECTION_URL = BASE_URL + "/text/analyze-text";
export const AUDIO_DETECTION_URL = BASE_URL + "/audio/analyze-audio";
export const VIDEO_DETECTION_URL = BASE_URL + "/video/analyze-video";


export const REPORT_SCAM_URL = BASE_URL + '/report-scam';