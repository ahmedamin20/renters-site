import { Link } from "react-router-dom";

export default function NavLink({
  href,
  exact,
  children,
  ...props
}) {
  // const active = exact ? pathname + "/" === href : pathname.startsWith(href);
  const active = 0
  const className = ` capitalize transition-color duration-300 hover:text-primary ${
    active ? "text-primary font-bold" : "color-foreground"
  }`;
  props.className += className;

  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}