import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': '0ef9569d-9943-4c53-a2a1-5bb7e3144dff', 'User-Name': userName, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject});
            localStorage.setItem('username', userName);
            localStorage.setItem('password', password);
            window.location.reload();
        }
        catch (error) {
            setError('Oops, incorrect credentials.')
        }
    }

    return (
        <div className='wraper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={userName} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;