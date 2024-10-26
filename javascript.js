let boxes=document.querySelectorAll(".box");


let turno = true;

const winpattens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turno){
            box.innerText ="O";
            turno=false;
        } else{
            box.innerText ="X";
            turno=true;
        }
        
        box.disabled=true;
        checkwinner();

    })
})
const checkwinner = () =>{
    for (let pattern of winpattens){
       console.log( [pattern[0]], [pattern[1]],[pattern[2]]);
               
        console.log(
            boxes [pattern[0]].innerText,
            boxes [pattern[1]].innerText,
            boxes [pattern[2]].innerText
        ); 
        let post1val  =  boxes [pattern[0]].innerText
        let post2val  =   boxes [pattern[1]].innerText
         let post3val=  boxes [pattern[2]].innerText
            if(post1val !="" && post2val !="" && post3val !=""){
                if(post1val===post2val && post2val===post3val) {
                    console.log("win");
                    
                }
            }
 
 
        }

    
}