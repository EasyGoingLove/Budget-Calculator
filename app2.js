document.querySelector(".salary_fix").style.display = "none";

document.getElementById('covid').addEventListener('click' , function () {
    open('https://www.worldometers.info/coronavirus/');
});
document.getElementById('avrInc').addEventListener('click' , function () {
    open('https://www.worlddata.info/average-income.php');
});

document.getElementById('worker').addEventListener('click' , function () {

    /*document.getElementsByName('descrip')[0].placeholder='Add your job!';
    document.getElementsByName('salary')[0].placeholder='Salary';*/ // If you want to change the placeholders of the <input> tag.
    document.querySelector(".salary_fix").style.display = "block";
    while(true){
        let salary = prompt('If you have a job we recommend entering your salary:');
        if (salary!== "" && !isNaN(salary) && salary > 0){
         document.querySelector('.salary--value').innerHTML = salary + '$';
         return false;
        }else{
          alert('Sorry that was not a numeric value');
        }
    }
    
});

document.getElementById('job--del').addEventListener('click' , function () {
   document.querySelector(".salary_fix").style.display = "none";
});




