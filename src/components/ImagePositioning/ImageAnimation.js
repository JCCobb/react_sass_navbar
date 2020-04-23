import React, { useLayoutEffect, useState } from "react";

import ImageBox from "./ImageBox";

import "./ImageAnimation.scss";

const ImageDraw = props => {
  const [show, doShow] = useState({
    item: false
  });
  //const ourRef = useRef(null);
  const Ref = React.createRef();

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
    const divPos = topPos(Ref.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (divPos < scrollPos) {
        doShow(state => ({ ...state, item: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [Ref]);

  return (
    <div className="image__wrapper" ref={Ref}>
      <ImageBox animate={show.item} />
    </div>
  );
};

export default ImageDraw;
