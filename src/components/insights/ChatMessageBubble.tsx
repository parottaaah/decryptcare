import { motion } from "framer-motion";
import { Languages, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/types";

export function ChatMessageBubble({ message, onQuickAction }: { message: ChatMessage; onQuickAction: (label: string) => void }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn("flex", isUser ? "justify-end" : "justify-start")}
    >
      <div className={cn("max-w-xl", isUser && "text-right")}>
        {!isUser && (
          <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-brand-700">
            <CheckCircle2 className="h-3.5 w-3.5" />
            BILL ANALYSIS COMPLETE
          </p>
        )}
        <div
          className={cn(
            "rounded-2xl px-4 py-3 text-sm",
            isUser ? "bg-ink-900 text-white" : "bg-white text-ink-800 shadow-card"
          )}
        >
          <p className="leading-relaxed">{message.content}</p>

          {message.translation && (
            <div className="mt-3 rounded-xl bg-brand-50 p-3 text-left">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                <Languages className="h-3.5 w-3.5" />
                {message.translation.language}
              </p>
              <p className="text-sm leading-relaxed text-ink-700">{message.translation.text}</p>
            </div>
          )}

          {message.costNote && (
            <p className="mt-3 text-left text-xs leading-relaxed text-ink-500">
              <span className="font-semibold text-ink-700">Cost Breakdown Note: </span>
              {message.costNote}
            </p>
          )}

          {message.quickActions && (
            <div className="mt-3 flex flex-wrap gap-3 text-left">
              {message.quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => onQuickAction(action)}
                  className="text-xs font-medium text-brand-700 hover:underline"
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
        <p className="mt-1 text-[11px] text-ink-300">{message.timestamp}</p>
      </div>
    </motion.div>
  );
}
