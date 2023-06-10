import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import axios from 'axios';
function Page() {
    const [changeData, setChangeData] = useState(true)
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    const [content, setContent] = useState(false)
    const {id} = useParams();
    useEffect(() => {
        axios
            .get(`https://forest-db.vercel.app/forest/specific/${id}`)
            .then(response => console.log(response.data) & setData(response.data))
            .catch(err => console.log(err))
        }, []) 
        useEffect(() => {
        axios
            .get(`https://forest-db.vercel.app/forest/${data.category}`)
            .then(response => console.log(response.data) & setCategory(response.data))
            .catch(err => console.log(err))
        }, [data])
    useEffect(() => {
        axios
            .get(`https://forest-db.vercel.app/forest/specific/${id}`)
            .then(response => console.log(response.data) & setData(response.data))
            .catch(err => console.log(err))
        }, [changeData])
        const set = ()=>{
            changeData === true ? setChangeData(false) : setChangeData(true);
        }
        const reset = ()=>{
            content === false ? setContent(true): setContent(false);
        }
    return (
        <>
       <Loader />
        <Nav />
            <div className='' >
                
                        <div className='flex items-center text-center flex-col'>
                        <h1 className='lg:text-5xl text-3xl lg:p-7 p-5 font-bold font-serif'>{data.title}</h1>
                        <div className='w-9/12 items-center'>
                        <img className='lg:w-5/12 w-full mx-auto my-2  object-cover rounded-tr-3xl rounded-bl-3xl hover:grayscale' src={data.img} alt="animal" />
                        </div>
                            <div className='w-9/12 text-start'>
                            <button className="bg-emerald-900 py-1 px-3 mt-2 mb-2 hover:bg-green-500 text-zinc-50 hover:text-xinc-300"><Link to={"/forest/family/" + data.category}>{data.category}</Link></button>
                                <p className='text-justify pb-2'>{content === false ? (data.content && data.content.slice(0, 1000)) : (data.content && data.content.slice(0,10000))}<button onClick={reset} className='bg-emerald-900 ms-3 p-2 text-zinc-50 hover:bg-green-500 hover:text-stone-950 '>Read more</button></p>
                            </div>
                            <div className="lg:w-11/12 w-full flex items-center flex-row flex-wrap md:flex-row md:flex-wrap">
                            {category.map((post) => {
                            return (<div className="xl:w-4/12 lg:w-4/12 md:w-6/12 w-6/12 lg:p-5 p-2 items-center inline-block text-start">
                            <Link to={"/forest/" + post._id}><motion.img onClick={set} initial={{border: "0px solid #fff"}} whileHover={{border: "20px solid #fff"}} className='w-10/12 object-cover xl:mx-0 mx-auto rounded-tr-3xl rounded-bl-3xl hover:grayscale' src={post.img} alt="animal"/></Link>
                            <Link to={"/forest/family/" + data.category}><button className="bg-emerald-900 py-1 px-3 mt-2 hover:bg-green-500 text-zinc-50 hover:text-xinc-300">{post.category}</button></Link>
                                    <h1 className="lg:text-xl text-sm pt-3 xl:px-5 lg:px-2 md:px-0 font-bold font-serif">{post.title + "."}</h1>
                                    <p className='xl:px-5 lg:px-2 md:px-0 text-justify  text-xs'>{post.content.substring(0,200)}<Link to={"/forest/" + post._id} ><button onClick={set} className="bg-emerald-500 p-3 rounded-tl-3xl rounded-br-3xl hover:rounded-tr-3xl hover:rounded-bl-3xl hover:rounded-tl-none hover:rounded-br-none hover:bg-emerald-300 hover:text-zinc-50 block mt-2">Read more</button></Link></p>
                                    <p id="about"></p>
                               </div>) 
                            })}</div>
                        </div>
            </div>
        <Footer />
        </>
    )
}

export default Page
