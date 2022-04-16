import React from "react";
import { useParams } from "react-router";
const Display = () => {
  const { par, bgColor, textColor } = useParams();
  return (
    <div className="row my-5">
      <div className=" text-center">
        {isNaN(+par) ? (//is not a number is a function used to indicate if the wrapped element is a number or not and returns a boolean
          //if it is not a number give the element the passed styles as parameters
          <h3 style={{ backgroundColor: bgColor, color: textColor }}>
            The word is: {par}
          </h3>
        ) : (
          <h3>The Number is: {par} </h3>
        )}
      </div>
    </div>
  );
};
export default Display;