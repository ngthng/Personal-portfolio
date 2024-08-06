export function fadeOut(element, milliseconds = 50, fun = () => {}) {
  var opacity = 1;
  var interval = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
      fun();
    }
  }, milliseconds);
};

export function fadeIn(element, milliseconds = 50, fun = () => {}) {
  var opacity = 0;
  var interval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
      fun();
    }
  }, milliseconds);
};

export function replaceFade(element, fun = () => {}, fadeOutCycle=20, fadeInCycle=50) {
  new Promise((resolve) => {
    fadeOut(element, fadeOutCycle, () => {
      resolve();
    });
  
  }).then(() => {
    return new Promise((resolve) => {
      fun();
      resolve();
    })
    
  }).then(() => {
    fadeIn(element, fadeInCycle);
  });
}

//runTest();

function runTest() {
  const element = document.querySelector('.js-replace');
  document.querySelector('.js-button-replace').addEventListener('click', ()=> {
    replaceFade(element, () => {
      console.log('replaced');
    }, 50, 100);
  });
 
  document.querySelector('.js-button-fade-in').addEventListener('click', ()=> {
    fadeIn(element);
  });

  document.querySelector('.js-button-fade-out').addEventListener('click', ()=> {
    fadeOut(element);
  });

};