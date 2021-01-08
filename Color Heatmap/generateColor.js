// An Example of a specified heat map and color generator.
// Using jQuery element selector.
// JavaScript math will leave you with some ~slightly~ incorrect numbers as shown in the first console.log

function getHeatMapColor(value, target){
    const heatMap = [
        '0000d5',
        '002aff',
        '007fff',
        '00d5ff',
        '29ffd6',
        '7eff81',
        'd2ff2d',
        'ffd800',
        'ff8400',
        'ff2e00',
        'd90000'
    ]
    let upper = heatMap[Math.min(10, Math.ceil(Math.abs(value)))].match(/.{1,2}/g)
    let lower = heatMap[Math.max(0, Math.floor(Math.abs(value)))].match(/.{1,2}/g)
    const position = Math.abs(value) - Math.floor(Math.abs(value))

    console.log('Low: ', lower, 'Up: ', upper, 'Pos: ', position)

    let calcBg = [
        (1 - position) * parseInt(lower[0], 16) + position * parseInt(upper[0], 16),
        (1 - position) * parseInt(lower[1], 16) + position * parseInt(upper[1], 16),
        (1 - position) * parseInt(lower[2], 16) + position * parseInt(upper[2], 16)
    ]
    
    $(target).css('background', 'rgba('+calcBg.join(',')+', .5)')
    $(target).text(calcBg)
}

console.log(Math.abs(8.445) - Math.floor(Math.abs(8.445)))
getHeatMapColor(8.445)