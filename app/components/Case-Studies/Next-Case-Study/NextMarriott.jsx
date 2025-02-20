import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextMarriott = () => {
  const images = [
    {
      src: '/assets/images/case-studies/marriott/19.avif',
      alt: 'A Billboard showcasing a skilled chef in action, capturing the artistry and passion of gourmet cooking by Marriott Indore.',
    },
    {
      src: '/assets/images/case-studies/marriott/10.1.avif',
      alt: 'A Billboard showcasing a skilled chef in action, capturing the artistry and passion of gourmet cooking by Marriott Indore.',
    },
    {
      src: '/assets/images/case-studies/marriott/1.1.avif',
      alt: 'Marriott packaging box design with architectural illustrations by Integra Magna.',
    },
  ];

  return (
    <NextCaseStudy
      nextStudyTitle="Marriott"
      nextStudyLink="/work/marriott"
      images={images}
      description="Nurturing Health and Purity with Every Drop at Hari Keshri."
      backgroundColor="#EFD3BF" // Optional custom background color
    />
  );
};

export default NextMarriott;
