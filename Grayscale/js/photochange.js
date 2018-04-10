// (function(){
  let imgBox = document.querySelector(".imgBox"); //存放图片的box
  let img = document.querySelector(".J-showImg"); //存放图片
  let canvas = document.querySelector("#canvasB"); //存放canvas

  function grayscale(){
    copyCanvas();
    img.className += " canvasHidden";
    canvas.className=canvas.className.replace("canvasHidden","");
    canvas.className=canvas.className.replace("canvasHidden","");
    canvas.className=canvas.className.replace("canvasHidden","");
    canvas.className=canvas.className.replace("canvasHidden","");
  }

  function reback(){
    canvas.className += " canvasHidden";
    img.className=img.className.replace("canvasHidden","");
    img.className=img.className.replace("canvasHidden","");
    img.className=img.className.replace("canvasHidden","");
    img.className=img.className.replace("canvasHidden","");
  }

  //num 存储旋转角度
  //type 存储类型  'addEdg' 原角度 + num = 新角度
  //              'newEdg' 旋转 num 度
  //              'return' 还原



// })()