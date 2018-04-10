const preview = async function(file) {
  console.log(file.files)
  const img = document.querySelector(".J-showImg");
  if (file.files && file.files[0]) {
    var reader = new FileReader();
    reader.onload = function(evt) {
      img.src=evt.target.result
    }
    reader.readAsDataURL(file.files[0]);
    changeContainer();
  }
}

async function changeContainer(){
  let preview = document.querySelector("#J-preview");
  let showPic = document.querySelector("#J-showPic");
  let updataBtn = document.querySelector("#J-updataBtn");
  let funcBtn = document.querySelector(".J-functionArea");
  preview.className += " hidden";
  showPic.className = showPic.className.replace("hidden","");
  updataBtn.className = updataBtn.className.replace("hidden","");
  funcBtn.className = funcBtn.className.replace("hidden","");
}

copyCanvas();

function copyCanvas(){
  var canvasA = $('#canvasA')[0];
  var cxtA = canvasA.getContext('2d');
  
  var canvasB = $('#canvasB')[0];
  var cxtB = canvasB.getContext('2d');
  
  /**
   * 获取canvas画布的内容 getImageData
   * 内容放回到canvas画布 putImageData
   * 获取ImgData的每一个像素 ImgData.data
   * getImageData(起始点的横坐标, 起始点的纵坐标, 获取的宽度, 获取的高度)
   * putImageData(绘制点的横坐标, 绘制点点纵坐标, imgData的起始点横坐标, imgData的起始点纵坐标, 宽度, 高度)
   */
  
  var img = new Image();
  img.src = "./Grayscale/img/test.jpg";
  img.onload = function(){
    cxtA.drawImage(img, 0, 0, canvasA.width, canvasA.height);
  }
  var imgDataA = cxtA.getImageData(0, 0, canvasA.width, canvasA.height);
  var pxData = imgDataA.data;  //获取每一个像素
  
  for(var i = 0; i < canvasB.width * canvasB.height; i++){
      //灰度滤镜
      var r = pxData[4*i+0];
      var g = pxData[4*i+1];
      var b = pxData[4*i+2];
      //计算灰度的公式
      var grey = 0.3*r + 0.59*g + 0.11*b;
      pxData[4*i+0] = grey;
      pxData[4*i+1] = grey;
      pxData[4*i+2] = grey;
  }
  cxtB.putImageData(imgDataA, 0, 0, 0, 0, canvasB.width, canvasB.height);
}
