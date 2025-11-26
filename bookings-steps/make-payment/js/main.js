// adding profile
const profile = ()=> {
    const Myprofile = document.querySelector('.Myprofile')
    const profileName = document.querySelector('.profileName')

    Myprofile.src = localStorage.getItem('profile')
    profileName.innerHTML = localStorage.getItem('first')
};profile()


// seting date for tour
function setTiming(){
    setInterval(()=>{
        currentTime = new Date();
        x = currentTime.toLocaleString('en-US', {weekday:'long'})
        y = currentTime.toLocaleString('en-US', {month:'long'})
        z = currentTime.getFullYear()
        let Month = document.querySelector('.Month')
        let day = document.querySelector('.day')
        let year = document.querySelector('.year')
        Month.innerHTML = y
        day.innerHTML = x
        year.innerHTML = z
        
    },1000)

}setTiming()

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
    // let tourfees = document.querySelector('.tour-fees')
    // let discount = document.querySelector('.discount')
    
    // let changingPrice = document.querySelector('.changing-price')
    // let myFees =JSON.parse( localStorage.getItem('selectedImage'))
    
    //adding number of passenges to main value of price
    
};numbOfPassengers()




// tour details for selected tour
function tourDetails(){
    const countryName = document.querySelector('.country-name')
    const countrySeleccted = document.querySelector('.country-seleccted')
    let main = document.querySelector('.main')
    let blackBackground = document.querySelector('.black-background')

    
    const click = document.querySelector('.click i')
    console.log(click)
    
    
    let info = JSON.parse(localStorage.getItem("selectedImage"))
    // replacing with stored data on localstorage
    if(!info){
            blackBackground.style.visibility='visible'
        click.addEventListener('click',()=>{
            window.location.href = '/bookings-steps/choose/choose.html'
            console.log('worked')
        })
    }
    else{
        countryName.innerHTML = info.country
        countrySeleccted.src = info.src
    }

  


}tourDetails();
