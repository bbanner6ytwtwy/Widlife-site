import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav'
import {motion} from "framer-motion"
import axios from "axios"
import {imgs, img, people} from '../../Content'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
function Home() {
    const [content, setContent] = useState([]);
    useEffect(() => {
        axios
            .get("https://forest-db.vercel.app/forest")
            .then(response => console.log(response) & setContent(response.data))
            .catch(err => console.log(err))
        }, []) 
    return (
        <> 
        <Nav /> 
        <div className=" pt-7 px-7 lg:flex items-center">
            <div className="lg:w-8/12 w-full">
            {img.map((e)=>{
                return(
                    <motion.img
                    animate={{
                        opacity: 0.5
                    }}
                    whileHover={{
                        scale: 1.1,
                        opacity: 1
                    }}
                    className="w-4/12 lg:p-3 p-1  inline-block grayscale hover:grayscale-0"
                    src={e}
                    alt="animal"/>
                )
            })}
            </div>
            <div className="lg:w-4/12 w-full">
                <motion.h1
                    className=" mt-5 md:my-5 text-center lg:text-6xl text-3xl font-serif lg:px-7 first-letter:text-7xl">Wildlife is Still life, Be Protectors, Let's fight the Poachers Together.</motion.h1>
            </div>
        </div>
        <div className="px-7 pt-5">
            <div className="w-full">
                {
                    imgs.map((img) => {
                        return( <motion.img
                            animate={{
                                opacity: img.opi
                            }}
                            whileHover={{
                                scale: 1.1,
                                opacity: img.opl
                            }}
                            className={"lg:w-2/12 w-4/12 p-3 inline-block rounded-tr-3xl rounded-bl-3xl " + img.g}
                            src={img.url}
                            alt="animal"/>)
                    })
                }

            </div>
        </div>
        <div className='w-full p-5 flex'>
            <hl className="font-serif text-5xl mx-auto">Welcome to the Jungle.</hl>
        </div>
        <div className="px-7 w-full flex flex-wrap items-center">
        {content.slice(0,8).map((post) => {
            return (<div className="xl:w-3/12 lg:w-4/12 md:w-6/12 w-full p-5 items-center">
            <Link to={"/forest/" + post._id}><motion.img initial={{border: "0px solid #fff"}} whileHover={{border: "20px solid #fff"}} className='w-10/12 object-cover xl:mx-0 mx-auto rounded-tr-3xl rounded-bl-3xl hover:grayscale' src={post.img} alt="animal"/></Link>
            <Link to={"/forest/family/" + post.category}><button className="bg-emerald-900 py-1 px-3 mt-2 hover:bg-green-500 text-zinc-50 hover:text-xinc-300">{post.category}</button></Link>
                    <h1 className="text-xl pt-3 xl:px-5 lg:px-2 md:px-0 font-bold font-serif">{post.title + "."}</h1>
                    <p className='xl:px-5 lg:px-2 md:px-0 text-justify  text-xs'>{post.content.substring(0,300)}<Link to={"/forest/" + post._id} ><button className="bg-emerald-500 p-3 rounded-tl-3xl rounded-br-3xl hover:rounded-tr-3xl hover:rounded-bl-3xl hover:rounded-tl-none hover:rounded-br-none hover:bg-emerald-300 hover:text-zinc-50 block mt-2">Read more</button></Link></p>
                    
               </div>) 
            })}
        </div>
        <div className='w-full p-5 flex items-center flex-col lg:flex-row'>
            <div className='lg:w-6/12 w-full'>
               <img className='mx-auto rounded-bl-3xl rounded-tr-3xl hover:grayscale' src="https://images.unsplash.com/photo-1503918756811-975bd3397178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHpvb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="zoo" />
            </div>
            <div className='lg:w-6/12 w-full m-3 lg:p-0 p-7'>
               <h1 className='lg:text-6xl text-4xl font-serif first-letter:text-7xl'>Our Animals are very friendly, They've Been Trained with Children and as such are no threat to the babies, No promises for the Adults Though.</h1>
            </div>
        </div>
        <div className='w-full p-5 flex'>
        <hl className="font-serif text-5xl mx-auto">Our Aquatic Animals.</hl>
        </div>
        <div className="px-7 w-full flex flex-wrap items-center">
        {content.slice(12,16).map((post) => {
            return (<div className="xl:w-3/12 lg:w-4/12 md:w-6/12 w-full p-5 items-center">
            <Link to={"/forest/" + post._id}><motion.img initial={{border: "0px solid #fff"}} whileHover={{border: "20px solid #fff"}} className='w-10/12 object-cover xl:mx-0 mx-auto rounded-tr-3xl rounded-bl-3xl hover:grayscale' src={post.img} alt="animal"/></Link>
            <Link to={"/forest/family/" + post.category}><button className="bg-emerald-900 py-1 px-3 mt-2 hover:bg-green-500 text-zinc-50 hover:text-xinc-300">{post.category}</button></Link>
                    <h1 className="text-xl pt-3 xl:px-5 lg:px-2 md:px-0 font-bold font-serif">{post.title + "."}</h1>
                    <p className='xl:px-5 lg:px-2 md:px-0 text-justify  text-xs'>{post.content.substring(0,300)}<Link to={"/forest/" + post._id} ><button className="bg-emerald-500 p-3 rounded-tl-3xl rounded-br-3xl hover:rounded-tr-3xl hover:rounded-bl-3xl hover:rounded-tl-none hover:rounded-br-none hover:bg-emerald-300 hover:text-zinc-50 block mt-2">Read more</button></Link></p>
                    
               </div>) 
            })}
        </div>
        <div className='w-full p-5 flex'>
        <hl className="font-serif text-5xl mx-auto">Our Cute Rodents.</hl>
        </div>
        <div className="px-7 w-full flex flex-wrap items-center">
        {content.slice(16, 20).map((post) => {
            return (<div className="xl:w-3/12 lg:w-4/12 md:w-6/12 w-full p-5 items-center">
            <Link to={"/forest/" + post._id}><motion.img initial={{border: "0px solid #fff"}} whileHover={{border: "20px solid #fff"}} className='w-10/12 object-cover xl:mx-0 mx-auto rounded-tr-3xl rounded-bl-3xl hover:grayscale' src={post.img} alt="animal"/></Link>
                    <button className="bg-emerald-900 py-1 px-3 mt-2 hover:bg-green-500 text-zinc-50 hover:text-xinc-300"><Link to={"/forest/family/" + post.category}>{post.category}</Link></button>
                    <h1 className="text-xl pt-3 xl:px-5 lg:px-2 md:px-0 font-bold font-serif">{post.title + "."}</h1>
                    <p className='xl:px-5 lg:px-2 md:px-0 text-justify  text-xs'>{post.content.substring(0,300)}<Link to={"/forest/" + post._id} ><button className="bg-emerald-500 p-3 rounded-tl-3xl rounded-br-3xl hover:rounded-tr-3xl hover:rounded-bl-3xl hover:rounded-tl-none hover:rounded-br-none hover:bg-emerald-300 hover:text-zinc-50 block mt-2">Read more</button></Link></p>
               </div>) 
            })}
        </div>
        <div className='w-full p-5 flex' id='about'>
        <hl className="font-serif text-5xl mx-auto">Our Details, About us.</hl>
        </div>
        <div className="px-7 w-full flex flex-wrap items-center">
        {people.map((post) => {
            return (<div className="xl:w-3/12 lg:w-4/12 md:w-6/12 w-full p-5 items-center">
            <motion.img className='w-10/12 object-cover xl:mx-0 mx-auto rounded-tr-3xl rounded-bl-3xl hover:grayscale' src={post.img} alt="animal"/>
                    <button className="bg-emerald-900 py-1 px-3 mt-2 hover:bg-green-500 text-zinc-50 hover:text-xinc-300">{post.description + "."}</button>
                    <h1 className="text-md  pt-3 xl:px-5 lg:px-2 md:px-0 font-bold font-serif">{post.name + "."}</h1>
                    <h1 className="text-md text-justify pt-3 xl:px-5 lg:px-2 md:px-0">{post.Position}</h1>
                    <div className='pt-1'>
                    {
                        post.contact.map((e)=>{
                            return(
                                <p className='lg:ps-5 ps-0'>{e}</p>
                            )
                        })
                    }
                    </div>
                    <div className='my-3'><a href="tel:+23409039021880" className='xl:px-5 lg:px-2 px-5 bg-emerald-800 hover:bg-emerald-400 hover:text-stone-950 text-zinc-50 py-2 mx-5'>Call Me</a></div>
               </div>) 
            })}
        </div>
        <Footer />
    </>
    )
}

export default Home