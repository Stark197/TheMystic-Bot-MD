let handler = async function (m, { conn }) {
  // Loop through all users in the database
  for (const userId in global.db.data.users) {
    if (Object.prototype.hasOwnProperty.call(global.db.data.users, userId)) {
      // Set registration status to false for each user
      global.db.data.users[userId].registered = false;
      global.db.data.users[userId].name = ''; // Clear the name
      global.db.data.users[userId].regTime = 0; // Reset registration time
    }
  }

  // Respond with a confirmation
  m.reply('*تم تصفية جميع الألقاب*');
};

handler.command = ['إلغاء_تسجيل_الكل', 'تصفيه', 'unregister_all'] 
handler.rowner = true
handler.botAdmin = true
handler.fail = null

export default handler
