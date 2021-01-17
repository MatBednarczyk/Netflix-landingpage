//Default Hide view
let answear1 = document.getElementById('answear1').style.display = 'none';
let answear2 = document.getElementById('answear2').style.display = 'none';
let answear3 = document.getElementById('answear3').style.display = 'none';
let answear4 = document.getElementById('answear4').style.display = 'none';
let answear5 = document.getElementById('answear5').style.display = 'none';

//Show/Hide Answear
function showAnswear(id) {
  let answear = document.getElementById(id);
  if(answear.style.display == 'block')
      answear.style.display = 'none';
  else
      answear.style.display = 'block';
}

//favicon animation JQuery
$(".question").click(function(){
    $(this).toggleClass("active");
})