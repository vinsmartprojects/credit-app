import axios from "axios";

// Make a request for a user with a given ID
import * as SecureStore from "expo-secure-store";
const API_URL = "http://143.244.130.37:3000/";
const redirectKey = "sign_in_redirect";
const accessToken = "credit_access_token";
async function getAccessToken() {
  return await SecureStore.getItemAsync(accessToken);
}
export interface RemoteAPIResponse {
  status: number;
  data?: any;
  error?: {
    code?: any;
    message: any;
    type: any;
    meta?: {
      target: any[];
    };
  };
}

export enum APIMETHOD {
  GET,
  PUT,
  POST,
  OPTION,
}
export interface RemoteAPIRequest {
  uri: string;
  method: string | APIMETHOD;
  data: any;
}
export async function remoteDataHandler<RemoteAPIResponse>(
  uri: any,
  method: any,
  data: any
): Promise<RemoteAPIResponse> {
  const stringfiedJSONDATA = JSON.stringify(data);
  console.log( API_URL + uri);
  const _result: any = await axios({
    method: method,
    url: API_URL + uri,
    data: stringfiedJSONDATA,
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + (await getAccessToken()),
    },
  })
    .then(function (response: any) {
      
      return { status: response?.status, data: response?.data?.data };
    })
    .catch(function (error: any) {
      console.log(error);
      if (error.response) {
        return {
          status: error.response?.status,
          error: error.response?.data?.error,
        };
      }
      if (error.request) {
        return {
          status: 503,
          error: {
            code: "BAD_GATEWAY",
            message: "SERVICE_NOT_AVAILABLE",
            type: "BAD_GATEWAY",
          },
        };
      }

      return {
        status: 500,
        error: {
          code: "INTERNAL_ERROR",
          message: "INTERNAL_SERVER_ERROR",
          type: "INTERNAL_ERROR",
        },
      };
    });

  return await _result;
}
