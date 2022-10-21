const hamburger = document.querySelector('.mobile-menu .navMenu');
const mobileDisplay = document.querySelector('.mobile-display');
const cancel = document.querySelector('.cancel-icon');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('#mobile-nav');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal-inner');
const cancelsModal = document.querySelector('.cancels');
const works = document.querySelector('#Portfolio');

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
    class: 'tonic',
    name: {
      mobile: 'Tonic',
      desktop: 'Tonic',
    },
    stack: ['CANOPY', 'Back End Dev', 2015],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
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
  },
  {
    id: 1,
    class: 'stories',
    name: {
      mobile: 'Multi-Post Stories',
      desktop: 'Multi-Post Stories',
    },
    stack: ['FACEBOOK', 'Full Stack Dev', 2015],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
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
  },
  {
    id: 2,
    class: 'tonic2',
    name: {
      mobile: 'Tonic',
      desktop: 'Facebook 360',
    },
    stack: ['FACEBOOK', 'Full Stack Dev', 2015],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
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
  },
  {
    id: 3,
    class: 'stories2',
    name: {
      mobile: 'Multi-Post Stories',
      desktop: 'Uber Navigation',
    },
    stack: ['Uber', 'Lead Developer', 2018],
    mobileStack: ['CANOPY', 'Back End Dev', 2015],
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
  },
];

const openModal = ({
  name,
  description,
  image,
  technologies,
  stack,
  mobileStack,
  linkToLiveVersion,
  linkToSource,
}) => {
  let display = '';
  modal.classList.add('showModal');
  display += `
  <div>

  <div>
  <h2 class="main-text">${name}</h2>
  </div>

  <ul class="tonicListQ">
  <li class="licap sub-list">CANOPY</li>
  <li class="sub-list">• Back End Dev</li>
  <li class="sub-list">• 2015</li>
  </ul>
    <ul class="tonicListR bax">
            <li class="licap sub-list">CANOPY</li>
            <li class="sub-list">• Back End Dev</li>
            <li class="sub-list">• 2015</li>
            </ul>
  <div>
  
    <img class="pic-work" src=${image} alt="Project"/>
  </div>
  <div class="blab">
   <div> <p class="main-p">
     ${description}
    </p>  
    </div>
    <div class="hidden-buttons">
    <ul class="htmlButtons button">`;

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
  modalInner.innerHTML = display;
};



const loadModal = (i) => {
  const singleData = data.find((item) => item.id === i);
  openModal(singleData);
};

cancelsModal.addEventListener('click', () => {
  modal.classList.remove('showModal');
});

const loadWorks = (data) => {
  let display = ' ';
  data.forEach(
    (
      {
        name,
        mainDescription,
        featuredImage,
        desktopFeaturedImage,
        technologies,
        stack,
        mobileStack,
      },
      i
    ) => {
      display += `
      <div class="card-works works">
      <div class="image ">
        <img class="desktop-image" src= ${
          isDesktop ? desktopFeaturedImage : featuredImage
        } alt="Project"/>
      </div>
      <div class="card">
        <h2>${name}</h2>
        <ul class="flex item-tag">
          ${
            isDesktop
              ? `<li class="icon-tag"><a class="canopy" href="#">${stack[0]}</a></li>`
              : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[0]}</a></li>`
          }
          <li class="radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
          ${
            isDesktop
              ? `<li class="icon-tag"><a class="bend-yr bend" href="#">${stack[1]}</a></li>`
              : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[1]}</a></li>`
          }
          <li class=" radio icon-tag"><img src="images/Counter.png" alt="counter" /></li>
          ${
            isDesktop
              ? `<li class="icon-tag"><a class="bend-yr"href="#">${stack[2]}</a></li>`
              : `<li class="icon-tag"><a class="canopy" href="#">${mobileStack[2]}</a></li>`
          }
        </ul>
        <p class="p">
          ${mainDescription}
        </p>
        <div class="langbutton">
          <button>${technologies[0]}</button>
          <button>${technologies[4]}</button>
          <button>${technologies[1]}</button>
          ${isDesktop ? `<button>${technologies[2]}</button>` : ''}
        </div>
  
        <div class="div">
        <button type="submit" id="loadModal" value="${i}" onclick='loadModal(${i}) '  class="btn-modal btn">See Project</button>
        </div>
        </div>
      </div> `;
    }
  );
  works.innerHTML = display;
};

window.addEventListener('DOMContentLoaded', () => {
  loadWorks(data);

  const loadModalEle = document.querySelector('#loadModal');
  loadModalEle.addEventListener('click', () => {
    loadModal(loadModalEle.value);
  });
});

modalBtn.forEach((btn, i) => {
  console.log(btn, 'WHAT', i);

  btn.addEventListener('click', () => {
    const singleData = projects.find((item) => item.id == i);
    singleData.technologies = isMobile()
      ? singleData.technologies['mobile']
      : singleData.technologies['desktop'];
    singleData.image = isMobile()
      ? singleData.image['mobile']
      : singleData.image['desktop'];
    singleData.name = isMobile()
      ? singleData.name['mobile']
      : singleData.name['desktop'];
    openModal(singleData);
    console.log('none');
    console.log(window.innerWidth);
    console.log(singleData.technologies);
  });
});

cancelsModal.addEventListener('click', () => {
  modal.classList.remove('showModal');
});

function isMobile() {
  return window.innerWidth <= 768;
}
