console.log('ミニゲーム！');

var result= window.confirm('準備は良い?');

if(result){
 document.getElementById('choice').textContent = 'OKが押されました\(0-0)/';
 }else{
     document.getElementById('choice').textContent = 'キャンセルされちゃった...';
 }
 
 var number = math.floor(math.random()*101);
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
   
    document.getElementById('choice').textContent = massage;
   
