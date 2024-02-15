import Login from '../components/auth/signIn/login';
import { ACCESS_TOKEN } from './config/constants';
const withGuard = (Component) => {
  const Wrapper = (props) => {
    const isLoggedIn = localStorage.getItem(ACCESS_TOKEN)
    return isLoggedIn === true ? <Component {...props} /> : <Login />
  }
  return Wrapper
}
export default withGuard
