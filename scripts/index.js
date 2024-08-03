import { jobList } from "../data/myCareer.js";

renderCareerDefault();
careerMenuSelectorHTML();

function renderCareerDefault() {
  let careerContainerHTML = ``;

  jobList.forEach((job) => {
    careerContainerHTML += `
      <div class="job-experience-container job-experience-container-${job.name}">
        <div class="job-experience-img-wrapper">
          <img id="${job.name}-photo" src="${job.groupPhoto.path}" height="${job.groupPhoto.height}" alt="${job.groupPhoto.alt}">
        </div>
        <div class="job-experience-description-wrapper">
          <a href="${job.webLink}" target="_blank">
            <img id="${job.name}-logo" src="${job.logo.path}" height=${job.logo.height}/>
          </a>
          <h3 class="job-experience-date">${job.workingPeriod.startingDate} - ${job.workingPeriod.endingDate}</h3>
          <div class="job-experience-description-body-wrapper">
            <p class="job-experience-description-body">${job.description}</p>
          </div>
        </div>
      </div>
    `;
  })
  
  document.querySelector('.js-career-container')
    .innerHTML = careerContainerHTML;
};

function renderJob(jobIndex) {
  const job = jobList[jobIndex];
  const careerContainerElem = document.querySelector('.js-career-container');
  careerContainerElem
    .innerHTML = `
      <div class="job-experience-container job-experience-container-${job.name}">
        <div class="job-experience-img-wrapper">
          <img id="${job.name}-photo" src="${job.groupPhoto.path}" height="${job.groupPhoto.height}" alt="${job.groupPhoto.alt}">
        </div>
        <div class="job-experience-description-wrapper">
          <a href="${job.webLink}" target="_blank">
            <img id="${job.name}-logo" src="${job.logo.path}" height=${job.logo.height}/>
          </a>
          <h3 class="job-experience-date">${job.workingPeriod.startingDate} - ${job.workingPeriod.endingDate}</h3>
          <div class="job-experience-description-body-wrapper">
            <p class="job-experience-description-body">${job.description}</p>
          </div>
        </div>
      </div>
    `;
  
};

function careerMenuSelectorHTML() {
  let careerButtonContainerHTML = '';

  jobList.forEach((job) => {
    careerButtonContainerHTML += `
      <button class="js-career-button">${job.nameDisplay}</button>
    `;
  });
  
  document.querySelector('.js-career-button-container')
    .innerHTML = careerButtonContainerHTML;
};


document.querySelectorAll('.js-career-button').forEach((careerButton, index) => {
  careerButton.addEventListener('click', () => {
    console.log(`${index} clicked`);
    renderJob(index);
  });
});