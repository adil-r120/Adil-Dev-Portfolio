import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-8 right-8 z-50 animate-in fade-in zoom-in duration-300">
                    <Button
                        onClick={scrollToTop}
                        size="icon"
                        className="rounded-full h-12 w-12 bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/20 text-white"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="h-6 w-6" />
                    </Button>
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
