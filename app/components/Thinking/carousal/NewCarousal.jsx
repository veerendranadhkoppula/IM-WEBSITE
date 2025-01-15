'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './FruitSlider.module.css'; // Import CSS module

const fruits = [
  {
    id: "feature1",
    src: '/assets/images/thinking/ich/1.webp',
    alt: "Project 3",
    title: "Indian Coffee House",
    description: "hello",
    images: [
      { src: '/assets/images/thinking/ich/10.webp', type: 'landscape' },
      {
        src: [
          { src: "/assets/images/thinking/ich/6.webp" },
          { src: "/assets/images/thinking/ich/9.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/2.webp" },
          { src: "/assets/images/thinking/ich/4.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/3.webp" },
          { src: "/assets/images/thinking/ich/13.webp" }
        ],
        type: "double"
      }

    ]
  },
  {
    id: "feature2",
    src: "/assets/images/thinking/lamborghini/1.webp",
    alt: "Project 1",
    title: "Lamborghini",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      {
        src: [
          { src: "/assets/images/thinking/lamborghini/6.webp" },
          { src: "/assets/images/thinking/lamborghini/9.webp" }
        ],
        type: "double"
      },

      { src: "/assets/images/thinking/lamborghini/8.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/2.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/10.webp", type: "landscape" }

    ]
  },
  {
    id: "feature3",
    src: "/assets/images/thinking/starbucks/1.webp",
    thumbnail: ["/assets/images/thinking/starbucks/1.webp"],
    alt: "Project 4",
    title: "Starbucks",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/starbucks/4.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/starbucks/1.webp" },
          { src: "/assets/images/thinking/starbucks/2.webp" }
        ],
        type: "double"
      },

      { src: "/assets/images/thinking/starbucks/5.webp", type: "landscape" }

    ]
  },
  {
    id: "feature4",
    src: "/assets/images/thinking/tesouro/16gif.webp",
    thumbnail: ["/assets/images/thinking/tesouro/1.webp"],
    alt: "Project 2",
    title: "Tesouro",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/tesouro/17.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/6.webp" },
          { src: "/assets/images/thinking/tesouro/2.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/4.webp" },
          { src: "/assets/images/thinking/tesouro/7.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/tesouro/18.webp", type: "landscape" },
      { "src": "/assets/images/thinking/tesouro/19.mp4", "type": "square", "mediaType": "video" }
    ]
  },
  {
    id: "feature5",
    src: '/assets/images/thinking/ich/1.webp',
    alt: "Project 3",
    title: "Indian Coffee House",
    description: "hello",
    images: [
      { src: '/assets/images/thinking/ich/10.webp', type: 'landscape' },
      {
        src: [
          { src: "/assets/images/thinking/ich/6.webp" },
          { src: "/assets/images/thinking/ich/9.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/2.webp" },
          { src: "/assets/images/thinking/ich/4.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/3.webp" },
          { src: "/assets/images/thinking/ich/13.webp" }
        ],
        type: "double"
      }
    ]
  },
  {
    id: "feature6",
    src: "/assets/images/thinking/lamborghini/1.webp",
    alt: "Project 1",
    title: "Lamborghini",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      {
        src: [
          { src: "/assets/images/thinking/lamborghini/6.webp" },
          { src: "/assets/images/thinking/lamborghini/9.webp" }
        ],
        type: "double"
      },

      { src: "/assets/images/thinking/lamborghini/8.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/2.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/10.webp", type: "landscape" }

    ]
  },
  {
    id: "feature7",
    src: "/assets/images/thinking/starbucks/1.webp",
    thumbnail: ["/assets/images/thinking/starbucks/1.webp"],
    alt: "Project 4",
    title: "Starbucks",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/starbucks/4.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/starbucks/1.webp" },
          { src: "/assets/images/thinking/starbucks/2.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/starbucks/5.webp", type: "landscape" }

    ]
  },
  {
    id: "feature8",
    src: "/assets/images/thinking/tesouro/16gif.webp",
    thumbnail: ["/assets/images/thinking/tesouro/1.webp"],
    alt: "Project 2",
    title: "Tesouro",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/tesouro/17.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/6.webp" },
          { src: "/assets/images/thinking/tesouro/2.webp" }
        ],
        type: "double"
      },

      {
        src: [
          { src: "/assets/images/thinking/tesouro/4.webp" },
          { src: "/assets/images/thinking/tesouro/7.webp" }
        ],
        type: "double"
      },

      { src: "/assets/images/thinking/tesouro/18.webp", type: "landscape" },
      { "src": "/assets/images/thinking/tesouro/19.mp4", "type": "square", "mediaType": "video" }
    ]
  },
  {
    id: "feature9",
    src: '/assets/images/thinking/ich/1.webp',
    alt: "Project 3",
    title: "Indian Coffee House",
    description: "hello",
    images: [
      { src: '/assets/images/thinking/ich/10.webp', type: 'landscape' },
      {
        src: [
          { src: "/assets/images/thinking/ich/6.webp" },
          { src: "/assets/images/thinking/ich/9.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/2.webp" },
          { src: "/assets/images/thinking/ich/4.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/3.webp" },
          { src: "/assets/images/thinking/ich/13.webp" }
        ],
        type: "double"
      }
    ]
  },
  {
    id: "feature10",
    src: "/assets/images/thinking/lamborghini/1.webp",
    alt: "Project 1",
    title: "Lamborghini",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      {
        src: [
          { src: "/assets/images/thinking/lamborghini/6.webp" },
          { src: "/assets/images/thinking/lamborghini/9.webp" }
        ],
        type: "double"
      },

      { src: "/assets/images/thinking/lamborghini/8.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/2.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/10.webp", type: "landscape" }

    ]
  },
  {
    id: "feature11",
    src: "/assets/images/thinking/starbucks/1.webp",
    thumbnail: ["/assets/images/thinking/starbucks/1.webp"],
    alt: "Project 4",
    title: "Starbucks",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/starbucks/4.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/starbucks/1.webp" },
          { src: "/assets/images/thinking/starbucks/2.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/starbucks/5.webp", type: "landscape" }

    ]
  },
  {
    id: "feature12",
    src: "/assets/images/thinking/tesouro/16gif.webp",
    thumbnail: ["/assets/images/thinking/tesouro/1.webp"],
    alt: "Project 2",
    title: "Tesouro",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/tesouro/17.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/6.webp" },
          { src: "/assets/images/thinking/tesouro/2.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/4.webp" },
          { src: "/assets/images/thinking/tesouro/7.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/tesouro/18.webp", type: "landscape" },
      { "src": "/assets/images/thinking/tesouro/19.mp4", "type": "square", "mediaType": "video" }
    ]
  },
  {
    id: "feature13",
    src: '/assets/images/thinking/ich/1.webp',
    alt: "Project 3",
    title: "Indian Coffee House",
    description: "hello",
    images: [
      { src: '/assets/images/thinking/ich/10.webp', type: 'landscape' },
      {
        src: [
          { src: "/assets/images/thinking/ich/6.webp" },
          { src: "/assets/images/thinking/ich/9.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/2.webp" },
          { src: "/assets/images/thinking/ich/4.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/3.webp" },
          { src: "/assets/images/thinking/ich/13.webp" }
        ],
        type: "double"
      }
    ]
  },
  {
    id: "feature14",
    src: "/assets/images/thinking/lamborghini/1.webp",
    alt: "Project 1",
    title: "Lamborghini",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      {
        src: [
          { src: "/assets/images/thinking/lamborghini/6.webp" },
          { src: "/assets/images/thinking/lamborghini/9.webp" }
        ],
        type: "double"
      },

      { src: "/assets/images/thinking/lamborghini/8.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/2.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/10.webp", type: "landscape" }

    ]
  },
  {
    id: "feature15",
    src: "/assets/images/thinking/starbucks/1.webp",
    thumbnail: ["/assets/images/thinking/starbucks/1.webp"],
    alt: "Project 4",
    title: "Starbucks",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/starbucks/4.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/starbucks/1.webp" },
          { src: "/assets/images/thinking/starbucks/2.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/starbucks/5.webp", type: "landscape" }

    ]
  },
  {
    id: "feature16", src: "/assets/images/thinking/tesouro/16gif.webp",
    thumbnail: ["/assets/images/thinking/tesouro/1.webp"],
    alt: "Project 2",
    title: "Tesouro",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/tesouro/17.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/6.webp" },
          { src: "/assets/images/thinking/tesouro/2.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/4.webp" },
          { src: "/assets/images/thinking/tesouro/7.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/tesouro/18.webp", type: "landscape" },
      { "src": "/assets/images/thinking/tesouro/19.mp4", "type": "square", "mediaType": "video" }
    ]
  },
  {
    id: "feature17",
    src: '/assets/images/thinking/ich/1.webp',
    alt: "Project 3",
    title: "Indian Coffee House",
    description: "hello",
    images: [
      { src: '/assets/images/thinking/ich/10.webp', type: 'landscape' },
      {
        src: [
          { src: "/assets/images/thinking/ich/6.webp" },
          { src: "/assets/images/thinking/ich/9.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/2.webp" },
          { src: "/assets/images/thinking/ich/4.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/3.webp" },
          { src: "/assets/images/thinking/ich/13.webp" }
        ],
        type: "double"
      }
    ]
  },
  {
    id: "feature18",
    src: "/assets/images/thinking/lamborghini/1.webp",
    alt: "Project 1",
    title: "Lamborghini",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      {
        src: [
          { src: "/assets/images/thinking/lamborghini/6.webp" },
          { src: "/assets/images/thinking/lamborghini/9.webp" }
        ],
        type: "double"
      },

      { src: "/assets/images/thinking/lamborghini/8.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/2.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/10.webp", type: "landscape" }

    ]
  },
  {
    id: "feature19",
    src: "/assets/images/thinking/starbucks/1.webp",
    thumbnail: ["/assets/images/thinking/starbucks/1.webp"],
    alt: "Project 4",
    title: "Starbucks",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/starbucks/4.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/starbucks/1.webp" },
          { src: "/assets/images/thinking/starbucks/2.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/starbucks/5.webp", type: "landscape" }

    ]
  },
  {
    id: "feature20",
    src: "/assets/images/thinking/tesouro/16gif.webp",
    thumbnail: ["/assets/images/thinking/tesouro/1.webp"],
    alt: "Project 2",
    title: "Tesouro",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/tesouro/17.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/6.webp" },
          { src: "/assets/images/thinking/tesouro/2.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/4.webp" },
          { src: "/assets/images/thinking/tesouro/7.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/tesouro/18.webp", type: "landscape" },
      { "src": "/assets/images/thinking/tesouro/19.mp4", "type": "square", "mediaType": "video" }
    ]
  },
  {
    id: "feature21",
    src: '/assets/images/thinking/ich/1.webp',
    alt: "Project 3",
    title: "Indian Coffee House",
    description: "hello",
    images: [
      { src: '/assets/images/thinking/ich/10.webp', type: 'landscape' },
      {
        src: [
          { src: "/assets/images/thinking/ich/6.webp" },
          { src: "/assets/images/thinking/ich/9.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/2.webp" },
          { src: "/assets/images/thinking/ich/4.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/3.webp" },
          { src: "/assets/images/thinking/ich/13.webp" }
        ],
        type: "double"
      }
    ]
  },
  {
    id: "feature22",
    src: "/assets/images/thinking/lamborghini/1.webp",
    alt: "Project 1",
    title: "Lamborghini",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      {
        src: [
          { src: "/assets/images/thinking/lamborghini/6.webp" },
          { src: "/assets/images/thinking/lamborghini/9.webp" }
        ],
        type: "double"
      },

      { src: "/assets/images/thinking/lamborghini/8.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/2.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/10.webp", type: "landscape" }

    ]
  },
  {
    id: "feature23",
    src: "/assets/images/thinking/starbucks/1.webp",
    thumbnail: ["/assets/images/thinking/starbucks/1.webp"],
    alt: "Project 4",
    title: "Starbucks",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/starbucks/4.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/starbucks/1.webp" },
          { src: "/assets/images/thinking/starbucks/2.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/starbucks/5.webp", type: "landscape" }

    ]
  },
  {
    id: "feature24",
    src: "/assets/images/thinking/tesouro/16gif.webp",
    thumbnail: ["/assets/images/thinking/tesouro/1.webp"],
    alt: "Project 2",
    title: "Tesouro",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/tesouro/17.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/6.webp" },
          { src: "/assets/images/thinking/tesouro/2.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/4.webp" },
          { src: "/assets/images/thinking/tesouro/7.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/tesouro/18.webp", type: "landscape" },
      { "src": "/assets/images/thinking/tesouro/19.mp4", "type": "square", "mediaType": "video" }
    ]
  },
  {
    id: "feature25",
    src: '/assets/images/thinking/ich/1.webp',
    alt: "Project 3",
    title: "Indian Coffee House",
    description: "hello",
    images: [
      { src: '/assets/images/thinking/ich/10.webp', type: 'landscape' },
      {
        src: [
          { src: "/assets/images/thinking/ich/6.webp" },
          { src: "/assets/images/thinking/ich/9.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/2.webp" },
          { src: "/assets/images/thinking/ich/4.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/3.webp" },
          { src: "/assets/images/thinking/ich/13.webp" }
        ],
        type: "double"
      }
    ]
  },
  {
    id: "feature26",
    src: "/assets/images/thinking/lamborghini/1.webp",
    alt: "Project 1",
    title: "Lamborghini",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      {
        src: [
          { src: "/assets/images/thinking/lamborghini/6.webp" },
          { src: "/assets/images/thinking/lamborghini/9.webp" }
        ],
        type: "double"
      },

      { src: "/assets/images/thinking/lamborghini/8.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/2.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/10.webp", type: "landscape" }

    ]
  },
  {
    id: "feature27",
    src: "/assets/images/thinking/starbucks/1.webp",
    thumbnail: ["/assets/images/thinking/starbucks/1.webp"],
    alt: "Project 4",
    title: "Starbucks",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/starbucks/4.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/starbucks/1.webp" },
          { src: "/assets/images/thinking/starbucks/2.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/starbucks/5.webp", type: "landscape" }

    ]
  },
  {
    id: "feature28",
    src: "/assets/images/thinking/tesouro/16gif.webp",
    thumbnail: ["/assets/images/thinking/tesouro/1.webp"],
    alt: "Project 2",
    title: "Tesouro",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/tesouro/17.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/6.webp" },
          { src: "/assets/images/thinking/tesouro/2.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/4.webp" },
          { src: "/assets/images/thinking/tesouro/7.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/tesouro/18.webp", type: "landscape" },
      { "src": "/assets/images/thinking/tesouro/19.mp4", "type": "square", "mediaType": "video" }
    ]
  },
  {
    id: "feature29",
    src: '/assets/images/thinking/ich/1.webp',
    alt: "Project 3",
    title: "Indian Coffee House",
    description: "hello",
    images: [
      { src: '/assets/images/thinking/ich/10.webp', type: 'landscape' },
      {
        src: [
          { src: "/assets/images/thinking/ich/6.webp" },
          { src: "/assets/images/thinking/ich/9.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/2.webp" },
          { src: "/assets/images/thinking/ich/4.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/ich/3.webp" },
          { src: "/assets/images/thinking/ich/13.webp" }
        ],
        type: "double"
      }
    ]
  },
  {
    id: "feature30",
    src: "/assets/images/thinking/lamborghini/1.webp",
    alt: "Project 1",
    title: "Lamborghini",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      {
        src: [
          { src: "/assets/images/thinking/lamborghini/6.webp" },
          { src: "/assets/images/thinking/lamborghini/9.webp" }
        ],
        type: "double"
      },

      { src: "/assets/images/thinking/lamborghini/8.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/2.webp", type: "landscape" },
      { src: "/assets/images/thinking/lamborghini/10.webp", type: "landscape" }

    ]
  },
  {
    id: "feature31",
    src: "/assets/images/thinking/starbucks/1.webp",
    thumbnail: ["/assets/images/thinking/starbucks/1.webp"],
    alt: "Project 4",
    title: "Starbucks",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/starbucks/4.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/starbucks/1.webp" },
          { src: "/assets/images/thinking/starbucks/2.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/starbucks/5.webp", type: "landscape" }

    ]
  },
  {
    id: "feature32",
    src: "/assets/images/thinking/tesouro/16gif.webp",
    thumbnail: ["/assets/images/thinking/tesouro/1.webp"],
    alt: "Project 2",
    title: "Tesouro",
    description: "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    images: [
      { src: "/assets/images/thinking/tesouro/17.webp", type: "landscape" },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/6.webp" },
          { src: "/assets/images/thinking/tesouro/2.webp" }
        ],
        type: "double"
      },
      {
        src: [
          { src: "/assets/images/thinking/tesouro/4.webp" },
          { src: "/assets/images/thinking/tesouro/7.webp" }
        ],
        type: "double"
      },
      { src: "/assets/images/thinking/tesouro/18.webp", type: "landscape" },
      { "src": "/assets/images/thinking/tesouro/19.mp4", "type": "square", "mediaType": "video" }
    ]
  },
];

