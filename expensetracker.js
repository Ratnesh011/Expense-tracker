
let but=document.getElementById("btn");
let history=document.querySelector('.hist');
let nam=document.getElementById('naam');
let amount=document.getElementById("amount");
var total=document.getElementById("total");
var minusmoney=document.getElementById("minu");
let addmoney=document.getElementById("add");
let transaction=[];

viewhandler();


but.addEventListener('click',(e)=>{
    e.preventDefault();
    money()
});


function viewhandler(){

        
        if(nam.value=="" && amount.value == "" ){
            
         }
     
         
             
         
     
         else if(amount.value<0){ 
                    
                   localStorage.setItem("transaction",JSON.stringify(transaction));
                   minusmoney.innerHTML=parseInt(minusmoney.innerHTML)+parseInt(amount.value);;
                   total.innerHTML=parseInt(total.innerHTML)+parseInt(amount.value);
                   addmoney.innerHTML=parseInt(addmoney.innerHTML)+parseInt(amount.value);;
                   let ele=document.createElement('ul');
                   ele.innerHTML=` ${nam.value} ${amount.value}<button id="Ram">X</button> `;
                   history.appendChild(ele);
                   ele.querySelector('#Ram').addEventListener('click',remove);
     
             function remove(){
                 ele.remove();
             }
                   nam.value="";
                  amount.value="";
         }
     
         else{
     
             localStorage.setItem("transaction",JSON.stringify(transaction));
             addmoney.innerHTML=parseInt(addmoney.innerHTML)+parseInt(amount.value);
             total.innerHTML=parseInt(total.innerHTML)+parseInt(amount.value);
             let ele=document.createElement('ul');
             ele.innerHTML=` ${nam.value} ${amount.value}<button id="Ram">X</button> `;
             history.appendChild(ele);
     
             ele.querySelector('#Ram').addEventListener('click',remove);
     
             function remove(){
                 ele.remove();
             }
             nam.value="";
             amount.value="";
            
         }
        

}



function money(){
    
    transaction.push({a:nam.value,b:amount.value})
    localStorage.setItem("transaction",JSON.stringify(transaction))
    viewhandler();

    
    
}






