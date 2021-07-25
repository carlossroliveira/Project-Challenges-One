const elementMissionTwoAPI = document.querySelector("[data-missionTwo]");
const elementVisionTwoAPI = document.querySelector("[data-visionTwo]");
const elementValuesTwoAPI = document.querySelector("[data-valuesTwo]");

export const aboutAPI = async () => {
  try {
    const API = await fetch("./api/about.json");
    const response = await API.json();

    elementMissionTwoAPI.innerHTML = response.about[0].Missão;
    elementVisionTwoAPI.innerHTML = response.about[0].Visão;
    elementValuesTwoAPI.innerHTML = response.about[0].Valores;
  } catch (error) {
    console.log(`Error Message => ${error}`);
  }
};
aboutAPI();
