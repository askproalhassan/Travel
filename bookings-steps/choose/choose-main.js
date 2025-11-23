function listDropDown(){
    //------------------------max and min slider---------------------------
    const slideMenu = document.querySelector('#slide-menu')
    const sliderAnimation = document.querySelector('.slider')
    slideMenu.addEventListener('click',()=>{
        sliderAnimation.classList.toggle('closed')
    })
    //------------------------ dropdown fpr price---------------------------
    const price = document.querySelector('.price')
    price.addEventListener('click',()=>{
        price.classList.toggle('open')
    })
};listDropDown();

// ==============================culture===========================
const cards = () =>{
    const productPlace = document.querySelector('.main-work')
    const culture = document.querySelector('.cultured')
    fetch("locational-jsons/location.json")
     .then(response =>{
        if(!response.ok){
            throw new Error('Could not fetch');
            
        }return response.json();
     })
     .then(data =>data.forEach(element => {

        // ------------------------------ fetch for culture---------------------------
            const product = document.createElement('div');
            product.id = 'product';

            const countryinfo = element.country[0];
            const daysinfo = element.days[0]
            product.innerHTML = `
                                    <img src="${element.images}" alt = "image"class="country-image"></img>
                                    <div class= "border">
                                        <div class="countries">
                                            <h4 class="country-name">${countryinfo.Cname}</h4>
                                            <h4 class="country-price"> ${countryinfo.price}</h4> 
                                        </div>
                                        <div class="number-of-days">
                                            <h3 class="icon">${daysinfo.navigation}</h3>
                                            <h3 class="days-left">${daysinfo.NaNDays}</h3>
                                            <h4 class="rating"></h4>
                                        </div> 
                                     </div>` 
                                 ;
                                 // storing data
                                 function storingData(){
                                     const icon = product.querySelector('.icon');
                                      const img = product.querySelector('.country-image');
                                      const popup= document.querySelector('.popup');
                                      const logedin= document.querySelector('.logedin');


                                        // Add click event to THIS icon only
                                        icon.addEventListener('click', () => {
                                            const imageData = {
                                                src: img.src,
                                                country: countryinfo.Cname,
                                                price: countryinfo.price
                                            };

                                            // Store image data in localStorage (or sessionStorage)
                                            localStorage.setItem('selectedImage', JSON.stringify(imageData));
                                            setTimeout(()=>{
                                                popup.style.visibility='visible'
                                                logedin.innerHTML = `${imageData.country} added to cart`
                                                setTimeout(()=>{
                                                    popup.style.visibility='hidden'
                                                    
                                                },3000)
                                            },1000)
                                           
                                        });

                                        
                                       
                                    };storingData();
                                 culture.append(product);
                                }
                                
                            ))


.catch(error=>console.error(error))



};cards();
// ==============================exploire===========================
const exploire = () =>{
    const productPlace = document.querySelector('.main-work')
    const culture = document.querySelector('.exploire')
    fetch("locational-jsons/adventure.json")
     .then(response =>{
        if(!response.ok){
            throw new Error('Could not fetch');
            
        }return response.json();
     })
     .then(data =>data.forEach(element => {

        // ------------------------------ fetch for culture---------------------------
            const product = document.createElement('div');
            product.id = 'product';

            const countryinfo = element.country[0];
            const daysinfo = element.days[0]
            product.innerHTML = `
                                    <img src="${element.images}" alt = "image"class="country-image"></img>
                                    <div class= "border">
                                        <div class="countries">
                                            <h4 class="country-name">${countryinfo.Cname}</h4>
                                            <h4 class="country-price"> ${countryinfo.price}</h4> 
                                        </div>
                                        <div class="number-of-days">
                                            <h3 class="icon">${daysinfo.navigation}</h3>
                                            <h3 class="days-left">${daysinfo.NaNDays}</h3>
                                            <h4 class="rating"></h4>
                                        </div> 
                                     </div>` 
                                 ;
                                 // storing data
                                 function storingData(){
                                      const icon = product.querySelector('.icon');
                                      const img = product.querySelector('.country-image');
                                      const popup= document.querySelector('.popup');
                                      const logedin= document.querySelector('.logedin');


                                        // Add click event to THIS icon only
                                        icon.addEventListener('click', () => {
                                            const imageData = {
                                                src: img.src,
                                                country: countryinfo.Cname,
                                                price: countryinfo.price
                                            };

                                            // Store image data in localStorage (or sessionStorage)
                                            localStorage.setItem('selectedImage', JSON.stringify(imageData));
                                            setTimeout(()=>{
                                                popup.style.visibility='visible'
                                                logedin.innerHTML = `${imageData.country} added to cart`
                                                setTimeout(()=>{
                                                    popup.style.visibility='hidden'
                                                    
                                                },3000)
                                            },1000)
                                           
                                        });

                                        
                                       
                                    };storingData();
                                 culture.append(product);
                                }
                                
                            ))


.catch(error=>console.error(error))



};exploire();
// ==============================exploire===========================
const mountain = () =>{
    const productPlace = document.querySelector('.main-work')
    const culture = document.querySelector('.mountain')
    fetch("locational-jsons/mountain.json")
     .then(response =>{
        if(!response.ok){
            throw new Error('Could not fetch');
            
        }return response.json();
     })
     .then(data =>data.forEach(element => {

        // ------------------------------ fetch for culture---------------------------
            const product = document.createElement('div');
            product.id = 'product';

            const countryinfo = element.country[0];
            const daysinfo = element.days[0]
            product.innerHTML = `
                                    <img src="${element.images}" alt = "image"class="country-image"></img>
                                    <div class= "border">
                                        <div class="countries">
                                            <h4 class="country-name">${countryinfo.Cname}</h4>
                                            <h4 class="country-price"> ${countryinfo.price}</h4> 
                                        </div>
                                        <div class="number-of-days">
                                            <h3 class="icon">${daysinfo.navigation}</h3>
                                            <h3 class="days-left">${daysinfo.NaNDays}</h3>
                                            <h4 class="rating"></h4>
                                        </div> 
                                     </div>` 
                                 ;
                                 // storing data
                                 function storingData(){
                                      const icon = product.querySelector('.icon');
                                      const img = product.querySelector('.country-image');
                                      const popup= document.querySelector('.popup');
                                      const logedin= document.querySelector('.logedin');


                                        // Add click event to THIS icon only
                                        icon.addEventListener('click', () => {
                                            const imageData = {
                                                src: img.src,
                                                country: countryinfo.Cname,
                                                price: countryinfo.price
                                            };

                                            // Store image data in localStorage (or sessionStorage)
                                            localStorage.setItem('selectedImage', JSON.stringify(imageData));
                                            setTimeout(()=>{
                                                popup.style.visibility='visible'
                                                logedin.innerHTML = `${imageData.country} added to cart`
                                                setTimeout(()=>{
                                                    popup.style.visibility='hidden'
                                                    
                                                },3000)
                                            },1000)
                                           
                                        });

                                       
                                    };storingData();
                                 culture.append(product);
                                }
                                
                            ))


.catch(error=>console.error(error))



};mountain();
// ==============================sport===========================
const sport = () =>{
    const productPlace = document.querySelector('.main-work')
    const culture = document.querySelector('.sport')
    fetch("locational-jsons/sport.json")
     .then(response =>{
        if(!response.ok){
            throw new Error('Could not fetch');
            
        }return response.json();
     })
     .then(data =>data.forEach(element => {

        // ------------------------------ fetch for culture---------------------------
            const product = document.createElement('div');
            product.id = 'product';

            const countryinfo = element.country[0];
            const daysinfo = element.days[0]
            product.innerHTML = `
                                    <img src="${element.images}" alt = "image"class="country-image"></img>
                                    <div class= "border">
                                        <div class="countries">
                                            <h4 class="country-name">${countryinfo.Cname}</h4>
                                            <h4 class="country-price"> ${countryinfo.price}</h4> 
                                        </div>
                                        <div class="number-of-days">
                                            <h3 class="icon">${daysinfo.navigation}</h3>
                                            <h3 class="days-left">${daysinfo.NaNDays}</h3>
                                            <h4 class="rating"></h4>
                                        </div> 
                                     </div>` 
                                 ;
                                 // storing data
                                 function storingData(){
                                       const icon = product.querySelector('.icon');
                                      const img = product.querySelector('.country-image');
                                      const popup= document.querySelector('.popup');
                                      const logedin= document.querySelector('.logedin');


                                        // Add click event to THIS icon only
                                        icon.addEventListener('click', () => {
                                            const imageData = {
                                                src: img.src,
                                                country: countryinfo.Cname,
                                                price: countryinfo.price
                                            };

                                            // Store image data in localStorage (or sessionStorage)
                                            localStorage.setItem('selectedImage', JSON.stringify(imageData));
                                            setTimeout(()=>{
                                                popup.style.visibility='visible'
                                                logedin.innerHTML = `${imageData.country} added to cart`
                                                setTimeout(()=>{
                                                    popup.style.visibility='hidden'
                                                    
                                                },3000)
                                            },1000)
                                           
                                        });

                                       
                                    };storingData();
                                 culture.append(product);
                                }
                                
                            ))


.catch(error=>console.error(error))



};sport();

