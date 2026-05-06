import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import eeImage from "../assets/images/EE.jpg";
import ooImage from "../assets/images/OO.jpg";
import yyImage from "../assets/images/YY.jpg";

const CAROUSEL_ITEMS = [
  {
    id: 1,
    src: eeImage,
  }
];

// Home screen bottom photos
const HOME_PHOTOS = [
  {
    id: 1,
    src: eeImage,
    alt: "Home Photo 1"
  },
  {
    id: 2,
    src: ooImage,
    alt: "Home Photo 2"
  },
  {
    id: 3,
    src: yyImage,
    alt: "Home Photo 3"
  }
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 10000); // 10秒更换一次
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-ocean-900">
      
      {/* Main Image Slider Container */}
      <div className="absolute inset-0 z-10 w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={CAROUSEL_ITEMS[currentIndex].src}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Chen Zhuoxuan Background"
          />
        </AnimatePresence>
      </div>

      {/* Dim overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-black/30 pointer-events-none"></div>

      {/* Styled Right Overlay (like reference) */}
      <div className="absolute top-0 right-1/4 bottom-0 w-1/4 z-10 bg-purple-900/40 mix-blend-overlay pointer-events-none skew-x-[-10deg] scale-150 origin-bottom"></div>

      {/* Center Text Layout like reference */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
        <div className="text-center text-white">
          <h2 className="text-sm md:text-base lg:text-lg font-light tracking-[0.2em] uppercase mb-1 drop-shadow-md">
            CHEN ZHUOXUAN
          </h2>
          <div className="text-xl md:text-2xl font-light tracking-[0.4em] mb-4 md:mb-6 drop-shadow-md">
            陈卓璇
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6 md:mb-8 drop-shadow-xl uppercase">
            中国内地女歌手、演员
          </h1>
          <div className="flex justify-center pointer-events-auto mt-2">
            <button className="text-[#336799] px-8 py-2.5 rounded-full text-[14px] font-bold tracking-widest hover:bg-neutral-100 transition-colors shadow-xl" style={{ backgroundColor: "#ffffff" }}>
              点击了解
            </button>
          </div>
        </div>
      </div>

      {/* Home Screen Bottom Photos */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/60 to-transparent h-32 flex items-center justify-center gap-4 px-8">
        <div className="flex gap-4 max-w-7xl w-full items-center justify-center">
          {HOME_PHOTOS.map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-lg cursor-pointer flex-shrink-0"
            >
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

