
let fs = require('fs')

let file = 'video.mp4'

let read = fs.createReadStream(file)

let write = fs.createWriteStream('copy.mp4')

fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0

    read.on('data', (chunk) => {
        progress += chunk.length
        console.log("j'ai lu "+Math.round(progress/total*100) + "%")
        
    })
    
    read.pipe(write)

    write.on('finish', () => {
        console.log("Le fichié a bien été copié")
    })
    
})






