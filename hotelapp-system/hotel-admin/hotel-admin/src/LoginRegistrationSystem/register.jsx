import React, {useState} from 'react'
import axios from 'axios'

const Register = ()=>{
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })
    const onChange = (e)=>{

        const {name,value} = e.target
        setUser({...user,[name]:value})
    }
    const signUp = ()=>{
        const {name,email,password} = user
        if(name && email && password){
            axios.post("http://localhost:2000/SignUp",user)
            .then(res=>console.log(res))
        }
        else{
            alert("invalid creditials")
        }
    }
    return(
        <>
        <div className='container'>
        <form action="#">
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" value={user.name} onChange={onChange} placeholder="FullName"/>
                    </div>
                </div>
                <div class="flex gap-4 mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" value={user.email} onChange={onChange} placeholder="Email"/>
                        </div>

                        </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="password" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password} onChange={onChange}    placeholder="password"/>
                                </div>
                            </div>
                            <div class="flex w-full my-4">
                                <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={signUp} >
                                    Register
                                </button>
                            </div>
                        </form>
        </div>
        </>
    )
}
export default Register