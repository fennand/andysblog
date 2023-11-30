"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormStatusButton() {
  const { pending } = useFormStatus();
  return (
    <button className="text-3xl" type="submit" disabled={pending}>
      {pending ? "sending comment . . . " : "Send comment"}
    </button>
  );
}
