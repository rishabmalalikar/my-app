import React, {useState} from 'react';



function Getstarted({name}){
    const[message ,setMessage]=useState(false)
    return(
        <div className='start'>
            <p>Hello,{name}</p>
            <p>Welcome</p>
            <button onClick={()=>setMessage(true)}>GeT-StarteD</button>
            {message && <b><p style={{marginBottom: 0, color: 'black'}}>Great</p></b>}
        </div>
    );
}
export default Getstarted;