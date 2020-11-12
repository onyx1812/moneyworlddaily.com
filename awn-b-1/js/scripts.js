      const queryString = window.location.search;
      const track = `https://savingsscanner.org/click${queryString}`;
      let textLinks = document.querySelectorAll('a[href="https://savingsscanner.org/click"]');
      textLinks.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          setTimeout(()=>{
            window.location.href = track;
          }, 250);
        });
      });


const
  dynamic_title = document.getElementById('dynamic_title'),
  titles = {
    1: ['Evidence Shows Dark Days Ahead, Government Insider Agrees…', 'Top Government Insider: This will be 10x more catastrophic than 2008…', 'World Renowned Economist Issues Warning: “We are about to see something 10x Worse than 2008…”', 'CIA Insider: Protect Your Families Wealth with this 5-Step Process…', 'America’s #1 Government Insider’s Issues “Chilling” Prediction'],
    2: ['The One Prediction That Could Change American Lives  Forever', 'Jim Rickards  2020 Prediction Makes Americans Alarmed…', 'Government Insider Pulls Back the Curtains and Issues Alarming Prediction', 'This Insider’s Prediction  Record is Flawless… That’s why every American should pay attention to his chilling prediction that could change America forever. ', 'See why this Insiders Prediction has Americans worried...'],
    3: ['“Economic Depression is Coming” Says Government Insider in Shocking Analysis', 'Top Government Insiders Shocking Analysis sends Chills through America', 'The Man who stopped a 1.2 Trillion Banking Crisis and Correctly Predicted Financial Crisis of 2008 Issues Alarming Prediction.', 'Top Government Insider Urges Americans to Pay Attention to this Critical Warning'],
  },
  getParams = () => {
    url = location.search;
    var query = url.substr(1);
    var result = {};
    query.split("&").forEach(function(part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  },
  params = getParams(),
  titleInArr = Number(params.h) - 1;

if(dynamic_title && params && params.a && params.h){
  document.getElementById('dynamic_title').innerHTML = titles[params.a][titleInArr];
}