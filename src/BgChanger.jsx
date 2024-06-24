import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Typewriter } from 'react-simple-typewriter'

export default function BgChanger({ BtnTitle }) {
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
                <Marquee gradient={false} speed={80} style={{ backgroundColor: "black", padding: "15px", position: "absolute", top: "0px", right: 0}}>
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
                </Marquee >

                <button onClick={ChangeBgColor} className='myBtn'>{BtnTitle}</button>
                <div className='ColorCodeContainer'>
                    <p className='ColorCode' onClick={handleColorClick}>{BgColor}</p>
                </div>

                <span style={{ fontSize: "18px", color: 'Black', fontWeight: 'bold', opacity: 0.5 }}>
                    <Typewriter
                        words={['click on the color code to copy']}
                        loop={200}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </div>
        </>
    )
}
