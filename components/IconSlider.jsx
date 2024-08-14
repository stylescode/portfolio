'use client';

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 20vh;
  overflow: hidden;
  position: relative;
`;

const ImageTrack = styled.div`
  display: inline-flex;
  position: relative;
  animation: ${slide} ${(props) => props.animationDuration} linear infinite;
  will-change: transform;
`;

const IconImage = styled.img`
  height: 80%;
  margin: 0 10px;
  user-select: none;
`;

const IconSlider = ({ icons }) => {
  const [imageWidth, setImageWidth] = useState(0);
  const [animationDuration, setAnimationDuration] = useState("34s"); // Default animation duration
  const [loopCount, setLoopCount] = useState(3); // Initial loop count

  useEffect(() => {
    if (icons.length > 0) {
      const img = new Image();
      img.onload = function () {
        const width = this.width + 20; // Assuming 10px margin on both sides
        setImageWidth(width);
        const minLoopsRequired = Math.ceil(
          window.innerWidth / (width * icons.length),
        );
        setLoopCount(Math.max(minLoopsRequired, 3));
      };
      img.src = icons[0].image;
    }
  }, [icons]);

  useEffect(() => {
    if (imageWidth > 0 && window.innerWidth > 0) {
      const totalWidth = icons.length * imageWidth * loopCount;
      const newDuration = `${(totalWidth / window.innerWidth) * parseFloat(animationDuration)}s`;
      setAnimationDuration(newDuration);
    }
  }, [icons, imageWidth, loopCount]);

  const safeLoopCount = Math.min(
    loopCount,
    Number.MAX_SAFE_INTEGER / icons.length,
  ); // Ensure safe array length
  const extendedIcons = Array(safeLoopCount).fill(icons).flat();

  return (
    <SliderContainer>
      <ImageTrack animationDuration={animationDuration}>
        {extendedIcons.map((icon, index) => (
          <IconImage
            key={index}
            src={`https://skillicons.dev/icons?i=${icon.name}`}
            alt={icon.name}
            title={icon.name}
          />
        ))}
      </ImageTrack>
    </SliderContainer>
  );
};

export default IconSlider;