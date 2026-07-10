import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mic, Paperclip } from "lucide-react";

const composerSchema = z.object({
  message: z.string().trim().min(1, "Type a message before sending."),
});

type ComposerValues = z.infer<typeof composerSchema>;

export function ChatComposer({ onSend }: { onSend: (message: string) => void }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ComposerValues>({ resolver: zodResolver(composerSchema) });

  const submit = (values: ComposerValues) => {
    onSend(values.message);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="border-t border-ink-100 bg-white p-4">
      <div className="flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2">
        <Paperclip className="h-4 w-4 shrink-0 text-ink-300" />
        <input
          {...register("message")}
          placeholder="Ask DecryptCare AI about the audit…"
          className="flex-1 bg-transparent text-sm text-ink-800 outline-none placeholder:text-ink-300"
        />
        <Mic className="h-4 w-4 shrink-0 text-ink-300" />
        <button
          type="submit"
          aria-label="Send message"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white hover:bg-brand-700"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
      {errors.message && <p className="mt-1 pl-4 text-xs text-alert">{errors.message.message}</p>}
      <p className="mt-2 text-center text-[11px] text-ink-300">AI can make mistakes. Verify critical clinical and billing information.</p>
    </form>
  );
}
