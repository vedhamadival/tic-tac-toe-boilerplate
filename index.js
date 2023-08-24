const box =document.getElementsByClassName("box")
const result=document.getElementById("result")
const message=document.getElementById("message")
const button=document.getElementById("button")
let text = "O"
let count=0
let flag1=false



button.onclick= ()=>{
    location.reload();
}


let xArr =[]//indexes of x
let oArr =[]//indexes of o


let finalresults=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



for(let i=0;i<box.length;i++){
    box[i].addEventListener("click",handleClick)
}

function handleClick(e){
    if(!e.target.innerText){
        count++
    text=text=="O"?"X":"O"
    text=="X"?xArr.push(e.target.id-1):oArr.push(e.target.id-1)
    e.target.innerHTML = `<h2>${text}</h2>`
    // checkresult();
    let arr = text=="X"?xArr:oArr
    checkwin(finalresults,arr,text)
}

if(count==9 && flag1==false){
    showresult("Draw");
}
}


function checkwin(finalresults,arr,text){
    let count = 0
    let flag=[]
    for(let i=0;i<finalresults.length;i++){
        if(Array.isArray(finalresults[i])){
            checkwin(finalresults[i],arr,text)
        }
        else {
            if(arr.includes(finalresults[i])){
                count++
            }
        }
    }

    if(count==3 && flag.every((ele)=>ele==true)){
        flag1 = true
        showresult(text);
    }
}

function showresult(char){
    message.innerText = char=="Draw"?`${char}`:`${char} Won`;
    result.style.visibility= "visible";
}

// to check the pattern of X:O
// function checkresult(){

//     if(box[0].innerText+box[1].innerText+box[2].innerText=="XXX" ||
//         box[3].innerText+box[4].innerText+box[5].innerText=="XXX" ||
//         box[6].innerText+box[7].innerText+box[8].innerText=="XXX" ||
//         box[0].innerText+box[3].innerText+box[6].innerText=="XXX" ||
//         box[1].innerText+box[4].innerText+box[7].innerText=="XXX" ||
//         box[2].innerText+box[5].innerText+box[8].innerText=="XXX" ||
//         box[0].innerText+box[4].innerText+box[8].innerText=="XXX" ||
//         box[2].innerText+box[4].innerText+box[6].innerText=="XXX"){
//             flag=true
//        showresult("X WON");
//     }
//     else if(box[0].innerText+box[1].innerText+box[2].innerText=="OOO" ||
//     box[3].innerText+box[4].innerText+box[5].innerText=="OOO" ||
//     box[6].innerText+box[7].innerText+box[8].innerText=="OOO" ||
//     box[0].innerText+box[3].innerText+box[6].innerText=="OOO" ||
//     box[1].innerText+box[4].innerText+box[7].innerText=="OOO" ||
//     box[2].innerText+box[5].innerText+box[8].innerText=="OOO" ||
//     box[0].innerText+box[4].innerText+box[8].innerText=="OOO" ||
//     box[2].innerText+box[4].innerText+box[6].innerText=="OOO"){
//         flag=true
//         showresult("O WON");
//     }
// }
