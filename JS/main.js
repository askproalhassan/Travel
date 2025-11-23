// navigation responsive
const menu = document.querySelectorAll('.bx-menu,.bx-exit')
const btnSigns = document.querySelector('.btn')
const navList = document.querySelector('.nav-links')
const colored= document.querySelector('.colored')

function menuClick(){
    menu.forEach((btns,numbs)=>{
        if(numbs === 0){
            btns.addEventListener('click',()=>{
                btnSigns.style.display='flex'
                navList.style.display='flex'; 
                menu[0].style.display='none'
                menu[1].style.display='flex'
                colored.classList.add('expand')
            })
        } else if(numbs === 1){
            btns.addEventListener('click',()=>{
                btnSigns.style.display='none'
                navList.style.display='none'
                menu[0].style.display='flex'
                menu[1].style.display='none'
                colored.classList.remove('expand')

            })
        }
    })

}menuClick();

// ----------------------------------------fetching cards product--------------------------

const cardsing = ()=>{
    fetch("jsons/cards.json")
    .then(response => {
        if(!response.ok){
            throw new Error('Could not fetch')
        }
        return response.json();
    })
    .then( data =>{
            const cards = document.querySelector('.cards');
            data.forEach(product=>{
                // appending cardlist into cards
                const cardList = document.createElement('div');
                cardList.id='cardlist'
                cards.append(cardList)

                // images
                const imageses = document.createElement('img');
                imageses.src= product.images;
                imageses.id='imgees';
                // product name
                const things = document.createElement('h2');
                things.id = 'products';
                things.innerHTML = product.weDO;
                // produt info
                const aboutThings = document.createElement('p');
                aboutThings.id = 'products-info';
                aboutThings.innerHTML = product.abitInfo;

                cardList.append(imageses,things,aboutThings)

                
            })
        }
        )
        .catch(error => console.error(error))
};cardsing();

//-------------------------------------view poiint styling --------------------------
function faderUp(){
    const hotel = document.querySelectorAll('.hotels')

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('fade-up')
            }
        })
    })
    hotel.forEach(element=>{
        observer.observe(element)
    })
}faderUp();







//---------------------------------------- fetching places--------------------------------

const places = () => {
    fetch("jsons/travelingPlaces.json")
        .then(response=>{
            if(!response.ok){
                throw new Error("Nothing was Fetch");
            }return response.json()
        })
        .then(rawData=>{
            const travelingPlaces = document.querySelector('.traveling-places')
            rawData.forEach(product =>{
                // appending place list into traveling palces
                const placesList = document.createElement('div');
                placesList.id='place-list';
                travelingPlaces.append(placesList);

                
                const listBoarder = document.createElement('div');
                listBoarder.id='list-boarder';
                
                // first country object
                 const countryInfo = product.country[0];
                 // first day object  
                 const dayInfo = product.days[0];  
                // images 
                const placeImg = document.createElement('img');
                placeImg.id = 'placesimg';
                placeImg.src = product.images;
                // country 
                const country = document.createElement('p');
                country.id = 'country';
                country.innerHTML = ` <span>${countryInfo.Cname}</span> ${countryInfo.price}`;
                // days 
                const days = document.createElement('h4');
                days.id = 'days';
                days.innerHTML = `<img src="${dayInfo.navigation}"> ${dayInfo.NaNDays}  `;

                // appinding all product placelist
                listBoarder.append(country,days)
                placesList.append(placeImg)
                placesList.append(listBoarder)
                
            })
        })
        .catch(error=> console.error(error))
};places();


