import React from 'react'
import '../src/theme/style.css'
import {useRoutes} from 'hookrouter';
import BlogPage from './Pages/BlogPage';
import HomePage from './Pages/HomePage';
import PostPage from './Pages/PostPage';
import NotFoundPage from './Pages/NotFoundPage';

// پکیج route برای جابه جایی بین صفحات
// حتما npm hookrouter نصب شود
const routes = {
  '/': () => <HomePage />,
  '/blog': () => <BlogPage /> ,
  '/post': () => <PostPage /> ,
  '/post/:id': ({id}) => <PostPage id={id} />
};


export default function App() {
  const routeResult = useRoutes(routes);
  return routeResult || <NotFoundPage />
}
