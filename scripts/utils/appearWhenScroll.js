export function appearWhenScroll() {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('js-show');
      } else {
        //entry.target.classList.remove('js-show');
      }
    })
  });

  const hiddenElements = document.querySelectorAll('.js-hidden');
  hiddenElements.forEach((element) => {
    observer.observe(element);
  })
}