import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function(){
    const [users,setUsers]=useState<any>([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetching=async ()=>{
            try{
                const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(data);
                setLoading(false);
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
        const {id} = useParams();
       const userprofile=users.filter((user:any)=> user.id == id);
        console.log(userprofile);

        return (
            <div className="p-4 flex items-center justify-center h-screen bg-zinc-700">
                {userprofile.length > 0 ? (
                    <div className="border-black text-white bg-slate-800 border-1 w-80 h-fit shadow-lg rounded-lg p-6">
                        <h1 className="text-xl font-bold mb-2">Name : {userprofile[0].name}</h1>
                        <h2 className="text-lg">Username : {userprofile[0].username}</h2>
                        <h2 className="text-lg">Email : {userprofile[0].email}</h2>
                        <h2 className="text-lg">phone : {userprofile[0].phone}</h2>
                        <h2 className="text-lg">website : {userprofile[0].website}</h2>
                    </div>
                ) : (
                    <h1 className="text-center text-gray-500">Loading...</h1>
                )}
            </div>
        );
        
}
