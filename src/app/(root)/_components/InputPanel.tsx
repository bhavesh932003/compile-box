"use client";

import { useState } from "react";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { Terminal } from "lucide-react";

function InputPanel() {
  const [input, setInput] = useState("");
  const { setInputData } = useCodeEditorStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    setInputData(e.target.value);
  };

  return (
    <div className="relative bg-[#181825] rounded-xl p-4 ring-1 ring-gray-800/50 h-[340px] mt-[1.5px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#1e1e2e] ring-1 ring-gray-800/50">
            <Terminal className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-sm font-medium text-gray-300">Input</span>
        </div>
      </div>

      {/* Input Area */}
      <textarea
        value={input}
        onChange={handleInputChange}
        className="w-full bg-[#1e1e2e] text-gray-300 font-mono rounded-xl p-4 resize-none h-[265px] 
                   border border-[#313244] focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter input data here..."
      ></textarea>
    </div>
  );
}

export default InputPanel;
