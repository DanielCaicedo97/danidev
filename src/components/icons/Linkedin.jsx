import * as React from "react"
const Linkedin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    fill="white"
    {...props}
    viewBox="0 0 46 46" // Agregado para mantener proporción en redimensionado
  >
    <path
      fill={props.fill}
      d="M40.767 0a5.076 5.076 0 0 1 5.076 5.076v35.535a5.076 5.076 0 0 1-5.076 5.076H5.233A5.076 5.076 0 0 1 .156 40.61V5.076A5.076 5.076 0 0 1 5.233 0h35.534Zm-1.27 39.341V25.89a8.274 8.274 0 0 0-8.274-8.274c-2.157 0-4.67 1.32-5.888 3.3v-2.818h-7.082v21.244h7.082V26.828c0-1.954 1.573-3.553 3.528-3.553a3.553 3.553 0 0 1 3.553 3.553v12.513h7.082ZM10.005 14.112a4.264 4.264 0 0 0 4.264-4.264c0-2.36-1.903-4.29-4.264-4.29a4.29 4.29 0 0 0-4.29 4.29c0 2.36 1.93 4.264 4.29 4.264Zm3.528 25.23V18.096h-7.03v21.244h7.03Z"
    />
  </svg>
)
export default Linkedin
