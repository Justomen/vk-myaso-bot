var VK = require("VK-Promise"),
    vk = new VK("");
vk.longpoll.start();
vk.on("message", function (event, msg) {
var sticker_id = "101";
    if(msg.body == '$шлюхченко'){
        msg.send("[jacob_bravo|украинское говно], хули ты такой уродец? >(( ")
        msg.sendAttachment("photo479523394_456239051")
        msg.setActivity();
        peer_id();
        msg.sendSticker("101");
        sticker_id("101");
    }
    if(msg.body == '$украинец'){
        msg.send("[jacob_bravo|украинская тянка], скудоумный кусочек сала, хули ты высрал уебан? >(( ")
        msg.sendAttachment("photo479523394_456239051")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$додик'){
        msg.send("[jacob_bravo|додик], говориш js нубо-язык, да?? Тогда вот тебе вопрос: Как поменять контекст функции. Частичное применение функции? Вопрос задан, отвечай нуб >(( ")
        msg.setActivity();
        peer_id();
    }
});
