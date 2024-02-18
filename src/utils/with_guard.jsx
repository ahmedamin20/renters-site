import { useQuery } from '@tanstack/react-query';
import Login from '../components/auth/signIn/login';
import { ACCESS_TOKEN } from './config/constants';
import defaultAPI from '../api/axios';
const withGuard = (Component) => {
  const Wrapper = (props) => {
    // const {data}=useQuery({
    //   queryKey:["profile"],
    //   queryFn:()=>defaultAPI.get("auth/profile")
    // })
    const isLoggedIn = !!localStorage.getItem(ACCESS_TOKEN)
    return isLoggedIn ? <Component {...props} /> : <Login />
  }
  return Wrapper
}
export default withGuard
