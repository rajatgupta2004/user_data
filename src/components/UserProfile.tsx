export default function({data}:any){
    return <div>
        <h1>name: {data.name}</h1>
        <h1>email: {data.email}</h1>
        <h1>phone: {data.phone}</h1>
    </div>
}