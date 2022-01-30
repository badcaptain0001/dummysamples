import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebas-config";

function Auth() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center text-center font-kumbh mt-10">
        <h3 className="font-kumbh text-2xl">Register User</h3>
        <input
          type="text"
          placeholder="Enter Email"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
          className="w-[20%] m-auto bg-green-100 border-blue-900 outline-red-300 border-2 p-2 color-black mt-2"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          className="w-[20%] m-auto bg-green-100 border-black outline-red-300 border-2 p-2 color-black mt-4"
        />
        <button
          onClick={register}
          className="bg-red-500 w-[10%] m-auto p-3 rounded-xl mt-5 active:scale-75 transition-all"
        >
          Register
        </button>
      </div>
      <div className="flex flex-col justify-center text-center font-kumbh mt-10">
        <h3 className="font-kumbh text-2xl">Login User</h3>
        <input
          type="text"
          placeholder="Enter Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          className="w-[20%] m-auto bg-green-100 border-blue-900 outline-red-300 border-2 p-2 color-black mt-2"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          className="w-[20%] m-auto bg-green-100 border-black outline-red-300 border-2 p-2 color-black mt-4"
        />
        <button
          className="bg-blue-500 w-[10%] m-auto p-3 rounded-xl mt-5 active:scale-75 transition-all"
          onClick={login}
        >
          Login
        </button>
      </div>
      <div className="flex flex-col justify-center text-center font-kumbh mt-10">
        <h3 className="text-2xl">User Logged in</h3>
        {user?.email}
        <button className="bg-orange-500 w-[10%] m-auto p-3 rounded-xl mt-5 active:scale-75 transition-all" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Auth;
