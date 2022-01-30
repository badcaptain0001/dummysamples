import React,{useState,useEffect}from "react";
import QRCode from "qrcode.react";

function Login() {

  return (
    <div className="flex justify-center items-center h-screen bg-parent-500 font-monts">
      <div className="flex w-[816px] h-[440px] bg-gray-800 rounded-lg drop-shadow-2xl text-white p-[32px] items-center">
        <div className="w-2/4">
          <h1 className="text-2xl font-semibold text-center">Welcome Back</h1>
          <p className="text-sm text-center text-gray-500 mt-2">
            We're so excited to see you agian!
          </p>
          <div className="flex flex-col pt-5">
            <span className="text-sm text-gray-500">Email or Phone</span>
            <input
              className="bg-gray-700 px-4 py-2 rounded-md mt-3 text-white focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
            />
            <span className="text-sm text-gray-500 mt-5">Password</span>
            <input
              className="bg-gray-700 px-4 py-2 mt-3 rounded-md text-white focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
            />
            <span className="text-sm text-parent-100 font-medium mt-1">
              Forgot your password?
            </span>
            <button className="bg-parent-100 text-center p-3 rounded-md font-semibold mt-4 active:bg-parent-700" 
              onClick={()=>{
              console.log("this is click")
              }}
            >
              Login
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Need an account?
              <span className="text-parent-100 cursor-pointer"> Register</span>
            </p>
          </div>
        </div>
        <div className="w-2/4 pl-[32px]">
          <QRCode
            value="http://google.com"
            bgColor="#FFFFFF"
            size={200}
            includeMargin={true}
            level={"H"}
            className="rounded-lg m-auto"
            imageSettings={{
              src: "/images/logo copy.svg",
              x: null,
              y: null,
              height: 24,
              width: 30,
              excavate: true,
            }}
          />
          <h1 className="text-center text-2xl font-semibold mt-4">
            Login With QR code
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Scan this with your phone
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
