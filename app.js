const input=document.getElementById("textarea");
console.log(input.value);
const div=document.getElementById("div")
const p=document.createTextNode("")
div.appendChild(p)

const btnConvert=document.getElementById("convert")
const btnClear=document.getElementById("clear")
const btnWovels=document.getElementById("vowels")
const btnCapitalize=document.getElementById("capitalize")
// let array=p.input
 
btnConvert.addEventListener("click",()=>{
    if(!input.value){
        alert("Please enter sentences")
    } else {
        p.textContent=input.value.toUpperCase()
    input.value=""
    input.focus()

    }
})
btnClear.addEventListener("click",()=>{
  p.textContent=""
    input.value=""
    input.focus()
})
vowelCounter = (input) => {
    let count = 0;
    let arr = input.value.toLowerCase().split("");
    for (let i in arr) {
      if (
        arr[i] === "a" ||
        arr[i] === "e" ||
        arr[i] === "ı" ||
        arr[i] === "i" ||
        arr[i] === "o" ||
        arr[i] === "ö" ||
        arr[i] === "u" ||
        arr[i] === "ü"
      ) {
        count += 1;
      }
    }
    return count;
  };
  
  btnWovels.addEventListener("click", () => {
    if (!input.value) {
      alert("Please enter a centence");
    } else {
      vowelCounter(input);
      p.textContent = `There are ${vowelCounter(input)} vowels in "${input.value}".`;
    }
  
    
  
 
  
    input.value = "";
    input.focus();
  });
  btnCapitalize.addEventListener("click",()=>{
    let array=input.value.split(" ")
    
    if(!input.value){
        alert("Please enter sentences")
    } else {
        
       for(let i in array){
        array[i]=array[i].charAt(0).toUpperCase() + array[i].slice(1) + " ";
       }
       p.textContent=array.join("")
       
    input.value=""
    input.focus()

    }
})
