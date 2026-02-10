import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

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
          <Link to="/contact" className="text-primary underline hover:text-primary/90 text-lg">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
