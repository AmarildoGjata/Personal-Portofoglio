import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import IconContainer from "../components/IconContainer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAIL_INIT_PUBLIC_KEY);
  }, []);

  const resetState = () => {
    setName("");
    setEmail("");
    setMessage("");
    setStatus(null);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendMail = () => {
    setStatus("sending");
    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
        {
          from_name: name,
          from_email: email,
          message: message,
        }
      )
      .then(() => {
        resetState();
        setStatus("success");
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    sendMail();
  };

  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <section className="px-[9%] pt-12 pb-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-[var(--main-color)] mb-12 text-center animate-fadeIn">
          Get in Touch
        </h1>

        <div className="w-full max-w-lg bg-gray-900 p-8 rounded-2xl border-2 border-[var(--main-color)] shadow-md transition-all duration-300 animate-fadeIn">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 border border-[var(--main-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 border border-[var(--main-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 bg-gray-800 border border-[var(--main-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-3 font-semibold rounded-lg border-2 border-[var(--main-color)] transition-all duration-300 ${
                status === "sending"
                  ? "bg-gray-700 cursor-not-allowed text-white"
                  : "bg-[var(--main-color)] text-black hover:bg-transparent hover:text-[var(--main-color)]"
              }`}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status === "success" && (
            <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-4">Failed to send. Please try again.</p>
          )}
        </div>

        <div className="mt-10 flex space-x-6 animate-fadeIn">
          <IconContainer
            link="https://www.facebook.com/share/16NTYmtgfq/"
            ariaLabel="Facebook profile"
          >
            <FaFacebookF />
          </IconContainer>
          <IconContainer
            link="https://www.linkedin.com/in/amarildo-gjata-535a1783"
            ariaLabel="LinkedIn profile"
          >
            <FaLinkedinIn />
          </IconContainer>
          <IconContainer
            link="https://github.com/AmarildoGjata"
            ariaLabel="GitHub profile"
          >
            <FaGithub />
          </IconContainer>
        </div>
      </section>
    </div>
  );
};

export default Contact;
