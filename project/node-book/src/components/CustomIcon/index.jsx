import React  from "react";

const CustomIcon = ({ type }) => {
    return (
        <svg className="icon" aria-hidden="true">
            <use xlinkHref={`#icon-${type}`}></use>
        </svg>
    )
}
export default CustomIcon