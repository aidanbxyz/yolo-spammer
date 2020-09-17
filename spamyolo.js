var request = require('request')

// main variables
var messages = [
    'show cat',
    'have cat',
    'spam is important',
    'u can h4z msgs',
    'hey :)'
]

var yoloIDToSpam = '----------'

var yoloQWording = 'definite no spam'

// end of main variables

var messagetosend
var loopnum = 0

function doTheThing() {
    var loops = setInterval(() => {
        console.clear()
        loopnum++
        console.log('#' + loopnum)
        messagetosend = messages[loopnum % messages.length]
        console.log('message: ' + messagetosend)
        var postData = {
            cookie: 'm48wvulaa352oqsj1kj2',
            text: messagetosend,
            wording: yoloQWording
        }

        var url = 'http://onyolo.com/' + yoloIDToSpam + '/message'
        var options = {
            method: 'post',
            body: postData,
            json: true,
            url: url
        }
        request(options, function(err, res, body) {
            if (err) {
                console.error('error posting json: ', err)
                throw err
            }
            var headers = res.headers
            var statusCode = res.statusCode
            console.log('headers: ', headers)
            console.log('statusCode: ', statusCode)
            console.log('body: ', body)
            if (statusCode == 403) {
                clearInterval(loops)
                setTimeout(() => { doTheThing() }, 63000)
            }
        })
    }, 100)
}

doTheThing();

// tip: store people's yolos down here
// yolo #1: 1234567890
// yolo #2: 0987654321