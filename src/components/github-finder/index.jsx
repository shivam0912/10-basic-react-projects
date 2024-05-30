/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import User from "./user";
import "./style.css"

export default function GithubUserFinder(){

    const [inputId,setInputId] = useState("shivam0912");
    const [userData,setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData(){
        const res = await fetch(`https://api.github.com/users/${inputId}`);
        const data = await res.json();
        if(data){
            setUserData(data);
            setInputId('');
            setLoading(false);
        }
    }

    function handleSearch(){
        fetchGithubUserData();
    }
    useEffect(()=>{
        fetchGithubUserData();
    },[]);
    if(loading)return <h1>Loading data! Please wait</h1>

    return (
        <div className="container">
            <div className="search-container">
                <input 
                    onChange={(e)=>setInputId(e.target.value)}
                    type="text" 
                    placeholder="Search Github Username"
                    value={inputId}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {userData != null ? <User user = {userData}/>: null}
            </div>
        </div>
    )
}