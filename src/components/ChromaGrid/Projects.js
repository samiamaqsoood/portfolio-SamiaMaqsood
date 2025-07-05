import React from 'react'
import ChromaGrid from './ChromaGrid'
import { useRef } from 'react';

// Swiper React components
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
   {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  }
];


export default function Projects() {
  // const swiperRef = useRef(null);
  return (
<ChromaGrid />
// <div style={{ height: '600px', position: 'relative' }}>
//   <ChromaGrid 
//     items={""}
//     radius={300}
//     damping={0.45}
//     fadeOut={0.6}
//     ease="power3.out"
//   />
//  </div>

  )
} 



// const Projects = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       loop={true}                // Enables infinite loop
//       spaceBetween={20}
//        centeredSlides={true}
//       slidesPerView={'auto'}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//     >
//       <SwiperSlide>
//         <div className="slide">
//           <div style={{ height: '600px', position: 'relative' }}>
//   <ChromaGrid 
//     items={items}
//     radius={300}
//     damping={0.45}
//     fadeOut={0.6}
//     ease="power3.out"
//   />
//  </div>
//           </div>
//         </SwiperSlide>
//       <SwiperSlide><div className="slide"><div style={{ height: '600px', position: 'relative' }}>
//   <ChromaGrid 
//     items={items}
//     radius={300}
//     damping={0.45}
//     fadeOut={0.6}
//     ease="power3.out"
//   />
//  </div></div></SwiperSlide>
//       <SwiperSlide>
//         <div className="slide">
//         <div style={{ height: '600px', position: 'relative' }}>
//   <ChromaGrid 
//     items={items}
//     radius={300}
//     damping={0.45}
//     fadeOut={0.6}
//     ease="power3.out"
//   />
//  </div>
//  </div></SwiperSlide>
//       {/* Add more SwiperSlides as needed */}
//     </Swiper>
//   );
// };

// export default Projects;

