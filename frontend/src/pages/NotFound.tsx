import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation />

            <main className="flex-grow flex items-center justify-center px-4 pt-24 pb-20">
                <div className="text-center space-y-8 animate-fade-in-up">
                    <div className="relative inline-block">
                        <h1 className="text-9xl font-extrabold text-royal/10">404</h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl md:text-5xl font-bold text-foreground">Oops!</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link to="/">
                            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white w-full sm:w-auto">
                                <Home className="mr-2 h-4 w-4" />
                                Return Home
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => window.history.back()}
                            className="border-blue-900 text-blue-900 hover:bg-blue-900/10 w-full sm:w-auto"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Go Back
                        </Button>
                    </div>
                </div>
            </main>

            {/* Background Decoration */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-[100px] -z-10"></div>
            <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/5 rounded-full blur-[100px] -z-10"></div>
        </div>
    );
};

export default NotFound;
