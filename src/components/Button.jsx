import { Link } from "react-router-dom";

function Button({
  children,
  to,
  variant = "primary",
  type = "button",
  onClick,
}) {
  const className = `btn btn-${variant}`;

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;