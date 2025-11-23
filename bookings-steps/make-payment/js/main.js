// seting date for tour
setInterval(()=>{
    currentTime = new Date();
    x = currentTime.toLocaleString('en-US', {weekday:'long'})
    y = currentTime.toLocaleString('en-US', {month:'long'})
    z = currentTime.getFullYear()
    console.log(x,y,z)
    const Month = document.querySelector('.Month')
    const day = document.querySelector('.day')
    const year = document.querySelector('.year')
    Month.innerHTML = y
    day.innerHTML = x
    year.innerHTML = z
    
},1000)

// number of passengers
function numbOfPassengers(){
    const btn = document.querySelector('.passenger i')
    const numberInputs = document.querySelector('#number-inputs')
    const dark = document.querySelector('.dark')
    const numbs = document.querySelector('.numbs')
    // displaying dark background
    btn.addEventListener('click',()=>{
        numberInputs.style.visibility = 'visible'
        dark.style.visibility = 'visible'
    })
    
    //turning of displaying dark background
    dark.addEventListener('click',()=>{
        numberInputs.style.visibility = 'hidden'
        dark.style.visibility = 'hidden'
    })
    // number of rooms and bed for guess
    const rooms = document.querySelectorAll('.a-room')
    // geting peoples number
    numberInputs.addEventListener('click',()=>{
        
        numbs.innerHTML = numberInputs.value
        rooms.forEach(element => {
            element.innerHTML = numberInputs.value
        });
    })



// displaying the original fees 
    let tourfees = document.querySelector('.tour-fees')
    let discount = document.querySelector('.discount')
    
    let changingPrice = document.querySelector('.changing-price')
    let myFees =JSON.parse( localStorage.getItem('selectedImage'))
    console.log(myFees)
    
    tourfees.innerHTML = myFees.price;
    //adding number of passenges to main value of price
    
};numbOfPassengers()




// tour details for selected tour
function tourDetails(){
    const countryName = document.querySelector('.country-name')
    const countrySeleccted = document.querySelector('.country-seleccted')
    
    let info = JSON.parse(localStorage.getItem("selectedImage"))
    // replacing with stored data on localstorage
    countryName.innerHTML = info.country
    countrySeleccted.src = info.src

}tourDetails();
