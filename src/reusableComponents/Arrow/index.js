import React from "react"

export default ({ rotation, hideonstate, onClick }) => {
  if (hideonstate) return null
  else {
    return (
      <svg
        onClick={onClick}
        width="26"
        height="25"
        viewBox="0 0 26 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={
          rotation
            ? { transform: `rotate(${rotation})` }
            : { transform: `rotate(0deg)` }
        }
      >
        <path
          d="M25.6105 11.6503L12.2648 0.136938C12.1623 0.0491571 12.0316 0 11.8939 0H8.76762C8.50622 0 8.38612 0.323034 8.58393 0.491573L20.9547 11.1657H0.282599C0.127169 11.1657 0 11.2921 0 11.4466V13.5534C0 13.7079 0.127169 13.8343 0.282599 13.8343H20.9512L8.5804 24.5084C8.38258 24.6805 8.50269 25 8.76409 25H11.9963C12.0634 25 12.1305 24.9754 12.18 24.9298L25.6105 13.3497C25.7328 13.244 25.8308 13.1135 25.898 12.9669C25.9652 12.8203 26 12.6611 26 12.5C26 12.3389 25.9652 12.1797 25.898 12.0331C25.8308 11.8865 25.7328 11.756 25.6105 11.6503Z"
          fill="#BF4545"
        />
      </svg>
    )
  }
}
