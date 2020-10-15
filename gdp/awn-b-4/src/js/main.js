// Url params
// function parseURLParams(url) {
//     var queryStart = url.indexOf("?") + 1,
//         queryEnd = url.indexOf("#") + 1 || url.length + 1,
//         query = url.slice(queryStart, queryEnd - 1),
//         pairs = query.replace(/\+/g, " ").split("&"),
//         parms = {}, i, n, v, nv;
//
//     if (query === url || query === "") return;
//
//     for (i = 0; i < pairs.length; i++) {
//         nv = pairs[i].split("=", 2);
//         n = decodeURIComponent(nv[0]);
//         v = decodeURIComponent(nv[1]);
//
//         if (!parms.hasOwnProperty(n)) parms[n] = [];
//         parms[n].push(nv.length === 2 ? v : null);
//     }
//     return parms;
// };
//
// var urlString = window.location.href,
//     urlParams = parseURLParams(urlString);
//
// if(urlParams) {
//     const image = document.querySelector('.image');
//     if(urlParams.image) {
//         image.src = `./img/${urlParams.image[0]}`;
//     } else {
//         image.src = `./img/pentagon.jpg`;
//     }
// };

const date = document.getElementById('date');
let yesterday = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);
const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
date.innerHTML = `${month[yesterday.getMonth()]} ${yesterday.getDate()}, ${yesterday.getFullYear()}`;
