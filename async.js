const nationMeasures = async()=>{
    //first fetching the data from the api:
    let fetchData = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    //then converting the data to something the program can read:
    let jsonfetchData = await fetchData.json()
    //tracing the data(accesing it)
    let nationData = jsonfetchData.data
    //filtering the data, looping through the array, using .map method so we can display what we want:
    let filternationData = nationData.map(citizen=>`<li>ID Nation:${citizen.IDNation}.....Nation:${citizen.Nation}.....ID Year:${citizen.ID_Year}....Year:${citizen.Year}.....Population:${citizen.Population}....Slug Nation:${citizen.SlugNation}</li><br>`)
    //returning a result and documenting on your HTML:
    
    return document.body.innerHTML = filternationData.join('')
    

}

nationMeasures()