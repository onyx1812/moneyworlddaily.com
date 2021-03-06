//= partials/images.js

let formHandler = function(e) {
  e.preventDefault();
  let form = e.target;
  const formData = new FormData(form);
  formData.append("action", "ajax_order");
  fetch('/wp-admin/admin-ajax.php', {
    method: "POST",
    body: formData
  })
    .then(res=>res.text())
    .then((data)=>{
      document.body.classList.remove('popup-active');
      form.removeEventListener('submit', formHandler);
      form.reset();
      console.log(data)
    })
}

let openPopup = document.querySelectorAll('.openPopup');
for (let i = 0; i < openPopup.length; i++) {
  openPopup[i].addEventListener('click', (e)=>{
    e.preventDefault();
    let popupID = e.target.dataset.popup,
      popupContent = document.getElementById(popupID).innerHTML,
      popupContentBox = document.getElementById('popupContentBox');
    popupContentBox.innerHTML = popupContent;
    document.body.classList.add('popup-active');
    let form = document.querySelector('form');
    setTimeout(()=>{
      console.log(form)
      if(form) {
        form.addEventListener('submit', formHandler);
      }
    }, 200)
  });
}

let closePopup = document.getElementById('closePopup');
closePopup.addEventListener('click', function(e){
  e.preventDefault();
  document.body.classList.remove('popup-active');
});

