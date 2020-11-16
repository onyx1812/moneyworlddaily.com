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
  // titles = {
  //   1: ['Evidence Shows Dark Days Ahead, Government Insider Agrees…', 'Top Government Insider: This will be 10x more catastrophic than 2008…', 'World Renowned Economist Issues Warning: “We are about to see something 10x Worse than 2008…”', 'CIA Insider: Protect Your Families Wealth with this 5-Step Process…', 'America’s #1 Government Insider’s Issues “Chilling” Prediction'],
  //   2: ['The One Prediction That Could Change American Lives  Forever', 'Jim Rickards  2020 Prediction Makes Americans Alarmed…', 'Government Insider Pulls Back the Curtains and Issues Alarming Prediction', 'This Insider’s Prediction  Record is Flawless… That’s why every American should pay attention to his chilling prediction that could change America forever. ', 'See why this Insiders Prediction has Americans worried...'],
  //   3: ['“Economic Depression is Coming” Says Government Insider in Shocking Analysis', 'Top Government Insiders Shocking Analysis sends Chills through America', 'The Man who stopped a 1.2 Trillion Banking Crisis and Correctly Predicted Financial Crisis of 2008 Issues Alarming Prediction.', 'Top Government Insider Urges Americans to Pay Attention to this Critical Warning'],
  // },
  titles = {
    1: ` Market Crisis Secrets: Will You Panic or Prosper? `,
    2: ` Former CIA Advisor Releases 5 Steps To Prepare For The Great Depression Of 2020`,
    3: ` Former CIA Advisor Shows 5 Steps To Protect Your Family Before Its Too Late!`,
    4: ` Former CIA Advisor Shows 5 Steps To Protect Your Wealth Before Its Too Late!`,
    5: ` Great Depression of 2020 Is Here Warns Former Pentagon Advisor (Watch this Now!)`,
    6: ` [2020] Great Depression Is Here Warns Former Pentagon Advisor (Watch this Now!)`,
    7: ` The Man Who Predicted The 2008 Financial Meltdown Issues Warning [On Recession]`,
    8: ` [Watch Now] Former Advisor to CIA & Pentagon Issues Recession Warning to America`,
    9: ` Has Great Depression of 2020 Started? Ex-CIA Advisor Tells How To Protect Wealth`,
    10: `  Former Advisor To The CIA Reveals Where He Invested $1 Million Of His Own Money `,
    11: `  Former Advisor to CIA & Pentagon Releases Defense Against 2020 Market Mayhem`,
    12: `  Former CIA Advisor Urges Americans To Protect their Wealth (Before its Too Late)`,
    13: `  Former CIA Advisor Shows 5 Steps To Protect Your Savings Before Its Too Late!`,
    14: `  [Fact] Great Depression Is Here Warns Former CIA Advisor (Watch this Now!)`,
    15: `  [2020] Great Depression Is Here Warns Former CIA Advisor (Watch this Now!)`,
    16: `  Man Who Predicted The 2008 Financial Meltdown Issues Warning About 2020 Crisis`,
    17: `  Former Advisor to CIA & Pentagon Issues Recession Warning to Americans`,
    18: `  Former Advisor to CIA Issues Recession Warning to Americans With Savings `,
    19: `  Former Advisor to CIA Issues Urgent Recession Warning To Americans With Money `,
    20: `  Former Top Pentagon Advisor Issues Warning To Anyone Who Will Listen [Watch Now]`,
    21: `  Former Advisor To Pentagon Releases 5 Recession Proof Stocks (Do You Own Them?)`,
    22: `  Top Economists Warn Of Sepressions From ‘Sudden Stop”`,
    23: `  Former Advisor to CIA & Pentagon Releases 5 Recession Proof Stocks`,
    24: `  Former Advisor to CIA Releases 5 Recession Proof Stocks`,
    25: `  Great Depression Is Here Warns Former Pentagon Advisor`,
    26: `  Has Great Depression of 2020 Started?`,
    27: `  Former CIA Advisor & Pentagon Issues Recession Warning to Americans “DO THIS NOW!”`,
    28: `  Man Who Predicted Trump's Win Makes Another Prediction`,
    29: `  Former Pentagon Advisor: The Great Depression is Here`,
    30: `  Is The Next Great Depression Here?`,
    31: `  Man Who Predicted Trump Win Makes Surprising New Prediction`,
    32: `  [It's True] Man Who Predicted Trump Win Makes Surprising New Prediction`,
    33: `  Man Who’s Advised Trump's Members Makes Surprising New Prediction`,
    34: `  [IT’S TRUE] Man Who’s Advised Trump's Cabinet Makes Surprising New Prediction`,
    35: `  Government Insider Who Predicted Trump's Election Shares Surprising New Message`,
    36: `  Trump’s Win Was Predicted By This Man. Now He's Made A Surprising New Prediction`,
    37: `  Are You A Patriot? Man Who Predicted Trump Win Makes Surprising New Prediction`,
    38: `  American Patriot That Predicted Trump’s Win Makes Surprising New Prediction`,
    39: `  Former CIA Advisor Releases 5 Steps To Prepare For A Recession`,
    40: `  Ex CIA Insider Shares  What Could Unfold in The US  In The Coming Days`,
    41: `  More Wealth Is Made During Recessions? Here's How To Not Get Left Behind [Watch]`,
    42: `  Buy At The Bottom And Make A Fortune? Here's What To Buy Now (Dont Miss Out)`,
    43: `  Ex CIA Insider Reveals Where Hes Invested 1 Million. He Suggests You Do The Same`,
    44: `  Ex CIA Insider Leaks Where He's Invested 1 Million. He Suggests You Do Same `,
    45: `  Ex CIA Insider Put 1 Million Here. To Protect Your Family He Says To Do The Same`,
    46: `  Ex CIA Insider Put 1 Million Here. To Protect Your Wealth He Says To Do The Same`,
    47: `  Savvy Investors Are Piling Into This Investment. Don't Miss Out Before Its Ends`,
    48: `  Don't Miss Out On Recession Profits. Gov Insider Tells The "Where, When and How"`,
    49: `  Ex CIA Advisor Who Predicted Trump Win Leaks Where He Put 1 Million of His Money`,
    50: `  Heard Of "Precession" Investing?Gov Insider Reveals Where He Put His 1 Million `,
    51: `  [Important Update] US Military Prepares For Martial Law (Is Your Money Safe?)`,
    52: `  [Important Update] US Military Prepares For Martial Law (Are Your Savings Safe?)`,
    53: `  What Does Marshall Law Mean For Your Money? (Gov Insider Finally Speaks)`,
    54: `  What Does Marshall Law Mean For Your Savings? (Gov Insider Finally Speaks)`,
    55: `  Government Insider Issues Urgent Warning To American Citizens [It's A Shocker]`,
    56: `  Government Insider: This Won't Be Another Recession. It will be a depression.`,
    57: `  Gov't Insider Issues Warning To US Citizens (Listen He Predicted Trump Election)`,
    58: `  Marshall Law and Your Money. Are You Prepared?  (Gov Insider Predicts Recession)`,
    59: `  Marshall Law and Savings.  Are You Prepared?  (Gov Insider Predicts Recession)`,
    60: `  American People Were Distracted When This Gov. Doc was released. Learn More Here`,
    61: `  Get The Recession Prediction "Lamestream" Media Doesn't Want You To See [ASAP}`,
    62: `  See The Recession Prediction  Video  "Lamestream" Media Doesn't Want You To See`,
    63: `  Lamestream Media Won't Show You This Gov Insiders Recession Warning [Must Watch]`,
    64: `  Get The Recession Prediction "Fake News" Media Doesn't Want You To See [Watch}`,
    65: `  Five Recession-Proof Stocks To Buy Now (Delay And Regret it For Years To Come)`,
    66: `  Ex CIA Advisor Leaks Video With Financial Predictions For 2020 [May Be Banned]`,
    67: `  Gov't Insider Issues Warning To US Citizens (Listen He Predicted Trump Election)`,
    68: `  Gov't Insider Who Predicted Trump Election Issues Financial Warning To America`,
    69: `  Have Savings? Watch Govt Insiders Video About 5 Steps To Prepare for Recession`,
    70: `  Have Children? Watch Govt Insiders Video About 5 Steps To Prepare for Recession`,
    71: `  Gov't Insiders Leaked Video On How to Prepare for Recession Goes Viral. [Watch]`,
    72: `  Have You Watched Gov't Insiders Heartfelt Video On How to Prepare for Recession?`,
    73: `  Have You Watched Gov't Insiders Viral Video On How to Prepare for Recession?`,
    74: `  Watch Gov't Insiders Video On How to Prepare for Recession Before Its Removed`,
    75: `  Watch Gov't Insiders Video On How to Prepare for Recession Before Its Banned`,
    76: `  Man Who Predicted Trumps Election Makes Financial Prediction in Video`,
    77: `  Ex CIA Advisors Video Shares 5 Financial Keys for Recession [This May Be Banned]`,
    78: `  Top Money Tip of 2020 Exposed By Government Insider (Must Know) `,
    79: `  Is It Safe To Be Rich In 2020? Gov't Insider Not So Sure `,
    80: `  Gov't Insider Issues Stern Financial Warning to Americans `,
    81: `  Man Who Predicted Trump 2016 Election Win Sounds The Alarm `,
    82: `  Gov't Insider Sounds The Alarm To Americans With Savings `,
    83: `  Ex-CIA Insider Sounds The Alarm As Gov't Plans Exposed `,
    84: `  Gov't Insider Warns Americans With Savings To Do This Now `,
    85: `  Gov't Insider Warns Americans Of This One Thing `,
    86: `  Gov't Insider Warns Americans Of This One Thing (It's Crazy)`,
    87: `  Gov't Insider Warns Americans Of This One Money Error `,
    88: `  Know Where To Put Your Money During Political Crisis ?`,
    89: `  How To Keep Your Savings Safe Before The Election (Do This Now)`,
    90: `  Gov't Insider Warns "Silent Majority" To Protect Their Savings Now `,
    91: `  Man Who Called 2016 Election Makes New Prediction`,
    92: `  Whenever This Man Makes A Prediction People Take Notice`,
    93: `  Evidence Shows Dark Days Ahead, Government Insider Agrees…`,
    94: `  Top Government Insider: This will be 10x more catastrophic than 2008…`,
    95: `  World Renowned Economist Issues Warning: “We are about to see something 10x Worse than 2008…”`,
    96: `  CIA Insider: Protect Your Families Wealth with this 5-Step Process…`,
    97: `  America’s #1 Government Insider’s Issues “Chilling” Prediction`,
    98: `  The One Prediction That Could Change American Lives Forever`,
    99: `  Jim Rickards 2020 Prediction Makes Americans Alarmed…`,
    100: ` Government Insider Pulls Back the Curtains and Issues Alarming Prediction`,
    101: ` This Insider’s Prediction Record is Flawless… That’s why every American should pay attention to his chilling prediction that could change America forever.`,
    102: ` See why this Insiders Prediction has Americans worried...`,
    103: ` “Economic Depression is Coming” Says Government Insider in Shocking Analysis`,
    104: ` Top Government Insiders Shocking Analysis sends Chills through America`,
    105: ` The Man who stopped a 1.2 Trillion Banking Crisis and Correctly Predicted Financial Crisis of 2008 Issues Alarming Prediction.`,
    106: ` Top Government Insider Urges Americans to Pay Attention to this Critical Warning`
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
  params = getParams();

  console.log(params.h);

if(dynamic_title && params && params.h){
  document.getElementById('dynamic_title').innerHTML = titles[params.h];
}