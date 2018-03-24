var VK = require("VK-Promise"),
    vk = new VK("");
vk.longpoll.start();
vk.on("message", function (event, msg) {

    if(msg.body == '$help') {
    msg.send ("Списиок команд: \n \n \n Шлюхченко:\n \n $додик \n $шлюхченко \n $украинец \n\ \n Павлов: \n \n $павлов \n $макака \n $осьминог \n $мускулистый песик \n \n $нытик \n $чмошник");
    }
});