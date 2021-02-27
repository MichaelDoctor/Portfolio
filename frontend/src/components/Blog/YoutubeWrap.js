import React from 'react';

const YoutubeWrap = ({link}) => {
  return (
    <div className="vid-wrapper">
      <div
        style={{ paddingTop: '56.17021276595745%' }}
        className="blog-vid w-video w-embed"
      >
        <iframe
          className="embedly-embed"
          src={link}
          scrolling="no"
          title="YouTube embed"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};
export default YoutubeWrap;
