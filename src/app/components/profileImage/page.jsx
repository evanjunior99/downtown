"use client";
import Image from "next/image";
import { useState } from "react";

const ProfileImage = ({ imgSrc }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="w-full h-full overflow-hidden rounded-xl sm:rounded-2xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image
        src={imgSrc} // Dynamic image source
        alt="Profile"
        width={600}
        height={500}
        priority
        className={`object-cover object-center transition-all duration-500 ${
          isHovering ? "scale-110" : "scale-100"
        }`}
      />
    </div>
  );
};

export default ProfileImage;
