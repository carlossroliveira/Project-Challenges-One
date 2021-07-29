const elementMissionTwoAPI = document.querySelector("[data-missionTwo]");
const elementVisionTwoAPI = document.querySelector("[data-visionTwo]");
const elementValuesTwoAPI = document.querySelector("[data-valuesTwo]");

export const aboutAPI = async () => {
  try {
    const API = await fetch("./api/about.json");
    const response = await API.json();
    const { Missao, Visao, Valores } = response.about[0];

    elementMissionTwoAPI.innerHTML = Missao;
    elementVisionTwoAPI.innerHTML = Visao;
    elementValuesTwoAPI.innerHTML = Valores;
  } catch (error) {
    console.log(`Error Message => ${error}`);
  }
};
aboutAPI();
