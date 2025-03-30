import EditButton from "@/components/EditButton"
import dayjs from "dayjs"
import NotePreview from "@/components/NotePreview"
export default function Note({ noteId, note }) {
  const { title, content, updateTime } = note
  return (
    <div className="note">
      <div className="note-header">
        <h1 className="note-title">{title}</h1>
        <div className="note-menu">
          <small className="note-updated-at">
            Last updated at {
              dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')
            }
          </small>
          <EditButton noteId={noteId}>Edit</EditButton>
        </div>
        <NotePreview >
            content={content} 
        </NotePreview>
      </div>
    </div>
  )
}