import React from 'react';
import { FadeLoader } from 'react-spinners';
import './PageLoader.styles.css';

const PageLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <FadeLoader
          loading
          height={45}
          width={7}
          radius={2}
          margin={30}
          color="white"
        />
      </div>
    </div>
  );
};

export default PageLoader;
