import React from 'react';
import NextCaseStudy from '@/app/components/Case-Studies/Next-Case-Study/NextCaseStudy';

const NextHariKeshri = () => {
  const images = [
    {
      src: '/assets/images/case-studies/hari-keshri/1.webp',
      alt: 'Hari Keshri Rice Bran Oil products displayed in vibrant green and yellow packaging by Integra Magna.',
    },
    {
      src: '/assets/images/case-studies/hari-keshri/8.webp',
      alt: 'Woman pouring oil into a pan while preparing food in a traditional Indian kitchen.',
    },
    {
      src: '/assets/images/case-studies/hari-keshri/16.webp',
      alt: 'Hari Keshri brochure highlighting the benefits of rice bran oil alongside product images.',
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
