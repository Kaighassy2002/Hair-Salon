import { commonAPI } from "../server/comonAPI"
import { SERVER_URL } from "../server/serverURL"

//register api
export const registerAPI= async(reqBody)=>{
  return  await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

//login api
export const loginAPI= async(reqBody)=>{
  return  await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}


//booking api

export const bookingAPI= async(reqBody,reqHeader)=>{
  return  await commonAPI("POST",`${SERVER_URL}/booking`,reqBody,reqHeader)
}

//userbooking

export const getUserBookingAPI = async (reqHeader) =>{
  return await commonAPI("GET",`${SERVER_URL}/userbooking`,"",reqHeader)
}