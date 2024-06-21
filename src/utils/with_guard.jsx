import LoginWithGoogleButton from '../components/auth/login/Login';
import { ACCESS_TOKEN } from './config/constants';
const withGuard = (Component) => {
  const Wrapper = (props) => {
    // const {data}=useQuery({
    //   queryKey:["profile"],
    //   queryFn:()=>defaultAPI.get("auth/profile")
    // })
    const isLoggedIn = !!localStorage.getItem(ACCESS_TOKEN)
    return isLoggedIn ? <Component {...props} /> : <LoginWithGoogleButton />
  }
  return Wrapper
}
export default withGuard
