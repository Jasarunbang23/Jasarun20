let handler =  m => m.reply(`
╭━━━━「 *SEWA* 」
┊⫹⫺ 1 bulan 5k
┊⫹⫺ Permanen 20k
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ 1 Bulan 5K
┊⫹⫺ Permanent 20k
╰═┅═━––––––๑

💬: Minat Minat Hubungi Owner

`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
