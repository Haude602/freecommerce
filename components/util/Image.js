import React from "react";

function Image({ className='', width = 200, height = 200, src = "", alt = "" }) {
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
