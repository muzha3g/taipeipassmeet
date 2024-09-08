import React from "react";
import headImageLight from './../assets/images/head-l.png';
import headImageDark from './../assets/images/head-d.png';
import headImageMajor from './../assets/images/head-10000.jpg';

const imageMapping = {
    0: headImageLight,
    1: headImageDark,
    2: headImageMajor,
  };

const Profile = ({ lightdark }) => {
    const headImage = imageMapping[lightdark] || headImageLight;
  
    return (
      <div className="h-8 w-8 bg-gray-200 rounded-full">
        <img
          className="rounded-full"
          src={headImage}
          alt="Head"
        />
      </div>
    );
  };

  export default Profile;