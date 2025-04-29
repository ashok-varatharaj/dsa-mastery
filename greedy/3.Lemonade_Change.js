const lemonadeChange = (arr) => {
/*
    PROBLEM STATEMENT
        Need to return the change, for all the customers

    1. BRUTE FORCE - O(N-SQUARE)
        For Loop Customer Arr

    2. OPTIMISED - PSUEDOCODE
        
        SOLUTION - GREEDY

        let five = 0; let ten = 0; let twenty = 0;
        

*/
    let five = 0; let ten = 0; let twenty = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 5){
            five += 1;
        }else if(arr[i] == 10){
            if(five >= 1){
                five -= 1;
                ten += 1;
            }else{
                console.log("Not able to Serve change to customers on 10 change")
                return false; // NO CHANGE
            }
        }else{
            if(ten >= 1 && five >= 1){
                ten -= 1;
                five -= 1;
                twenty += 1;
            }else if(five >= 3){
                five -= 3;
                twenty += 1;
            }else{
                console.log("ten",ten, "five", five);
                console.log("Not able to Serve change to customers on 20 change")
                return false; // NO CHANGE
            }
        }
    }
    console.log("Able to Serve change to customers")
    return true;
}

lemonadeChange([5, 5, 5, 10, 10, 20]);