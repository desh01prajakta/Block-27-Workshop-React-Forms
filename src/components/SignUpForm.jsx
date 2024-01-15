import { useState } from "react"


export default function SignUpForm(){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    async function handleSubmit(event){
        event.preventDefault();
    try{
        const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup",{
            method:'POST',
            body:JSON.stringify({userName,password})
        })
        const result = await response.json();
        console.log(result)
    }
    catch(error){
        setError(error.message)
    }
}
    return(        <section>
            <h2>Sign Up</h2>
            {error && <p>{Error}</p>}
            <form onSubmit={handleSubmit}>
            <label>
            User Name:<input value = {userName}
            onChange={(event) => setUserName(event.target.value)}/>
            </label>
            <label>
            Password:<input value = {password}
            onChange={(event) => setPassword(event.target.value)}/>
            </label>
                <button>Submit</button>
        </form>
        </section>
    )
}