let images=document.querySelectorAll("img[data-src]");function winPosition(){let e=window.scrollY+window.outerHeight;for(var t=0;t<images.length;t++)e>=images[t].offsetTop&&(images[t].src=images[t].dataset.src)}window.addEventListener("scroll",winPosition),window.addEventListener("load",winPosition);let formHandler=function(e){e.preventDefault();let t=e.target;const o=new FormData(t);o.append("action","ajax_order"),fetch("/wp-admin/admin-ajax.php",{method:"POST",body:o}).then(e=>e.text()).then(e=>{document.body.classList.remove("popup-active"),t.removeEventListener("submit",formHandler),t.reset(),console.log(e)})},openPopup=document.querySelectorAll(".openPopup");for(let e=0;e<openPopup.length;e++)openPopup[e].addEventListener("click",e=>{e.preventDefault();let t=e.target.dataset.popup,o=document.getElementById(t).innerHTML;document.getElementById("popupContentBox").innerHTML=o,document.body.classList.add("popup-active");let n=document.querySelector("form");setTimeout(()=>{console.log(n),n&&n.addEventListener("submit",formHandler)},200)});let closePopup=document.getElementById("closePopup");closePopup.addEventListener("click",function(e){e.preventDefault(),document.body.classList.remove("popup-active")});