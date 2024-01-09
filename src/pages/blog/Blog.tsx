import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '@pages/blog/Blog.scss';

const Blog = (): JSX.Element => {
    useEffect(() => {
        console.log('pages/landing/Blog.tsx ==> Component Mounted');

        return () => {
          console.log('pages/landing/Blog.tsx ==> Component Unmounted');
        };
    }, []);

    return (
    <div className="page-container">
      <div id="blog-container">
        <p>
          These are my personal notes and problem set solutions I've accumulated as an ongoing effort to study various topics in mathematics and high energy physics
        </p>
          <h3> Quantum Field Theory </h3>
          <p>
            Quantum Field Theory (following the standard text 'Introduction to Quantum Field Theory' by Peskin & Schroeder)
          </p>
      </div>
    </div>
    )
}

export default Blog;
