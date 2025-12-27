import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        // Form submits natively via action/method, no reset needed here as it redirects or opens client
        // But for better UX we might just use the native behavior directly on the form tag
        // Removing preventDefault to allow native submission
        setIsSubmitting(true);
        setTimeout(() => setIsSubmitting(false), 2000); // Reset button state
    };

    return (
        <div className="bg-card p-6 md:p-8 rounded-lg border border-blue-500/20 hover:border-blue-900/50 transition-all hover:shadow-md shadow-sm animate-fade-in-up delay-200">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Send me a message</h2>

            <form
                action="https://formsubmit.co/mdadilraza510@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
                target="_blank" // Opens in new tab so user stays on portfolio
            >
                {/* Honeypot for spam protection */}
                <input type="text" name="_honey" style={{ display: "none" }} />
                {/* Disable captcha for cleaner flow (optional) */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Success page (optional, defaults to FormSubmit page) */}
                <input type="hidden" name="_next" value={window.location.href} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            className="bg-background border-blue-500/20 focus:border-orange-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            className="bg-background border-blue-500/20 focus:border-orange-500"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                        id="subject"
                        name="_subject"
                        placeholder="What is this regarding?"
                        required
                        className="bg-background border-blue-500/20 focus:border-orange-500"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        required
                        className="min-h-[120px] bg-background border-blue-500/20 focus:border-orange-500"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                >
                    {isSubmitting ? (
                        "Sending..."
                    ) : (
                        <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                        </>
                    )}
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
