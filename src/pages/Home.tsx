import axios from "axios";
import { useEffect, useState } from "react";

export default function (){
    const [users,setUsers]=useState<any>([]);

    useEffect(()=>{
        const fetching=async ()=>{
            try{
                const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(data);
            }catch(e){
                console.log(e);
            }
        }
        fetching();
    },[])


    return <div>
        <Cardcontainer users={users}></Cardcontainer>
    </div>
}

function Cardcontainer({users}:any):any{
    return <div>
        {users.map(user=><Card user={user}></Card>)}
    </div>
}   

function Card({user}:any){
    return <div >
    <h1>Name: {user.name}</h1>
    <h2>id: {user.id}</h2>
    <button onClick={()=>console.log(user.name)}>click here</button>
    <button onClick={()=>console.log(user.name)}>click here</button>
    </div>
}