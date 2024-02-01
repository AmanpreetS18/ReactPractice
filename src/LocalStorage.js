import React from 'react'

export default function LocalStorage() {
    const[inputs,setInputs]=React.useState({
        name:"",
        email:"",
        password:""
    });
    const handlechange=(e)=>{ 
        var {name,value}=e.target;
        setInputs({...inputs,[name]:value});
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
         localStorage.setItem("userinfo",JSON.stringify(inputs));    
     setInputs({name:"",email:"",password:""});
    }
    var obj=JSON.parse(localStorage.getItem("userinfo"));
    if(obj==null){
        obj={};
    }

    const handleRemove=()=>{
        localStorage.removeItem("userinfo");
    }
    
     

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Enter your name" name="name" value={inputs.name} onChange={handlechange}/><br />
            <input type="email" placeholder="Enter your email" name="email" value={inputs.email} onChange={handlechange}/><br />
            <input type="password" placeholder="Enter your password" name="password" value={inputs.password} onChange={handlechange}/><br />
            <input type="submit" value="Submit" />
            <input type="button" value="Remove" onClick={handleRemove} />
        </form>
      <h1>Name:{obj.name}</h1>
      <h1>Email:{obj.email}</h1>
      <h1>Password:{obj.password}</h1>
    </div>

  )
}
