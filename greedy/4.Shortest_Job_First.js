const shortestJobFirst = (jobArr=[]) => {
/*
    PROBLEM STATEMENT
        Shortest Job First, Calc how much wait time required to finish tasks and return avg time of jobArr

    1. BRUTE FORCE - O(N-SQUARE)

    2. OPTIMISED - PSUEDOCODE
        
        SOLUTION - GREEDY

            1. SORTING ARRAY

            2. FOR LOOP
            
            WAITING TIME -> TOTAL WAITING TIME
*/

    jobArr.sort((a, b) => a - b);
    console.log("Job Arr --->", jobArr)

    let arrLength = jobArr.length;
    let waitingTime = 0;
    let totalWaitingTime = 0;
    for(let i = 0; i < arrLength; i++){
        waitingTime += totalWaitingTime;
        totalWaitingTime += jobArr[i];
    }
    console.log("waitingTime----->",waitingTime)
    console.log("totalWaitingTime---->",totalWaitingTime)
    let avgTime = Math.round(waitingTime / arrLength);
    console.log("Avg time", avgTime);
}

shortestJobFirst([4, 3, 7, 1, 2, 5])