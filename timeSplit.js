// Expects Start, End inputs as "06:00 AM", "05:30 PM" respectively. Interval as minute integer.
// Uses minutes to calculate intervals and push to array. Returns array of strings of calculated times.
function splitTime(start, end, interval){
    let times = []
    let ap = ['AM', 'PM']
    let endArray = end.split(/[:| ]/)
    let startArray = start.split(/[:| ]/)

    if (endArray[2] == 'PM') endArray[0] = Number(endArray[0]) + 12
    if (startArray[2] == 'PM') startArray[0] = Number(startArray[0]) + 12

    if (endArray[0]+endArray[1] < startArray[0]+startArray[1]) return 'Fail: End Time before Start Time'
    if (interval <= 1) return 'Fail: Interval must be a positive whole number.'

    let tk = startArray[0]*60
    let te = Number(endArray[0]*60) + Number(endArray[1])

    for(let i=0; tk<te; i++){
        var hh = Math.floor(tk/60);
        var mm = (tk%60);
        times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)];
        tk = tk + interval;
    }
    return times
}
