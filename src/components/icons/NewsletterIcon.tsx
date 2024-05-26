import { SvgIcon, SvgIconProps } from "@mui/material";

export default function NewsletterIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 72 72">
      <path
        d="M60 51C60 51.7957 59.6839 52.5587 59.1213 53.1213C58.5587 53.6839 57.7957 54 57 54C56.2043 54 55.4413 53.6839 54.8787 53.1213C54.3161 52.5587 54 51.7957 54 51V15C54 14.2044 53.6839 13.4413 53.1213 12.8787C52.5587 12.3161 51.7957 12 51 12H9C8.20435 12 7.44129 12.3161 6.87868 12.8787C6.31607 13.4413 6 14.2044 6 15V54C6 55.5913 6.63214 57.1174 7.75736 58.2426C8.88258 59.3679 10.4087 60 12 60H57C61.962 60 66 55.962 66 51V21H60V51ZM36 21H45V27H36V21ZM36 33H45V39H36V33ZM15 21H30V39H15V21ZM15 51V45H45V51H15Z"
        fill="url(#paint0_linear_6175_976)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6175_976"
          x1="54.528"
          y1="14.8239"
          x2="16.8992"
          y2="69.7031"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8BFF" />
          <stop offset="1" stopColor="#1E9DFF" />
        </linearGradient>
      </defs>{" "}
    </SvgIcon>
  );
}
