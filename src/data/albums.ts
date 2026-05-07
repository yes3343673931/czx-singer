import er1 from "../assets/images/er1.jpg";
import yw1 from "../assets/images/yw1.jpg";
import wrd1 from "../assets/images/wrd1.jpg";
import hx1 from "../assets/images/hx1.jpg";
import jyd1 from "../assets/images/jyd1.jpg";
import hyt1 from "../assets/images/hyt1.jpg";
import kk from "../assets/images/kk.jpg";
import biue from "../assets/images/biue.jpg";
import zyf from "../assets/images/zyf.jpg";
import hdxt from "../assets/images/hdxt.jpg";
import llk from "../assets/images/llk.jpg";

export interface Track {
  id: string;
  title: string;
  duration: string;
}

export interface Album {
  id: string;
  title: string;
  releaseYear: string;
  coverImage: string;
  description: string;
  tracks: Track[];
}

export const ALBUMS: Album[] = [
  {
    id: "a1",
    title: "而已",
    releaseYear: "2023",
    coverImage: er1,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t1_1", title: "而已", duration: "03:45" },
    ]
  },
  {
    id: "a2",
    title: "愿忘",
    releaseYear: "2023",
    coverImage: yw1,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t2_1", title: "愿忘", duration: "04:05" },
    ]
  },
  {
    id: "a3",
    title: "无人岛",
    releaseYear: "2023",
    coverImage: wrd1,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t3_1", title: "无人岛", duration: "03:50" },
    ]
  },
  {
    id: "a4",
    title: "化雪",
    releaseYear: "2023",
    coverImage: hx1,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t4_1", title: "化雪", duration: "04:15" },
    ]
  },
  {
    id: "a5",
    title: "记忆点",
    releaseYear: "2023",
    coverImage: jyd1,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t5_1", title: "记忆点", duration: "03:30" },
    ]
  },
  {
    id: "a6",
    title: "海与天之间",
    releaseYear: "2023",
    coverImage: hyt1,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t6_1", title: "海与天之间", duration: "04:00" },
    ]
  },
  {
    id: "a7",
    title: "转身走向你",
    releaseYear: "2023",
    coverImage: kk,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t7_1", title: "转身走向你", duration: "03:48" },
    ]
  },
  {
    id: "a8",
    title: "深海之息(Mareasía)",
    releaseYear: "2023",
    coverImage: biue,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t8_1", title: "深海之息(Mareasía)", duration: "04:22" },
    ]
  },
  {
    id: "a9",
    title: "昨夜风今宵月",
    releaseYear: "2023",
    coverImage: zyf,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t9_1", title: "昨夜风今宵月", duration: "03:55" },
    ]
  },
  {
    id: "a10",
    title: "回到夏天",
    releaseYear: "2023",
    coverImage: hdxt,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t10_1", title: "回到夏天", duration: "03:42" },
    ]
  },
  {
    id: "a11",
    title: "That's Right",
    releaseYear: "2023",
    coverImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t11_1", title: "That's Right", duration: "03:15" },
    ]
  },
  {
    id: "a12",
    title: "听说你",
    releaseYear: "2023",
    coverImage: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t12_1", title: "听说你", duration: "04:02" },
    ]
  },
  {
    id: "a13",
    title: "慢慢",
    releaseYear: "2023",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t13_1", title: "慢慢", duration: "03:45" },
    ]
  },
  {
    id: "a14",
    title: "我怀念的那个夏天",
    releaseYear: "2023",
    coverImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t14_1", title: "我怀念的那个夏天", duration: "04:10" },
    ]
  },
  {
    id: "a15",
    title: "感应",
    releaseYear: "2023",
    coverImage: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&q=80",
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t15_1", title: "感应", duration: "03:33" },
    ]
  },
  {
    id: "a16",
    title: "流沙",
    releaseYear: "2023",
    coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&q=80",
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t16_1", title: "流沙", duration: "04:20" },
    ]
  },
  {
    id: "a17",
    title: "莫斯科没有眼泪",
    releaseYear: "2023",
    coverImage: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=800&q=80",
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t17_1", title: "莫斯科没有眼泪", duration: "04:08" },
    ]
  },
  {
    id: "a18",
    title: "不降落飞行指南",
    releaseYear: "2024",
    coverImage: "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?w=800&q=80",
    description: "Chen Zhuoxuan's first personal physical album.",
    tracks: [
      { id: "t18_1", title: "不降落飞行指南", duration: "03:55" },
    ]
  }
];
