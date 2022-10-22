const hamburger = document.querySelector('.mobile-menu .navMenu');
const mobileDisplay = document.querySelector('.mobile-display');
const cancel = document.querySelector('.cancel-icon');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('#mobile-nav');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const cancelsModal = document.querySelector('.cancels');
const works = document.querySelector('#cards');



hamburger.addEventListener('click', () => {
  mobileDisplay.classList.add('show');
  body.classList.add('overflowHidden');
});

cancel.addEventListener('click', () => {
  mobileDisplay.classList.remove('show');
  body.classList.remove('overflowHidden');
});

mobileLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobileDisplay.classList.remove('show');
    body.classList.remove('overflowHidden');
  });
});

const projects = [
  {
    id: 0,
    name: {
      mobile: 'Tonic',
      desktop: 'Tonic',
    },
    stack: {
      mobile:  ['CANOPY', 'Back End Dev', 2015],
      desktop: ['FACEBOOK', 'Full Stack Dev', 2015],
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: {
      mobile: 'images/snap10.png',
      desktop: 'images/Snapshoot_Portfolio.png',
    },
    technologies: {
      mobile: ['html', 'css', 'javascript'],
      desktop: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    },
    linkToLiveVersion: 'https://francis3400.github.io/',
    linkToSource: 'https://github.com/francis3400/francis3400.github.io/',
    imageAtTheLeft:false
  },
  {
    id: 1,
    name: {
      mobile: 'Multi-Post Stories',
      desktop: 'Multi-Post Stories',
    },
    stack: {
      mobile:  ['CANOPY', 'Back End Dev', 2015],
      desktop: ['FACEBOOK', 'Full Stack Dev', 2015],
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: {
      mobile: 'images/snapshot2.png',
      desktop: 'images/photo2.png',
    },
    technologies: {
      mobile: ['html', 'css', 'javascript'],
      desktop: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    },
    linkToLiveVersion: 'https://francis3400.github.io/',
    linkToSource: 'https://github.com/francis3400/francis3400.github.io/',
    imageAtTheLeft:true
  },
  {
    id: 2,
    name: {
      mobile: 'Tonic',
      desktop: 'Facebook 360',
    },
    stack: {
      mobile:  ['CANOPY', 'Back End Dev', 2015],
      desktop: ['FACEBOOK', 'Full Stack Dev', 2015],
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: {
      mobile: 'images/snapshoot3.png',
      desktop: 'images/snap2.png',
    },
    technologies: {
      mobile: ['html', 'css', 'javascript'],
      desktop: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    },
    linkToLiveVersion: 'https://francis3400.github.io/',
    linkToSource: 'https://github.com/francis3400/francis3400.github.io/',
    imageAtTheLeft:false
  },
  {
    id: 3,
    name: {
      mobile: 'Multi-Post Stories',
      desktop: 'Uber Navigation',
    },
    stack: {
      mobile:  ['CANOPY', 'Back End Dev', 2015],
      desktop: ['Uber', 'Lead Developer', 2018],
    },
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: {
      mobile: 'images/snapshot4.png',
      desktop: 'images/snap3.png',
    },
    technologies: {
      mobile: ['html', 'css', 'javascript'],
      desktop: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    },
    linkToLiveVersion: 'https://francis3400.github.io/',
    linkToSource: 'https://github.com/francis3400/francis3400.github.io/',
    imageAtTheLeft:true
  },
];

buildProjectSession(projects)

openModal()

function openModal(
  id=0,
  name= {
    mobile: 'Multi-Post Stories',
    desktop: 'Uber Navigation',
  },
  stack={
    mobile:  ['CANOPY', 'Back End Dev', 2015],
    desktop: ['Uber', 'Lead Developer', 2018],
  },
  description="qqqqqqqqqqqqq",
  images=  {
    mobile: 'images/snap10.png',
    desktop: 'images/Snapshoot_Portfolio.png',
  },
  technologies={
    mobile: ['html', 'css', 'javascript'],
    desktop: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
  },
  linkToLiveVersion= 'https://francis3400.github.io/',
  linkToSource= 'https://github.com/francis3400/francis3400.github.io/',
)  {
  let display = '';


  //modal.classList.add('showModal');
  display += `
  <div>
  <h2 class="main-text">${isMobile()? name.mobile:name.desktop}</h2>
  </div>

  <ul class="tonicListQ">`
  console.log("****************************************************")
  console.log(display)
  let stacks=""
  let stackArray=stack.mobile
  for (let i = 0; i < stackArray.length; i++) {
    stacks+=`<li class="licap sub-list">${stackArray[i]}</li>`
  }
  display+=stacks
  display+=
  `</ul>
  <ul class="tonicListR bax">`

  stacks=""
  stackArray=stack.desktop
  for (let i = 0; i < stackArray.length; i++) {
    if(i=== 0){
      stacks+=`<li class="licap sub-list">${stackArray[i]}</li>`
    }else{
      stacks+=`<li class="sub-list">${stackArray[i]}</li>`
    }

  } 
  display+=stacks

  display+=`
            </ul>
  <div>  
    <img class="pic-work" src=${isMobile()? image.mobile:image.desktop} alt="Project"/>
  </div>
  <div class="blab">
   <div> <p class="main-p">
     ${description}
    </p>  
    </div>
    <div class="hidden-buttons">
    <ul class="htmlButtons button">`;
  
    console.log("****************************************************")
    console.log(display)   

  let techs = '';
  for (let i = 0; i < technologies.length; i++) {
    console.log(technologies[i]);
    techs += `<button>${technologies[i]}</button>`;
  }
  display +=
    techs +
    `</ul>
    <img src="./images/vector 4.png" alt="horizontal rule"/>
    <div class="flex-div">
    <a href=${linkToLiveVersion} target= "_blank" class="btn-modal btn">See Live <img src="./images/icon-2.png" alt="Live Version" /></a>
      <a href=${linkToSource} target= "_blank" class="btn-modal btn">See Source <img src="./images/vector.png" alt="source" /></a>
    </div>
    </div>
    </div>
</div>`;
  modal.innerHTML = display;
};


document.querySelectorAll(".seeProject .btn-modal").forEach((item) =>
    item.addEventListener("click", () => {
        console.log("xxxxxxxxxxxxxxxxxxx");
        console.log("xxxxxxxxxxxxxxxxxxx");
        modal.classList.add('showModal');


    })
);


const loadModal = (i) => {
  const singleData = data.find((item) => item.id === i);
  openModal(singleData);
};

// cancelsModal.addEventListener('click', () => {
//   modal.classList.remove('showModal');
// });


function buildProjectSession(data){
  let display = '';
  
  data.forEach(
    (item) => {
         display+=` <section class="parting">
      <div class="card-works">`
      if(item.imageAtTheLeft){
        display+=`<div class="tonic-pic">`
      }else{
        display+=`<div class="tonic-pic text-first">`
      }
      display+=`
        <div class="tonic-pic">
          <img class="photo1" src=${item.image.mobile} />
          <img class="photo2" src=${item.image.desktop} />
        </div>
        <div class="tonic-text">
          <h2 class="main-text">${isMobile()? item.name.mobile:item.name.desktop}</h2>
          <ul class="tonicListQ">`;
          let stacks=""
          let stackArray=item.stack.mobile
          for (let i = 0; i < stackArray.length; i++) {
              if(i===0){
                stacks+=`<li class="licap sub-list">${stackArray[i]}</li>`
              }else{
                stacks+=`<li class="sub-list">${stackArray[i]}</li>`
              }
          }
          display+=stacks
          display+=
          `</ul>
          <ul class="tonicListR">`

          stacks=""
          stackArray=item.stack.desktop
          for (let i = 0; i < stackArray.length; i++) {
            if(i===0){
              stacks+=`<li class="licap sub-list">${stackArray[i]}</li>`
            }else{
              stacks+=`<li class="sub-list">${stackArray[i]}</li>`
            }
           
          }  
          display+=stacks

          display+=`
          </ul>
          <p class="main-p">
          ${item.description}
          </p>
          <ul class="htmlButtons">`
          let tech=""
          techsArray=isMobile()? item.technologies.mobile:item.technologies.desktop
          for (let i = 0; i < techsArray.length; i++) {
            tech+=`<li><button type="button">${techsArray[i]}</button></li>`
          }  
          display+=tech

          display+=`
          </ul>
          <div class="seeProject">
            <button id="seeMultiPost" class="btn-modal btn" type="submit">See Project</button>
          </div>
        </div>
      </div>
    </section>`
    }
  );

  console.log(display)

/*   document
  .getElementById("cards")
  .insertAdjacentHTML("afterbegin",display); */

  works.innerHTML = display;

};


function isMobile() {
  return window.innerWidth <= 768;
}
//Form validation 

let form = document.querySelector('#contact-style form'),
  errMessageZone = document.querySelector('#error-message'),
  emailClass = document.querySelector('#contact-style .email');

form.addEventListener('submit', (event) => {
  console.log("11FHFFFFFFFFFFFFFFF1")
  let email = document.querySelector('#email');
  let emailRegExp = /[A-Z]/;
  console.log("FHFFFFFFFFFFFFFFF1")
  console.log(email.value)
  console.log(email.value.trim())
  if (!emailRegExp.test(email.value.trim())) {
    console.log("FHFFFFFFFFFFFFFFF2")
    form.submit();
  } else {
    event.preventDefault();
    //emailClass.classList.toggle('error');
    console.log("FHFFFFFFFFFFFFFFF")
    errMessageZone.innerText ="Lower Case Email Please"
  }
});

