import { jobList } from "../data/myCareer.js";

myCareerHTML();

function myCareerHTML() {
  let careerContainerHTML = `
    <div class="career-button-container js-career-button-container">
      <button>Career 1</button>
      <button>Career 2</button>
    </div> 
  `;


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

function careerMenuSelectorHTML(job) {
  let careerButtonContainerHTML = '';
  
  return careerMenuSelectorHTML;
}