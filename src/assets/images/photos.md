这个文件用来表达图像文件与页面使用的对应。

## cover
1. EE.jpg、OO.jpg、YY.jpg - Hero全屏轮播（每5秒随机播放）

## home screen
1. 首页界面全屏底部照片展示： EE.jpg OO.jpg YY.jpg，并且每5秒随机图片滚动播放

## 实现说明
- 主轮播：Hero组件全屏显示EE.jpg、OO.jpg、YY.jpg
- 播放频率：每5秒随机显示一张图片
- 底部展示区：在Hero底部显示三张图片的缩略图轮播，点击可切换主图
- 已移除PhotosSection中的三张小图（regenerated_image）

