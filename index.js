// Your code here
let dodger = document.getElementById('dodger');
document.addEventListener("keydown", function(e){
    if (e.key ==='ArrowLeft'){
        moveDodgerLeft();
    }
})
    function moveDodgerLeft(){
        let leftNumber = dodger.style.left.replace('px', '');
        let left = parseInt(leftNumber,10);
        if (left > 0){
            dodger.style.left = `${left -1}px`;
        }
    } 


    document.addEventListener("keydown", function(e){
        if (e.key ==='ArrowRight'){
            moveDodgerRight();
        }
    })
    
    function moveDodgerRight(){
        let leftNumber = dodger.style.left.replace('px','');
        let left = parseInt(leftNumber,10);
        if (left>0 && left <360){
            dodger.style.left =`${left+1}px`;
        }
    }