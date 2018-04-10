const preview = async function(file) {
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