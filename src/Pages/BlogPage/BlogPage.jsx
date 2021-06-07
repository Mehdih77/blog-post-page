import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import './style.css'
import {get} from '../../services/http'


export default function BlogPage() {

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        get('/posts')
        .then( response => setPosts(response.data))
    }, [])

    const postsCard = posts.map((post, index) => {
        const variant = index === 0 ? "item-1" : '' // برای بزرگتر بودن آن پست که ربط به استایل دارد
        return <Card 
        variant={variant}
        data={
            { // اطلاعات زیر از لاین 8 و 12 میایند
            // به تگ های باز و بسته دقت شود... مهم
                target: `/post/${post.id}`,
                background: post.image,
                title: post.title,
                summary: post.summary
            }
        }
         />
    })

    return (
        <Layout>
            <header>
            <h1>Cool Articles</h1>
        </header>
        <div class="band">
            {postsCard}
         </div>
        </Layout>
    )
}
