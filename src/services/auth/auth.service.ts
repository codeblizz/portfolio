import { LoginResponse } from "@/types/auth.type";

const AuthService = {
  someAPI: async function (data: unknown) {
    console.log("data", data);
    return {
      message: "Login successful",
      statusCode: 200,
    };
  },
  onSubmitAction: async function (
    formData: FormData,
    prevResult: LoginResponse
  ) {
    const dataUsername = formData.get("username");
    const result = await this.someAPI(dataUsername);
    return { ...prevResult, ...result };
  },
};

export default AuthService;
