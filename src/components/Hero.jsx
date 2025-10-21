import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2 ;
    }, []);

    return(
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt={"Macbook Title"} />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline ></video>

            <button>Buy</button>
            <p>From IDR 1Mio or 2 Mio for 12 Months</p>
            </section>
    )
}

export default Hero