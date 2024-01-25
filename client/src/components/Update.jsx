import { useState } from "react"
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios";


const Update = () => {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('');
    const [address,setaddress]=useState('');
    const navigate=useNavigate();
    const{id}=useParams()

    const handleSubmit=async()=>{
        try{
            const res= await axios.put('http://localhost:3000/api/update/'+id,{name,email,phone,address});

            if(res.status==200){
                navigate('/')
                
            }
            console.log(res.data);
        }
        catch(error){

            console.log(error)
        }
    }
  return (
    <div>
        <div className="bg-slate-900 h-screen flex justify-center items-center ">
            <div className="input bg-white  w-96  border border-gray-700 rounded-xl shadow-lg shadow-gray-700" style={{height:'290px'}}>
                <input type="text"
                placeholder="enter your name"
                value={name}
                onChange={(e)=>setname(e.target.value)}
                className="outline-none border border-blue-800 mt-4  h-9 rounded-md w-80  ml-6 items-center text-black" />

                <input type="text"
                placeholder="enter your email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                className="outline-none border border-blue-800 mt-4  h-9 rounded-md w-80 ml-6 items-center text-black" />

                <input type="text"
                placeholder="enter your phone"
                value={phone}
                onChange={(e)=>setphone(e.target.value)}
                className="outline-none border border-blue-800 mt-4  h-9 rounded-md w-80 ml-6 items-center text-black" />

                <input type="text"
                placeholder="enter your address"
                value={address}
                onChange={(e)=>setaddress(e.target.value)}
                className="outline-none border border-blue-800 mt-4  h-9 rounded-md w-80 ml-6 items-center text-black" />

                <button className="bg-slate-900 w-full text-center rounded-lg text-white h-12 mt-4" onClick={handleSubmit}>Update</button>
            </div>
        </div>
    </div>
  )
}

export default Update;