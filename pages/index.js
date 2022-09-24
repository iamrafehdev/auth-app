import Dashboard from './auth/dashboard'
import Login from './auth/login'
import { getCookie } from 'cookies-next';


export default function Home() {
  const token = getCookie('token');

  return (
    <div>
      {
        token != null || token != undefined ? <Dashboard /> : <Login />
      }
    </div>
  )
}
