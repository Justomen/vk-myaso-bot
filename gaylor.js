var VK = require("VK-Promise"),
    vk = new VK("token");
vk.longpoll.start();
vk.on("message", function (event, msg) {
    if(msg.body == '$понослав'){
        msg.sendAttachment("photo310288435_456245690")
        msg.send("[id454645853|гейлор], смотрю на твои фотографии и повергаю себя в шок)) ты макака ебаная хули ты ещё живёшь уебише 😀")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$гейлор'){
        msg.sendAttachment("photo310288435_456245691")
        msg.send("[id454645853|мальчик-гей], хули ты лыбишься даун)")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$гейлорд'){
        msg.sendAttachment("photo310288435_456245498")
        msg.send("[id454645853|нуб], впн не меняет ip адрес ")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$депутат'){
        msg.sendAttachment("photo310288435_456245497")
        msg.send("[id454645853|опущенец], обиженная хуйня опять поползла на колени своей мамаши выпрашивать прощение в скоенных грехах, зачем впн скачал? 😀")
        msg.setActivity();
    }
    if(msg.body == '$говнослав'){
        msg.sendAttachment("photo310288435_456245487")
        msg.send("[id454645853|будущий президент], в очко твоей mother заглянул как в подзорную трубу 😀")
        msg.setActivity();
    }
    if(msg.body == '$политик-нытик') {
        msg.sendAttachment("photo310288435_456245505")
        msg.send("[id454645853|нытик], выбираем гейлора, кандидат от народа 😀")
        msg.setActivity();
    }
    if(msg.body == '$подногами') {
        msg.sendAttachment("photo310288435_456245488")
        msg.send("[id454645853|хуйня], ты войми гейлор твое ебало начистил до такой степени что ты напоминаешь свою мамашу шлюху без ебала когда она мне сосала 😀😀")
        msg.setActivity();
    }
    if(msg.body == '$шлюхен') {
        msg.sendAttachment("photo310288435_456245484")
        msg.send("[id454645853|шлюхен],я твой рот ебал и туда нассал 😉")
        msg.setActivity();
    }
    if(msg.body == '$лив') {
        msg.sendAttachment("photo310288435_456245692")
        msg.send("[id454645853|заебал ныть], мы не уйдём")
        msg.setActivity();
    }
});
