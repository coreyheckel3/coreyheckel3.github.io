import React from 'react';
import Image from 'next/image';

const SocialLink = ({ href, imageSrc, altText, isDownload = false }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" download={isDownload ? true : undefined}>
      <Image src={imageSrc} alt={altText} />
    </a>
  );
};

export default SocialLink;
