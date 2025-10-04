import { Link, LinkProps } from "@mui/material";
import { ReactElement } from "react";
// import { Link, LinkProps } from "react-scroll";

type TCustomLink = LinkProps & {
  children: ReactElement;
};

export default function CustomLink({
  children,
}: // to,
// onClick,
// onSetActive,
TCustomLink) {
  return (
    <Link
    // to={to}
    // onClick={onClick}
    // onSetActive={onSetActive}
    // offset={0}
    // duration={800}
    // smooth
    // spy
    >
      {children}
    </Link>
  );
}
