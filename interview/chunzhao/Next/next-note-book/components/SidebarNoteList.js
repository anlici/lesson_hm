import SidebarNoteItem from './SidebarNoteItem.js'
export default async function SidebarNoteList({notes}) {
    const arr = Object.entries(notes)
    
    if(arr.length === 0) return (<div>{'No notes created yet!'}</div>);
    return (
        <ul className="notes-list">
            {arr.map(([noteId,note]) => {
                const {title,updateTime} = JSON.parse(note)
                return (
                    <li key={noteId}>
                       <SidebarNoteItem title={title}  noteId={noteId} note={JSON.parse(note)} />
                    </li>
                )
            })}
        </ul>
    )
}