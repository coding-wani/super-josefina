"use client";

import { colors } from "@/lib/colors";
import { useState } from "react";
import AttachFileButton from "../AttachFileButton/AttachFileButton";
import SendButton from "./SendButton/SendButton";

export default function CommentComposer() {
  const [comment, setComment] = useState("");
  const hasContent = comment.trim().length > 0;

  return (
    <div
      className={`
        flex
        flex-col
        items-center
        gap-2
        border
        ${colors.border.primary} 
        rounded-md
        px-[17.5px]
        py-[11.5px]
        bg-white shadow-sm
      `}
    >
      <input
        type="text"
        placeholder="Leave a comment..."
        className="w-full border-none outline-none"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="flex items-center gap-2 self-end">
        <AttachFileButton />
        <SendButton hasContent={hasContent} type="comment" />
      </div>
    </div>
  );
}
