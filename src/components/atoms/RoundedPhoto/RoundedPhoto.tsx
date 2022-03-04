import React from 'react';
import styled from 'styled-components';

interface PhotoStyled {
  width?: string;
  height?: string;
  border?: string;
  outline?: string;
  outlineOffset?: string;
}

const ContainerPhoto = styled.div<PhotoStyled>`
  border-radius: 50%;
  width: ${({ width }) => width || '90px'};
  height: ${({ height }) => height || '90px'};
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: ${({ width }) => width || '90px'};
    height: ${({ height }) => height || '90px'};
    border: ${({ border }) => border || 'none'};
    outline: ${({ outline }) => outline || 'none'};
    outline-offset: ${({ outlineOffset }) => outlineOffset || 'none'};
    object-fit: cover;
    border-radius: 50%;
  }
`;

interface Photo {
  img: string | undefined;
  alt: string;
  width?: string;
  height?: string;
  border?: string;
  outline?: string;
  outlineOffset?: string;
}

function RoundedPhoto({ img, alt, width, height, border, outline, outlineOffset }: Photo) {
  return (
    <ContainerPhoto
      width={width}
      height={height}
      border={border}
      outline={outline}
      outlineOffset={outlineOffset}
    >
      {img && <img src={img} alt={alt} />}
    </ContainerPhoto>
  );
}

RoundedPhoto.defaultProps = {
  width: undefined,
  height: undefined,
  border: undefined,
  outline: undefined,
  outlineOffset: undefined
};

export default RoundedPhoto;
