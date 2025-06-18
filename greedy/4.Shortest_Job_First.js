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

    let waitingTime = 0;
    let lastJob = 0;
    console.log("jobArr",jobArr)
    for(let job of jobArr){
        waitingTime += lastJob;
        lastJob += job;
    }
    console.log("waitingTime", waitingTime)
    return waitingTime / jobArr.length;
}

shortestJobFirst([4, 3, 7, 1, 2])