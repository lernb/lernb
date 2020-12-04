// let layer = document.getElementById("layer");
let header = document.getElementById("he");
let headerHeight = parseInt(he.style.height);
let hcata = document.getElementById("hcata");
let btnShow = document.getElementById("show");
let btnClose = document.getElementById("close");
let isShow = false;
// 获取浏览器视口高度
let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
window.addEventListener('scroll', function () {
  windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
});
hcata.style.height = (windowHeight - 80) + "px";

// 阻止默认事件
header.addEventListener('touchmove', function (e) {
  e.stopPropagation();
  if (e.target == header) {
    // 让不可以滚动的区域不要滚动
    e.preventDefault();
  }
}, false);
hcata.addEventListener('touchmove', function (e) {
  e.stopPropagation();
  if (e.target == hcata) {
    // 让不可以滚动的区域不要滚动
    e.preventDefault();
  }
}, false);

// 移动版头部按钮
function clk() {
  if (isShow) {
    btnClose.style.display = "none";
    btnShow.style.display = "inline-block";
    // btnShow.className = "animate__flipInX";
    // layer.className = "cata animate__fadeOut";
    header.style.height = 63 + "px";
    isShow = false;
    // setTimeout(function () {
    //   isShow = false;
    // }, 600);
  } else {
    btnShow.style.display = "none";
    btnClose.style.display = "inline-block";
    // btnClose.className = "animate__flipInX";
    // layer.style.display = "block";
    // layer.className = "cata animate__fadeIn"
    // 计算展开后的header高度
    header.style.height = (windowHeight) + "px";
    console.log(windowHeight);
    isShow = true;
    // setTimeout(function () {
    //   isShow = true;
    // }, 600);
  }
}

let iList = document.getElementsByClassName('p-list-item');
let wrapbd = document.getElementsByClassName('wrap-bd')[0];
for (let i = 0; i < iList.length; i++) {
  (function () {
    iList[i].addEventListener('touchstart', function (e) {
      e.stopPropagation();
      console.log('touchstart');
      iList[i].setAttribute('style', 'transform: scale3d(.97, .97, .97)');
    });
    iList[i].addEventListener('touchend', function (e) {
      // setTimeout(function () {
      //   iList[i].setAttribute('style', 'transform: initial');
      // }, 200);
      iList[i].setAttribute('style', 'transform: initial');
    });
    iList[i].addEventListener('touchmove', function (e) {
      setTimeout(function () {
        iList[i].setAttribute('style', 'transform: initial');
      }, 200);
    });
  })(i);
}
wrapbd.addEventListener('touchstart', function (e) {
  for (let i = 0; i < iList.length; i++) {
    setTimeout(function () {
      iList[i].setAttribute('style', 'transform: initial');
    }, 200);
  }
});