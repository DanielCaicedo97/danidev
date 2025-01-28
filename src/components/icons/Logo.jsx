import * as React from "react";

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={56}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={52}
      height={56}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="M1.17 11.087h3.513a9.128 9.128 0 0 0 6.001-3.635V4.74c0-2.525 2.069-4.58 4.628-4.618L23.24.003c15.582-.232 28.334 12.573 28.334 27.94S38.82 55.651 23.24 55.883l-7.816.116c-1.3.02-2.423-.432-3.347-1.332-.923-.901-1.39-2.004-1.39-3.285v-3.317C7.688 43.9 7.096 44.858 2.46 44.858c-1.335 0-2.431-1.063-2.458-2.374V26.91c.027-1.31 1.123-2.373 2.458-2.373 5.025 0 8.767.613 11.181-5.34v-3.494c0-.635.527-1.154 1.17-1.154h7.027c.644 0 1.17.52 1.17 1.154v6.93c0 .634-.526 1.153-1.17 1.153h-6.205a11.385 11.385 0 0 0-6.265 5.785v10.002c0 3.808.76 5.482 4.656 7.286l9.038-.212c10.405-.196 19.146-8.302 19.146-18.706S33.83 9.041 23.42 9.237c-7.77.146-11.146-.785-14.05 3.846v6.085c0 .634-.527 1.153-1.17 1.153H1.17c-.644 0-1.17-.519-1.17-1.153v-6.93c0-.634.526-1.153 1.17-1.153"
      />
    </mask>
    <g mask="url(#a)">
      <path fill={props.fill} d="M51.572-.228H0V56.02h51.572V-.228Z" />
    </g>
  </svg>
);

export default Logo;
