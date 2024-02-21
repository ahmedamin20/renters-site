import { Link } from "react-router-dom";
import logoLight from "../../../assets/imgs/logoLight.png";
import logoDark from "../../../assets/imgs/logoDark.png";
import { useTheme } from "../../../utils/providers/theme";
export default function Logo() {
    const {theme} = useTheme()
  return (
    <Link href={"/"}>
      <img width={"60px"} src={theme=="light"?logoLight:logoDark}/>
    </Link>
  );
}