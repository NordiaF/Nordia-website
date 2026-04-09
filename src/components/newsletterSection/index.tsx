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
  onSubmit?: (data: NewsletterFormData) => void | Promise<void>;
  className?: string;
};

export type NewsletterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  // subject: string;
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
    // subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  const appsScriptUrl = process.env.NEXT_PUBLIC_NEWSLETTER_APPS_SCRIPT_URL;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (submitState.type) {
      setSubmitState({ type: null, message: "" });
    }

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!appsScriptUrl) {
      setSubmitState({
        type: "error",
        message:
          "Newsletter form is not connected yet. Add NEXT_PUBLIC_NEWSLETTER_APPS_SCRIPT_URL to enable submissions.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ type: null, message: "" });

    try {
      const payload = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
        submittedAt: new Date().toISOString(),
        source: "blog-newsletter",
      });

      await fetch(appsScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      await onSubmit?.(formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setSubmitState({
        type: "success",
        message:
          "Thanks for subscribing. Your details have been sent successfully.",
      });
    } catch {
      setSubmitState({
        type: "error",
        message:
          "We could not send your details right now. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              required
            />
            <FormInput
              label="Last Name"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Email Id"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {/* <FormInput
              label="Subject"
              name="subject"
              placeholder=""
              value={formData.subject}
              onChange={handleChange}
            /> */}
          </div>

          <div className="mt-6">
            <FormTextarea
              label="Message"
              name="message"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>

          {submitState.type ? (
            <div
              className={cn(
                "mt-6 rounded-xl border px-4 py-3 text-sm",
                submitState.type === "success"
                  ? "border-green-200 bg-green-50 text-green-800"
                  : "border-red-200 bg-red-50 text-red-700"
              )}
            >
              {submitState.message}
            </div>
          ) : null}

          <div className="mt-8 flex justify-center">
            <PrimaryButton
              type="submit"
              className="w-full sm:w-[60%] bg-accent text-black"
            >
              {isSubmitting ? "Sending..." : buttonText}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
}
