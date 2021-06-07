import React, { useState, useEffect} from 'react'
import Layout from '../../Components/Layout'
import Comments from './Comments/Comments'
import { loadPost } from './postPageAPI'
import './style.css'

export default function PostPage({id}) {

    const [post, setPost] = useState(null)

    useEffect(() => {
        loadPost(id).then(response => setPost(response.data))
    }, [id])

    return (
        <Layout>
            {!post ? <p> Loading... </p> :
            <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Comments postId={post.id} />
            </>
            }
        </Layout>
    )
}
