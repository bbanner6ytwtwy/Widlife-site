import React, {useState, useEffect} from 'react'
import {Bars} from "react-loader-spinner"
function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 6500);
  
      return () => clearTimeout(timer);
    }, []);
    return (
        <>
        <div>
        {
            isLoading?<div className="fixed w-screen h-screen bg-black flex items-center justify-center flex-col">
            <Bars
            height="100"
            width="100"
            color="emerald"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <h1>Loading...</h1>
            </div>
            : null
        }
       </div>
        </>
    )
}

export default Loader
