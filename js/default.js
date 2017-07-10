
 
 var number = Math.floor(Math.random()*101);
 var result=0;
while(1){
 var answer =parseInt(window.prompt('数あてゲーム0~100の数字を入力して下さい'));
 
 var message;
 if(answer === number){
   message = '凄いあたり！';
   break;
   }else if (answer < number){
    result  = '残念！もっと大きい数字だよ！このまま続ける？';
    }else if (number < answer ){
   result = '残念！もっと小さい数字だよ！このまま続ける？';
    }else{
    result  = '0~100の数字以外は入れないでねこのまま続ける？';
   }
  if (result===true)
    result=0;
  else　break;
  
}
document.getElementById('choice').textContent = message;

   
