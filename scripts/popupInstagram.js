export function instagramPopupEvent(){
  document.querySelectorAll('.js-popup-instagram-img').forEach((image) => {
    image.addEventListener('click', () => {
      instagramPopup(image.dataset.instagramId);
      appearWhenScroll();
    });
  });
}

export function instagramPopup(postId) {
  const popupContainerElement = document.querySelector('.js-popup-instagram');

  popupContainerElement.addEventListener('click', () => {
    popupContainerElement.style.display = "none";
  })

  document.querySelector('html').addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      popupContainerElement.style.display = "none";
    }
  })

  const instagramElementHTML = `
  <iframe class="instagram-media instagram-media-rendered js-hidden" id="instagram-embed-0" src="https://www.instagram.com/p/${postId}/embed/captioned/?cr=1&amp;v=14&amp;wp=432&amp;rd=http%3A%2F%2F127.0.0.1%3A5500&amp;rp=%2Fdata%2FinstagramPost2.html#%7B%22ci%22%3A0%2C%22os%22%3A228.89999997615814%2C%22ls%22%3A39.60000002384186%2C%22le%22%3A216.80000001192093%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="1000" data-instgrm-payload-id="instagram-media-payload-0" scrolling="${postId === 'C91B19fvZg-' ? 'yes' : 'no'}" style="background: white; max-width: 540px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px; border-radius: 5px;"></iframe>
  `;

  popupContainerElement.innerHTML = instagramElementHTML;
  popupContainerElement.style.display = "flex";


  
}

