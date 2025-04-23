let btn=document.querySelector('#btn');
let para=document.querySelector('#para');


function mydate(){

 let Year =parseInt(document.querySelector('#input_Year').value);
 let month =parseInt(document.querySelector('#input_month').value);
 let day = parseInt(document.querySelector('#input_day').value);


 if(Year<1 || Year>2025){
    para.textContent="Please Enter a Valid Year"
 }
  else if(month<1 || month>12){
     para.textContent="Please Enter a Valid month"
 } 
  else if(day<1 || day>31){
     para.textContent="Please Enter a Valid Date"
 } else{ 
     let getdate=new Date
     let getyear=getdate.getFullYear();
     let getmonth=(getdate.getMonth()+1);
     let getday=getdate.getDate();

     let calculatedYear= getyear-Year
     let calculatedMonth=getmonth-month
     let calculatedDate=getday-day


     if(calculatedDate<0){
       calculatedDate +=30;
       calculatedMonth --;
    }
   
    if (calculatedMonth<0) {
       calculatedMonth +=12;
       calculatedYear --;
    }

     para.textContent=`you are  ${calculatedYear} years ${calculatedMonth} month and ${calculatedDate} day old `};
};


function check(){

   let Year =parseInt(document.querySelector('#input_Year').value);
   let month =parseInt(document.querySelector('#input_month').value);
   let day = parseInt(document.querySelector('#input_day').value);

   if(isNaN(Year)){
      para.textContent='Please Enter Year'
  } else
   if(isNaN(month)){
     para.textContent='Please Enter Month'
  } else
   if(isNaN(day)){
     para.textContent='Please Enter Day'
  }else{
    
  mydate();
}}

btn.addEventListener('click',function(){
   check();
   
})
// btn.addEventListener('click',function(){
//    mydate();
  
// });