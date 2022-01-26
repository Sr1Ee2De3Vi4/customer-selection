import React from 'react'

function Login() {
    return (
        <div>
           <div>
               <p className="">Login</p>
               <br />
               <p>Password</p>
               <input type="text" value=""/> <br />
               <input className=" pt-2 pb-2 pl-4 pr-4 ml-8 mr-8 font-semibold mt-8  text-blue text-sm" type="button" value="Cancel" placeholder=""></input>
               <input className=" pt-2 pb-2 pl-4 pr-4 ml-8 mr-8 font-semibold mt-8 bg-gray  text-sm" type="button" value="Login" placeholder=""></input>
           </div>
        </div>
    )
}

export default Login
