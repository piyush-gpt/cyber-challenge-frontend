import React from 'react'
import {REPORT_SCAM_URL} from '../apis'
import { apiConnector } from '../apiConnector'
import toast from 'react-hot-toast'

interface ScamReportFormData {
  incidentType?: string;
  date?: string;
  amount?: string;
  contactMethod?: string;
  description?: string;
  scamMessage?: string;
  audioEvidence?: File | null;
  videoEvidence?: File | null;
  [key: string]: any; // Index signature to allow string keys
}
// export const ReportScam = async (formData : ScamReportFormData) => {
//     try{
//         console.log(formData)
//         const data = new FormData();

//         // Append all fields to FormData
//         for (const key in formData ) {
//             if (formData[key] !== null && formData[key] !== undefined) {
//                 data.append(key, formData[key]);
//             }
//         }
//         const response = await apiConnector(
//             'POST',
//             REPORT_SCAM_URL ,
//             data,
//             {
//                 'Content-Type': 'multipart/form-data', 
//             }
        
//         )
//         if(response?.data?.success===false){
//             console.log("Error while reporting scam!");
//             toast.error("Error in reporting scam!")
//             return;
//         }
//         // add validation result logic here
//         toast.success("Scam reported successfully!")
//     }
//     catch(err){
//         console.error("Error in reporting scam:", err);
//         throw err;
//     }
// }

export const ReportScam = async (formData: ScamReportFormData) => {
    try {
        console.log("Form Data before conversion:", formData);

        // Create a new FormData object
        const data = new FormData();

        // Append all fields to FormData
        for (const key in formData) {
            if (formData[key] !== null && formData[key] !== undefined) {
                data.append(key, formData[key]);
            }
        }

        // Log FormData to verify its contents
        for (const pair of data.entries()) {
            console.log(pair[0], pair[1]);
        }

        // Make the API call with FormData
        const response = await apiConnector(
            'POST',
            REPORT_SCAM_URL,
            data, // Pass the FormData object
        );

        // const response = await apiConnector("POST", REPORT_SCAM_URL, data);


        if (response?.data?.success === false) {
            console.log("Error while reporting scam!");
            toast.error("Error in reporting scam!");
            return;
        }

        // Success
        toast.success("Scam reported successfully!");
    } catch (err) {
        console.error("Error in reporting scam:", err);
        toast.error("Error in reporting scam!");
        throw err;
    }
};