'use client';

 
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface FadeCarouselProps {
  images: { src: string; title?: string; desc?: string }[];
  height?: string;
}

export default function FadeCarousel({
  images,
  height = "h-[85vh] md:h-[100vh]",
}: FadeCarouselProps) {
  return (
    <div className="relative w-full mx-auto select-none">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination, Parallax]}
        effect="cube"
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="rounded-none"
      >
        {images.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className={`relative w-full ${height} bg-cover bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(${item.src})`,
              }}
            >
              {/* Layer gradient modern */}
              <div className="absolute inset-0 bg-linear-to-b from-[#171717] via-[#171717]/20 to-black/70" />

              {/* Zoom animation for image */}
              <div
                className="absolute inset-0"
                style={{ animation: "zoomFade 8s ease-in-out infinite" }}
              />

              {/* Text content if provided */}
              {(item.title || item.desc) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h2 className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
                    {item.title}
                  </h2>
                  {item.desc && (
                    <p className="mt-3 text-white/90 md:text-xl max-w-3xl backdrop-blur-sm bg-white/10 px-4 py-2 rounded-xl border border-white/20">
                      {item.desc}
                    </p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom nav button style */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #fff;
          padding: 24px;
          transition: 0.2s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          scale: 1.15;
          opacity: 0.9;
        }
        .swiper-pagination-bullet {
          background: #ffffffb4;
          width: 10px;
          height: 10px;
          transition: 0.2s;
        }
        .swiper-pagination-bullet-active {
          width: 22px;
          border-radius: 8px;
          background: #ffcb04; /* pakai warna palette kamu */
        }
        @keyframes zoomFade {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
