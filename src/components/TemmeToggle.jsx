import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export const TemmeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = storedTheme === "dark" || (!storedTheme && prefersDark);

    if (dark) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--background", "220 13% 5%");
      document.documentElement.style.setProperty("--card", "220 13% 10%");
      document.documentElement.style.setProperty("--text", "0 0% 100%");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--background", "0 0% 100%");
      document.documentElement.style.setProperty("--card", "0 0% 95%");
      document.documentElement.style.setProperty("--text", "220 13% 10%");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("--background", "220 13% 5%");
      document.documentElement.style.setProperty("--card", "220 13% 10%");
      document.documentElement.style.setProperty("--text", "0 0% 100%");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("--background", "0 0% 100%");
      document.documentElement.style.setProperty("--card", "0 0% 95%");
      document.documentElement.style.setProperty("--text", "220 13% 10%");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-4 right-4 p-2 rounded-full transition-colors duration-300 bg-[hsl(var(--card))] hover:bg-[hsl(var(--border))] focus:outline-none shadow-lg"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-[hsl(var(--text))]" />
      ) : (
        <Moon className="h-6 w-6 text-[hsl(var(--text))]" />
      )}
    </button>
  );
};
