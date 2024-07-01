 case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                const { exec, spawn, execSync } = require('child_process')
                let media = await Faza.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Faza.sendMessage(from, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
                break
