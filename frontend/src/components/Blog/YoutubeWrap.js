import React from 'react';

const YoutubeWrap = () => {
  return (
    <div className="vid-wrapper">
      <div
        style={{ paddingTop: '56.17021276595745%' }}
        className="blog-vid w-video w-embed"
      >
        <iframe
          className="embedly-embed"
          src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FRB5nWzdl-b8%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRB5nWzdl-b8&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FRB5nWzdl-b8%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
          scrolling="no"
          title="YouTube embed"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
};
export default YoutubeWrap;
