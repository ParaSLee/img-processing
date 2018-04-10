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

    var sobelData = Sobel(imgDataA);
    var sobelImageData = sobelData.toImageData();
    cxtB.putImageData(sobelImageData, 0, 0);

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