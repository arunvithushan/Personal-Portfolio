// src/hooks/use-toast.js
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

let listeners = [];
let toasts = [];

function notify() {
  listeners.forEach((listener) => listener(toasts));
}

export function toast({ title, description, variant }) {
  const id = nanoid();
  toasts = [...toasts, { id, title, description, variant }];
  notify();

  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    notify();
  }, 3000);
}

export function useToast() {
  const [state, setState] = useState(toasts);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((l) => l !== setState);
    };
  }, []);

  return { toast, toasts: state }; // ✅ must return toast
}
