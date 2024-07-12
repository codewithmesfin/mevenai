"use client"


import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
 
export default function Writer() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();
 
  // Renders the editor instance using a React component.
  return <div>
    <section>
        <div className="py-32">
        <BlockNoteView editor={editor} />;
        </div>
    </section>
  </div>
}
 