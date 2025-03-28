"use client"
import dayjs from 'dayjs'
export default async function SidebarNoteList({notes}) {
    const arr = Object.entries(notes)
    
    if(arr.length === 0) return (<div>{'No notes created yet!'}</div>);
    return (
        <ul className="notes-list">
            {arr.map(([noteId,note]) => {
                const {title,updateTime} = JSON.parse(note)
                return (
                    <li key={noteId}>
                        {/* <a href={`/note/${noteId}`}>
                            <p>{title}</p>
                            <p>{updateTime}</p>
                        </a> */}
                        <header className="sidebar-note-header">
                            <strong>{title}</strong>
                            <br/>
                            <small> {dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')} </small>
                        </header>
                    </li>
                )
            })}
        </ul>
    )
}