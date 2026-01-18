import { Linkedin, Mail, MapPin, Phone, Instagram, Facebook, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const[isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
  

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
      };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact Me <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or collaborate? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:arunvithushan.mj@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    arunvithushan.mj@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:0757375344"
                    className="text-muted-foreground hover:text-primary"
                  >
                    075-7375344 / 076-8599953
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=No+101,+Main+Street,+Lunugala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    No 101, Main Street, Lunugala
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="pt-4 flex flex-col items-center">
                <h2 className="font-medium mb-2">Connect With Me</h2>
                <div className="flex gap-6">
                  <Linkedin className="h-6 w-6 hover:text-primary cursor-pointer" />
                  <Instagram className="h-6 w-6 hover:text-primary cursor-pointer" />
                  <Facebook className="h-6 w-6 hover:text-primary cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                 <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
