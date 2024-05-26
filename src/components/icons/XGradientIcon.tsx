import { SvgIcon, SvgIconProps } from "@mui/material";

export default function XGradientIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 22 20">
      <path
        d="M17.3259 0H20.6992L13.3293 8.47278L22 20H15.2112L9.8945 13.0079L3.80967 20H0.4345L8.31783 10.9372L0 0.000921999H6.96117L11.7673 6.39192L17.3259 0ZM16.1425 17.9699H18.0116L5.9455 1.92412H3.93983L16.1425 17.9699Z"
        fill="url(#paint0_linear_6662_1564)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6662_1564"
          x1="15.8457"
          y1="1.50983"
          x2="9.71714"
          y2="19.8275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8BFF" />
          <stop offset="1" stopColor="#1E9DFF" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}
