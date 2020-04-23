import React from "react";

import "./ImageBox.scss";

const ImageBox = props => {
  let ImageClass = "image-box";
  if (props.animate) {
    ImageClass = "image-box over";
  }
  return (
    <div className={ImageClass}>
      <p>Something</p>
    </div>
  );
};

export default ImageBox;
