import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextHariKeshri = () => {
  const images = [
    {
      src: '/assets/images/case-studies/hari-keshri/1.webp',
      alt: 'Newspaper Marketing Ad of Decathlon by Integra Magna',
    },
    {
      src: '/assets/images/case-studies/hari-keshri/8.webp',
      alt: 'OOH Marketing of a man playing basketball in Decathlon merch.',
    },
    {
      src: '/assets/images/case-studies/hari-keshri/16.webp',
      alt: 'Map of the illustration of the island created for Decathlon',
    },
  ];

  return (
    <NextCaseStudy
      nextStudyTitle="Hari Keshri"
      nextStudyLink="/work/hari-keshri"
      images={images}
      description="Nurturing Health and Purity with Every Drop at Hari Keshri."
      backgroundColor="#6C7D34" // Optional custom background color
    />
  );
};

export default NextHariKeshri;
