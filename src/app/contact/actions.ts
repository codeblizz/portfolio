'use server';

import { ContactResponse } from "@/types/contact.type";
import AuthService from "@/services/contact.service";

export async function submitContactForm(state: ContactResponse, formData: FormData) {
    return await AuthService.onSubmitAction(formData, state);
}

