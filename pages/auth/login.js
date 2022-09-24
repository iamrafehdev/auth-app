import axios from "axios";
import styles from '../../styles/Auth.module.css'
import cx from 'classnames';
import { useState } from 'react'
import { useRouter } from 'next/router'
import { setCookie } from 'cookies-next';
import { getCookie } from 'cookies-next';
import Link from "next/link";


function Login()  {
    const router = useRouter()

     

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMeassge] = useState('')
    const [loader, setLoader] = useState(false)
    const token = getCookie('token');

    const checkAuth = async () => {
        if (token != undefined) {
            await router.push('/auth/dashboard')
        }
    }

    checkAuth();

    const login = async () => {
        setMeassge('');
        setLoader(true);
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', {
                email: email,
                password: password
            })
            const data = response.data;
            if (response.status == 200) {
                localStorage.setItem('token', data.token);
                setCookie('token', data.token);
                setCookie('name', data.name);
                setCookie('email', data.email);
                console.log(data);
                setLoader(false);
                router.push('/auth/dashboard')
            }
        } catch (error) {
            setMeassge('Invalid Credentials');
            console.log(error);
            setLoader(false);

        }
    };
    return (
        <div>

            <main className={cx(styles["form-signin"], "text-center", "mt-5")}>
                {message == '' ? <div></div> : <div className="alert alert-danger" role="alert">
                    {message}
                </div>}
                <h1 className="h3 mb-3 fw-normal">Please Sign In to Continue</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" value={email} placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <br />
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                {loader == false ? <button type="button" className="w-100 btn btn-lg btn-primary" onClick={() => login()}>Sign in</button> : <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only"></span>
                </div>}
                <Link href={'/auth/register'}>New Registeration</Link>
            </main>
        </div>
    )
}

export default Login


