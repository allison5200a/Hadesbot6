const a = '```'
const groupp = (prefix, pushname2, groupName, user, name, uptime, jam, tanggal, premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx) => {
return `

╭─────≽「 *REGULATION ${name}* 」
┴
┣⊱>  ${a}NOME USER:${a} *${pushname2}*
┣⊱>  ${a}CEK PREMIUM:${a} ${premi}
┣⊱>  ${a}LIMIT:${a} *${limitt} perhari*
│
┣⊱>  ${a}NOME GRUP:${a} *${groupName}*
┣⊱>  ${a}MODE WELCOME:${a} *${Welcomee}*
┣⊱>  ${a}MODE SIMI:${a} *${Simihh}*
┣⊱>  ${a}MODE ANIME:${a} *${ModeAnime}*
┣⊱>  ${a}MODE NSFW:${a} *${Nsfww}*
┣⊱>  ${a}MODE ANTI PALAVRAO:${a} *${BadWordd}*
┣⊱>  ${a}MODE ANTI LINK:${a} *${AntiLinkk}*
┣⊱>  ${a}MODE ANTI VIRTEX:${a} *${AntiVirtexx}*
│
┣⊱>  ${a}HORA:${a} *${jam} WIB*
┣⊱>  ${a}ENCONTRO:${a} *${tanggal}*
┣⊱>  ${a}ATIVO:${a} ${kyun(uptime)}
┣⊱>  ${a}VERSÃO:${a} *0.0.0*
┣⊱>  ${a}USER REGISTRADO:${a} *${user.length} User*
┬
╰────────────────────────

╭──≽「 *ATIVAR SE NECESSÁRIO* 」
┴
┠≽ *${prefix}antilink On/Off*
┠≽ *${prefix}welcome On/Off*
┠≽ *${prefix}grup on/off*
┠≽ *${prefix}modeanime On/Off*
┠≽ *${prefix}nsfw On/Off*
┠≽ *${prefix}simih On/Off*
┠≽ *${prefix}antivirtex on/off*
┠≽ *${prefix}palavrao on/off*
┬
╰────────────────────────
│
╭──────≽「 *ANIME* 」
┴
┠≽ *${prefix}neonime naruto*
┠≽ *${prefix}naruto*
┠≽ *${prefix}minato*
┠≽ *${prefix}boruto*
┠≽ *${prefix}hinata*
┠≽ *${prefix}sakura*
┠≽ *${prefix}sasuke*
┠≽ *${prefix}toukachan*
┠≽ *${prefix}megumin*
┠≽ *${prefix}rize*
┠≽ *${prefix}akira*
┠≽ *${prefix}itori*
┠≽ *${prefix}kurumi*
┠≽ *${prefix}miku*
┠≽ *${prefix}anime*
┠≽ *${prefix}animecry*
┠≽ *${prefix}animekiss*
┬
╰───────────────────────
│
╭──────≽「 *SOMENTE ADMINISTRADOR DE GRUPO* 」
┴
┠≽ *${prefix}fitnah @mentioned/isi/balasan*
┠≽ *${prefix}ownergrup*
┠≽ *${prefix}listonline*
┠≽ *${prefix}setpp*
┠≽ *${prefix}infogrup*
┠≽ *${prefix}add 628xxxxxxxxxx*
┠≽ *${prefix}kick @mentioned*
┠≽ *${prefix}kicktime @mentioned*
┠≽ *${prefix}promote @mentioned*
┠≽ *${prefix}demote @mentioned*
┠≽ *${prefix}setname*
┠≽ *${prefix}setdesc*
┠≽ *${prefix}linkgrup*
┠≽ *${prefix}tagme*
┠≽ *${prefix}wame*
┠≽ *${prefix}nyimak*
┠≽ *${prefix}hidetag*
┠≽ *${prefix}tagall*
┠≽ *${prefix}mentionall*
┠≽ *${prefix}adminlist*
┬
╰────────────────────────
│
╭──────≽「 *ANIME PORNO* 」
┴
┠≽ *${prefix}nsfwloli*
┠≽ *${prefix}nsfwpussy*
┠≽ *${prefix}nsfwclasic*
┠≽ *${prefix}nsfwyuri*
┠≽ *${prefix}nsfwlewd*
┠≽ *${prefix}nsfwsolo*
┠≽ *${prefix}nsfweron*
┠≽ *${prefix}nsfwparadise*
┠≽ *${prefix}nsfwbigtt*
┠≽ *${prefix}nsfwecchi*
┠≽ *${prefix}nsfwcum*
┠≽ *${prefix}nsfwblowjob*
┠≽ *${prefix}nsfwneko*
┠≽ *${prefix}nsfwtrap*
┠≽ *${prefix}hentai*
┬
╰────────────────────────
`
}
exports.groupp = groupp

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}
