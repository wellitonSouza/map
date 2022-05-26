export function faturamentoMinimo(value){
    value = parseFloat(value);
    return value < 15000;
}


export function locationsLimit(value, location){
    const start = (value*10)-10;
    const end = (value * 10);
    return location.length > 10 ? location.slice(start, end) : location;
}

export function findLoja(name, location){
    const busca = new RegExp(name.toLowerCase(), 'g');
    const newLocation = [];
    location.forEach( info => {
        if(info.name.toLowerCase().match(busca)){
            newLocation.push(info)
        }
    });
    return newLocation;
}


export function findFaturamento(value, location){
    const newLocation = [];
    location.forEach( info => {
        if(info.revenue < value){
            newLocation.push(info)
        }
    });
    return newLocation;
}


export function pagesIndex(length){
    const page = [];
    let cont = 1;
    while(cont <= length){
        page.push(cont);
        cont++
    }
    return page
}