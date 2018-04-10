// (function(){
  let imgBox = document.querySelector(".imgBox"); //存放图片的box
  let img = document.querySelector(".J-showImg"); //存放图片
  let num = document.querySelector("#inputEdg");  //存放内内容
  let edg = 0; //存储角度

  // let that;

  function wiseClick(type){
    wise(num.value,type)
  }


  //num 存储旋转角度
  //type 存储类型  'addEdg' 原角度 + num = 新角度
  //              'newEdg' 旋转 num 度
  //              'return' 还原
  function wise(num,type){
    if (num=="") {
      alert("请输入旋转角度")
    }else if (type==="addEdg") {
      edg += parseInt(num);
    }else if(type==="newEdg"){
      edg = parseInt(num);
    }else if(type==="return"){
      // if (edg>=360) {
      //   edg -= 360;
      // }else{
      //   edg = 0;
      // }
      
    }
    console.log(edg);
    imgBox.style.transform = `rotate(${edg}deg)`;

  }



// })()