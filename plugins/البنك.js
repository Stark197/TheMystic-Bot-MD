let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    let username = conn.getName(who)
    //let { wealth } = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ هذا المستخدم غير موجود ف قاعدة بياناتي`

    var wealth = '*مطفر*'
     if (`${user.bank}`           <= 3000){
            wealth = '*مطفر*'
      } else if (`${user.bank}`   <= 6000){
            wealth = '*فقير*'
        } else if (`${user.bank}` <= 100000){
            wealth = '*متوسط*'
        } else if (`${user.bank}` <= 1000000){
            wealth = '*غني💸💰*'
        } else if (`${user.bank}` <= 10000000){
            wealth = '*مليونير🤑*'
        } else if (`${user.bank}` <= 1000000000){
            wealth = '*مليونير تربيع🤑*'
        } else if (`${user.bank}` <= 10000000000){
            wealth = '*ملياردير🤑🤑*'
        }    
    
    conn.reply(m.chat, `*❃ ──────⊰ ❀ ⊱────── ❃*\n
◍ 🏦 *بنك | ${username}*

◍ *🪙 بيلي :* *${user.bank}*

◍ *الثروة :* ${wealth}\n
*❃ ──────⊰ ❀ ⊱────── ❃*
`, m, { mentions: [who] })  //${user.chicken}
}
handler.help = ['bank']
handler.tags = ['economy']
handler.command = ['البنك', 'vault'] 

export default handler
