// src/components/ui/toaster.jsx
import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="bg-white border shadow-md rounded-md p-4 w-64 animate-fade-in"
        >
          <h4 className="font-semibold">{t.title}</h4>
          <p className="text-sm text-gray-600">{t.description}</p>
        </div>
      ))}
    </div>
  );
}
