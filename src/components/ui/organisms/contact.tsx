"use server";

import React from "react";
import ContactForm from "../molecules/contactForm";
import { ContactResponse } from "@/types/contact.type";
import AuthService from "@/services/contact.service";

async function Contact() {

  const onSubmitAction = async (state: ContactResponse, formData: FormData) => {
    return await AuthService.onSubmitAction(formData, state);
  }

  return <ContactForm onSubmitAction={onSubmitAction} />;
}

export default Contact;