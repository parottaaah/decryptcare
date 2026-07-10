import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ChatMessageBubble } from "@/components/insights/ChatMessageBubble";
import { ChatComposer } from "@/components/insights/ChatComposer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { chatMessages as initialMessages } from "@/lib/mockData";
import { Bell, AlertTriangle, Plus } from "lucide-react";
import type { ChatMessage } from "@/types";

export default function InsightsPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const sendMessage = (content: string) => {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      timestamp: "Just now",
    };
    setMessages((prev) => [...prev, userMessage]);
    // In production this triggers POST /api/insights/chat and streams the assistant reply.
  };

  return (
    <div className="flex h-screen bg-ink-50">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-ink-200/70 bg-white px-8 py-4">
          <div className="flex items-center gap-3">
            <h1 className="text-base font-semibold text-ink-900">Patient: John Doe</h1>
            <span className="text-sm text-ink-400">Bill ID: #DC-88492</span>
            <Badge tone="brand">Active Audit</Badge>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 rounded-full bg-alert px-4 py-2 text-xs font-semibold text-white hover:bg-red-800">
              <AlertTriangle className="h-3.5 w-3.5" />
              Emergency Alert
            </button>
            <Bell className="h-5 w-5 text-ink-400" />
          </div>
        </header>

        <div className="flex-1 space-y-6 overflow-y-auto p-8">
          <p className="text-center text-xs text-ink-300">Today, 10:42 AM</p>
          {messages.map((message) => (
            <ChatMessageBubble key={message.id} message={message} onQuickAction={sendMessage} />
          ))}
        </div>

        <ChatComposer onSend={sendMessage} />

        <Button className="fixed bottom-24 left-6 shadow-panel" variant="primary" size="lg">
          <Plus className="h-4 w-4" />
          New Analysis
        </Button>
      </div>
    </div>
  );
}
