import React from 'react';
import contactImage from '../assets/Contact1.png';

type ContactProps = {
  darkMode: boolean;
};

const Contact = ({ darkMode }: ContactProps) => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    // Extracting data from the form
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const userMessage = formData.get("message");

    // 1. Your actual Gmail address
    const myEmail = "rajmd1800@gmail.com"; 

    // 2. Default Subject Line
    const subject = encodeURIComponent(`Portfolio Inquiry from ${firstName} ${lastName}`);

    // 3. The Generic Message Template
    const body = encodeURIComponent(
      `Hello,\n\n` +
      `You have received a new message from your portfolio contact form.\n\n` +
      `--- Sender Details ---\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || "Not provided"}\n\n` +
      `--- Message ---\n` +
      `"${userMessage}"\n\n` +
      `----------------------\n` +
      `This email was drafted via the Contact Form.`
    );

    // 4. Redirecting to the mail client
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;

    // 5. Reset the form after a tiny delay
    setTimeout(()=>{
      form.reset();
    },500);
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right,#f97316,#f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>
          <p
            className="text-lg"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            Let's discuss your project
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center order-1 lg:order-1" data-aos="fade-up">
            <img
              src={contactImage}
              alt="Contact"
              className="w-90 max-w-md object-cover"
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            data-aos="fade-up"
            className="order-2 lg:order-2 rounded-xl p-6 border shadow-lg"
            style={{
              background: darkMode
                ? "linear-gradient(to right,#1f2937,#111827)"
                : "linear-gradient(to right,#ffffff,#f9fafb)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                className="input"
                required
              />

              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="input"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email ID"
                className="input sm:col-span-2"
                required
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="input sm:col-span-2"
                required
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                className="input sm:col-span-2 resize-none"
                required
              />

              <button
                type="submit"
                className="sm:col-span-2 py-3 text-white font-semibold rounded-lg
                bg-linear-to-r from-orange-500 to-amber-500
                hover:shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Shared Styles */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            font-size: 1rem;
            background-color: ${darkMode ? "#374151" : "#faede3"};
            border: 1px solid ${darkMode ? "#4b5563" : "#d1d5db"};
            color: ${darkMode ? "white" : "#1f2937"};
          }
          .input:focus {
            outline: none;
            border-color: #f97316;
            box-shadow: 0 0 0 2px rgba(249,115,22,0.2);
          }
        `}
      </style>
    </section>
  );
};

export default Contact;