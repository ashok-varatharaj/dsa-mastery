const assignCookies = (greedChildrenList=[], cookiesList=[]) => {
    if(greedChildrenList.length == 0 || cookiesList.length == 0){
        return 0;
    }
/*
    PROBLEM STATEMENT
        Need to Assign the cookies to the Maximum children

    1. BRUTE FORCE - O(N-SQUARE)

        FOR LOOP OF COOKIES
            FOR LOOP OF CHILDREN REQUIRED COOKIES
                IF COOKIE SIZE AND CHILDREN REQUIREMENT MET, THEN ASSIGN COOKIE TO CHILDREN

    2. OPTIMISED - PSUEDOCODE
        
        SOLUTION - GREEDY

        1. SORT CHILDREN_GREED LIST
        2. SORT COOKIES LIST
        3. USE TWO POINTERS 
            LEFT IN COOKIES, AND RIGHT IN CHILDREN
            IF(COOKIE >= CHILDREN){
                RIGHT++;
            }ELSE{
                SKIP RIGHT
            }
            LEFT++;
*/
    let left = 0;
    let right = 0;
    cookiesList.sort((a, b) => a - b);
    greedChildrenList.sort((a, b) => a - b);
    while(left < cookiesList.length){
        if(right >= greedChildrenList.length) break;
        if(cookiesList[left] >= greedChildrenList[right]){
            right++;
        }else{
            console.log("Skip");
        }
        left++;
    }
    console.log("Satisfied Children", right, cookiesList)
}

assignCookies([1,2,3], [1,1])

assignCookies([1,2], [1,2,3])

assignCookies([10,9,8,7], [5,6,7,8])