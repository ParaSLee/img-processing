// (function(){
  let imgBox = document.querySelector(".imgBox"); //存放图片的box
  let img = document.querySelector(".J-showImg"); //存放图片
  let canvas = document.querySelector("#canvasB"); //存放canvas

  function red(){
    let width = img.offsetWidth;
    let height = img.offsetHeight;

    var canvasB = $('#canvasB')[0];
    var cxtB = canvasB.getContext('2d');
    canvasB.width=width;
    canvasB.height=height;

    var imgDataA = cxtA.getImageData(0, 0, canvasB.width, canvasB.height);
    var pxData = imgDataA.data;  //获取每一个像素
    
    for(var i = 0; i < canvasB.width * canvasB.height; i++){
        //灰度滤镜
        var r = pxData[4*i+0];
        var g = pxData[4*i+1];
        var b = pxData[4*i+2];
        //计算灰度的公式
        var grey = 1*r + 0.59*g + 0.11*b;
        pxData[4*i+0] = grey;
        pxData[4*i+1] = 0;
        pxData[4*i+2] = 0;
    }
    cxtB.putImageData(imgDataA, 0, 0, 0, 0, canvasB.width, canvasB.height);

    img.className += " canvasHidden";
    canvas.className=canvas.className.replace(/canvasHidden/g,"");
  }
  function green(){
    var canvasB = $('#canvasB')[0];
    var cxtB = canvasB.getContext('2d');

    var imgDataA = cxtA.getImageData(0, 0, canvasA.width, canvasA.height);
    var pxData = imgDataA.data;  //获取每一个像素
    
    for(var i = 0; i < canvasB.width * canvasB.height; i++){
        //灰度滤镜
        var r = pxData[4*i+0];
        var g = pxData[4*i+1];
        var b = pxData[4*i+2];
        //计算灰度的公式
        var grey = 1*r + 0.59*g + 0.11*b;
        pxData[4*i+0] = 0;
        pxData[4*i+1] = grey;
        pxData[4*i+2] = 0;
    }
    cxtB.putImageData(imgDataA, 0, 0, 0, 0, canvasB.width, canvasB.height);

    img.className += " canvasHidden";
    canvas.className=canvas.className.replace(/canvasHidden/g,"");

    img.className += " canvasHidden";
    canvas.className=canvas.className.replace(/canvasHidden/g,"");
  }
  function blue(){
    var canvasB = $('#canvasB')[0];
    var cxtB = canvasB.getContext('2d');

    var imgDataA = cxtA.getImageData(0, 0, canvasA.width, canvasA.height);
    var pxData = imgDataA.data;  //获取每一个像素
    
    for(var i = 0; i < canvasB.width * canvasB.height; i++){
        //灰度滤镜
        var r = pxData[4*i+0];
        var g = pxData[4*i+1];
        var b = pxData[4*i+2];
        //计算灰度的公式
        var grey = 1*r + 0.59*g + 0.11*b;
        pxData[4*i+0] = 0;
        pxData[4*i+1] = 0;
        pxData[4*i+2] = grey;
    }
    cxtB.putImageData(imgDataA, 0, 0, 0, 0, canvasB.width, canvasB.height);

    img.className += " canvasHidden";
    canvas.className=canvas.className.replace(/canvasHidden/g,"");

    img.className += " canvasHidden";
    canvas.className=canvas.className.replace(/canvasHidden/g,"");
  }

  function reback(){
    canvas.className += " canvasHidden";
    img.className=img.className.replace(/canvasHidden/g,"");
  }

  //num 存储旋转角度
  //type 存储类型  'addEdg' 原角度 + num = 新角度
  //              'newEdg' 旋转 num 度
  //              'return' 还原



// })()