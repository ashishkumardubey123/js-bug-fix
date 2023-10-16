const inputSalider= document.querySelector('[data-lenghtSlider]')
const lengthDisplay= document.querySelector('[data-lenghtNumber]')
const passworDisplay = document.querySelector ('[data-passswordDisplay] ')
const copyBtn= document.querySelector(' [data-copy]')
const copymsg = document.querySelector('[ dtta-copyMsg]')
const upperCaseChaeck = document.querySelector ('#uppercase')
const lowerCaseChaeck = document.querySelector('#lowercase')
const numbersChaeck = document.querySelector('#nubers')
const symbolsChaeck = document.querySelector('#symbols')
const indicator = document.querySelector('[data-indecatore]')
const generateBtn = document.querySelector('.generateButton')
const allCheckBox = document.querySelectorAll('input[type=checkbox]')
const Symbols= '!@#$%^&*()~,<>._?/*+-/{}[]|\;:"'; 

console.log("1st the prosses is done")
let password= "";
let passswordLength= 10;
let checkcount= 0;
handleSlider()
steindicator("#ccc")
// set circule color to grey

// *** set the password's length accordind to the slider 
function handleSlider(){

inputSalider.value= passswordLength;
lengthDisplay.innerHTML=passswordLength;
} 

function steindicator(color){

    indicator.style.backgroundcolor= color
    indicator.style.boxShadow = "10px 20px 30px blue"; 
}
console.log("2n the prosses is done")

//! this function is for acquiring  randum things

function getRndumInteger(min,max){
return Math.floor(Math.random()* (max- min))+min;

}
// ** for randum numbers

function generateRandumNumber(){

    return getRndumInteger(0,9)
}
// ** for randum Lowercase latters

function generateLowercase()
 {

         return  String.fromCharCode(getRndumInteger(97, 123))

 } 

 // ** for randum Uppercase latters
function generateUppercase()
 {

 return  String.fromCharCode(getRndumInteger(65,90 ))

 } 
function generatSymbol(){
   const randNu = getRndumInteger(0 , Symbols.length)
   return Symbols.charAt(randNu);
}

function calctStrenghth(){

    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
  if (upperCaseChaeck.Checked) hasUpper= true
  if (lowerCaseChaeck.Checked) hasLower= true
  if (numbersChaeck.Checked) hasNum= true
  if (symbolsChaeck.Checked) hasSym= true
    
 if (hasUpper && hasLower &(hasNum ||hasSym ) && passswordLength >= 8)
  {
    steindicator("#0f0");
 }

 else if (  (hasLower || hasUpper)
  &&  (hasNum || hasSym)
 && passswordLength >= 6)
    {
        steindicator("0ff0")
    }

    else {
        steindicator("#f00");
    }
}
console.log("3rd the prosses is done")

async function copyContent () {
 try{
    await navigator.clipboard.writeText(passworDisplay.value);
copymsg.innerText = "copied"; 
 }
catch(e){

    copymsg.innerText = "Faield"; 

}
//  to make copied massege activated 
copymsg.classList.add("active")

setTimeout( () =>{
    copymsg.classList.remove("active");
} , 2000 ) ;

}
console.log("4th the prosses is done")

function shufflePassword(array){
    // fisher yates mathod

    for(let i = array.length-1 ; i>0; i--){
     const j  =Math.floor(Math.random()* (i+1));
     const temp= array[i]
     array[i]= array[j];
     array[j] = temp

    }
    let srt= "";
    array.forEach((el) =>  (srt += el))
    return srt;

}

 function handlecheckboxChange () {
   checkcount=0;
   allCheckBox.forEach((ckeckbox)  =>{

if (ckeckbox.Checked) 
    checkcount++;
    

 } );
  // special condetion
  if (passswordLength< checkcount) {

    passswordLength= checkcount
    handleSlider()
    
 } 
}
console.log("5th the prosses is done")



allCheckBox.forEach (  (checkbox) => {

    checkbox.addEventListener('change', handlecheckboxChange )
})

inputSalider.addEventListener('input', (e) =>{
    passswordLength = e.target.value
    handleSlider();
} )

copyBtn.addEventListener('click', () => {
    if (passworDisplay.value)

    // ! please check if code dos'nt work
    {
      copyContent(); 
    
    }
})
console.log("6th the prosses is done")

generateBtn.addEventListener('click', () =>{
//  none of the check box are selacted 

// if (checkcount == 0) 
//     return;

if (passswordLength < checkcount) {
    passswordLength= checkcount;
    handleSlider();
    
}

// ! let's start the journy to finde new password
//? remove old password

password = "";
// if ( upperCaseChaeck.Checked) {
//     password = password+ generateUppercase()
    
// }

// if ( lowerCaseChaeck.Checked) {
//     password = password+ generateLowercase()
    
// }
// if ( numbersChaeck.Checked) {
//     password = password+ generateRandumNumber()
    
// }

// if ( symbolsChaeck.Checked) {
//     password = password+ generatSymbol()
    
// }

console.log("7th the prosses is done")
let funcarr = [];
if ( upperCaseChaeck.Checked){
    funcarr.push(generateUppercase)
}
if ( lowerCaseChaeck.Checked){

    funcarr.push(generateLowercase)
}

if ( numbersChaeck.Checked){

    funcarr.push(generateRandumNumber )
}

if ( symbolsChaeck.Checked){

    funcarr.push(generatSymbol)
}

console.log("8th the prosses is done")
// compulsory addition
for (let i= 0 ;i <funcarr.length; i++)
{

    password +=funcarr[i]();
}
console.log("9th the prosses is done")
// remaning addition
for (let i= 0; i<passswordLength - funcarr.length; i++)
{

    let redumindex = getRndumInteger(0 , funcarr.length); 
    console.log("rendum index" +" "+ redumindex )
    password += funcarr[redumindex]();
    console.log("10 th the prosses is done")
}

// shuffle the password
password = shufflePassword(Array.from(password))

// show  in ui

passworDisplay.value= password
// calculate the strenth
calctStrenghth()


})