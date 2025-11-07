//------------------------ dropdown------------------------------------------
function listDropDown(){
    const collections = document.querySelector('.ct')
    collections.addEventListener('click',()=>{
        collections.classList.toggle('close')
    })
    //------------------------ dropdown fpr price---------------------------
    const price = document.querySelector('.price')
    price.addEventListener('click',()=>{
        price.classList.toggle('open')
    })
};listDropDown();

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
            culture.append(product)
        }
    
    )   
    )

     .catch(error=>console.error('Can not fetch'))



// ------------------------------ fetch for water Adventure---------------------------
    const water = document.querySelector('.water')
    const waterAdventure = document.querySelector('.water-adventure')
    fetch("locational-jsons/water.json")
      .then(response =>{
        if(!response.ok){
            throw new Error('Could not fetch');
            
        }return response.json();
     })
     .then(data2 =>data2.forEach(element =>{
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
            waterAdventure.append(product)
     }))
     .catch(error=>console.error('Can not fetch'))
// ------------------------------ fetch for water Adventure---------------------------
    const sport = document.querySelector('.Sport-product')
    fetch("locational-jsons/sport.json")
      .then(response =>{
        if(!response.ok){
            throw new Error('Could not fetch');
            
        }return response.json();
     })
     .then(data2 =>data2.forEach(element =>{
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
            sport.append(product)
     }))
     .catch(error=>console.error('Can not fetch'))
// ------------------------------ fetch for water Adventure---------------------------
    const adventure = document.querySelector('.adventure-product')
    fetch("locational-jsons/sport.json")
      .then(response =>{
        if(!response.ok){
            throw new Error('Could not fetch');
            
        }return response.json();
     })
     .then(data2 =>data2.forEach(element =>{
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
            adventure.append(product)
     }))
     .catch(error=>console.error('Can not fetch'))
// ------------------------------ fetch for water Adventure---------------------------
    const mountain = document.querySelector('.mountains-product')
    fetch("locational-jsons/mountain.json")
      .then(response =>{
        if(!response.ok){
            throw new Error('Could not fetch');
            
        }return response.json();
     })
     .then(data2 =>data2.forEach(element =>{
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
            mountain.append(product)
     }))
     .catch(error=>console.error('Can not fetch'))

};cards();





// linking name and image local storage
function nameAndImage(){
    const Profile = document.querySelector('.me');
    const Myname = document.querySelector('.Fname');
    if(localStorage.getItem('profile') && localStorage.getItem('first')){
        
        Profile.src = localStorage.getItem('profile');
        Myname.innerText = localStorage.getItem('first');
    }
};nameAndImage();