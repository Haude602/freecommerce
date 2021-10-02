import React from "react";

function Image({ className, width, height, src = "", alt = "" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
}

export default Image;
