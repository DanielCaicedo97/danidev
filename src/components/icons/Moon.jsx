import * as React from "react";
const Moon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="white"
    {...props}
  >
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M19.07 2.829A2 2 0 0 0 16.948.023C7.35 1.495 0 9.783 0 19.79c0 11.046 8.954 20 20 20s20-8.954 20-20l-.008-.56a2 2 0 0 0-3.142-1.586A12 12 0 0 1 19.07 2.827"
      clipRule="evenodd"
    />
  </svg>
);
export default Moon;
