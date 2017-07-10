var number = Math.floor(Math.random()*101);
var result=0;
while(1){
var answer = parseInt(window.prompt('数あてゲーム。0～100の数字を入力してね！'));

var message;
if(answer === number){
  message =　'凄い当たり！';
  break;
}
  else if (answer < number){
result = window.confirm('残念！もっと大きい数字だよ。このまま続ける？');
}else if (number < answer){
 result = window.confirm('残念！もっと小さい数字だよ。このまま続ける？');
}else{
  result = window.confirm('0～100の数字を入力してね。このまま続ける？');
}
  if (result===true)
    result=0;
  else　break;
 }
document.getElementById('choice').textContent = message;
