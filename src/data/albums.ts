import photo from "../assets/images/regenerated_image_1777891429113.jpg";
import album2 from "../assets/images/regenerated_image_1777892258192.jpg";
import album3 from "../assets/images/regenerated_image_1777892259010.jpg";
import album4 from "../assets/images/regenerated_image_1777892259600.jpg";
import album6 from "../assets/images/regenerated_image_1777892254380.jpg";
import album7 from "../assets/images/regenerated_image_1777892260263.jpg";
import album8 from "../assets/images/regenerated_image_1777892261105.jpg";
import album9 from "../assets/images/regenerated_image_1777890578666.jpg";
import album10 from "../assets/images/regenerated_image_1777890579840.jpg";
import album11 from "../assets/images/regenerated_image_1777890580696.jpg";
import album12 from "../assets/images/regenerated_image_1777891066030.jpg";
import album13 from "../assets/images/regenerated_image_1777891067701.jpg";
import album14 from "../assets/images/regenerated_image_1777891069162.jpg";
import album15 from "../assets/images/regenerated_image_1777892255827.jpg";
import album16 from "../assets/images/regenerated_image_1777892257166.jpg";
import album17 from "../assets/images/regenerated_image_1777902143513.jpg";
import album18 from "../assets/images/regenerated_image_1777902294632.jpg";
import albumEE from "../assets/images/EE.jpg";
import albumOO from "../assets/images/OO.jpg";
import albumYY from "../assets/images/YY.jpg";

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
    coverImage: albumEE,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t1_1", title: "而已", duration: "03:45" },
    ]
  },
  {
    id: "a2",
    title: "愿忘",
    releaseYear: "2023",
    coverImage: album2,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t2_1", title: "愿忘", duration: "04:05" },
    ]
  },
  {
    id: "a3",
    title: "无人岛",
    releaseYear: "2023",
    coverImage: album3,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t3_1", title: "无人岛", duration: "03:50" },
    ]
  },
  {
    id: "a4",
    title: "化雪",
    releaseYear: "2023",
    coverImage: album4,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t4_1", title: "化雪", duration: "04:15" },
    ]
  },
  {
    id: "a5",
    title: "记忆点",
    releaseYear: "2023",
    coverImage: photo,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t5_1", title: "记忆点", duration: "03:30" },
    ]
  },
  {
    id: "a6",
    title: "海与天之间",
    releaseYear: "2023",
    coverImage: album6,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t6_1", title: "海与天之间", duration: "04:00" },
    ]
  },
  {
    id: "a7",
    title: "转身走向你",
    releaseYear: "2023",
    coverImage: album7,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t7_1", title: "转身走向你", duration: "03:48" },
    ]
  },
  {
    id: "a8",
    title: "深海之息(Mareasía)",
    releaseYear: "2023",
    coverImage: album8,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t8_1", title: "深海之息(Mareasía)", duration: "04:22" },
    ]
  },
  {
    id: "a9",
    title: "昨夜风今宵月",
    releaseYear: "2023",
    coverImage: album9,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t9_1", title: "昨夜风今宵月", duration: "03:55" },
    ]
  },
  {
    id: "a10",
    title: "回到夏天",
    releaseYear: "2023",
    coverImage: album10,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t10_1", title: "回到夏天", duration: "03:42" },
    ]
  },
  {
    id: "a11",
    title: "That's Right",
    releaseYear: "2023",
    coverImage: album11,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t11_1", title: "That's Right", duration: "03:15" },
    ]
  },
  {
    id: "a12",
    title: "听说你",
    releaseYear: "2023",
    coverImage: album12,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t12_1", title: "听说你", duration: "04:02" },
    ]
  },
  {
    id: "a13",
    title: "慢慢",
    releaseYear: "2023",
    coverImage: album13,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t13_1", title: "慢慢", duration: "03:45" },
    ]
  },
  {
    id: "a14",
    title: "我怀念的那个夏天",
    releaseYear: "2023",
    coverImage: album14,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t14_1", title: "我怀念的那个夏天", duration: "04:10" },
    ]
  },
  {
    id: "a15",
    title: "感应",
    releaseYear: "2023",
    coverImage: album15,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t15_1", title: "感应", duration: "03:33" },
    ]
  },
  {
    id: "a16",
    title: "流沙",
    releaseYear: "2023",
    coverImage: album16,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t16_1", title: "流沙", duration: "04:20" },
    ]
  },
  {
    id: "a17",
    title: "莫斯科没有眼泪",
    releaseYear: "2023",
    coverImage: album17,
    description: "Chen Zhuoxuan's release.",
    tracks: [
      { id: "t17_1", title: "莫斯科没有眼泪", duration: "04:08" },
    ]
  },
  {
    id: "a18",
    title: "不降落飞行指南",
    releaseYear: "2024",
    coverImage: album18,
    description: "Chen Zhuoxuan's first personal physical album.",
    tracks: [
      { id: "t18_1", title: "不降落飞行指南", duration: "03:55" },
    ]
  }
];
