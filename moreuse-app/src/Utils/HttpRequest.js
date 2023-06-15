import axios from 'axios';
import { getToken } from "../Utils/TokenLocalStorage";

const headersConfig = () => {
  const token = getToken();
  if (token) {
    return {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer "+ token
    }
  } else {
    return {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }

}

export const HTTTP_METHODS = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete'
}

export const httpRequest = async ({
  method= HTTTP_METHODS.POST,
  endpoint='/',
  body={},
  params={}
  }) => {
    const url = "http://localhost:3000" + endpoint;
    const options = {
      method,
      url,
      data: body,
      params,
      headers: headersConfig()
    }
    return await axios(options);
}
