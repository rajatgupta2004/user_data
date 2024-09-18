import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function (){
    const [users,setUsers]=useState<any>([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetching=async ()=>{
            try{
                const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(data);
                setLoading(false);
                console.log(data);
            }catch(e){
                console.log(e);
            }
        }

        fetching();
    },[])
    if(loading){
        return <div className="bg-zinc-700 flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold text-white">Loading......</h1>
        </div>
    }
    return <div>
        <Cardcontainer users={users}></Cardcontainer>
    </div>
}

function Cardcontainer({users}:any):any{

    return <div className="bg-zinc-700">

        <div className="bg-zinc-700 text-white flex justify-center mb-10 ">
            <h1 className="font-bold text-4xl  ">USER DATA PROJECT</h1>
        </div>
    
    <div className="bg-zinc-700 grid grid-cols-3 gap-4">
        {users.map((user:any)=><Card user={user}></Card>)}
    </div>
    </div>
}   
function Card({ user }:any) {
    const navigate = useNavigate();

    return (
        <div className="bg-zinc-900 text-white h-52 rounded-lg m-2 flex justify-center items-center">
            <div className="w-56 h-44 p-4">
                <h1>Name: {user.name}</h1>
                <h2>ID: {user.id}</h2>
                <button 
                    className="bg-blue-950 rounded-lg p-1 m-1" 
                    onClick={() => navigate(`/userprofile/${user.id}`)}
                >
                    User Profile
                </button>
                <button 
                    className="bg-blue-950 rounded-lg p-1 m-1" 
                    onClick={() => navigate(`/useractivity/${user.id}`)}
                >
                    User Activity
                </button>
            </div>
        </div>
    );
}