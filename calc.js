let whiteArea = document.getElementById("white-area");


function clr(){
   window.location.reload();
}
function del(){
    whiteArea.value=whiteArea.value.slice(0,-1);
}

// --------------------------------------------------
let prevNum =0;
var operType = "";
var values ={
    prev:null,
    new:null,
    total:null
}
let lastBtnNumber = false;
function getNum(num){
    if(lastBtnNumber){
        if(values.new){
            values.new = values.new + '' + num;
            whiteArea.value +=num;
        }else{
            values.prev = values.prev + '' + num;
            whiteArea.value += num;
        }
    }else {
        whiteArea.value = num;
        if(values.prev){
            values.new = num;
        }else{
            values.prev = num;
        }
        lastBtnNumber = true;
    }
 
}

function getOperator(op){
    operType = op;
    lastBtnNumber = false;
}

function clac(){ 
    if(!values.new){
        return 0;
    }
    if(values.new && values.prev && operType){
        if(operType === "+"){
            whiteArea.value = +values.prev + +values.new;
           values.prev = +values.prev + +values.new;
        }
        if(operType === "-"){
            whiteArea.value = +values.prev - +values.new;
           values.prev = +values.prev - +values.new;

        }
        if(operType === "*"){
            whiteArea.value = +values.prev * +values.new;
           values.prev = +values.prev * +values.new;

        }
        if(operType === "/"){
            whiteArea.value = +values.prev / +values.new;
           values.prev = +values.prev / +values.new;

        }
        if(operType === "%"){
            whiteArea.value = +values.prev % values.new;
           values.prev = +values.prev % +values.new;
        }
    }
    lastBtnNumber = false;
 
}
