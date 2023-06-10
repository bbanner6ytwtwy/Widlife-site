import React, {useState, useEffect} from 'react'
import {Bars} from "react-loader-spinner"
function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
    return (
      <>
      
      
      <div>
        {isLoading ? (
          <div className='z-50 bg-black w-screen fixed top-0 h-screen flex flex-col items-center justify-center'>
          <Bars
          visible={true}
          height="120"
          width="120"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          color="#50C878"
        /><h1 className='text-emerald-300 text-xl mt-2'>Loading...</h1>
      </div> 
        ) : null}
      </div></>
    );
  
}

export default Loader
