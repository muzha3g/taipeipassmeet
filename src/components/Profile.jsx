import React from "react";
import headImageLight from './../assets/images/head-l.png';
import headImageDark from './../assets/images/head-d.png';

const Profile = ({ lightdark }) => {
    const headImage = lightdark === 1 ? headImageDark : headImageLight;
  
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