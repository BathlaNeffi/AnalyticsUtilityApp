import React, { useState } from 'react'
import Flavanoids from '../dataSet/flavanoids';
import Gamma from '../dataSet/gamma';

const UtilityApp:React.FC = () => {
    const [openFlavanoids, setOpenFlavanoids]=useState<boolean>(false);
    const [openGamma, setOpenGamma]=useState<boolean>(false);
  return (
    <>
    <div  style={{display:"flex", width:"100vw",flexDirection:"column" , alignItems:"center"}}>
    <h1 style={{textAlign:"center"}}>Utility APP</h1>
    <div style={{display:"flex", width:"300px" , justifyContent:"space-between"}}>
    <button onClick={()=>setOpenFlavanoids(!openFlavanoids)}>{openFlavanoids?"Close Flavanoids":"Flavanoids"} </button>
    <button onClick={()=>setOpenGamma(!openGamma)}>{openGamma?"Close Gamma":"Gamma"}</button>
    </div>
    {openFlavanoids?<Flavanoids/>:undefined}
    {openGamma?<Gamma/>:undefined}
    </div>
    </>
  )
}

export default UtilityApp