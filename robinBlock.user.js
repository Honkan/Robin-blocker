// ==UserScript==
// @name         Robin name blocker
// @namespace    http://tampermonkey.net
// @version      0.2
// @description  Blocks someone from chat
// @author       Moib
// @include      https://www.reddit.com/robin*
// @grant        none
// ==/UserScript==


(function(){
    'use strict';
    
    var $input = $(".robin-chat--sidebar").prepend("<label>Type any phrase or user here and press the coresponding button to no longer se any mesages containing the phrase/from the user<\label><br><input type='text' id='boxBlock'><div class='addon' style='font-size:15pt;display:block;'><input type='button' id='btnBlockPhrase' value='Block phrase'><input type='button' id='btnBlockUser' value='Block user'><\div>");
    var btnBlockPhrase = document.getElementById('btnBlockPhrase');
    btnBlockPhrase.onclick = blockPhrase;
    
    var btnBlockUser = document.getElementById('btnBlockUser');
    btnBlockUser.onclick = blockUser;
    
})();

function blockPhrase() {
    var phrase = document.getElementById("boxBlock").value;
    var conatinsPhrase = ".robin-message--message:contains('" +  phrase + "')";
    window.setInterval(function(){$(conatinsPhrase).parent().hide();},10);
    document.getElementById("boxBlock").value = "";
}

function blockUser() {
    var userName = document.getElementById("boxBlock").value;
    var conatinsName = ".robin-message--from.robin--username:contains('" + userName + "')";
    window.setInterval(function(){$(conatinsName).parent().hide();},10);
    document.getElementById("boxBlock").value = "";
}