// ==============================sport===========================
const water = () =>{
    const productPlace = document.querySelector('.main-work')
    const culture = document.querySelector('.water')
    fetch("locational-jsons/water.json")
     .then(response =>{
        if(!response.ok){
            throw new Error('Could not fetch');
            
        }return response.json();
     })
     .then(data =>data.forEach(element => {

        // ------------------------------ fetch for culture---------------------------
            const product = document.createElement('div');
            product.id = 'product';

            const countryinfo = element.country[0];
            const daysinfo = element.days[0]
            product.innerHTML = `
                                    <img src="${element.images}" alt = "image"class="country-image"></img>
                                    <div class= "border">
                                        <div class="countries">
                                            <h4 class="country-name">${countryinfo.Cname}</h4>
                                            <h4 class="country-price"> ${countryinfo.price}</h4> 
                                        </div>
                                        <div class="number-of-days">
                                            <h3 class="icon">${daysinfo.navigation}</h3>
                                            <h3 class="days-left">${daysinfo.NaNDays}</h3>
                                            <h4 class="rating"></h4>
                                        </div> 
                                     </div>` 
                                 ;
                                 // storing data
                                 function storingData(){
                                  
                                       const icon = product.querySelector('.icon');
                                      const img = product.querySelector('.country-image');
                                      const popup= document.querySelector('.popup');
                                      const logedin= document.querySelector('.logedin');


                                        // Add click event to THIS icon only
                                        icon.addEventListener('click', () => {
                                            const imageData = {
                                                src: img.src,
                                                country: countryinfo.Cname,
                                                price: countryinfo.price
                                            };

                                            // Store image data in localStorage (or sessionStorage)
                                            localStorage.setItem('selectedImage', JSON.stringify(imageData));
                                            setTimeout(()=>{
                                                popup.style.visibility='visible'
                                                logedin.innerHTML = `${imageData.country} added to cart`
                                                setTimeout(()=>{
                                                    popup.style.visibility='hidden'
                                                    
                                                },3000)
                                            },1000)
                                           
                                        });

                                        
                                       
                                    };storingData();
                                 culture.append(product);
                                }
                                
                            ))


.catch(error=>console.error(error))



};water();






// linking name and image local storage
function nameAndImage(){
    const Profile = document.querySelector('.me');
    const Myname = document.querySelector('.Fname');
    if(localStorage.getItem('profile') && localStorage.getItem('first')){
        
        Profile.src = localStorage.getItem('profile');
        Myname.innerText = localStorage.getItem('first');
    }
};nameAndImage();


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

   