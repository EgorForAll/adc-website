import React from 'react';

export default ({ url, urlMobile, alt }) => {
  return (
    <picture>
      <source media="(max-width: 1152px)" srcSet={urlMobile} width="320" height="155" />
      <img
        className="gallery__image lazy"
        alt={alt}
        src={url}
        loading="lazy"
        width="1240"
        height="600"
      />
    </picture>
  );
};
