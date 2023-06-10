import React from 'react'
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
function Main() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome to the Amazon Blog.", "We have Different exotic animals", "We have Owls", "We have Horses", "We have Fishes", "We have Snakes", "We have Bears", "We have oxes", "We  have Lizards", "We have Camels", "We have Cows", "We have Gorillas", "and so much more."],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <>
      <Loader />
    <div id="main" className="">
      <h1 className="text-6xl" ref={el} />
      <Link to="/home"><button className="border-4 border-white text-white text-2xl p-3 rounded-3xl hover:rounded-none">Go to Blog</button></Link>
    </div>
    </>
  );
}

export default Main
