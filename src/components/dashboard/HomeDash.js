import React,{useEffect,useState} from "react";
import axios from "axios";

function HomeDash() {
  const [userData,setUserData]=useState('');
  useEffect(() => {
    let reqOptions = {
      url: "https://retoolapi.dev/rWT5nG/data",
      method: "GET",
    }
    
    axios.request(reqOptions).then(function (response) {
      console.log(response.data);
      setUserData(response.data);
    })

  }, []);
  return (
    <div className="flex min-h-screen font-monts">
      <div className="bg-red-400 w-[15%] pt-4">
        <div className="flex pl-4 flex-col gap-2">
          <div className="flex items-center gap-3 mb-4">
            <img className="w-8" src="/images/friends.svg" alt="" />
            <p className="text-2xl font-semibold">Friends</p>
          </div>
          {userData && userData.map((user,index)=>{
          return(
          <div className="flex items-center gap-3" key={index} >
            <img className="w-9 rounded-full bg-white" src={user.userImage} alt="" />
            <p className="text-md font-semibold mr-[10px]">{user.userName}</p>
          </div>
            )
          })}
        </div>
      </div>
      <div className="bg-parent-400 w-[50%]">chat</div>
      <div className="bg-green-400 w-[30%]">activenow</div>
    </div>
  );
}

export default HomeDash;
