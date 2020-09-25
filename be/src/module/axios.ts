import axios, { AxiosRequestConfig } from 'axios';

const configuredAxios = axios.create();

const naverAxios = axios.create({
  headers: {
    'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
  },
});

export async function request<RequestBody, ResponseBody>(param: {
  method: AxiosRequestConfig['method'];
  url: string;
  data?: RequestBody;
  headers?: object;
  useNaver?: boolean;
}) {
  const { method, url, data, headers, useNaver } = param;

  let axiosToUse = configuredAxios;

  // 네이버 Open API를 사용하면
  if (param.useNaver) axiosToUse = naverAxios;

  if (data) {
    console.log('axios request: ', data);
  }

  try {
    const response = await axiosToUse.request<ResponseBody>({
      method,
      url,
      data,
      headers,
    });

    console.log('axios response: ', response.data);

    return response;
  } catch (e) {
    console.error(e);
  }
}
