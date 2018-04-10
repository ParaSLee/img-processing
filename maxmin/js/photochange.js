// (function(){
  let imgBox = document.querySelector(".imgBox"); //存放图片的box
  let img = document.querySelector(".J-showImg"); //存放图片
  let num = document.querySelector("#inputEdg");  //存放内内容
  let imgW = document.querySelector(".J-width"); //存放图片
  let imgH = document.querySelector(".J-height"); //存放图片

  let times = 0;

  function delMax(width,height){
    img.style.maxWidth = "1000%";
    img.style.maxHeight = "1000%";
    imgW.innerHTML = imgW.innerHTML.concat(`${width}px`)
    imgH.innerHTML = imgH.innerHTML.concat(`${height}px`)
  }


  function enlarge(){
    let width = img.offsetWidth;
    let height = img.offsetHeight;
    if (num.value=="") {
      alert("请输入放大倍数")
    }else if (isNaN(parseFloat(num.value)+1)) {
      alert("请输入纯数字")
    }else if (parseFloat(num.value)>=5) {
      alert("请输入5倍以内的内容")
    }else if (parseFloat(num.value)<1) {
      alert("请输入1-5之间的倍数")
    }else{

      let newWidth = parseFloat(width)*parseFloat(num.value);
      let newHeight = parseFloat(height)*parseFloat(num.value);

      if (times === 0) {
        delMax(width,height);
        imgW.innerHTML = imgW.innerHTML.concat(` * ${parseFloat(num.value)}`)
        imgH.innerHTML = imgH.innerHTML.concat(` * ${parseFloat(num.value)}`)
        times = 1;
      }else{
        imgW.innerHTML = imgW.innerHTML.concat(` * ${parseFloat(num.value)}`)
        imgH.innerHTML = imgH.innerHTML.concat(` * ${parseFloat(num.value)}`)
      }
      
      img.style.height = `${newHeight}px`;
      img.style.width = `${newWidth}px`;
    }
  }

  function narrow(){
    let width = img.offsetWidth;
    let height = img.offsetHeight;
    if (num.value=="") {
      alert("请输入缩小倍数")
    }else if (isNaN(parseFloat(num.value)+1)) {
      alert("请输入纯数字")
    }else if (parseFloat(num.value)>=5) {
      alert("请输入5倍以内的内容")
    }else if (parseFloat(num.value)<1) {
      alert("请输入1-5之间的倍数")
    }else{

      let newWidth = parseFloat(width)/parseFloat(num.value);
      let newHeight = parseFloat(height)/parseFloat(num.value);

      if (times === 0) {
        delMax(width,height);
        imgW.innerHTML = imgW.innerHTML.concat(` / ${parseFloat(num.value)}`)
        imgH.innerHTML = imgH.innerHTML.concat(` / ${parseFloat(num.value)}`)
        times = 1;
      }else{
        imgW.innerHTML = imgW.innerHTML.concat(` / ${parseFloat(num.value)}`)
        imgH.innerHTML = imgH.innerHTML.concat(` / ${parseFloat(num.value)}`)
      }
      
      img.style.height = `${newHeight}px`;
      img.style.width = `${newWidth}px`;
    }
  }

  //num 存储旋转角度
  //type 存储类型  'addEdg' 原角度 + num = 新角度
  //              'newEdg' 旋转 num 度
  //              'return' 还原



// })()