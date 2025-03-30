// /note/123/

import Note from "@/components/Note";
import { getNote } from "@/lib/notes";
import { notFound } from "next/navigation"; // 404 
export default async function NotePage({ params }) {
  const note = await getNote(params.id);
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(5000);
  
  if (!note) {
    return notFound();
  }
  return <Note note={note} />;
}
