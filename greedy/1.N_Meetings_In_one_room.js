console.log("Ak Solving N Meetings in One Room")


const nMeetings = (start=[], end=[]) => {
/* 
    PROBLEM STATEMENT --> NEED TO FIT N - MAXIMUM MEETINGS IN ONE ROOM

    SOLVE
        1. CREATE ARR [0, 5, 1] - [START, END, POSITION]
        2. SORT ARR BY END TIME
        3. TAKE FIRST DATA, FREE TIME[END TIME] AND LOOP START FROM 1 -> IF(ARR[I][START_TIME] > FREE TIME)

    PSUEDOCODE
        
        1. CREATE ARR [0, 5, 1] - [START, END, POSITION]
            let meetingsArr = [];
            
            for loop
                let obj = {
                    "start": start[i],
                    "end": end[i],
                    "pos": i+1
                }
        2. SORT ARR BY END TIME
            USE SORTING - COMPARATOR

        3. LOOP & CONDITION BASED ON SORTED ARR
            let meetingCount = 1; 
            let lastMeetingTime = 2 -> AFTER SORTED, FIRST INDEX END TIME
            let ds = [3]
            FOR LOOP
                IF(meetingsArr[i]["start"] > lastMeetingTime){
                    lastMeetingTime = meetingsArr[i]['end'];
                    ds.push(meetingsArr[i]['pos'])
                    meetingCount++;
                }
*/
    let meetingsArr = [];
    for(let i = 0; i < start.length; i++){
        let meetingObj = {
            "start": start[i],
            "end": end[i],
            "pos": i+1
        }
        meetingsArr.push(meetingObj);
    }

    console.log("meetingsArr before sort--->", meetingsArr)

    meetingsArr.sort((a, b) => a.end - b.end);

    console.log("meetingsArr--->", meetingsArr)

    let meetingCount = 1;
    let ds = [meetingsArr[0]['pos']];
    let lastMeetingTime = meetingsArr[0]['end'];
    for(let i = 1; i < meetingsArr.length; i++){
        let meetingObj = meetingsArr[i];
        if(meetingObj['start'] > lastMeetingTime){
            meetingCount++;
            ds.push(meetingObj['pos']);
            lastMeetingTime = meetingObj['end'];
        }
    }

    console.log("ds--->", ds)
}

nMeetings([0, 3, 1, 5, 5, 8], [5, 4, 2, 9, 7, 9])