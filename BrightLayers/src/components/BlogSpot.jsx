import axios from'axios'
import rectangle187 from '../assets/rectangle187.png'
import rectangle188 from '../assets/rectangle188.png'
import rectangle189 from '../assets/rectangle189.png'
import rectangle190 from '../assets/rectangle190.png'
import rectangle191 from '../assets/rectangle191.png'
import { useEffect, useState } from 'react'

function BlogSpot() {
    const [posts, setPosts] = useState([]);

    const getPostData = () => {
        axios.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anisoccer749")
        .then((res) => {
            setPosts(res.data.items);
        })
        .catch((error) => {
            console.log("Error fetching blog posts:", error);
        });
    };

    useEffect(() => {
        getPostData();
    }, []);
  return (

    <div className='mx-[1.23rem] max-w-[90%] mt-[6.91rem]'>
            <p className="mx-auto text-center font-pSans  w-[14.94719rem] h-[1.12506rem] font-semibold text-[0.96431rem] leading-[1.13794rem] tracking-[0.00963rem]">Blog</p>
            <div className='m-auto flex justify-between mt-[2.57rem] space-x-[1.75rem] overflow-x-scroll no-scrollbar scroll-smooth    '>
                <div className='w-[12.84888rem] h-[12.363rem]'>
                    <div className='relative '>
                        <img src={rectangle188} alt="dummyImg3" className='w-[20.5rem] h-[12.363rem] opacity-80 bg-black transition-opacity duration-700 hover:opacity-0'/>
                        <img src={rectangle189} alt="hoverImg2" className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 hover:opacity-100'/>
                    </div>
                    <p className='text-[0.53988rem] mt-[0.49rem] w-[12.84888rem] text-[#535353] font-title leading-[0.70313rem] tracking-[0.00538rem]'>
                    With a blend of innovation, strategy, and creativity, we specialize in crafting bespoke social media campaigns that not only captivate audiences but also drive measurable results.
                    </p> 
                </div> 
                <div className='w-[12.84888rem] h-[12.363rem]'>
                <div className='relative'>
                        <img src={rectangle188} alt="dummyImg3" className='w-[20.5rem] h-[12.363rem] opacity-80 bg-black transition-opacity duration-700 hover:opacity-0'/>
                        <img src={rectangle190} alt="hoverImg2" className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 hover:opacity-100'/>
                    </div>
                    <p className='text-[0.53988rem] mt-[0.49rem] w-[12.84888rem] text-[#535353] font-title leading-[0.70313rem] tracking-[0.00538rem]'>
                    With a blend of innovation, strategy, and creativity, we
                    specialize in crafting bespoke social media campaigns that
                    not only captivate audiences but also drive measurable
                    results.
                    </p>
                </div>
                <div className='w-[12.84888rem] h-[24.5rem]'>
                    <div className='relative'>
                        <img src={rectangle187} alt="dummyImg3" className='w-[20.5rem] h-[12.363rem] opacity-80 bg-black transition-opacity duration-700 hover:opacity-0'/>
                        <img src={rectangle191} alt="hoverImg2" className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 hover:opacity-100'/>
                    </div>
                    
                    <p className='text-[0.53988rem] mt-[0.49rem] w-[12.84888rem] text-[#535353] font-title leading-[0.70313rem] tracking-[0.00538rem]'>
                    With a blend of innovation, strategy, and creativity, we
                    specialize in crafting bespoke social media campaigns that
                    not only captivate audiences but also drive measurable
                    results.
                    </p>
                </div>
            </div>
    </div>
  )
}

export default BlogSpot