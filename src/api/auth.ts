import { AuthInstance } from ".";

interface LoginResponse {
  message: string;
  token: string;
}

const loginApi = async (
  userId: string,
  password: string
): Promise<LoginResponse> => {
  const response = await AuthInstance.post("/user/signin", {
    userId,
    password,
  });
  return response.data;
};

interface SignupResponse {
  message: string;
}

const signupApi = async (
  userId: string,
  password: string
): Promise<SignupResponse> => {
  const response = await AuthInstance.post("/user/signup", {
    userId,
    password,
  });
  return response.data;
};

export { loginApi, signupApi };
