// local storage
var storage = window.localStorage ? window.localStorage : "";
var ls = 
{
 save: function(key,val) {storage[key+" "+location.hostname] = val;},
 get: function(key) {key = key+" "+location.hostname; return storage[key] ? storage[key] : "";},
 del: function(key) {storage.removeItem(key+" "+location.hostname);},
 clear: function() {storage.clear();}
}

function clientHeight() {return document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement.clientHeight;}
function main_h()
{
 var h = [clientHeight()-(ma.idb > 0 ? 118 : 236),clientHeight()-404];
 $("#main_div2").height(h[0]); $("#main_tbl").height(h[0]);
 $("#log").height(h[1]);
}

// ajax запрос
function aj(u,dt) {dt = dt || ""; $.ajax({url: u, data: dt, dataType: "script"});}

// закодировать/раскодировать переменную
function udeco(r) {return r.replace(/\\/g,"#92").replace(/\&/g,"#38").replace(/\+/g,"#43").replace(/\./g,"#46");}
function uenco(r) {return r.replace(/\#92/g,"\\").replace(/\#38/g,"&").replace(/\#43/g,"+").replace(/\#46/g,".");}

// добавить сайт в закладки
function add_favorite()
{
 title=document.title; url=document.location;
 try {window.external.AddFavorite(url, title);}
 catch (e)
 {
  try {window.sidebar.addPanel(title, url, "");}
  catch (e) {alert('Нажмите Ctrl-D чтобы добавить страницу в закладки');}
 }
 return false;
}

// вебсокеты - отправить сообщение 
function send(text,qs)
{
 qs = defp(qs,"");
 Server.send("message",qs+"|ws|"+text);
}

// добавление javascript файла
function LoadScript(id,url)
{
 if (!$("#"+id).length)
 $("head").append("<script id="+id+" src='"+url+"'></script>");
}

// используется, для параметров по умл. в функциях
function defp(p,zn) {return typeof p == 'undefined' ? zn : p;}

// спарсить строку в массив
function pstr(br,arv1,arv2) {$.each(arv1, function(i,v) {br[v] = arv2[i];}); return br;}

// расчет силы танка/вещи
function get_sila(p)
{
 var dmg = defp(p.dmg,0),brb = defp(p.brb,0),crit = defp(p.crit,0),def = defp(p.def,0),hp = defp(p.hp,0),ener = defp(p.ener,0),dist = defp(p.dist,0),rad = defp(p.rad,0),
 sila = dmg*12 + ((dmg*12)*(dmg/8) / 100);
 sila+= brb*4 + ((brb*4)*(brb/12) / 100);
 sila+= crit*4 + ((crit*4)*(crit/12) / 100);
 sila+= def*10 + ((def*10)*(def/10) / 100);
 sila+= hp*2 + ((hp*2)*(hp/48) / 100);
 sila+= ener*48 + ((ener*48)*(ener/2) / 100);
 sila+= dist*48 + ((dist*48)*(dist/2) / 100);
 sila+= (rad/5)*48 + ((rad*48)*(rad/2) / 100);
 sila = parseInt(sila / 5);
 sila = sila / 10;
 return sila;
}

// расчет стоимости вещи
function get_cost(sila,art)
{
 var cost_a = sila * 24, cost_b = 0;
 if (art == 3) {cost_a /= 1.5; cost_b = sila * 2.1;} else
 if (art == 2) {cost_a /= 2; cost_b = sila * 1.4;} else
 if (art == 1) {cost_a /= 3; cost_b = sila * 0.8;}
 return [parseInt(cost_a),parseInt(cost_b)];
}
 
// blink text
var blinks = "";
function blink(o,cols,tm) {tm = defp(tm,200); if (!~blinks.indexOf(o)) {blinks+= "##"+o; blinkf(o,cols,tm);}}
function blinkf(o,cols,tm) {var blinki = 0; (function blinkf2() {setTimeout (function() {if (($(o).length) && (~blinks.indexOf(o))) {$(o).css({color: cols[blinki]}); blinki++; if (blinki>(cols.length-1)) blinki = 0; blinkf2();} else blink_dl(o);},tm);})();};
function blink_dl(o) {blinks = blinks.split("##"+o).join("");}

// default
function substr_count(haystack, needle)
{
 var pos = 0, cnt = 0, offset = -1, length = 0;
 while ( (offset = haystack.indexOf(needle, offset+1)) != -1 )
 if (length > 0 && (offset+needle.length) > length) {return false;} else {cnt++;}
 return cnt;
}

$(document).on("click", ".labels label", function()
{
 $(this).parent().find("label").removeClass().addClass("n");
 $(this).removeClass().addClass("y");
});
function chbox(id,zn) {$(id).removeClass().addClass(zn);}
function chbox_zn(id) {return $(id).attr("class");}

function vis(o,a) {$(o).css({visibility: (a>0?"visible":"hidden")});}
