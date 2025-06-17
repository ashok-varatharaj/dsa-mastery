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

    let five = 0, ten = 0, twenty = 0;

    for(let item of arr){
        if(item == 5){
            // COLLECT 5 IN BOX
            five += 1;
        }else if(item == 10){
            // COLLECT 10 IN BOX
            // SHOULD RETURN THE 5 CHANGE TO CUSTOMER, WE SHOULD HAVE CHANGE, ELSE RETURN FALSE
            if(five == 0){
                return false;
            }
            ten += 1;
            five -= 1;
        }else if(item == 20){
            // COLLECT 20 FROM THE CUSTOMER AND ADD IT IN BOX
            // SHOULD RETURN THE 15 CHANGE TO THE CUSTOMER, 
            // WE SHOULD HAVE 15 CHANGE, ELSE RETURN FALSE
            // 15 = (5+5+5) or 15 = (10+5)
            if(five == 3){
                twenty += 1;
                five -= 3;
            }else if(five >= 1 && ten >= 1){
                twenty += 1;
                five -= 1;
                ten -= 1;
            }else{
                return false;
            }
        }
    }
    console.log("We can give the change to all the customers", arr)
}

lemonadeChange([5, 5, 5, 10, 10, 20]);
lemonadeChange([5, 5, 10, 10, 10, 20]);