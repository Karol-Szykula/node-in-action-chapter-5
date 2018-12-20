const http = require('http')

let counter = 0
const server = http.createServer((req, res) => {
    counter++
    res.write('I have been opened ' + counter + ' times')
    res.end()
})

server.listen(3000)
