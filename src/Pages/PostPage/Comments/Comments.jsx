import React, { useEffect, useState } from 'react'
import { loadComments } from './commentAPI'

export default function Comments({postId}) {

    const [comments, setComments] = useState(null)

    useEffect(() => {
        loadComments(postId).then( response => setComments(response.data))
    }, [postId])

    const commentsList = !comments ? <p> Loading ...</p> : 
       comments.map( (comment) =>
       <li
        key={comment.id}>
       {comment.summary}
       </li>
       )


    return (
        <ul className="listcom">
            {commentsList}
        </ul>
    )
}
