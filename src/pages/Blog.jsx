import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Loader from '../components/Loader'
function Blog() {
    const [content, setContent] = useState([]);
    useEffect(() => {
        axios
            .get("https://forest-db.vercel.app/forest")
            .then(response => console.log(response) & setContent(response.data))
            .catch(err => console.log(err))
        }, []) 
    return (
        <>
        <Loader />
        <Nav />
        <div className='w-full p-5 flex'>
        <hl className="font-serif text-5xl mx-auto">Welcome to the Jungle Blog.</hl>
    </div>
    <div className="px-7 w-full flex flex-wrap items-center">
    {content.map((post) => {
        return (<div className="xl:w-3/12 lg:w-4/12 md:w-6/12 w-full p-5 items-center">
        <Link to={"/forest/" + post._id}><motion.img initial={{border: "0px solid #fff"}} whileHover={{border: "20px solid #fff"}} className='w-10/12 object-cover xl:mx-0 mx-auto rounded-tr-3xl rounded-bl-3xl hover:grayscale' src={post.img} alt="animal"/></Link>
        <Link to={"/forest/family/" + post.category}><button className="bg-emerald-900 py-1 px-3 mt-2 hover:bg-green-500 text-zinc-50 hover:text-xinc-300">{post.category}</button></Link>
                <h1 className="text-xl pt-3 xl:px-5 lg:px-2 md:px-0 font-bold font-serif">{post.title + "."}</h1>
                <p className='xl:px-5 lg:px-2 md:px-0 text-left text-xs'>{post.content.substring(0,300)}<Link to={"/forest/" + post._id} ><button className="bg-emerald-500 p-3 rounded-tl-3xl rounded-br-3xl hover:rounded-tr-3xl hover:rounded-bl-3xl hover:rounded-tl-none hover:rounded-br-none hover:bg-emerald-300 hover:text-zinc-50 block mt-2">Read more</button></Link></p>
                <p></p>
           </div>) 
        })}
    </div> 
    <p id="about"></p>
    <Footer />
        </>
    )
}

export default Blog
