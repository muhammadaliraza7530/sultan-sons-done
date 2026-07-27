import { useEffect, useRef, useState } from "react";
import { BotMessageSquare, X } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const INITIAL: Msg[] = [
  {
    role: "assistant",
    content:
      "Welcome to Sultan Sons Estate & Builders. Main aapki construction, design ya property se related koi bhi query mein madad kar sakta hoon. Kaise madad karun?",
  },
];

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      if (!res.ok) throw new Error(data.error || "Chat failed");
      setMessages((m) => [...m, { role: "assistant", content: data.reply || "…" }]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Sorry, connection issue. Please try again or WhatsApp us on 0304-4190190.",
        },
      ]);
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Toggle button */}
      <button
        aria-label="Open AI assistant"
        onClick={() => setOpen((o) => !o)}
        className="group fixed bottom-24 right-5 z-[200] flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/70 text-accent-foreground ring-2 ring-accent/40 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.7)] transition-transform hover:scale-110 sm:bottom-28 sm:right-6"
      >
        {!open && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-accent/30"
            style={{ animationDuration: "2.6s" }}
          />
        )}
        {open ? (
          <X className="relative h-6 w-6" strokeWidth={2.2} />
        ) : (
          <BotMessageSquare className="relative h-7 w-7 drop-shadow" strokeWidth={1.9} />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-44 right-5 z-[200] flex h-[min(520px,65vh)] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-accent/25 bg-card shadow-2xl sm:bottom-48 sm:right-6">
          <div className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-foreground">
                Sultan Sons <span className="text-accent">AI</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Online • Instant reply
              </div>
            </div>
            <div className="size-2 animate-pulse rounded-full bg-accent" />
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-lg bg-accent px-3 py-2 text-sm text-accent-foreground"
                    : "mr-auto max-w-[90%] text-sm leading-relaxed text-foreground/85"
                }
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="mr-auto flex items-center gap-1 text-sm text-accent/70">
                <span className="size-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.2s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.1s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-accent" />
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t border-border bg-background p-3"
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                rows={1}
                placeholder="Type your question…"
                className="flex-1 resize-none bg-transparent px-2 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="rounded-sm bg-accent px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-accent-foreground disabled:opacity-40"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
