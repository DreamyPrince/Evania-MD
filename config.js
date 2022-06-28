//════════════════════════════//
//© 2022 Xeon Bot Inc. Cheems Bot MD
//════════════════════════════//
const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = true // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['+919778062036'] //ur owner number
global.ownername = "Akhil"
global.ytname = "AlonePhilic" //ur yt chanel name
global.socialm = "itzme_lucifer01" //ur github or insta name
global.location = "India, Kerala, Trivandrum" //ur location

//bot bombdy
global.botname = "Evania" //ur bot name
global.websitex = "https://github.com/DreamyPrince" //ur website
global.vidmenu = { url: 'https://i.imgur.com/HqUlMtv.jpeg' } //gif and video menu
global.packname = "DreamyPrince \nStickers"
global.author = "Akhil"
global.themeemoji = "😊"
global.reactmoji = "☺️"
global.ownertag = ['919778062036'] //ur owner tag
global.ownernummenu = ['919778026036'] //ur owner number in menu and all
global.watermark = "DreamyPrince" //ur watermark
global.botscript = "https://github.com/DreamyPrince/Evania-MD"
global.linkz1 = "https://wa.me/+919778062036"
global.linkz2 = "https://wa.me/+919778062036"

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/dppic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/dppic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/dppic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/dppic.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🌚','😊','⭐']
global.mess = {
    success: 'Sherienna',
    admin: 'Itz for admin vro!',
    botAdmin: 'Make me an admin first!',
    owner: 'Itz only for Mr. Akhil',
    group: 'Itz for grps vro!',
    private: 'This feature is only for private chats!',
    bot: 'This feature is only for bot',
    wait: 'Bait cheyy kutta',
    linkm: 'Link evide?',
    error: 'Error!',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'Ambada kema sunny kutta mwon angane kooduthal onnum aagrahikkanda',
    banChat: 'Me paavam'
}
global.limitawal = {
    premium: "Infinity",
    free: 200,
    monayawal: 100000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': '1367a5d936',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
