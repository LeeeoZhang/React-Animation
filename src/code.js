let code = `/*
* Inspired by http://strml.net/
* Hello, this is Leo Cheung.
* 这个是一个基于React.js的动画，灵感来自于上面的链接。
* 现在就来演示纯CSS和HTML画一个皮卡丘桌面/主屏
* 用最少的标签，做最多的事情！
*/
/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 换个背景色，hack一点的 */
html {
  color: #fff; background: #000;
}
/* 搞个编辑器写代码 */
.codeEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 没代码高亮怎么写代码啊？所以下面是代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }
/* 炫酷点，来个3D编辑器 */
html{
  perspective: 1000px;
}
.codeEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
  transform: rotateY(10deg) translateZ(-100px) ;
}
/* 接下来我给准备一个画布*/
.showEdit {
    position: fixed; right: 0; top: 0;
    width: 48vw; height: 90vh;
    border: 1px solid #FFE600;
    background: #FFE600;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em;  margin: .5em;
    overflow: auto;
    border-radius: 5px;
}
/*好，我要开始画画了*/ 
/*先让我们看看HTML*/
/*
<div id="container">
    <div class="nose"></div>
    <div class="eye eye-left"></div>
    <div class="eye eye-right"></div>
    <div class="upperlips">
        <div class="upperlips-left"></div>
        <div class="upperlips-right"></div>
    </div>
    <div class="lowerlips-wrap">
        <div class="lowerlips"></div>
    </div>
    <div class="face face-left"></div>
    <div class="face face-right"></div>
</div>
*/

/* 下面来写css */
/* 限定一个范围，皮卡丘的脸就在这 */
.showEdit > #container {
    width: 40vw;
    height: 30vh;
    position: relative;
}
/* 先画鼻子吧 */
.nose {
    position: absolute;
    left: 50%;
    top: 98px;
    transform: translateX(-50%);
    border: 15px solid transparent;
    border-top: 15px solid black;
    border-radius: 50%;
    animation: 0.1s noseAnimate 0s infinite alternate;
}
/* 画眼睛 */
.eye {
    width: 60px;
    height: 60px;
    border: 2px solid black;
    position: absolute;
    border-radius: 50%;
    background: #2E2E2E;
}
/* 左眼 */
.eye-left {
    right: 50%;
    margin-right: 100px;
    top: 65px;
}
/* 右眼 */
.eye-right {
    left: 50%;
    margin-left: 100px;
    top: 65px;
}
/* 左眼瞳孔 */
.eye-left::before {
    width: 25px;
    height: 25px;
    content: '';
    background: #fff;
    border: 2px solid #2E2E2E;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 5px;
}
/* 右眼瞳孔 */
.eye-right::before {
    width: 25px;
    height: 25px;
    content: '';
    background: #fff;
    border: 2px solid #2E2E2E;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 5px;
}
/* 上嘴唇有左右两片，搞一个容器包裹住 */
.upperlips {
    position: absolute;
    width: 100%;
    top:120px;
    display: flex;
    justify-content: center;
}
/* 左边嘴唇 */
.upperlips-left {
    width: 80px;
    height: 25px;
    border: 3px solid black;
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 80px 50px;
    transform: rotate(-21deg);
    background: #FFE600;
    z-index: 1;
}
/* 右边嘴唇 */
.upperlips-right {
    width: 80px;
    height: 25px;
    border: 3px solid black;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 80px 50px;
    transform: rotate(21deg);
    background: #FFE600;
    z-index: 1;
}

/* 下嘴唇容器 */
.lowerlips-wrap {
    width: 150px;
    height: 200px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 130px;
    overflow: hidden;
}
/* 下嘴唇 */
.lowerlips {
    width: 200px;
    height: 1500px;
    border: 3px solid black;
    border-bottom-left-radius: 150px 1100px;
    border-bottom-right-radius: 150px 1100px;
    border-top-left-radius: 150px 170px;
    border-top-right-radius: 150px 170px;
    background: #FF485F;
    box-shadow: inset 0 1315px 0 20px #9B000A;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
}
/* 两个脸蛋容器 */
.face {
    position: absolute;
    width: 90px;
    height: 90px;
    border: 3px solid black;
    border-radius: 50%;
    top: 170px;
    background: red
}
/* 左脸蛋 */
.face-left {
    right: 50%;
    margin-right: 130px;
}
/* 右脸蛋 */
.face-right {
    left: 50%;
    margin-left: 130px;
}

/* 最后给鼻子来个小动画 */
@keyframes noseAnimate{
    0% {
        transform: rotateZ(-4deg) translateX(-50%);
    }
    100%{
        transform: rotateZ(4deg) translateX(-50%);
    }
}

/*
如果你喜欢这个动画
欢迎fork和start：https://github.com/LeeeoZhang/React-Animation
Tel：13922584606
Email：leozhang621@gmail.com
*/
`

export default code