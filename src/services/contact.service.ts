import { ContactResponse } from "@/types/contact.type";

const AuthService = {
  submitContactForm: async function(formData: FormData): Promise<ContactResponse> {
    try {
      // In a real implementation, you would do something like:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   body: formData
      // });
      // const data = await response.json();
      // return data;
      
      // Extract form data values for demonstration
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;
      
      // Log the form data values
      console.log('Contact form submission:', {
        name,
        email,
        message: message.substring(0, 20) + (message.length > 20 ? '...' : '')
      });
      
      // For now, just return a mock success response after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        message: `Thank you ${name}! Your message has been sent successfully. We'll contact you at ${email} soon.`,
        statusCode: 200
      };
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return {
        message: "Failed to send message. Please try again.",
        statusCode: 500
      };
    }
  }
};

export default AuthService;
