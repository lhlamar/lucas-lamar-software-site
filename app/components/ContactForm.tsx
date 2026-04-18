"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        error?: string;
        message?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Unable to send message. Please try again.");
        return;
      }

      setStatus("success");
      setForm(initialFormState);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-200">
          Name
          <input
            type="text"
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Jane Smith"
            className="rounded-2xl border border-primary-300/25 bg-background/65 px-4 py-3 text-base text-neutral-50 placeholder:text-neutral-400 transition-colors focus:border-primary-300/60 focus:outline-none"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-200">
          Email
          <input
            type="email"
            required
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder="you@example.com"
            className="rounded-2xl border border-primary-300/25 bg-background/65 px-4 py-3 text-base text-neutral-50 placeholder:text-neutral-400 transition-colors focus:border-primary-300/60 focus:outline-none"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-200">
        Subject
        <input
          type="text"
          required
          value={form.subject}
          onChange={(event) => setForm({ ...form, subject: event.target.value })}
          placeholder="Subject here"
          className="rounded-2xl border border-primary-300/25 bg-background/65 px-4 py-3 text-base text-neutral-50 placeholder:text-neutral-400 transition-colors focus:border-primary-300/60 focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-neutral-200">
        Message
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          placeholder="Body here"
          className="resize-none rounded-2xl border border-primary-300/25 bg-background/65 px-4 py-3 text-base text-neutral-50 placeholder:text-neutral-400 transition-colors focus:border-primary-300/60 focus:outline-none"
        />
      </label>

      {status === "error" ? <p className="text-sm text-red-300">{errorMessage}</p> : null}
      {status === "success" ? (
        <p className="text-sm text-secondary-200">Message sent. Thanks for reaching out.</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-fit rounded-2xl border border-primary-300/35 bg-background/85 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary-300/65 hover:bg-background hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}