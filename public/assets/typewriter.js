export const typeWrite = (element) => {
    const elementText = element.innerHTML.split("");
                        element.innerHTML = "";
  
          elementText.forEach((letter, index) => {
      setTimeout(() => (element.innerHTML += letter), 110 * index);
    });
  };
  
  const bannerTitle = document.querySelector("[data-bannerTitle]");
  
  typeWrite(bannerTitle);
