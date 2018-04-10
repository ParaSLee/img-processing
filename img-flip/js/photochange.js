// (function(){
  let imgBox = document.querySelector(".imgBox"); //存放图片的box
  let img = document.querySelector(".J-showImg"); //存放图片
  
  let X = 180; //存储X方向
  let Y = 180; //存储Y方向




  function level(){
    imgBox.style.transform = `rotateY(${Y}deg)`;
    if (Y === 180) {
      Y = 0;
    }else{
      Y = 180;
    }
  }

  function vertical(){
    imgBox.style.transform = `rotateX(${X}deg)`;
    if (X === 180) {
      X = 0;
    }else{
      X = 180;
    }
  }

  //num 存储旋转角度
  //type 存储类型  'addEdg' 原角度 + num = 新角度
  //              'newEdg' 旋转 num 度
  //              'return' 还原



// })()