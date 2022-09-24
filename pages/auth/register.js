import axios from "axios";
import styles from '../../styles/Auth.module.css'
import cx from 'classnames';

function Register() {
    return (
        <>
            <main className={cx(styles["form-signin"], "text-center", "mt-5")}>
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please Sign Up to Continue</h1>

                    <div className="form-floating">
                        <input type="name" className="form-control" id="floatingInput" placeholder="John Doe" />
                        <label htmlFor="floatingInput">Full name</label>
                    </div>
                    <br />
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <br />
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" onClick={getPosts}>Sign up</button>
                </form>
            </main>
        </>
    )
}

export default Register


