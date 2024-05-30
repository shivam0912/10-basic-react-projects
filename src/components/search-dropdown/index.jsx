/** working of this project -> 
 * we call an API and got data and store that into an state[]
 * then from that data we implemented filtering and showing the data
*/


import { useEffect, useState } from "react"
import ShowDropDown from "./ShowDropDown";
import "./style.css"
function SearchDropDown() {


    const [users,setUsers]= useState([]);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParam,setSearchParam] = useState('')
    const [showDropdown,setShowDropdown] = useState(false);
    const [filteredUsers,setFilteredUsers] = useState([]);
    
    
    function handleChange(event){
       const query = event.target.value.toLowerCase();
       setSearchParam(query);
       if(query.length>1){
        const filterData = 
            users && users.length ?
              users.filter((items)=> items.toLowerCase().indexOf(query)>-1)
              : [];
              setFilteredUsers(filterData);
              setShowDropdown(true);
       }else{
        setShowDropdown(false);
       }
    }
    function handleClick(e){
      console.log(e.target.innerText)
      setShowDropdown(false);
      setSearchParam(e.target.innerText);
      setFilteredUsers([]);

    }
    async function fetchUsers(){
        try{
          setLoading(true);
          const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        console.log(data)
        if(data && data.users.length){
          setUsers(data.users.map((userItem)=>userItem.firstName));
          setLoading(false);
          setError(null);
        }
        }catch(e){
          setLoading(false);
          console.log(e);
          setError(e);
          
        }
        
    }

    useEffect(()=>{
        fetchUsers();
    },[])
console.log(filteredUsers,users)
    return (
    <div className="complete-container">
      <h2>Type at least two keyword</h2>
        {loading ? <h1>Loading data from API! Please Wait</h1>:
           <input 
           value={searchParam}
           type="text"
           placeholder="Type at least a keyword"
           onChange={handleChange}
           />
        }
       

            {
              showDropdown && <ShowDropDown handleClick ={handleClick} data={filteredUsers}/>
            }
    </div>
  )
}

export default SearchDropDown