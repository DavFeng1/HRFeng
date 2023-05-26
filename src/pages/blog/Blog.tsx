import { useEffect } from 'react';

import '@pages/blog/Blog.scss';

const Blog = (): JSX.Element => {
    useEffect(() => {
        console.log('pages/landing/Blog.tsx ==> Component Mounted');

        return () => {
          console.log('pages/landing/Blog.tsx ==> Component Unmounted');
        };
    }, []);

    return (
    <div className="page-container row-container"> 
        Coming soon
    </div>
    )
}

export default Blog;
