//URL of 5 initial countries
let url = "https://corona.lmao.ninja/v3/covid-19/countries/Spain,Italy,Germany,Poland,Finland"
//Our button selector
let btn = document.querySelector('#btn')
//Our input text field selector
let submit = document.querySelector('#cntry')

//we add the event listener on clicking the button, and we pass the function
//we created some lines down, to add the country
btn.addEventListener('click', addCountry)

//we implemented the same as in the click listener, but in case the user submits
//the value with pressing the ENTER key, so we check is the enter key pressed,
//we add the country with the same function, and the we cleared the field
submit.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
    addCountry()
    }
})

//function to add country
function addCountry(){
    //we save the value of our input field on a variable
    let inputValue = document.querySelector('#cntry').value

    //Then we update our url we had saved at top of the file, adding at the end a ,
    //and after that the value saved in the input field
    url += ',' + inputValue

    //And with this we just clear the field for the next input
    submit.value = ''

    //and on the docs of Bootstrap Table, we find out this function to refresh
    //the table, that we do every time we add the new value (country) on the url
    let $table = $('#table')
    $table.bootstrapTable('refresh', {
        url: url
    })
}

//Change color of background cell depending of value, that we applied on html with the
//attribute data-cell-style, where we just pass the name of our function
function cellColor(value){
    //We check if the value is less than 5500, we painted green
    if(value < 5500){
        return {
            classes: 'bg-success'
        }
    } 
    //We check if the value is less or queal than 10000, we painted yellow
    else if( value <= 10000){
        return {
            classes: 'bg-warning'
        }
    } 
    //And as last option, we just painted red
    else {
        return {
            classes: 'bg-danger'
        }
    }
}

//Small function to set the date on more normal format, that we pass in our html
//through the attribute data-formatter with the name of our function
function formatTime(e){
    let date = new Date(e)
    return date.toDateString()
}


