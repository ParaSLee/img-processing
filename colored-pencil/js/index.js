const preview = async function(file) {
  const img = document.querySelector(".J-showImg");
  if (file.files && file.files[0]) {
    var reader = new FileReader();
    let bg = document.querySelector("#J-bg"); //存放canvas
    reader.onload = function(evt) {
      img.src=evt.target.result
      setTimeout(function(){
        bg.style.backgroundImage = `url(${evt.target.result}),url(${evt.target.result})`;
        console.log($(img).width()+"px")
        console.log($(img).height()+"px")
        bg.style.width = $(img).width()+"px";
        bg.style.height = $(img).height()+"px";
      },0)
      
      drawToCanvas(this.result);
    }
    reader.readAsDataURL(file.files[0]);
    // reader.onload = function(e){
    //             drawToCanvas(this.result);
    //         }
    changeContainer(file.files);
  }
}

async function changeContainer(file){
  let preview = document.querySelector("#J-preview");
  let showPic = document.querySelector("#J-showPic");
  let updataBtn = document.querySelector("#J-updataBtn");
  let funcBtn = document.querySelector(".J-functionArea");
  preview.className += " hidden";
  showPic.className = showPic.className.replace("hidden","");
  updataBtn.className = updataBtn.className.replace("hidden","");
  funcBtn.className = funcBtn.className.replace("hidden","");
}


var cxtA
function drawToCanvas(imgData){
    var canvasA = $('#canvasA')[0];
        cxtA = canvasA.getContext('2d');
        var img = new Image;
            img.src = imgData;
            img.onload = function(){//必须onload之后再画
                cxtA.drawImage(img,0,0);
                strDataURI = canvasA.toDataURL();//获取canvas base64数据
            }
}



copyCanvas();

function copyCanvas(file){
  var canvasA = $('#canvasA')[0];
  cxtA = canvasA.getContext('2d');
  
  /**
   * 获取canvas画布的内容 getImageData
   * 内容放回到canvas画布 putImageData
   * 获取ImgData的每一个像素 ImgData.data
   * getImageData(起始点的横坐标, 起始点的纵坐标, 获取的宽度, 获取的高度)
   * putImageData(绘制点的横坐标, 绘制点点纵坐标, imgData的起始点横坐标, imgData的起始点纵坐标, 宽度, 高度)
   */
  
  var img = new Image();
  // img.src = "./img/test.jpg";
  
  img.onload = function(){
    cxtA.drawImage(img, 0, 0, canvasA.width, canvasA.height);
  }
  
}
