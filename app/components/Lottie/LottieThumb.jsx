'use client';
import Rive from '@rive-app/react-canvas';

export const Simple = () => (
  <Rive
    src="/assets/images/landing/Thumbsup.riv"
    autoplay
    loop
    style={{ width: 150, height: 150, backgroundColor: 'transparent'
    }}
  />
);
