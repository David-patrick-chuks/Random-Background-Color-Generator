import React, { useState } from 'react'
// import { Marquee } from 'react-fast-marquee'
// import { Typewriter } from 'react-simple-typewriter'
// import MarqueeText from "react-marquee-text"

import { MarqueeText } from "react-marquee-component";

export default function BgChanger({ BtnTitle }) {


    
  const marqueeTextData = [
    { id: 1, text: "Random Background Generator Using React.Js." },
    { id: 2, text: "Random Background Generator Using React.Js." },
    { id: 3, text: "Random Background Generator Using React.Js." },
    // ... more text data
  ];

  const customStyles = {
    // Define your custom styles here
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    // width: "300px",
  };

    const [BgColor, SetBgColor] = useState("rgb(237,165,54)")
    const genRandomColor = () => {
        const Color1 = Math.floor(Math.random() * 256)
        const Color2 = Math.floor(Math.random() * 256)
        const Color3 = Math.floor(Math.random() * 256)

        return `rgb(${Color1},${Color2},${Color3})`
    }
    /// check if the colors is ready
    console.log(genRandomColor());
    const ChangeBgColor = () => {
        SetBgColor(genRandomColor())
    }
    /// handlecolorclick to copy to clipboard
    const handleColorClick = () => {
        navigator.clipboard.writeText(BgColor)
            .then(() => {
                console.log("color copied to clipboard")
            })
    }


    return (
        <>

            <div className='body' style={{ backgroundColor: BgColor, position: "relative" }}>
                {/* <MarqueeText pauseOnHover={true} direction="right" gradient={false} speed={80} style={{ backgroundColor: "black", padding: "15px", position: "absolute", top: "0px", right: 0 }}>
                    <div>
                        <h4 style={{ marginRight: "50px", color: "white" }}>Random Background Generator Using React.Js</h4>
                    </div>
                    <div>
                        <h4 style={{ marginRight: "50px", color: "white" }}>Random Background Generator Using React.Js</h4>
                    </div>
                    <div>
                        
                        <h4 style={{ marginRight: "50px", color: "white" }}>Random Background Generator Using React.Js</h4>
                    </div>
                    <div>
                        <h4 style={{ marginRight: "50px", color: "white" }}>Random Background Generator Using React.Js</h4>
                    </div>
                </MarqueeText > */}
                   <MarqueeText data={marqueeTextData} style={customStyles} />


                <button onClick={ChangeBgColor} className='myBtn'>{BtnTitle}</button>
                <div className='ColorCodeContainer'>
                    <p className='ColorCode' onClick={handleColorClick}>{BgColor}</p>
                </div>

                {/* <span style={{ fontSize: "18px", color: 'Black', fontWeight: 'bold', opacity: 0.5 }}>
                    <Typewriter
                        words={['click on the color code to copy']}
                        loop={200}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span> */}
            </div>
        </>
    )
}
