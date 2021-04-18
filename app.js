 const email = document.getElementById('email');
 
//  email.addEventListener('keyup',function(event){
//    if(email.validity.typeMismatch){
//        prompt('you are not my type');
//    }
//    else {
//        email.setCustomValidity('just go fuck off and not come again this site');
//    }
//  })
// console.log(temp);
function check(){
     const text = email.value;
     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(reg.test(text) == false){
    email.style.background='url(images/icon-error.svg) no-repeat center';
  }
  else{
      prompt('nice')
  }
}