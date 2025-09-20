import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background/30 px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium">
          Oops! Page not found
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Button
          size="lg"
          className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          onClick={() => window.location.href = '/'}
        >
          <Home className="w-5 h-5 mr-2 group-hover:animate-bounce" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;