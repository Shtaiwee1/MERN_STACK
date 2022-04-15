import React from "react";

const Box = (props) => {
    //myStyle={backgroundColor: box.color, //why this won't work
       // height: `${box.dimension}px`,
        //width: `${box.dimension}px`

    //}
  return (
    <div className="row">
      <div className="col-8 offset-2">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {props.boxes.map((box, i) => (
            <div key={i} className="col" style={{ backgroundColor: box.color, height: `${box.dimension}px`, width: `${box.dimension}px`, }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Box;