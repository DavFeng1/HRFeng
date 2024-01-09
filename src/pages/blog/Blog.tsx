import { useEffect, useState } from 'react';
import Markdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import { Typography } from '@mui/material';
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import '@pages/blog/Blog.scss';
import qftPath from './qft.md'

const Blog = (): JSX.Element => {
    const [qftMd, setQftMd] = useState('');

    useEffect(() => {
        console.log('pages/landing/Blog.tsx ==> Component Mounted');

        return () => {
          console.log('pages/landing/Blog.tsx ==> Component Unmounted');
        };
    }, []);

    fetch(qftPath).then((response) => response.text()).then((text) => {
      setQftMd(text)
    });

    return (
      <div className="page-container">
        <div id="blog-container">
          <Typography fontSize={20}>
            These are my personal notes and problem set solutions on various topics in math and physics.
          </Typography>
          <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{qftMd}</Markdown>
        </div>
      </div>
    )
}

export default Blog;
