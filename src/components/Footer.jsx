import { ArrowUp } from "lucide-react"; // ✅ import the icon

export const Footer = () => {
  return (
    <footer className="py-1 px-2 bg-card relative border-t border-border mt-9 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary)/0.8)] transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </a>
    </footer>
  );
};
