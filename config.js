/**
+ Ubah nomor owner dan wm di sini.
+ Free apikey hanya memiliki 100 limit per day jika ingin upgrade silahkan daftar di link bawah ini
+ Link https://api.botcahx.live
+ Jika sudah mendaftar salin key yang ada di profie dan paste di global.btc
- Contoh global.btc = 'xzRhejka'
+ Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.
**/


global.owner = ['6288271005021']  
global.mods = ['6288271005021'] 
global.prems = ['6288271005021']
global.nameowner = 'Dill.hfz'
global.numberowner = '6288271005021' 
global.mail = 'support@tioprm.my.id' 
global.dana = 'Chat Owner.'
global.pulsa = '6288271005021'
global.gopay = 'Chat Owner.'
global.namebot = 'RD BotZ'
global.gc = 'https://chat.whatsapp.com/Ln2vHjRrRayAbzalRMB56r'
global.web = 'https://github.com/Dillbotz17'
global.instagram = 'https://instagram.com/prm2.0'
global.lolkey = 'yourkey'
global.btc = 'QaepQXxR' // Daftar di https://api.botcahx.live untuk menggunakan key mu sendiri karena ini hanya 100 limit perhari nya
global.wm = '© Tio'
global.watermark = wm
global.wm2 = '⫹⫺ Dill'
global.wm3 = '© Dill'
global.wm4 = '© BotWa'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp\nR-Dill-MD'
global.APIs = { // API Prefix
  // name: 'https://website'
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://api.botcahx.live',
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.botcahx.live': 'QaepQXxR',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