const FruitSlider = ({ onButtonClick }) => {
  const [currentIndex, setCurrentIndex] = useState(16); // Start from middle
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);
  const [selectedWork, setSelectedWork] = useState(null);


  const handleButtonClick = (id) => {
    const selectedItem = fruits.find((item) => item.id === id);
    setSelectedWork(selectedItem);
  };

  const handleClosePopup = () => {
    setSelectedWork(null); // Close the popup
  };


  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    handleDragging(x);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    handleDragging(x);
  };

  const handleDragging = (x) => {
    const distance = (x - startX) * 2;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        // Swiping right
        setCurrentIndex((prev) => (prev - 1 + fruits.length) % fruits.length);
      } else {
        // Swiping left
        setCurrentIndex((prev) => (prev + 1) % fruits.length);
      }
      setIsDragging(false); // Stop dragging after detecting a swipe
    }
  };




  const getTransformStyle = (index) => {
    const distance = index - currentIndex;
    const scale = 1.3;
    const rotation = distance * 15;
    const translateY = Math.abs(distance) * 80;
    const translateX = distance * 600;
    // console.log(index);


    // if (index === 15) {
    //   console.log(fruits.map((fruit, index) => (
    //     {
    //       src: fruit.src,
    //       alt: fruit.alt,
    //       text: fruit.text,
    //     }
    //   )));
    // }


    return {
      transform: `
        scale(${scale})
        translateY(${translateY}px)
        translateX(${translateX}px)
        rotate(${rotation}deg)
      `,
    };
  };

  return (
    <div
      ref={sliderRef}
      className={styles.sliderContainer}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleTouchEnd}
      onMouseLeave={handleMouseUp} // To handle when the mouse leaves the slider
    >
      <div className={styles.sliderInner}>
        {fruits.map(({ id, src, title, alt }, index) => (
          <div
            className={styles.fruitCard}
            style={getTransformStyle(index)}
            key={id}
          >
            <img src={src} alt={alt} className={styles.fruitImage} />
            <button
              className={styles.buttonFeatureWorks}
              onClick={() => handleButtonClick(id)}

            >
              {title}
            </button>
          </div>
        ))}
      </div>
      {/* Popup */}
      {selectedWork && (
        <div className={styles.popup} data-lenis-prevent>
          <div className={styles.popupContent}>
            <div className={styles.workInternalHeader}>
              <button
                className={styles.closeButton}
                onClick={handleClosePopup}
              >
                <span className={styles.closeIcon}>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.9499 18.1374C17.2782 18.4656 17.8104 18.4656 18.1386 18.1374C18.4668 17.8092 18.4668 17.2771 18.1386 16.9488L10.4375 9.24807L17.8664 1.81953C18.1946 1.4913 18.1946 0.959153 17.8664 0.630932C17.5381 0.302711 17.006 0.30271 16.6777 0.630931L9.24881 8.05948L2.09182 0.902817C1.76358 0.574596 1.2314 0.574596 0.903168 0.902817C0.57493 1.23104 0.57493 1.76319 0.903166 2.09141L8.06017 9.24807L0.630941 16.6769C0.302705 17.0052 0.302705 17.5373 0.630941 17.8655C0.959178 18.1938 1.49135 18.1938 1.81959 17.8655L9.24882 10.4367L16.9499 18.1374Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>


            <div className={styles.workInternalMain}>
              <div className={styles.workHeadContent}>
                <h2 className={styles.workTitle}>{selectedWork.title}</h2>
                <div className={styles.workDescription}>
                  <p>{selectedWork.description}</p>
                </div>
              </div>

              {/* Conditional Rendering for Popup Grid */}
              {
                selectedWork.images.map((image, index) => {
                  if (image.type === "square") {
                    return (
                      <div key={index} className={styles.popupSingleImage}>
                        {image.mediaType === "video" ? (
                          <video
                            autoPlay
                            playsInline
                            webkit-playsinline
                            muted
                            loop
                            controls={false}
                            src={image.src}
                            alt={`Video ${index + 1}`}
                            className={styles.singleVideo}
                          />
                        ) : (
                          <img
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            className={styles.singleImage}
                          />
                        )}
                      </div>
                    );
                  } else if (image.type === "double") {
                    return (
                      <div key={index} className={styles.popupTwoImages}>
                        {image.src.map((subImage, subIndex) =>
                          subImage.mediaType === "video" ? (
                            <video
                              key={subIndex}
                              autoPlay
                              playsInline
                              webkit-playsinline
                              muted
                              loop
                              controls={false}
                              src={subImage.src}
                              alt={`Video ${index + 1}-${subIndex + 1}`}
                              className={styles.twoVideo}
                            />
                          ) : (
                            <img
                              key={subIndex}
                              src={subImage.src}
                              alt={`Image ${index + 1}-${subIndex + 1}`}
                              className={styles.twoImage}
                            />
                          )
                        )}
                      </div>
                    );
                  } else if (image.type === "landscape") {
                    return (
                      <div key={index} className={styles.popupLandscape}>
                        {image.mediaType === "video" ? (
                          <video
                            autoPlay
                            playsInline
                            webkit-playsinline
                            muted
                            loop
                            controls={false}
                            src={image.src}
                            alt={`Video ${index + 1}`}
                            className={styles.landscapeVideo}
                          />
                        ) : (
                          <img
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            className={styles.landscapeImage}
                          />
                        )}
                      </div>
                    );
                  } else {
                    // Default case if type is not recognized
                    return (
                      <div key={index} className={styles.popupGridItem}>
                        {image.mediaType === "video" ? (
                          <video
                            autoPlay
                            playsInline
                            webkit-playsinline
                            muted
                            loop
                            controls={false}
                            src={image.src}
                            alt={`Video ${index + 1}`}
                            className={styles.defaultVideo}
                          />
                        ) : (
                          <img
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            className={styles.defaultImage}
                          />
                        )}
                      </div>
                    );
                  }
                })
              }



            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default FruitSlider;
