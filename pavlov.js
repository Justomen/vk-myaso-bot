var VK = require("VK-Promise"),
    vk = new VK("token");
vk.longpoll.start();
vk.on("message", function (event, msg) {
    if(msg.body == '$павлов'){
        msg.sendAttachment("photo479523394_456239055")
        msg.send("[fernando777|вафля], я твою маму ебал) >(( ")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$макака'){
        msg.sendAttachment("photo479523394_456239058")
        msg.send("[jacob_bravo|обезьяна], хули ты такой урод? >(( ")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$осьминог'){
        msg.sendAttachment("photo479523394_456239056")
        msg.send("[fernando777|осминог-омеган], твоя мать продалась бомжам за осьминогов >(( ")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$мускулистый песик'){
        msg.sendAttachment("photo479523394_456239059")
        msg.send("[fernando777|синтол], ты наххуй свои мускулы моей спермой накачал? >(( ")
        msg.setActivity();
    }
    if(msg.body == '$чмошник'){
        msg.sendAttachment("photo479523394_456239060")
        msg.send("[fernando777|зубастое говно], нахххуй ты рот открыл? члена хочешь? >(( ")
        msg.setActivity();
    }
    if(msg.body == '$нытик') {
        msg.sendAttachment("photo479523394_456239061")
        msg.send("[fernando777|нытик], хули ты плачешь, животное? >(( ")
        msg.setActivity();
    }
});
