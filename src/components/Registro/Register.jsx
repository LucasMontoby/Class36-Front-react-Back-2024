import React, {useState} from 'react';
import axios from 'axios';

const Register = () =>{

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData( (prevUserData) => ({...prevUserData, [name]: value}))
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/reg/register', userData)
            console.log(response);
        } catch (error) {
            alert("Error in registering", error.response);
        }
}

return(
    <>
        <h2>Registro</h2>  
        
        <form onSubmit={handleRegister}>  
            
            <label>Username:  
            <input type='text' name='username' id='username' value={userData.username} onChange={handleChange}  />
            </label>
            <br/><br/>

            
            <label>Email:  
            <input type='email' name='email' id='email' value={userData.email} onChange={handleChange}  />
            </label>
            <br/><br/>

            
            <label>Password:  
            <input type='password' name='password' id='password' value={userData.password} onChange={handleChange}  />
            </label>
            <br/><br/>

            <button type='submit'>Registrar</button>

        </form>
    </>
)

}

export default Register;