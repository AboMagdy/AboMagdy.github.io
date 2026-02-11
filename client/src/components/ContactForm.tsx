import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Send, AlertCircle, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xyzgwvqd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "An error occurred. Please try again or contact me directly."
      );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-[#e0e7ff] font-mono text-sm font-semibold mb-2">
            &gt; YOUR NAME
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Mohamed Allam"
            className="w-full bg-[#1a1f3a] border border-[#2d3748] text-[#e0e7ff] placeholder-[#718096] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff006e] focus:ring-1 focus:ring-[#ff006e] transition-all duration-300 font-light"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-[#e0e7ff] font-mono text-sm font-semibold mb-2">
            &gt; YOUR EMAIL
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className="w-full bg-[#1a1f3a] border border-[#2d3748] text-[#e0e7ff] placeholder-[#718096] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff006e] focus:ring-1 focus:ring-[#ff006e] transition-all duration-300 font-light"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-[#e0e7ff] font-mono text-sm font-semibold mb-2">
            &gt; SUBJECT
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Project Inquiry"
            className="w-full bg-[#1a1f3a] border border-[#2d3748] text-[#e0e7ff] placeholder-[#718096] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff006e] focus:ring-1 focus:ring-[#ff006e] transition-all duration-300 font-light"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-[#e0e7ff] font-mono text-sm font-semibold mb-2">
            &gt; MESSAGE
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell me about your project or inquiry..."
            rows={6}
            className="w-full bg-[#1a1f3a] border border-[#2d3748] text-[#e0e7ff] placeholder-[#718096] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff006e] focus:ring-1 focus:ring-[#ff006e] transition-all duration-300 font-light resize-none"
          />
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="flex items-center gap-3 bg-[#06ffa5]/10 border border-[#06ffa5]/50 rounded-lg p-4">
            <CheckCircle size={20} className="text-[#06ffa5]" />
            <p className="text-[#06ffa5] font-light">
              Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-3 bg-[#ff006e]/10 border border-[#ff006e]/50 rounded-lg p-4">
            <AlertCircle size={20} className="text-[#ff006e]" />
            <p className="text-[#ff006e] font-light">{errorMessage}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-[#ff006e] hover:bg-[#ff1a7f] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <div className="animate-spin">⚙️</div>
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </Button>

        {/* Alternative Contact */}
        <div className="text-center pt-4 border-t border-[#2d3748]">
          <p className="text-[#a8b5d1] text-sm font-light mb-3">
            Or reach out directly:
          </p>
          <a
            href="mailto:mmagdy180@gmail.com"
            className="inline-flex items-center gap-2 text-[#ff006e] hover:text-[#ff1a7f] transition-colors font-mono text-sm"
          >
            <Mail size={16} />
            mmagdy180@gmail.com
          </a>
        </div>
      </form>
    </div>
  );
}
