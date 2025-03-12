"use client";

import Form from "@/components/ui/atoms/form";
import Input from "@/components/ui/atoms/input";
import React, { useRef, useState } from "react";
import Button from "@/components/ui/atoms/button";
import Section from "@/components/ui/atoms/section";
import AuthService from "@/services/contact.service";
import { ContactResponse } from "@/types/contact.type";

function ContactForm() {
  const inputRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ContactResponse>({
    message: "",
    statusCode: 0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    try {
      const response = await AuthService.submitContactForm(formData);
      setResult(response);
    } catch (error: unknown) {
      console.log(error)
      setResult({
        message: "An error occurred while submitting the form",
        statusCode: 500,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form className="" onSubmit={handleSubmit}>
      <Section className="">
        {isSubmitting ? "sending..." : result.message}
        <Input
          type="text"
          className=""
          ref={inputRef}
          name="username"
          disabled={isSubmitting}
        />
        <Button
          className=""
          name="login"
          text="Submit"
          type="submit"
          disabled={isSubmitting}
        />
      </Section>
    </Form>
  );
}

export default ContactForm;
