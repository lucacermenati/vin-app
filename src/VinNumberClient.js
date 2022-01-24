import $ from 'jquery';

export const getCarInfo = async () => {
    const plate = document.getElementById("input-license").value
    $.get( "http://localhost:8000/car?plate=" + plate, function( response ) {
        
        document.querySelector("#trade-name p").innerHTML = response.merk + " "  + response.handelsbenaming;
        
        document.querySelector("#date-first-admission p").innerHTML = response.datumEersteAfgifteNederlandDt;
        
        let content = ""
        response.fuels.forEach((fuel) => {
            content = content + fuel.brandstofOmschrijving + " "
        })
        
        document.querySelector("#fuel-description p").innerHTML = content
    });
}