// Expects Start, End inputs as "06:00 AM", "05:30 PM" respectively. Interval as minute integer.
// Uses minutes to calculate intervals and push to array. Returns array of strings of calculated times.
function splitTime(start, end, interval){
    let times = []
    let endArray = end.split(/[:| ]/)
    let startArray = start.split(/[:| ]/)

    if (endArray[2] == 'PM') endArray[0] = Number(endArray[0]) + 12
    if (startArray[2] == 'PM') startArray[0] = Number(startArray[0]) + 12

    if (endArray[0]+endArray[1] < startArray[0]+startArray[1]) return 'Fail: End Time before Start Time'
    if (interval <= 1) return 'Fail: Interval must be a positive whole number.'

    let ts = startArray[0]*60
    let te = Number(endArray[0]*60) + Number(endArray[1])

    for(let i=0; ts<=te; i++){
        let hh = Math.floor(ts/60);
        let mm = (ts%60);
        times[i] = ("" + ((hh==12)?12:"0"+hh%12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ' ' + (Math.floor(hh/12) < 1 ? 'AM' : 'PM');
        ts += interval;
    }
    return times
}

// With Moment JS:
// https://momentjs.com/
function splitTime(start, end, interval){
    let times = []
    let st = moment(this.minutesToReadable(start), "hh:mm A")
    let et = moment(this.minutesToReadable(end), "hh:mm A")
    let int = parseInt(interval)

    while(st < et){
        times.push(st.format("hh:mm A"))
        st.add(int, 'minutes')
    }
    return times
}

function readableToMinutes(readableTime) {
    return moment.duration(moment(readableTime, "HH:mm:ss").format("HH:mm")).asMinutes()
}

function minutesToReadable(minutes){
    return moment.startOf('day').add(minutes, 'minutes').format('hh:mm A')
}

// Just some bitwise operations
function setBitList(id, count = false){
    const list = []
    for(let i = 1; i <= id; i = i*2){
        list.push(i)
    }
    if(count) return list.length
    return list
}

