import React,{useState,useEffect} from 'react';

const CleanupFunction = () => {
    const [countWidth,setcountWidth]=useState(window.screen.width);
    const widthFunction=()=>{
        setcountWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize',widthFunction);
        console.log("add event")
        return ()=>{
            window.removeEventListener('resize',widthFunction);
            console.log("remove Eveent");
        }

    })
    return (
        <div>
            <p>My window screen size :</p>
            <h5>{countWidth}</h5>
        </div>
    )
}

export default CleanupFunction;
