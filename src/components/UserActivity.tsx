import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostsComponent() {
    const [posts, setPosts] = useState([]);
    const [loading,setLoading]=useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetching = async () => {
            try {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(data);
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        };
        fetching();
    }, []); // Empty dependency array to run only once

    if(loading){
        return <div className="bg-zinc-700 flex justify-center items-center h-screen">
            <h1 className="text-4xl font-bold text-white">Loading......</h1>
        </div>
    }
    const userposts = posts.filter(post => post.userId === Number(id));

    return (
        <div className="p-4 bg-zinc-700">
            <div className="mt-5 mb-5 text-white flex justify-center ">
                <h1 className="text-4xl font-bold">All posts</h1>
            </div>

            {userposts.map(post => (
                <div key={post.id} className="bg-zinc-800 text-white shadow-md rounded-lg p-4 mb-4">
                    <h1 className="text-xl font-bold mb-2">ID: {post.id}</h1>
                    <h1 className="text-xl font-bold mb-2">Title: {post.title}</h1>
                    <h3 className="text-gray-400">Body: {post.body}</h3>
                </div>
            ))}
        </div>
    );
    
}
