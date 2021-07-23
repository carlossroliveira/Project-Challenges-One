const elementMissionOne = document.querySelector("[data-missionOne]");
const elementVisionOne = document.querySelector("[data-visionOne]");
const elementValuesOne = document.querySelector("[data-valuesOne]");

const backgroundOne = document.querySelector(".backgroundOne");
const backgroundTwo = document.querySelector(".backgroundTwo");
const backgroundThree = document.querySelector(".backgroundThree");

export const ColorsBackgroundOne = {
  handleBackgroundClick(addClassOne, addClassTwo, removeClassOne, removeClass) {
    backgroundOne.classList.add(addClassOne);
    backgroundOne.classList.remove(addClassTwo);
    backgroundTwo.classList.remove(removeClassOne);
    backgroundThree.classList.remove(removeClass);
  },
};

export const ColorsBackgroundTwo = {
  handleBackgroundClick(addClassOne, addClassTwo, removeClassOne, removeClass) {
    backgroundTwo.classList.add(addClassOne);
    backgroundOne.classList.add(addClassTwo);
    backgroundOne.classList.remove(removeClassOne);
    backgroundThree.classList.remove(removeClass);
  },
};

export const ColorsBackgroundThree = {
  handleBackgroundClick(addClassOne, addClassTwo, removeClassOne, removeClass) {
    backgroundThree.classList.add(addClassOne);
    backgroundOne.classList.add(addClassTwo);
    backgroundOne.classList.remove(removeClassOne);
    backgroundTwo.classList.remove(removeClass);
  },
};

elementMissionOne.addEventListener("click", () =>
  ColorsBackgroundOne.handleBackgroundClick(
    "colorsOne",
    "colorStandard",
    "colorsTwo",
    "colorsThree"
  )
);

elementVisionOne.addEventListener("click", () =>
  ColorsBackgroundTwo.handleBackgroundClick(
    "colorsTwo",
    "colorStandard",
    "colorsOne",
    "colorsThree"
  )
);
elementValuesOne.addEventListener("click", () =>
  ColorsBackgroundThree.handleBackgroundClick(
    "colorsThree",
    "colorStandard",
    "colorsOne",
    "colorsTwo"
  )
);
