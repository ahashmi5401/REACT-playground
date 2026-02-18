import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xpqjldop"); // <-- your Form ID

  return (
    <main className="pt-[88px]">
      {/* Hero */}
      <section className="page-hero py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="section-label text-gold">Reach Out</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mt-3 mb-5">
            Contact Us
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-2xl mx-auto">
            Join Pakistan's leading platform for corporate sustainability. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* FORM */}
            <div>
              <span className="section-label">Send a Message</span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-5">Get in Touch</h2>
              <div className="gold-divider" />

              {/* SUCCESS MESSAGE */}
              {state.succeeded && (
                <p className="mt-6 text-green-600 font-medium">
                  ✅ Your message has been sent successfully!
                </p>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                <div className="grid sm:grid-cols-2 gap-5">
                  <input name="firstName" placeholder="First Name" required className="input" />
                  <input name="lastName" placeholder="Last Name" required className="input" />
                </div>

                <input name="organization" placeholder="Organization" className="input" />

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="input"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <select name="interest" className="input">
                  <option value="">Area of Interest</option>
                  <option>ESG Evaluation & Benchmarking</option>
                  <option>CSR Recognition Program</option>
                  <option>Education & Training</option>
                  <option>Research Collaboration</option>
                  <option>Partnership & Membership</option>
                  <option>Media & Press</option>
                  <option>General Inquiry</option>
                </select>

                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                    className="input"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* CONTACT INFO (unchanged) */}
            <div>
              <span className="section-label">Contact Information</span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-3 mb-5">How to Reach Us</h2>
              <div className="gold-divider" />

              <div className="mt-8 space-y-6">
                {[
                  { icon: MapPin, label: "Office", value: "Islamabad, Pakistan" },
                  { icon: Mail, label: "Email", value: "info@pakistanimpactcouncil.org" },
                  { icon: Phone, label: "Phone", value: "+92 51 000 0000" },
                  { icon: Clock, label: "Office Hours", value: "Mon – Fri, 9:00 AM – 5:00 PM PKT" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-muted-foreground">{label}</p>
                      <p className="text-foreground font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
