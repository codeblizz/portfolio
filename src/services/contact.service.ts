import { ContactResponse } from "@/types/contact.type";

const AuthService = {
  someAPI: async function (data: unknown) {
    console.log("data", data);
    return {
      message: "Message successful",
      statusCode: 200,
    };
  },
  onSubmitAction: async function (
    formData: FormData,
    prevResult: ContactResponse
  ) {
    const emaiLData = formData.get("email");
    const result = await this.someAPI(emaiLData);
    return { ...prevResult, ...result };
  },
};

export default AuthService;
