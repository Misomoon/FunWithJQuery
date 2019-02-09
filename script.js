$(document).ready(function(){
// all jQuery methods go here...
$("#runningman-img").hover(enter, leave);
function enter(){
  this.src="images/runningman-giphy.gif"
}

function leave(){
  this.src = "images/runningman-icon.png"

}
$("#taketheL-img").hover(enter2, leave2);
function enter2(){
  this.src="images/taketheL-giphy.gif"
}

function leave2(){
  this.src = "images/taketheL-icon.png"

}
$("#electroshuffle-img").hover(enter3, leave3);
function enter3(){
  this.src="images/electroshuffle-giphy.gif"
}

function leave3(){
  this.src = "images/electroshuffle-icon.png"

}
$("#bestmates-img").hover(enter4, leave4);
function enter4(){
  this.src="images/bestmates-giphy.gif"
}

function leave4(){
  this.src = "images/bestmates-icon.png"

}
$(function(){
  $(document).attr("title","Emote Information")
})
$("#title").html("This is Emote Information")
$("#extra-text").remove()

$("#logo").click(bgImageChange);
function bgImageChange(){
$("body").css("background-image", "url('images/bg2.jpg')");
}







});
