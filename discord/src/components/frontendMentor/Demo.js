import React,{useState,useEffect} from "react";
import axios from "axios";

function Demo() {
  const [apiCall,setApiCall]=useState(false);
  
  useEffect(()=>{
    axios.get('https://retoolapi.dev/rWT5nG/data')
    .then(res=>{
      console.log(res.data);
      setApiCall(res.data)
    })
  },[])
  

  return (
    <div>
    {apiCall && apiCall.map((item,index)=>{
      return(
      <div key={index}>
      <div>name:{item.userName}</div>
      <img src={item.userImage} alt="" />
      </div>
      )
    }
    )}
    </div>
  );
}

export default Demo;
