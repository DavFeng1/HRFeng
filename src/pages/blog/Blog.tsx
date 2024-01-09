import { useEffect, useState } from 'react';
import Markdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

import qftPath from './qft.md'

import '@pages/blog/Blog.scss';
const MathJax = require('react-mathjax');

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
          <p>
            These are my personal notes and problem set solutions I've accumulated as an ongoing effort to study various topics in mathematics and high energy physics
          </p>
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{qftMd}</Markdown>
        </div>
      </div>
    )
}

export default Blog;
