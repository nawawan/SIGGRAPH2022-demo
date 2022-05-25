
var express = require('express');

// ポートをopen
var app = express();
var server = app.listen(3000);
// publicフォルダを使っていくよってこと？
app.use(express.static('public'));

console.log("My socket server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

// OSCでつながった時に呼ばれる関数
function newConnection(socket) {
    console.log('new connection: ' + socket.id)

    // padsやmatchという名前のdataを受信
    // 受信したら第二引数の関数がcallbackする
    /*
    socket.on('pads', controllerMsg);
    socket.on('match', matchMsg);

    // padsを受信した時に発動
    function controllerMsg(data) {
        socket.broadcast.emit('pads', data);
    }

    // matchを受信した時に発動
    function matchMsg(data) {
        socket.broadcast.emit('match', data);
    }
*/
}