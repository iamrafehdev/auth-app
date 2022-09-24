import axios from "axios";
import styles from '../../styles/Auth.module.css'
import cx from 'classnames';
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getCookie, setCookie } from 'cookies-next';
import Link from "next/link";



function Register() {
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMeassge] = useState('')
    const [loader, setLoader] = useState(false)
    const token = getCookie('token');


    const checkAuth = () => {
        if (token != undefined) {
            router.push('/auth/dashboard')
        }
    }

    checkAuth();


    const register = async () => {
        setMeassge('');
        setLoader(true);
        try {
            const response = await axios.post('http://localhost:8000/api/auth/register', {
                name: name,
                email: email,
                password: password
            })
            const data = response.data;
            if (response.status == 201) {
                setCookie('token', data.token);
                setCookie('name', data.name);
                setCookie('email', data.email);
                console.log(data);
                setLoader(false);
                router.push('/auth/dashboard')
            }
        } catch (error) {
            setMeassge('Failed to register');
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
                <h1 className="h3 mb-3 fw-normal">Please Sign Up to Continue</h1>

                <div className="form-floating">
                    <input type="name" className="form-control" id="floatingInput" value={name} placeholder="John Doe" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="floatingInput">Full name</label>
                </div>
                <br />
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" value={email} placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <br />
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                {loader == false ? <button type="button" className="w-100 btn btn-lg btn-primary" onClick={() => register()}>Sign up</button> : <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only"></span>
                </div>}

                <Link href={'/auth/login'}>Login</Link>


            </main>
        </div>
    )
}

export default Register


