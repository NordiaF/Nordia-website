"use client";

import { useState } from "react";
import Typography from "@/utils/Typography";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import FormInput from "@/components/inputs/FormInput";
import FormTextarea from "@/components/inputs/FormTextarea";
import { cn } from "@/lib/cn";

export type NewsletterSectionProps = {
  heading?: string;
  description?: string;
  subheading?: string;
  buttonText?: string;
  onSubmit?: (data: NewsletterFormData) => void;
  className?: string;
};

export type NewsletterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export default function NewsletterSection({
  heading = "Subscribe to Our Newsletter",
  description = "Be among the first to receive inspiring stories, truth-based articles, and updates from our programs straight to your inbox. Your email subscription keeps you connected to Nordia's journey of truth, learning, and transformation.",
  subheading = "Join Our Mailing List Below",
  buttonText = "Send message",
  onSubmit,
  className,
}: NewsletterSectionProps) {
  const [formData, setFormData] = useState<NewsletterFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <section
      className={cn(
        "w-full bg-[#E2F0FB] py-14",
        className
      )}
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Typography.H1 className="text-[28px] sm:text-[32px] md:text-[36px] text-black">
            {heading}
          </Typography.H1>
          <Typography.BigText className="mt-4 text-[15px] sm:text-[18px] md:text-[22px] text-black/85 leading-relaxed">
            {description}
          </Typography.BigText>
          <Typography.Text className="mt-6 block text-[14px] sm:text-[18px] text-black/80">
            {subheading}
          </Typography.Text>
        </div>

        <form onSubmit={handleSubmit} className="mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <FormInput
              label="First Name"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
            />
            <FormInput
              label="Last Name"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
            />
            <FormInput
              label="Email Id"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
            <FormInput
              label="Subject"
              name="subject"
              placeholder=""
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="mt-6">
            <FormTextarea
              label="Message"
              name="message"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <PrimaryButton
              type="submit"
              className="w-full sm:w-[60%] bg-accent text-black"
            >
              {buttonText}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
}
