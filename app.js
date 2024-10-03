let tickets_sold = 2000;
venu_capacity = 2500;
performer = 'Mercy';
is_sold_out = false;
is_repeat_show = true;

 if(is_sold_out === true){
    console.log('All Sold Out');
 }else{
   console.log('Tickets Still Available');
}

  if(tickets_sold/venu_capacity >= 0.9) {
   console.log('Almost sold out')
 }else if(tickets_sold/venu_capacity >= 0.5){
   console.log("Tickets selling fast")
 }else{
   console.log("Tickets on sale now")
 }



 
 if(tickets_sold > venu_capacity){
   console.log("System error")
 }else if(tickets_sold === venu_capacity && is_sold_out === false){
   console.log("System error")
 }else if(performer === 'Alex' || is_sold_out ===false){
   console.log("System error")
 }else{
   console.log('Tickets on sale now')
 }



 if(tickets_sold === 0.9 || venu_capacity >= 6000 && tickets_sold === 0.7 || venu_capacity >= 9000){
     console.log("Special Case")
 }else if(is_sold_out === true && repeat === true){

 }else{
   console.log("Normal Case")
 }



 let special_performer_1 = 'Alex';
 let special_performer_2 = 'Elvis';
 let special_performer_3 = 'Shrek';
 let special_performer_4 = 'Bright';
 let special_performer_5 = 'Miami';

if(special_performer_1 == 'Alex'){
   console.log('Lucky You')  
}else if(special_performer_2 === 'Nunti'){
   console.log('Lucky You')
}else if(special_performer_3 === 'Miami'){
   console.log("Lucky You")
}else if(special_performer_4 === 'Shrek'){
   console.log("Lucky You")
}else if(special_performer_5 === 'Miami'){
   console.log("Lucky You")
}else {
   console.log("still searching")
}





    

 