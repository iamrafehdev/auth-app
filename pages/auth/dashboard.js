import axios from "axios";
import styles from '../../styles/Auth.module.css'
import cx from 'classnames';
import { useState } from 'react'
import { useRouter } from 'next/router'
import { getCookie } from 'cookies-next';
import { deleteCookie } from 'cookies-next';

export default function Dashboard() {
    const token = getCookie('token');
    const name = getCookie('name');
    const email = getCookie('email');
    const router = useRouter()



    const checkAuth = async () => {
        console.log(name);
        if (token == undefined) {
            await router.push('/')
        } 
    }

    checkAuth();




    const logout = async () => {
        console.log(token)
        deleteCookie('token');
        await router.push('/auth/login')

    }

    return (
        <div>

            <main className={cx(styles["form-signin"], "text-center", "mt-5")}>

                <h1 className="h3 mb-3 fw-normal">Welcome {name}</h1><br/>
                <h1 className="h3 mb-3 fw-normal">Email: {email}</h1>



                <button type="button" className="w-100 btn btn-lg btn-primary" onClick={() => logout()}>Logout</button>
               

            </main>
        </div>
    )
}
