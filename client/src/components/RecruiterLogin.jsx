import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);

  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  const {setShowRecruiterLogin}= useContext(AppContext)

  const onSubmitHandler = async(e)=>{
    e.preventDefault()

    if(state === 'Sign Up' && !isTextDataSubmitted){
      setIsTextDataSubmitted(true)
    }
  }

  useEffect(()=>{
    document.body.style.overflow='hidden'

    return ()=>{
      document.body.style.overflow='unset'
    }
  },[])

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop:blur-sm bg-black/30 flex justify-center items-center">
      <form onSubmit={onSubmitHandler} className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-sm mt-2 text-center">Welcome back! Please {state} to continue</p>
        {state === "Sign Up" && isTextDataSubmitted ? (
          <>
        <div className="flex items-center gap-4 my-10">
          <label htmlFor="image">
            <img className="w-16 rounded-full" src={image ? URL.createObjectURL(image): assets.upload_area} alt="" />
            <input onChange={e=>setImage(e.target.files[0])} type="file" hidden id='image'/>
          </label>
          <p>
            Upload company <br /> logo
          </p>
        </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.person_icon} alt="" />
                <input
                  className="focus:outline-none"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
            )}

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.email_icon} alt="" />
              <input
                className="focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.lock_icon} alt="" />
              <input
                className="focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
              />
            </div>
            {state === "Login" && (
              <p className="text-sm text-blue-600 my-4 cursor-pointer">
                Forgot Password ?
              </p>
            )}
          </>
        )}
        <button type="submit"
          className={`${
            state === "Sign Up" ? "mt-5" : ""
          } bg-blue-600 w-full text-white py-2 rounded-full`}
        >
          {state === 'Login' ? 'Login':isTextDataSubmitted ? 'create account':'next'}
        </button>

        <p className="mt-2">
          {state === "Login" ? (
            <p className="mt-2 text-center">
              Dont have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState("Sign Up")}
              >
                Sign Up here
              </span>
            </p>
          ) : (
            <p className="mt-2 text-center">
              {" "}
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setState("Login")}
              >
                Login here
              </span>
            </p>
          )}
        </p>
        <img className="absolute top-5 right-5 cursor-pointer" onClick={e=>setShowRecruiterLogin(false)} src={assets.cross_icon} alt="" />
      </form>
    </div>
  );
};

export default RecruiterLogin;
