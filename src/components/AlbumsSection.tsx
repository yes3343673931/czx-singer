import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from "motion/react";
import { Play, Pause, Disc3, X, FastForward, Rewind } from "lucide-react";
import { ALBUMS, Album, Track } from "../data/albums";
import { WhaleIcon } from "./WhaleIcon";
import { AlbumDetail } from "./AlbumDetail";

interface StackItemProps {
  album: Album;
  i: number;
  progressValue: any;
  onPlay: (album: Album) => void;
}

const StackItem: React.FC<StackItemProps> = ({ 
  album, 
  i, 
  progressValue, 
  onPlay 
}) => {
  const diff = useTransform(progressValue, (p: number) => i - p);
  
  // Cascading positioning
  const x = useTransform(diff, (d: number) => d * 220);
  const y = useTransform(diff, (d: number) => d * -100);
  const scale = useTransform(diff, (d: number) => Math.max(0, 1 - Math.max(0, d) * 0.1));
  
  const rotateY = useTransform(diff, (d: number) => {
    if (d <= 0) return d * 25;
    return Math.min(45, d * 20);
  });
  const rotateX = useTransform(diff, (d: number) => {
    if (d <= 0) return 0;
    return Math.max(-10, d * -3);
  });
  
  // Fade out fast when moved past (diff < 0), fade slowly when behind (diff > 0)
  const opacity = useTransform(diff, (d: number) => {
    if (d < -0.5) return 0;
    if (d < 0) return 1 + d * 2;
    if (d <= 5) return 1 - (d * 0.15);
    return 0;
  });
  const zIndex = ALBUMS.length - i;
  
  // Fog overlay increases as cards go deeper into the background
  const fogOpacity = useTransform(diff, (d: number) => {
    if (d <= 0) return 0;
    return Math.min(0.9, d * 0.3);
  });

  const textOpacity = useTransform(diff, (d: number) => {
    if (d < -0.5) return 0;
    if (d > 0.5) return 0;
    return 1 - Math.abs(d) * 2;
  });

  return (
    <motion.div
      style={{ x, y, scale, rotateY, rotateX, opacity, zIndex }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center"
    >
      <motion.div 
        layoutId={`album-cover-${album.id}`}
        onClick={() => onPlay(album)}
        className="group relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 cursor-pointer rounded-[40px] p-2 bg-white/5 backdrop-blur-2xl border border-white/40 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_20px_100px_rgba(255,255,255,0.4)] hover:-translate-y-2 overflow-hidden"
      >
        <div className="w-full h-full rounded-[32px] overflow-hidden relative">
          <img 
              src={album.coverImage} 
              alt={album.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          
          {/* Subtle inner glass sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/5 pointer-events-none" />
        </div>
        
        {/* Play Icon at bottom right */}
        <div className="absolute bottom-6 right-6 p-3 bg-white/20 backdrop-blur-3xl rounded-full border border-white/40 text-neutral-800 shadow-xl z-20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/60">
          <Play className="w-5 h-5 fill-current translate-x-0.5" />
        </div>
      </motion.div>
      
      {/* Title & Date under active album */}
      <motion.div style={{ opacity: textOpacity }} className="absolute -bottom-16 left-0 right-0 text-center pointer-events-none">
        <h3 className="text-lg md:text-2xl font-medium tracking-widest text-[#336799] drop-shadow-md">{album.title}</h3>
        <p className="text-xs md:text-sm text-ocean-800/60 tracking-widest mt-1">{album.releaseYear}</p>
      </motion.div>
    </motion.div>
  );
}

export function AlbumsSection() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewingAlbum, setViewingAlbum] = useState<Album | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  
  const progressValue = useMotionValue(0);
  const smoothProgress = useSpring(progressValue, { stiffness: 60, damping: 20, restDelta: 0.001 });
  const internalProgressValue = useTransform(smoothProgress, p => p);

  // Handle internal wheel for album stack
  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // Don't intercept if detail is open
      if (viewingAlbum) return;

      const current = progressValue.get();
      // Adjust sensitivity: higher value means faster scroll
      const delta = e.deltaY * 0.005; 
      const next = Math.max(0, Math.min(ALBUMS.length - 1, current + delta));

      // Capture scroll if we are within boundaries or moving into them
      if ((delta > 0 && current < ALBUMS.length - 1) || (delta < 0 && current > 0)) {
        e.preventDefault();
        progressValue.set(next);
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [viewingAlbum, progressValue]);

  // Lock scroll on body when AlbumDetail is open
  useEffect(() => {
    if (viewingAlbum) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [viewingAlbum]);

  const handlePlayAlbum = (album: Album) => {
    setSelectedAlbum(album);
    setCurrentTrack(album.tracks[0]);
    setIsPlaying(true);
    setViewingAlbum(album);
  };

  const handlePlayTrack = (track: Track) => {
    if (viewingAlbum) {
      setSelectedAlbum(viewingAlbum);
    }
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const handlePlayAll = () => {
    if (ALBUMS.length > 0 && ALBUMS[0].tracks.length > 0) {
      setSelectedAlbum(ALBUMS[0]);
      setCurrentTrack(ALBUMS[0].tracks[0]);
      setIsPlaying(true);
    }
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section ref={containerRef} className="relative w-full bg-ocean-50">
      
      {/* Container for the 3D stack - Fixed height, interaction trapped when hovered */}
      <div className="relative w-full h-screen overflow-hidden">
        
        {/* Misty Atmospheric Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-ocean-100 via-white to-ocean-50 z-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-ocean-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full filter blur-[120px] opacity-40"></div>
        </div>

        {/* Section Title */}
        <div className="absolute top-12 md:top-24 left-8 md:left-24 z-20 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-800 tracking-wider uppercase mb-2">
            单曲
          </h2>
          <p className="text-sm md:text-base font-light tracking-widest uppercase text-ocean-800/60">
            Scroll to explore / 滑动探索
          </p>
        </div>

        {/* Play all button */}
        <div className="absolute top-12 md:top-24 right-8 md:right-24 z-20">
          <button 
            onClick={handlePlayAll}
            className="flex items-center gap-2 px-6 py-3 bg-white/50 hover:bg-white/80 backdrop-blur-md text-ocean-900 rounded-full transition-colors font-medium text-sm shadow-sm border border-ocean-900/5"
          >
            <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
            <span>Play All Songs</span>
          </button>
        </div>

        {/* 3D Stack Area - Captures Wheel only in this zone */}
        <div 
          ref={stackRef}
          className="absolute inset-0 z-10 cursor-ns-resize" 
          style={{ perspective: "1500px" }}
        >
          {ALBUMS.map((album, index) => (
            <StackItem 
                key={album.id} 
                album={album} 
                i={index} 
                progressValue={internalProgressValue} 
                onPlay={handlePlayAlbum}
            />
          ))}
        </div>
      </div>

      {/* Mini Player Modal/Bottom Bar */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ y: 100, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            exit={{ y: 100, opacity: 0, x: "-50%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed bottom-6 left-1/2 w-[98%] max-w-[1600px] z-[80] min-h-[4rem] py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_10px_50px_rgba(0,0,0,0.4)] bg-ocean-900/90 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-full`}
          >
            {/* Spinning disc indicator */}
            <div className="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0 relative">
              <div className="relative w-12 h-12 flex-shrink-0 rounded-full bg-ocean-800 overflow-hidden shadow-lg border border-white/10">
                <img src={selectedAlbum.coverImage} className={`w-full h-full object-cover ${isPlaying ? 'animate-spin-slow' : ''}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-ocean-900 rounded-full border border-white/20"></div>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  正在播放: {currentTrack?.title || selectedAlbum.title}
                </p>
                <p className="text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
                  {selectedAlbum.title} • {selectedAlbum.releaseYear}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full md:w-auto gap-4 lg:gap-8 flex-1 md:justify-center">
              <div className="flex items-center gap-4 md:gap-6">
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    const currentIndex = selectedAlbum.tracks.findIndex(t => t.id === currentTrack?.id);
                    if (currentIndex > 0) {
                      setCurrentTrack(selectedAlbum.tracks[currentIndex - 1]);
                      setIsPlaying(true);
                    }
                  }}
                  className="text-white/50 hover:text-white transition-opacity"
                  aria-label="Previous track"
                >
                  <Rewind className="w-5 h-5" fill="currentColor" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-ocean-100 text-ocean-900 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" /> : <Play className="w-4 h-4 md:w-5 md:h-5 ml-1" fill="currentColor" />}
                </button>
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    const currentIndex = selectedAlbum.tracks.findIndex(t => t.id === currentTrack?.id);
                    if (currentIndex < selectedAlbum.tracks.length - 1) {
                      setCurrentTrack(selectedAlbum.tracks[currentIndex + 1]);
                      setIsPlaying(true);
                    }
                  }}
                  className="text-white/50 hover:text-white transition-opacity"
                  aria-label="Next track"
                >
                  <FastForward className="w-5 h-5" fill="currentColor" />
                </button>
              </div>

              {/* Progress bar */}
              <div className="hidden md:flex items-center gap-3 w-48 lg:w-64">
                <span className="text-[10px] tracking-wider text-white/50 font-mono">0:00</span>
                <div className="h-1 bg-white/10 rounded-full flex-1 overflow-hidden relative">
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: isPlaying ? "100%" : "30%" }}
                    transition={{ duration: isPlaying ? parseInt((currentTrack?.duration || "0:00").replace(':', '')) : 0, ease: "linear" }}
                  />
                </div>
                <span className="text-[10px] tracking-wider text-white/50 font-mono">{currentTrack?.duration || "0:00"}</span>
              </div>
            </div>

            <div className="absolute top-2 right-4 md:static md:w-auto flex items-center justify-end">
              <button 
                onClick={() => { setSelectedAlbum(null); setIsPlaying(false); }}
                className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-white/80 transition-colors bg-white/5 rounded-full hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Album Detail Modal */}
      <AnimatePresence>
        {viewingAlbum && (
          <AlbumDetail 
            album={viewingAlbum} 
            onClose={() => setViewingAlbum(null)} 
            onPlayTrack={handlePlayTrack}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            onTogglePlay={togglePlay}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
