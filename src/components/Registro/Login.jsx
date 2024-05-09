import React, {useState} from 'react';
import axios from 'axios';

const Login = () =>{

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value })
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/reg/login', loginData)
            console.log(response);
        } catch (error) {
            console.error('Error al iniciar sesión', error.response)
        }
}

return(
    <>
        <h2>Iniciar sesión</h2>  
        
        <form onSubmit={handleLogin}>  
            
            <label>Username:  
            <input type='text' name='username' id='username' value={loginData.username} onChange={handleChange}  />
            </label>
            <br/><br/>

            
            <label>Password:  
            <input type='password' name='password' id='password' value={loginData.password} onChange={handleChange}  />
            </label>
            <br/><br/>

            <button type='submit'>Iniciar sesión</button>

        </form>
    </>
)

}

export default Login;