// -------------------fecthing Booking cards --------------------
function BookingCard(){
    fetch("jsons/booking.json")
    .then(response => {
        if(!response.ok){
            throw new Error('Unable to fetch')
        }return response.json();
    })
    .then(dataFile => {
            const booking =  document.querySelector('.booking-cards');
            dataFile.forEach((book,numb) =>{
                const bookList = document.createElement('div');
                const buttonsInfor = book.buttons[0]
                bookList.id = "booking-list"
                // const buttonsInfo = book.buttons[0]

                 bookList.innerHTML =
                    `<img src="${book.image}" alt="img" class="booking-icon"> 
                    <div class="write"  >
                        <h4 class="choose">${book.buttons.name}</h4>
                        <p class="choose-discription"> ${book.buttons.lorem}</p> 
                     </div>`
                // --------------------linking booking card to their respective place
                const popup = document.querySelector('.popup')
                const logedin = document.querySelector('.logedin')

                const bookings =  document.querySelectorAll('#booking-list,#booking-list,#booking-list');
                bookings.forEach((bk,index)=>{
                    console.log(bk)
                    if(index === 0){
                        bk.addEventListener('click',()=>{
                            if(localStorage.getItem("mail") && localStorage.getItem("security")){
                                window.location.href='/bookings-steps/choose/choose.html';
                            }else{
                            setTimeout(() => {
                                        popup.style.visibility = 'visible';
                                        logedin.innerHTML = "Register or login"; // clear message
                                        // Hide popup again after 3 more seconds
                                        setTimeout(() => {
                                            popup.style.visibility = 'hidden';

                                    }, 3000);
                                }, 1000);
                            }

                        })
                    }else if(index === 1){
                            bk.addEventListener('click',()=>{
                            if(localStorage.getItem("mail") && localStorage.getItem("security")){
                                window.location.href='/bookings-steps/make-payment/make-payment.html';
                            }else{
                            setTimeout(() => {
                                        popup.style.visibility = 'visible';
                                        logedin.innerHTML = "Register or login"; // clear message
                                        // Hide popup again after 3 more seconds
                                        setTimeout(() => {
                                            popup.style.visibility = 'hidden';

                                    }, 3000);
                                }, 1000);
                            }

                        })
                    }else if(index === 2){
                                 bk.addEventListener('click',()=>{
                            if(localStorage.getItem("mail") && localStorage.getItem("security")){
                                window.location.href='/bookings-steps/reach/reach.html';
                            }else{
                            setTimeout(() => {
                                    alert('hello')
                                        popup.style.visibility = 'visible';
                                        logedin.innerHTML = "Register or login"; // clear message
                                        // Hide popup again after 3 more seconds
                                        setTimeout(() => {
                                            popup.style.visibility = 'hidden';

                                    }, 3000);
                                }, 1000);
                            }

                        })
                    }
                })
                        
                booking.append(bookList)
            })
        })
        
        
        .catch(error=>{console.error(error)})
       
};BookingCard()

// --------------------linking booking card to their respective place
// const joinkingCardsTOLinks = ()=>{
//     bookings.forEach((element,index)=>{
//         console.log(element)
//        if(index === 0){
//             element.windows.location.href='/bookings-steps/choose/choose.html'
//        }
//     })
// };joinkingCardsTOLinks();

//----------- making mouse over to display pop up
const popUp = document.querySelector('.pop-up');
const heart = document.querySelector('.bx-heart');

function hidePopUp(){
    heart.addEventListener('mouseover',()=>{
        popUp.style.visibility='visible';
        popUp.style.transform='translateY(0px)';
        popUp.style.opacity='1';

    })
    heart.addEventListener('mouseout',()=>{
        popUp.style.visibility='hidden';
        popUp.style.transform='translateY(30px)';
        popUp.style.opacity='0.1';

    })

};hidePopUp();

// ---------- SHowing like button
function liking(){
    heart.classList.toggle('like')
};heart.addEventListener('click',liking);


const persentage =  document.querySelector('.persentage');
const likes =  document.querySelector('.like');


//-------------------- fetching testimonial json ----------------
const layer2 = document.querySelector('.layer-2');
const testimonialCards = document.querySelector('.testimonial-cards');

    fetch("jsons/testimonial.json")
        .then(response => response.json())
        .then(dataInfo=>{
            dataInfo.forEach(testi=>{
                // where all cards have their own container
                const allINto = document.createElement('div')
                allINto.id = 'all-into'
                // cards items
                const pageImg = document.createElement('img');
                pageImg.src = testi.images;
                pageImg.id = 'page-Img';

                const page = document.createElement('p');
                 page.id = 'page';
                page.innerHTML = testi.words;

                const pageName = document.createElement('h3')
                pageName.id = 'page-name';
                pageName.innerHTML = testi.name;  
                
                const pageCountry = document.createElement('h4')
                pageCountry.id = 'page-country';
                pageCountry.innerHTML = testi.country;  
                

                allINto.append(pageImg,page,pageName,pageCountry)
                testimonialCards.append(allINto)
            })
})





const arrowUpAndDown = ()=>{
    
    const arrows = document.querySelectorAll('.arrows');

    arrows.forEach((element,index) =>{
        if(index === 0){
            element.addEventListener('click',()=>{
                if (typeof element.scrollBy === 'function') {
                    element.scrollBy({ top: 150, behavior: "smooth" });
                } else {
                    element.scrollTop = (element.scrollTop || 0) + 150;
                }
            })
        }
    })

};arrowUpAndDown();

// replacing login and signup to profile

function replacing(){
   const login = document.querySelector('.login'); 
   const signUp = document.querySelector('.signUp');
   if(localStorage.getItem("profile") && localStorage.getItem("first")){
        login.innerHTML = `<img class="myProfile" src="${localStorage.getItem("profile")}" alt='' >`
        signUp.innerHTML = localStorage.getItem("first");
        signUp.id = 'signup-btn';
   }
}replacing();