import {
  calculateExpiredTime,
  getAccessToken,
  getFetchHeaderOptions,
} from "./fetchHelper";

type SignUpType = {
  name?: string;
  mail?: string;
  pass?: string;
  pass_confirm?: string;
  field_u_first_name?: string;
  field_u_last_name?: string;
};

type SignInType = {
  username: string;
  password: string;
};

type SignUpErrorType = {
  message: SignUpType;
};

type SignInErrorType = {
  error: string;
  error_description: string;
  message: string;
};

type Oauh2Type = {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
};

type ApiResponseType<DataType> = {
  status: boolean;
  data: DataType;
};
const signIn = async (userCredential: SignInType) => {
  try {
    if (
      process.env.NEXT_PUBLIC_BACKEND_CLIENT_ID &&
      process.env.NEXT_PUBLIC_BACKEND_CLIENT_SECRET &&
      process.env.NEXT_PUBLIC_BACKEND_ACCESS_TOKEN_TYPE
    ) {
      const formData = new FormData();
      formData.append("client_id", process.env.NEXT_PUBLIC_BACKEND_CLIENT_ID);
      formData.append(
        "client_secret",
        process.env.NEXT_PUBLIC_BACKEND_CLIENT_SECRET
      );
      formData.append("username", userCredential.username);
      formData.append("password", userCredential.password);
      formData.append(
        "grant_type",
        process.env.NEXT_PUBLIC_BACKEND_ACCESS_TOKEN_TYPE
      );
      const options = getFetchHeaderOptions("POST", formData);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_PATH}/oauth/token?_format=json`,
        options
      );
      const data = await response.json();
      if (response.ok) {
        let expiresIn = data.expires_in;
        data.expires_in = calculateExpiredTime(expiresIn);
      }
      return {
        status: response.ok,
        data,
      };
    }
  } catch (error) {
    console.log(error);
  }
  return {
    status: false,
    data: null,
  };
};

const signUp = async (userCredential: SignUpType) => {
  const options = getFetchHeaderOptions("POST", JSON.stringify(userCredential));
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_PATH}/api/user/sign-up?_format=json`,
    options
  );
  const data = await response.json();
  return {
    status: response.ok,
    data,
  };
};

async function verifyOtp(otpData: {
  otp: string;
  client_id: string;
  client_secret: string;
  email: any;
}) {
  const options = getFetchHeaderOptions("POST", JSON.stringify(otpData));
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_PATH}/api/otp/verify?_format=json`,
    options
  );
  const data = await response.json();
  return {
    status: response.ok,
    data,
  };
}

async function getUserInfo() {
  try {
    let response = {
      status: false,
      data: null,
    };
    let options = getFetchHeaderOptions("GET");
    let oauth = getAccessToken();
    if (!oauth) {
      return response;
    }
    options.headers = {
      Authorization: `${oauth.token_type} ${oauth.access_token}`,
    };
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_PATH}/api/user-info?_format=json`,
      options
    );
    let data = await apiResponse.json();
    return {
      status: apiResponse.ok,
      data,
    };
  } catch (error) {
    console.log("getUserInfo() => ", error);
    return {
      status: false,
      data: null,
    };
  }
}

async function refreshAccessToken(): Promise<{ status: boolean; data: any }> {
  try {
    let token = getAccessToken();
    if (
      token &&
      process.env.NEXT_PUBLIC_BACKEND_CLIENT_ID &&
      process.env.NEXT_PUBLIC_BACKEND_CLIENT_SECRET &&
      process.env.NEXT_PUBLIC_BACKEND_REFRESH_TOKEN_TYPE
    ) {
      const formData = new FormData();
      formData.append("client_id", process.env.NEXT_PUBLIC_BACKEND_CLIENT_ID);
      formData.append(
        "client_secret",
        process.env.NEXT_PUBLIC_BACKEND_CLIENT_SECRET
      );
      formData.append(
        "grant_type",
        process.env.NEXT_PUBLIC_BACKEND_REFRESH_TOKEN_TYPE
      );
      formData.append("refresh_token", token.refresh_token);
      const options = getFetchHeaderOptions("POST", formData);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_PATH}/oauth/token?_format=json`,
        options
      );
      const data = await response.json();
      if (response.ok) {
        let expiresIn = data.expires_in;
        data.expires_in = calculateExpiredTime(expiresIn);
      }
      return {
        status: response.ok,
        data,
      };
    }
    return {
      status: false,
      data: null,
    };
  } catch (error) {
    console.log("refreshAccessToken() => ", error);
    return {
      status: false,
      data: null,
    };
  }
}
export { signIn, signUp, verifyOtp, getUserInfo, refreshAccessToken };
export type {
  SignInErrorType,
  SignUpErrorType,
  SignInType,
  SignUpType,
  Oauh2Type,
};
