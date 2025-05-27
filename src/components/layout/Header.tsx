import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Moon, ShoppingCart, Sun } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { AuthButtons, UserButton } from "../auth/AuthButtons";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

const Header = () => {
  const { getTotalItems } = useCart();
  const isMobile = useIsMobile();
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check for user preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Sreemeditec</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-sm font-medium">Home</Link>
          <Link to="/about" className="text-sm font-medium">About</Link>
          <Link to="/services" className="text-sm font-medium">Services</Link>
          <Link to="/store" className="text-sm font-medium">Store</Link>
          <Link to="/contact" className="text-sm font-medium">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </Link>
          
          {isMobile ? (
            <UserButton />
          ) : (
            <AuthButtons />
          )}

          {isMobile && (
            <Button variant="outline" size="icon">
              <span className="sr-only">Toggle menu</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
