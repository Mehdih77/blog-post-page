import React from 'react'
import './style.css'
import {A} from 'hookrouter'

export default function Card({ data , variant}) {
    return (
        <div class={variant}>
        <A href={data.target}
            class="card">
            <div class="thumb"
                style={{ backgroundImage: `url(${data.background})`}}>
            </div>
            <article>
                <h1>{data.title}</h1>
                <span>{data.summary}</span>
            </article>
        </A>
    </div>
    )
}
