import { motion } from "motion/react";
import { Play, Pause, X, Disc3, ChevronLeft } from "lucide-react";
import { Album, Track } from "../data/albums";

interface AlbumDetailProps {
  album: Album;
  onClose: () => void;
  onPlayTrack: (track: Track) => void;
  currentTrack: Track | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export function AlbumDetail({ album, onClose, onPlayTrack, currentTrack, isPlaying, onTogglePlay }: AlbumDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden bg-[#0a0a0c]"
    >
      {/* Immersive Blurred Album Cover Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 1.2 }}
          src={album.coverImage}
          className="absolute inset-0 w-full h-full object-cover filter blur-[120px]"
        />
        <div className="absolute inset-0 bg-[#0a0a0c]/40" />
        
        {/* Soft atmospheric gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0c]/20 to-[#0a0a0c]/80" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
      </div>

      {/* Floating Top Nav (Back Button) */}
      <div className="absolute top-12 left-12 z-[70] flex items-center gap-4">
        <button 
          onClick={onClose}
          className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/10 backdrop-blur-3xl shadow-xl group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <div className="text-white/40 text-xs font-mono tracking-widest uppercase hidden md:block">
          专辑详情 / {album.title}
        </div>
      </div>

      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center md:items-start justify-center gap-8 lg:gap-16 overflow-y-auto custom-scrollbar">
        
        {/* Left Column: Album Cover */}
        <div className="w-full md:w-[40%] flex flex-col items-center md:items-end justify-center md:sticky md:top-0 h-auto md:h-full">
          <motion.div 
            layoutId={`album-cover-${album.id}`}
            className="group relative w-full max-w-[240px] lg:max-w-[300px] aspect-square rounded-[48px] p-2 bg-white/10 backdrop-blur-[80px] border-4 border-white/40 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            <div className="w-full h-full rounded-[40px] overflow-hidden relative">
              <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10" />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Information & Tracks */}
        <div className="flex-1 w-full max-w-2xl flex flex-col gap-10 py-4 md:py-12">
          {/* Header Identity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-widest uppercase mb-3 drop-shadow-xl leading-tight">
              {album.title}
            </h2>
            <div className="flex items-center gap-3 text-white/40 font-mono text-[10px] md:text-xs tracking-widest">
              <span>{album.releaseYear} 版本</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>陈卓璇 专辑记录</span>
            </div>
          </motion.div>

          {/* Description Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-[64px] rounded-[32px] border border-white/20 p-8 shadow-xl"
          >
            <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-4">专辑简介</h4>
            <p className="text-base font-light text-white/70 leading-relaxed italic">
              {album.description}
            </p>
          </motion.div>

          {/* Tracklist Module */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-[64px] rounded-[40px] border border-white/20 p-8 shadow-2xl flex flex-col"
          >
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h3 className="text-2xl font-light text-white tracking-tight leading-none mb-2">曲目列表</h3>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{album.tracks.length} 首曲目</p>
              </div>
              <Disc3 className={`w-8 h-8 text-white/20 ${isPlaying ? 'animate-spin-slow' : ''}`} />
            </div>

            <div className="flex flex-col gap-1">
              {album.tracks.map((track, trackIndex) => {
                const isCurrent = currentTrack?.id === track.id && album.tracks.some(t => t.id === track.id);
                
                return (
                  <div 
                    key={track.id}
                    onClick={() => onPlayTrack(track)}
                    className={`group flex items-center gap-4 py-4 px-5 rounded-2xl transition-all border ${
                      isCurrent 
                      ? 'bg-white/15 border-white/30 shadow-lg scale-[1.02]' 
                      : 'bg-transparent border-transparent hover:bg-white/5'
                    } cursor-pointer`}
                  >
                    <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                      <span className={`text-xs font-mono transition-opacity ${isCurrent ? 'opacity-0' : 'opacity-40 group-hover:opacity-0'}`}>
                        {String(trackIndex + 1).padStart(2, '0')}
                      </span>
                      <Play className={`absolute inset-0 m-auto w-4 h-4 text-white fill-current opacity-0 group-hover:opacity-100 transition-opacity ${isCurrent ? 'hidden' : ''}`} />
                      {isCurrent && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex gap-0.5 items-end h-3">
                            {[1, 2, 3].map(i => (
                              <motion.div 
                                key={i}
                                animate={isPlaying ? { height: [4, 12, 6, 10, 4] } : { height: 4 }}
                                transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.1 }}
                                className="w-[3px] bg-white rounded-full"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm tracking-wide transition-colors ${isCurrent ? 'text-white font-medium' : 'text-white/70 group-hover:text-white'}`}>
                        {track.title}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">{track.duration}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Action Module & Metadata */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-[64px] rounded-[32px] border border-white/20 p-8 shadow-xl"
          >
            <button 
              onClick={onTogglePlay}
              className="w-full md:w-auto px-10 py-5 bg-white text-[#0a0a0c] rounded-2xl font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-neutral-200 transition-colors shadow-2xl hover:scale-[0.98] active:scale-95 whitespace-nowrap"
            >
              {isPlaying && currentTrack && album.tracks.some(t => t.id === currentTrack.id) ? (
                <><Pause className="w-4 h-4 fill-current" /> 暂停播放</>
              ) : (
                <><Play className="w-4 h-4 fill-current ml-1" /> 开启旅程</>
              )}
            </button>
            
            <div className="flex-1 flex justify-between gap-6">
              <div className="text-left">
                <p className="text-[10px] font-mono text-white/20 mb-1 tracking-widest uppercase">制作</p>
                <p className="text-[11px] text-white/60 font-medium">陈卓璇团队</p>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-mono text-white/20 mb-1 tracking-widest uppercase">格式</p>
                <p className="text-[11px] text-white/60 font-medium">立体声 / HD</p>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-mono text-white/20 mb-1 tracking-widest uppercase">版权</p>
                <p className="text-[11px] text-white/60 font-medium">独家发行</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
