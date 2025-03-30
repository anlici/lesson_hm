import {marked} from 'marked';
import { Children } from 'react';
import sanitizeHtml from 'sanitize-html'; // 引入sanitize-html库
import { preview } from 'vite';
const allowTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'pre', 'code', 'em', 'strong', 'a', 'img', 'br', 'hr', 'table', 'thead', 'tbody', 'tr', 'th', 'td'];
// script xxs 
const allowAttributes = Object.assign (
    {},
    sanitizeHtml.defaults.allowedAttributes,
    {
        img: ['src', 'alt'],
        a: ['href', 'target'],
    }
)
export default function NotePreview({note}) {
    
    return (
       <div className='note-preview'>
            <div className='text-with-markdown'
                dangerouslySetInnerHTML={
                    {
                        __html: sanitizeHtml(
                            marked(Children || ''), {
                                allowedTags,
                                allowedAttributes
                            }
                        )
                    }
                }
                >

            </div>
       </div>
    )
}