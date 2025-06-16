const assignCookies = (greed=[], cookies=[]) => {
/*
    PROBLEM STATEMENT
        Have N of greed, and have M no of Cookies, Each greed has the greed factor of cookies, Need to give cookies to the maximum greed

    1. BRUTE FORCE - O(N-LOG-N)

    2. OPTIMISED - PSUEDOCODE
        
        SOLUTION - GREEDY

        STEPS

        PROBELM - HOW TO MAXIMIZE THE N NO OF greed?

        LOGIC
        -----
        1. SORT greed ARRAY
        2. SORT COOKIES ARRAY
        IF THE greed COOKIE EXPECTED COUNT IS GREATER OR EQUAL TO THE COOKIE COUNT, THEN ASSIGN THE COOKIE TO THE USER
        3. TO MAINTAIN THE COUNT, WILL USE TWO POINTERS

        IF (COOKIE >= GREED_CHILDREN){
            RIGHT++
        }
*/

    cookies = cookies.sort((a, b) => a - b);
    greed = greed.sort((a, b) => a - b);

    let left = 0;
    let right = 0;
    while(left < cookies.length){
        if(cookies[left] >= greed[right]){
            right++;
        }
        left++
    }
    console.log("Satisfied Children", right);
}

assignCookies([1,2,3], [1,2,4])

assignCookies([1,2,3], [1,1])

assignCookies([1,2], [1,2,3])

assignCookies([10,9,8,7], [5,6,7,8])