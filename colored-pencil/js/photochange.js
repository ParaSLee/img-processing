// (function(){
  let imgBox = document.querySelector(".imgBox"); //存放图片的box
  let img = document.querySelector(".J-showImg"); //存放图片
  let canvas = document.querySelector("#canvasB"); //存放canvas
  let bg = document.querySelector("#J-bg"); //存放canvas

  function red(){
    bg.className = bg.className.replace("no-pencil-effect","pencil-effect");
  }
  
  function reback(){
    bg.className = bg.className.replace("pencil-effect","no-pencil-effect");
  }

// })()