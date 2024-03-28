let handler = async (m, { conn, participants, usedPrefix, command, args }) => {
  if (!m.mentionedJid[0] && !m.quoted) {
    return m.reply('*يجب عليك وضع المستخدم المطلوب*')
  }

  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

  // Check if the user's kick time exists
  if (!global.db.data.users[user] || !global.db.data.users[user].kickTime) {
    return m.reply('*ليست لديه زيارة مسجلة*')
  }

  // Delete the kick time for the user
  delete global.db.data.users[user].kickTime;

  // Inform the user and the group
  conn.sendMessage(m.chat, `*تم اللغاء زيارته*`, 'conversation')
    .catch(console.error);
}

handler.help = ['cancelkick @user']
handler.tags = ['group']
handler.command = ['دائم'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
