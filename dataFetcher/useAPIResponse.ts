import { RemoteAPIResponse } from "./remoteDataHandler";

 

type Props = {};

export interface ResponseHanlerReturnType {
  success: boolean;
  data?: any;
  error?: any;
}
const useAPIResponse = () => {
  async function responseHandler(
    response: RemoteAPIResponse
  ): Promise<ResponseHanlerReturnType> {
    if (response?.status === 200 || response?.status === 201) {
      return { success: true, data: response?.data };
    } else {
      /*  enqueueSnackbar(
        {
          title: response?.error?.message,
          desc: response?.error?.message,
          target: response?.error?.meta?.target?.map((key: any) => {
           return key;
          }),
          code: response?.status,
        },

        { variant: "error" }
      ); */
      return { success: false, error: response?.error };
    }
  }

  return { responseHandler };
};

export default useAPIResponse;
