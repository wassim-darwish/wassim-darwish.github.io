import { SvgIcon, SvgIconProps } from "@mui/material";

export default function GmailIconGradient(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 192 192">
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          // stroke="#000000"
          strokeLinejoin="round"
          strokeWidth="12"
          d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
          fill="url(#paint0_linear_6662_1564)"
        />
      </g>
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
