import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-[#F6E9D9]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#800020] mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#800020] mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F6E9D9] rounded-lg">
                    <Mail className="w-6 h-6 text-[#800020]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#800020] mb-2">Email</h3>
                    <p className="text-gray-700">hello@korganics.com</p>
                    <p className="text-gray-700">support@korganics.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F6E9D9] rounded-lg">
                    <Phone className="w-6 h-6 text-[#800020]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#800020] mb-2">Phone</h3>
                    <p className="text-gray-700">+91 90000 00000</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Mon-Fri, 10 AM - 6 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F6E9D9] rounded-lg">
                    <Phone className="w-6 h-6 text-[#800020]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#800020] mb-2">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/919000000000"
                      className="text-[#E65A3A] hover:text-[#800020] transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F6E9D9] rounded-lg">
                    <MapPin className="w-6 h-6 text-[#800020]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#800020] mb-2">
                      Location
                    </h3>
                    <p className="text-gray-700">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#800020] mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#ddd" },
                      "&:hover fieldset": { borderColor: "#800020" },
                      "&.Mui-focused fieldset": { borderColor: "#800020" },
                    },
                    "& .MuiOutlinedInput-input": { padding: "12px" },
                  }}
                />

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#ddd" },
                      "&:hover fieldset": { borderColor: "#800020" },
                      "&.Mui-focused fieldset": { borderColor: "#800020" },
                    },
                    "& .MuiOutlinedInput-input": { padding: "12px" },
                  }}
                />

                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#ddd" },
                      "&:hover fieldset": { borderColor: "#800020" },
                      "&.Mui-focused fieldset": { borderColor: "#800020" },
                    },
                    "& .MuiOutlinedInput-input": { padding: "12px" },
                  }}
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={5}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#ddd" },
                      "&:hover fieldset": { borderColor: "#800020" },
                      "&.Mui-focused fieldset": { borderColor: "#800020" },
                    },
                    "& .MuiOutlinedInput-input": { padding: "12px" },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  startIcon={<Send size={20} />}
                  style={{
                    backgroundColor: "#800020",
                    color: "white",
                    padding: "12px",
                    fontSize: "1rem",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
