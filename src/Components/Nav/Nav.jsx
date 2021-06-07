import React from 'react';
import './style.css';
import {A} from 'hookrouter';

// A  را میاوریم و به جای aهای کوچک مگیذاریم
// به مثال زیر و href دقت شود

export default function Nav() {
    return (
        <nav>
        <ul>
            <li><A href="/">Home Page</A></li>
            <li><A href="/blog">Blog</A></li>
            <li><A href="/">Contact Us</A></li>
            <li><A href="/">About Us</A></li>
        </ul>
    </nav>
    )
}
