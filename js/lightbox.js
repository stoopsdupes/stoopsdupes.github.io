const gallery = document.querySelectorAll(".gallery .image"),
body = document.querySelector("body"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeicon = previewBox.querySelector(".close");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        let newIndex = i;
        let clickImgIndex = newIndex;
        gallery[i].onclick = ()=>{
            function preview(){
                let selectedImg = gallery[newIndex];
                if (selectedImg) {
                    let selectedImgUrl = selectedImg.getAttribute('data-src');
                    if (window.screen.availWidth >= 500) {
                        previewImg.src = selectedImgUrl;
                    }
                    else {
                        previewImg.src = selectedImgUrl.substring(0,(selectedImgUrl.length - 5)) + "mobile.webp";
                    }
                }
            }
            const prevBtn = previewBox.querySelector(".prev");
            const nextBtn = previewBox.querySelector(".next");
            if(newIndex == 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length -1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = ()=>{
                newIndex--;
                if(newIndex == 0){
                    preview();
                    prevBtn.style.display = "none";
                }else{
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = ()=>{
                newIndex++;
                if(newIndex >= gallery.length -1){
                    preview();
                    nextBtn.style.display = "none";
                }else{
                    preview();
                    prevBtn.style.display = "block";
                }
            }
            preview();

            previewBox.classList.add("show");
            body.classList.add("show");

            closeicon.onclick = ()=>{
                newIndex = clickImgIndex
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                body.classList.remove("show");
            }
        }
        
    }
}