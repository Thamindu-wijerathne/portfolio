"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { MessageCircle, X, Maximize2, Minimize2 } from "lucide-react"
import ChatBot from "./chat-bot"

interface ChatWidgetProps {
  onClose: () => void
}

export default function ChatWidget({ onClose }: ChatWidgetProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Desktop Chat Widget */}
      <div
        className={`fixed bottom-24 right-6 bg-slate-800 rounded-lg shadow-2xl border border-slate-600 z-50 flex flex-col animate-in slide-in-from-bottom-2 slide-in-from-right-2 duration-300 transition-all hidden md:flex ${
          isExpanded ? "w-[500px] h-96" : "w-80 h-96"
        }`}
      >
        <div className="flex items-center justify-between p-3 border-b border-slate-600 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Ask me anything!</h3>
              <p className="text-xs text-cyan-100">{isExpanded ? "Wide view" : "Compact view"}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white hover:bg-white/20 w-8 h-8 border border-white/20"
              title={isExpanded ? "Compress Chat" : "Expand Chat"}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20 w-8 h-8 border border-white/20"
              title="Close Chat"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <ChatBot isExpanded={isExpanded} />
        </div>
      </div>

      {/* Mobile fullscreen version */}
      <div className="fixed inset-0 bg-slate-800 z-50 flex flex-col md:hidden">
        <div className="flex items-center justify-between p-4 border-b border-slate-600 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Ask me anything!</h3>
              <p className="text-sm text-cyan-100">I'm here to help</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-hidden">
          <ChatBot isExpanded={true} />
        </div>
      </div>
    </>
  )
}
