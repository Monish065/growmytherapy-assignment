"use client";

import { FormEvent, useState } from "react";

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f7f3ed] flex items-center justify-center px-6">
        <div className="max-w-xl w-full bg-white rounded-2xl p-10 text-center shadow-sm">
          <div className="text-5xl mb-5">✓</div>

          <h1 className="text-3xl font-serif text-[#31453d] mb-4">
            Consultation Request Received
          </h1>

          <p className="text-gray-600 leading-7 mb-8">
            Thank you for reaching out. Dr. Maya Reynolds will review your
            request and follow up regarding your preferred appointment time.
          </p>

          <a
            href="/"
            className="inline-block rounded-full bg-[#31453d] px-7 py-3 text-white hover:bg-[#253831] transition"
          >
            Return Home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f3ed] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8b7563] mb-3">
            Dr. Maya Reynolds, PsyD
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-[#31453d] mb-5">
            Schedule a Consultation
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 leading-7">
            Tell us a little about yourself and your preferred appointment
            time. We’ll follow up with you to confirm availability.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-7 md:p-10 shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                required
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#8b7563]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                required
                type="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#8b7563]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                required
                type="tel"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#8b7563]"
                placeholder="Phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                required
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#8b7563]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <select
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#8b7563]"
              >
                <option value="">Select a time</option>
                <option>9:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
                <option>5:00 PM</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Session Type
              </label>
              <select
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#8b7563]"
              >
                <option value="">Select an option</option>
                <option>In-person therapy</option>
                <option>California telehealth</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How can we help?
            </label>

            <textarea
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#8b7563]"
              placeholder="Tell us briefly what you'd like support with..."
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-[#31453d] px-7 py-4 text-white font-medium hover:bg-[#253831] transition"
          >
            Request Consultation
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            This form is a consultation request. Your appointment will be
            confirmed separately based on availability.
          </p>
        </form>
      </div>
    </main>
  );
}