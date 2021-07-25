const elementMdsystemTitleAPI = document.querySelector("[data-mdsystemTitle]");
const elementMdsystemTextAPI = document.querySelector("[data-mdsystemText]");

const elementBrandingTitleAPI = document.querySelector("[data-brandingTitle]");
const elementBrandingTextAPI = document.querySelector("[data-brandingText]");

const elementMarketingTitleAPI = document.querySelector("[data-marketingTitleAPI]");
const elementMarketingTextAPI = document.querySelector("[data-marketingTextAPI]");

export const servicesAPI = async () => {
  const APII = await fetch("./api/services.json");
  const responsee = await APII.json();

  
    elementMdsystemTitleAPI.innerHTML = responsee.serv[0].title;
    elementMdsystemTextAPI.innerHTML = responsee.serv[0].text;

    elementBrandingTitleAPI.innerHTML = responsee.serv[1].title;
    elementBrandingTextAPI.innerHTML = responsee.serv[1].text;

    elementMarketingTitleAPI.innerHTML = responsee.serv[2].title;
    elementMarketingTextAPI.innerHTML = responsee.serv[2].text;
  
};

servicesAPI();