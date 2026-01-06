// src/components/BlogEditor.tsx
"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  Link as LinkIcon,
  Image as ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { useState } from "react";

const AUTHORS = [
  "Bhushan Tekade",
  "Prashant Burde",
  "Prakash Das",
  "Abhijeet Singh",
  "Praful Puri",
];

const BLOG_CATEGORIES = [
  "Salesforce",
  "MERN Stack",
  "Agentic AI",
  "Large Language Models (LLM)",
  "AI Engineering",
  "Web Development",
  "etc",
];

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState(AUTHORS[0]);
  const [isPublishing, setIsPublishing] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [blogCategory, setblogCategory] = useState(BLOG_CATEGORIES[0]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "<p>Start writing...</p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none min-h-[300px] focus:outline-none",
      },
    },
  });

  const handleSave = async () => {
    if (!editor || !title.trim()) return;

    setIsPublishing(true);
    setSuccessMsg("");

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content: editor.getHTML(),
          authorName,
          blogCategory,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to publish");
        return;
      }

      // ✅ SUCCESS
      setSuccessMsg("✅ Blog published successfully");
      setTitle("");
      editor.commands.setContent("<p>Start writing...</p>");
    } catch (err) {
      alert("Server error");
    } finally {
      setIsPublishing(false);
    }
  };

  if (!editor) return null;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter blog title..."
        className="w-full bg-transparent text-4xl font-bold border-b border-zinc-700 pb-2 mb-4 focus:outline-none"
      />

      {/* AUTHOR SELECT */}
      <div className="flex items-center gap-4 mb-4">
        <div className="mb-4 flex items-center gap-2">
        <span className="text-sm text-zinc-400">Author:</span>
        <select
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 text-sm rounded px-3 py-1"
        >
          {AUTHORS.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </div>

      <div className="mb-4 flex items-center gap-2">
          <span className="text-sm text-zinc-400">Category :</span>
         <select
           className="bg-zinc-800 border border-zinc-700 text-sm rounded px-3 py-1"
        value={blogCategory}
        onChange={(e) => setblogCategory(e.target.value)}
      >
        {BLOG_CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      </div>

      </div>

     

      {successMsg && (
        <div className="mb-3 text-green-400 text-sm">{successMsg}</div>
      )}

      <div className="border border-zinc-700 rounded-lg bg-zinc-900">
        <MenuBar
          editor={editor}
          onSave={handleSave}
          isPublishing={isPublishing}
        />
        <div
          className="p-6 cursor-text"
          onClick={() => editor.chain().focus().run()}
        >
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
};

/* ================= MENU BAR ================= */

const MenuBar = ({
  editor,
  onSave,
  isPublishing,
}: {
  editor: Editor;
  onSave: () => void;
  isPublishing: boolean;
}) => {
  const handleImage = () => {
    const imageUrl = prompt("Paste Cloudinary image URL");
    if (!imageUrl) return;
    editor.chain().focus().setImage({ src: imageUrl }).run();
  };

  const setLink = () => {
    const url = prompt("Enter URL");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-wrap items-center gap-1 bg-zinc-800 p-2 border-b border-zinc-700">
      <select
        onChange={(e) => {
          const level = e.target.value;
          if (level === "p") {
            editor.chain().focus().setParagraph().run();
          } else {
            editor
              .chain()
              .focus()
              .toggleHeading({ level: Number(level) as 1 | 2 | 3 })
              .run();
          }
        }}
        className="bg-zinc-800 border border-zinc-700 text-sm rounded px-2 py-1 text-white"
        defaultValue="p"
      >
        <option value="p">Normal</option>
        <option value="1">H1</option>
        <option value="2">H2</option>
        <option value="3">H3</option>
      </select>

      <Btn onClick={() => editor.chain().focus().toggleBold().run()}>
        <Bold size={16} />
      </Btn>
      <Btn onClick={() => editor.chain().focus().toggleItalic().run()}>
        <Italic size={16} />
      </Btn>
      <Btn onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <UnderlineIcon size={16} />
      </Btn>

      <Btn onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <List size={16} />
      </Btn>
      <Btn onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <ListOrdered size={16} />
      </Btn>

      <Btn onClick={() => editor.chain().focus().setTextAlign("left").run()}>
        <AlignLeft size={16} />
      </Btn>
      <Btn onClick={() => editor.chain().focus().setTextAlign("center").run()}>
        <AlignCenter size={16} />
      </Btn>
      <Btn onClick={() => editor.chain().focus().setTextAlign("right").run()}>
        <AlignRight size={16} />
      </Btn>

      <Btn onClick={setLink}>
        <LinkIcon size={16} />
      </Btn>
      <Btn onClick={handleImage}>
        <ImageIcon size={16} />
      </Btn>

      <button
        onClick={onSave}
        disabled={isPublishing}
        className={`ml-auto px-4 py-1 rounded text-sm
          ${isPublishing ? "bg-gray-600" : "bg-blue-600 hover:bg-blue-500"}
        `}
      >
        {isPublishing ? "Publishing..." : "Publish"}
      </button>
    </div>
  );
};

const Btn = ({ children, onClick }: any) => (
  <button
    onClick={onClick}
    className="p-1.5 rounded hover:bg-zinc-600 text-zinc-300"
  >
    {children}
  </button>
);

export default BlogEditor;
