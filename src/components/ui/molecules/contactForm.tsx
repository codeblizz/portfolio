"use client";

import Form from "@/components/ui/atoms/form";
import Input from "@/components/ui/atoms/input";
import Button from "@/components/ui/atoms/button";
import Section from "@/components/ui/atoms/section";
import React, { useRef, useActionState } from "react";
import { submitContactForm } from "@/app/contact/actions";

function ContactForm() {
  const inputRef = useRef(null);
  const [result, formAction, isPending] = useActionState(submitContactForm, {
    message: "",
    statusCode: 0,
  });

  return (
    <Form className="" action={formAction}>
      <Section className="">
        {isPending ? "sending..." : result.message}
        <Input
          type="text"
          className=""
          ref={inputRef}
          name="username"
          disabled={isPending}
        />
        <Button
          className=""
          name="login"
          text="Submit"
          type="submit"
          disabled={isPending}
        />
      </Section>
    </Form>
  );
}

export default ContactForm;