import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate sending email
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSent(true);

        // Reset details after showing success message
        setTimeout(() => setIsSent(false), 3000);
    };

    return (
        <div className="bg-card p-6 md:p-8 rounded-lg border border-orange-500/20 shadow-sm animate-fade-in-up delay-200">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Send me a message</h2>

            {isSent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Message Sent!</h3>
                        <p className="text-muted-foreground">I'll get back to you soon.</p>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" required className="bg-background border-orange-500/20 focus:border-orange-500" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Your email" required className="bg-background border-orange-500/20 focus:border-orange-500" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What is this regarding?" required className="bg-background border-orange-500/20 focus:border-orange-500" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Your message here..." required className="min-h-[120px] bg-background border-orange-500/20 focus:border-orange-500" />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white"
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
            )}
        </div>
    );
};

export default ContactForm;
