import axios from 'axios';
import { useEffect, useState } from 'react';
import rectangle187 from '../assets/rectangle187.png';
import rectangle188 from '../assets/rectangle188.png';
import rectangle189 from '../assets/rectangle189.png';
import rectangle190 from '../assets/rectangle190.png';
import rectangle191 from '../assets/rectangle191.png';

function BlogSpot() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anisoccer749")
            .then((res) => {
                const posts = res.data.items;

                // Extract the first image link from each post's description or content
                const updatedPosts = posts.map((post) => {
                    const description = post.description || "";
                    const match = description.match(/<img[^>]+src=\"([^\">]+)\"/);
                    const firstImageLink = match ? match[1] : null;

                    return {
                        ...post,
                        firstImage: firstImageLink, // Add the extracted image link to the post object
                    };
                });

                // Update state with the modified posts
                setPosts(updatedPosts);
            })
            .catch((error) => {
                console.log("Error fetching blog posts:", error);
            });
    }, []);

    return (
        <div className='mx-[1.23rem] max-w-[90%] mt-[6.91rem]'>
            <p className="mx-auto text-center font-pSans w-[14.94719rem] h-[1.12506rem] font-semibold text-[0.96431rem] leading-[1.13794rem] tracking-[0.00963rem]">Blog</p>
            <div className='m-auto flex justify-between mt-[2.57rem] space-x-[1.75rem] overflow-x-scroll no-scrollbar scroll-smooth'>
                {posts.map((post, index) => (
                    <div key={index} className='w-[12.84888rem] h-[12.363rem]'>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                            <div className='relative'>
                                <img src={post.firstImage || rectangle188} alt="blogImg" className='w-[20.5rem] h-[12.363rem] opacity-80 bg-black transition-opacity duration-700 hover:opacity-0' />
                                <img src={[rectangle189, rectangle190, rectangle191][index % 3]} alt="hoverImg" className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 hover:opacity-100' />
                            </div>
                        </a>
                        <p className='text-[0.53988rem] mt-[0.49rem] w-[12.84888rem] text-[#535353] font-title leading-[0.70313rem] tracking-[0.00538rem]'>
                            {post.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogSpot;
