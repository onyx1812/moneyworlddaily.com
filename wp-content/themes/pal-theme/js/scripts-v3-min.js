"use strict";var images=document.querySelectorAll("img[data-src]");function winPosition(){for(var e=window.scrollY+window.outerHeight,t=0;t<images.length;t++)e>=images[t].offsetTop&&(images[t].src=images[t].dataset.src)}window.addEventListener("scroll",winPosition),window.addEventListener("load",winPosition);for(var formHandler=function t(e){e.preventDefault();var o=e.target,n=new FormData(o);n.append("action","ajax_order"),fetch("/wp-admin/admin-ajax.php",{method:"POST",body:n}).then(function(e){return e.text()}).then(function(e){document.body.classList.remove("popup-active"),o.removeEventListener("submit",t),o.reset(),console.log(e)})},openPopup=document.querySelectorAll(".openPopup"),i=0;i<openPopup.length;i++)openPopup[i].addEventListener("click",function(e){e.preventDefault();var t=e.target.dataset.popup,o=document.getElementById(t).innerHTML;document.getElementById("popupContentBox").innerHTML=o,document.body.classList.add("popup-active");var n=openPopup.querySelector("form");n&&n.addEventListener("submit",formHandler)});var closePopup=document.getElementById("closePopup");closePopup.addEventListener("click",function(e){e.preventDefault(),document.body.classList.remove("popup-active")});
