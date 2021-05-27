import {React,useEffect,useState} from 'react';
import './App.css';
import style from "./card.module.css";
import Loading from "./Loading"

import UserCard from "./Card.js";



function App() {
    

  
    const [user,setData]= useState([false]);
    const [want,setWant]=useState("False");
    const [loading,setLoading]=useState(false);

    function getUser(){
      setWant("True");
      
    }

   

    useEffect(() => {
      
      if(want==="True"){

        setLoading(true)

        const getData=async()=>{
          const response=await fetch("https://reqres.in/api/users?page=1#");
          const data= await response.json();
          setLoading(false);
          setData(data);
        }
  
      
      getData();

      }
   
      
  }, [want]);

    
   

  



  

  


  return (
    <div className="App">
       <div className={style.Header}>
            
            <h1 className={style.head}>Users</h1>
            <button className={style.button} onClick={getUser}>Fetch User</button>
           
            
        </div>
    
    <div className="cards">

     

    {loading? <Loading /> :user.data?.map(dat=>(
      <UserCard fname={dat.first_name} lname={dat.last_name} email={dat.email} image={dat.avatar} />
    ))};


   
    </div>

   
   
    
    </div>
  );
}

export default App;