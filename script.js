// get button 

const leftBracketBtn = document.getElementById("leftbracket-btn")
const rightBracketBtn = document.getElementById("rightbracket-btn")
const clearBtn = document.getElementById("clear-btn")
const backspaceBtn = document.getElementById("backspace-btn")
const sevenBtn = document.getElementById("seven-btn")
const eightBtn = document.getElementById("eight-btn")
const nineBtn = document.getElementById("nine-btn")
const divBtn = document.getElementById("div-btn")
const fourBtn = document.getElementById("four-btn")
const fiveBtn = document.getElementById("five-btn")
const sixBtn = document.getElementById("six-btn")
const multiBtn = document.getElementById("multi-btn")
const oneBtn = document.getElementById("one-btn")
const twoBtn = document.getElementById("two-btn")
const threeBtn = document.getElementById("three-btn")
const minusBtn = document.getElementById("minus-btn")
const zeroBtn = document.getElementById("zero-btn")
const dotBtn = document.getElementById("dot-btn")
const equalBtn = document.getElementById("equal-btn")
const addBtn = document.getElementById("add-btn")


multiBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="*"
})



leftBracketBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="("

})

rightBracketBtn.addEventListener("click",function(){
    document.getElementById("Display").value +=")"
})

clearBtn.addEventListener("click",function(){
    document.getElementById("Display").value =""
})

backspaceBtn.addEventListener("click",function(){
    document.getElementById("Display").value =document.getElementById("Display").value.toString().slice(0,-1)
})


sevenBtn.addEventListener("click",function(){

    document.getElementById("Display").value +="7"
})

eightBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="8"
})

nineBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="9"
})

divBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="/"
})


fourBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="4"
})


fiveBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="5"
})

sixBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="6"
})


oneBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="1"
})


twoBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="2"
})


threeBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="3"
})


minusBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="-"
    
})

zeroBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="0"
    
})


dotBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="."
    
})


equalBtn.addEventListener("click",function(){
    document.getElementById("Display").value =eval(document.getElementById("Display").value)
})


addBtn.addEventListener("click",function(){
    document.getElementById("Display").value +="+"
    
})


