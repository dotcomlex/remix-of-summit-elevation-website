import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Page Not Found</h1>
        <p className="mb-6 text-xl text-muted-foreground">The page you're looking for doesn't exist. Let's get you back on track.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="text-primary underline hover:text-primary/90 text-lg">
            Back to Home
          </a>
          <a href="tel:+17204475654" className="flex items-center gap-2 text-primary underline hover:text-primary/90 text-lg justify-center">
            <Phone className="h-4 w-4" />
            Call Us: (720) 447-5654
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
