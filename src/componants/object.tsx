const allData = [
    {path:'./src/componants/cardPictures/1.webp',name:'Wainting', uniqid:1},
    {path:'./src/componants/cardPictures/2.webp',name:'Bar', uniqid:2},
    {path:'./src/componants/cardPictures/3.webp',name:'Shooting', uniqid:3},
    {path:'./src/componants/cardPictures/4.webp',name:'Whisky', uniqid:4},
    {path:'./src/componants/cardPictures/5.webp',name:'Gun', uniqid:5},
    {path:'./src/componants/cardPictures/6.webp',name:'Color', uniqid:6},
    {path:'./src/componants/cardPictures/7.webp',name:'Smoking', uniqid:7},
    {path:'./src/componants/cardPictures/8.webp',name:'Call', uniqid:8},
    {path:'./src/componants/cardPictures/9.webp',name:'Stretching', uniqid:9},
    {path:'./src/componants/cardPictures/10.webp',name:'Watching', uniqid:10},
    {path:'./src/componants/cardPictures/11.webp',name:'Leaving', uniqid:11},
    {path:'./src/componants/cardPictures/12.webp',name:'End', uniqid:12}
]


export function alea () {

    var aleaArray:any = []
    var dataFilter:any = allData

    if(aleaArray.length >= 1) return
    
    function random (max:number, min:number) {
        return Math.floor(Math.random()*(max-min+1)+min)
    }

    for(let i=12;i>0;i--){
        let randomNumber = random(i-1,0);
        aleaArray.push(dataFilter[randomNumber]);
        let dataAtStart = (dataFilter.slice(0,randomNumber));
        let dataAtEnd = (dataFilter.slice(randomNumber+1, dataFilter.length))
        dataFilter = dataAtEnd.concat(dataAtStart)
    }

    return aleaArray
}


