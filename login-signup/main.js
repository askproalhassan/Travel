// fetcing
function fetching(){
    const maxImg = document.getElementById('max-img')
    const changer = document.querySelector('.changer');
    fetch("json/shower.json")
        .then(response => response.json())
        .then(data =>{
            data.forEach(element => {
                const miniImg = document.createElement('div');
                miniImg.id = "mini-img";
                miniImg.innerHTML = `<h3 class="Subtitle">${element.start}</h3>
                                    <img src="${element.images}" class="traveler">`
                maxImg.append(miniImg)
                changer.append(maxImg)
            });

            
            // making images changes 
            const imgs = document.querySelectorAll('#mini-img')
            let index = 0;
            setInterval(()=>{
                imgs[index].style.display='none';
                index = index + 1;
                if(index === imgs.length) index = 0

                imgs[index].style.display='block'
            },4000)
        })

        .catch(error =>console.error(error));
};fetching();
// making images change
const switchingElement = () =>{
    const btns = document.querySelectorAll('.btns');
    const showImgs = document.querySelectorAll('.maxImg'); // assuming multiple elements with class 'max-img'

    // // selecting by botton
    // btns.forEach((el,ind)=>{
    //     el.addEventListener('click',()=>{
    //         showImgs.forEach(picture=>{
    //             picture.style.visibility='hidden'
    //         })
    //         if(ind === 0){
    //             showImgs[0].style.visibility = 'visible';
    //         }
    //         else if(ind === 1){
    //             showImgs[0].style.visibility = 'visible';            }
    //         else if(ind === 2){
    //             showImgs[0].style.visibility = 'visible';            }
    //     })
    // });
  
};switchingElement();




// hide and show btn
function hideAndshow(){
    const hide = document.querySelector('.bx-hide');
    const shows = document.querySelector('.bx-show');
    const password = document.querySelector('.inputs1');
    // labels
    const labels = document.querySelectorAll('.labels')
    // inpus
const inputs = document.querySelectorAll('[id="place"]');
    console.log(inputs)
    // moving labels on inputs
    inputs.forEach((input,numb )=>{
        if(numb === 0){  
            input.addEventListener('input', () => {
            labels.forEach((label, nb) => {
            if (nb === numb) {
                 if (input.value.trim() !== '') {
                // keep label up
                label.style.transform = 'translateY(-25px)';
                label.style.borderLeft = '1px solid black';
                                label.style.borderRight = '1px solid black';
                label.style.padding = '0px 10px';
                label.style.background = 'white';
                label.style.color = 'rgb(174, 176, 179)';
            } else {
                // drop label back if empty
                label.style.transform = 'translateY(0)';
                label.style.borderLeft = 'none';
                label.style.borderRight = 'none';
                label.style.padding = 'unset';
                label.style.background = 'none';
                label.style.color = 'black';
            }
        }
    });
});

        }
        else if(numb === 1){
             input.addEventListener('click',()=>{
                labels.forEach((label, nb )=>{
                    if(nb === 1){
                        label.style.transform = 'translateY(-25px)'
                        label.style.borderLeft = '1px solid black'
                        label.style.borderRight = '1px solid black'
                        label.style.padding = '0px 10px'
                        label.style.background= 'white'
                        label.style.color= 'rgb(174, 176, 179)';

                    }
                    else if(input.value !== ''){
                        label.style.transform = 'translateY(-25px)'
                        label.style.borderLeft = '1px solid black'
                        label.style.borderRight = '1px solid black'
                        label.style.padding = '0px 10px'
                        label.style.background= 'white'
                        label.style.color= 'rgb(174, 176, 179)';
                    }
                    else{
                        label.style.transform = 'translateY(0)'
                        label.style.borderLeft = 'none'
                        label.style.borderRight = 'none'
                        label.style.padding = 'unset'
                        label.style.background= 'none'
                        label.style.color= 'black';
                    }
                })
            
            })
        }
   })
    // showing view and hide icons on log in
   hide.addEventListener('click',()=>{
        if(password.type === 'password'){
            hide.style.visibility='hidden'
            shows.style.visibility='visible'
            password.type = 'text'
        }
   })
   shows.addEventListener('click',()=>{
        if(password.type === 'text'){
            shows.style.visibility='hidden'
            hide.style.visibility='visible'
            password.type = 'password'
        }
   })
};hideAndshow();

// getting stored data
const storedData = () =>{
    // inputs
    const mail = document.querySelector('.mail')
    const security = document.querySelector('.security')
    // popup
    const popup = document.querySelector('.popup')
    const logedin = document.querySelector('.logedin')

    // submittion bt 
    const submit = document.querySelector('.submit')
    submit.addEventListener('click',(event)=>{
            event.preventDefault(); //  stop form from refreshing

        if(mail.value === localStorage.getItem("mail") && security.value === localStorage.getItem("security")){
            setTimeout(() => {
        popup.style.visibility = 'visible';
        // Hide popup again after 3 more seconds
        setTimeout(() => {
            popup.style.visibility = 'hidden';
            window.location.href='/index.html'
        }, 5000);
    }, 1000);
}
        else{
        setTimeout(() => {
            popup.style.visibility = 'visible';
            logedin.innerHTML = "Wrong address"; // clear message
            // Hide popup again after 3 more seconds
            setTimeout(() => {
                popup.style.visibility = 'hidden';

        }, 3000);
      }, 1000);
        }
    })
};storedData();

