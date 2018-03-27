var VK = require("VK-Promise"),
    vk = new VK("176d25e1218aabbaaf3382db365375ddddfb14952e16d73d23ad082bb65462b0b48f4e0a0771a2c0a3dd1");
vk.longpoll.start();
vk.on("message", function (event, msg) {
    if(msg.body == '$небритая'){
        msg.sendAttachment("photo479523394_456239097")
        msg.send("[gg.demiurge|кекнутая дура], войми ты слижком страшная для моего хуя ) >(( ")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$еблысь'){
        msg.sendAttachment("photo479523394_456239097")
        msg.send("[gg.demiurge|песик-рыжик], ебал тя >(( ")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$залупа'){
        msg.sendAttachment("photo479523394_456239097")
        msg.send("[gg.demiurge|рыжая залупа], я ебал твою мамашу и мне похуй >(( ")
        msg.setActivity();
        peer_id();
    }
        if(msg.body == '$очко'){
        msg.sendAttachment("photo479523394_456239097")
        msg.send("[gg.demiurge|очело], потрахал тебя в жопу и мне похуй >(( ")
        msg.setActivity();
        peer_id();
        }
});