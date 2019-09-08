// {
//     event: ,
//     location: ,
//     time: ,
//     details: 
// }
var BurningMan = {
	EventDates: "08-23-2019 - 09-07-2019",
	Calendar: [
        {
            date: new Date("08-23-2019"),
            notable: [
                {
                    event: "Board Megabus",
                    location: "N. Delaware St. between E. Market St. & E Wabash St.",
                    time: "2:35 a.m.",
                    details: "On Our Way!"
                },
                {
                    event: "Arrive in Chicago",
                    location: "W. Polk St. between S. Clinton St. & S. Canal St.",
                    time: "4:50 a.m.",
                    details: "Made it to Chicago :)"
                },
                {
                    event: "Board Amtrak Train #5: California Zephyr",
                    location: "Chicago Train Station",
                    time: "2:00 p.m.",
                    details: "Reservation #B14108"
                }
            ]
        },
        {
            date: new Date("08-24-2019"),
            notable: [
                {
                    event: "Ride Train",
                    location: "The Train",
                    time: "",
                    details: "On Our Way!"     
                }
            ]
        }
	]
}
applyDates(BurningMan.EventDates)
buildList(BurningMan.Calendar)
function applyDates(event){
    document.getElementById("dates").innerText = event
}
function buildList(arr){
    let calendar = document.getElementById("calendar")
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let item = document.createElement("li")
        let heading = document.createElement("h2")
        item.appendChild(heading)
        item.appendChild(document.createElement("hr"))
        heading.innerText = element.date
        for (let j = 0; j < element.notable.length; j++) {
            let currentEvent = element.notable[j]
            let event = document.createElement("h4")
            let location = document.createElement("h5")
            let time = document.createElement("h5")
            let details = document.createElement("h6")
            item.appendChild(event)
            item.appendChild(location)
            item.appendChild(time)
            item.appendChild(details)
            event.innerText = currentEvent.event
            location.innerText = currentEvent.location
            time.innerText = currentEvent.time
            details.innerText = currentEvent.details
        }
        calendar.appendChild(item)
    }
}