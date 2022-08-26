import axios from "axios";
import React, { useReducer, useState } from "react";
import {
  RemoteAPIResponse,
  remoteDataHandler,
} from "../../../dataFetcher/remoteDataHandler";

export const OnBoardingContext = React.createContext<
  | {
      currentPage: boolean;
    }
  | undefined
>(undefined);
export const enabledLanguages = [
  { label: "English", value: "ENG" },
  { label: "हिंदी", value: "HIN" },
  { label: "ಕನ್ನಡ", value: "KAN" },
  { label: "தமிழ்", value: "TML" },
  { label: "తెలుగు", value: "TEL" },
];

const initOnBoardingInputs = {
  mobile: "",
  language: "KAN",
  email: "",
  storeName: "",
  ownerName: "",
  pincode: "",
  logo: "",
  profileImageFile: null,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "TEXT_INPUT_CHANGE":
      console.log("TEXT_INPUT_CHANGE", action?.payload);
      return { ...state, [action?.payload.key]: action?.payload.value };
    case "IMAGE_UPLOADED":
      return { ...state, profileImageFile: action?.payload };
    default:
      return state;
  }
}

export function OnBoardingProvider({ children }: { children: JSX.Element }) {
  const [onBoardingInputs, dispatch] = useReducer(
    reducer,
    initOnBoardingInputs
  );
const [currentStage, setcurrentStage] = useState(0)
  function onTextInputChange(data: any) {
    dispatch({
      type: "TEXT_INPUT_CHANGE",
      payload: { key: data?.key, value: data?.value },
    });
  }

  function onUploadChange(data: any) {
    dispatch({
      type: "IMAGE_UPLOADED",
      payload: data,
    });
  }

  async function onRegister() {
    if (onBoardingInputs?.profileImageFile) {
      var fileData: any = new FormData();

      fileData.append("file", {
        uri: onBoardingInputs?.profileImageFile,
        name: onBoardingInputs?.mobile + ".jpeg",
        type: "image/jpeg",
      });
      console.log("fileData", fileData);
      await axios({
        method: "POST",
        url: "http://143.244.130.37:3000/" + "cdn/upload",
        data: fileData,

        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then(function (response: any) {
          console.log("response",response)
          return { status: response?.status, data: response?.data?.data };
        })
        .catch(function (error: any) {
          console.log("error",error)
        });
    }
  }
  const value: any = {
    currentStage, setcurrentStage,
    onBoardingInputs: onBoardingInputs,
    onTextInputChange: onTextInputChange,
    onUploadChange: onUploadChange,
    onRegister: onRegister,
  };
  return (
    <OnBoardingContext.Provider value={value}>
      {children}
    </OnBoardingContext.Provider>
  );
}
