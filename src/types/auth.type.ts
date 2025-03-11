export type ContactResponse = {
  message: string;
  statusCode: number;
};

export type ContactFormActionResponse = (
  state: ContactResponse,
  formData: FormData
) => Promise<ContactResponse>;
