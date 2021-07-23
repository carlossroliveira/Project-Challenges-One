const elementMissionOne = document.querySelector("[data-missionOne]");
const elementVisionOne = document.querySelector("[data-visionOne]");
const elementValuesOne = document.querySelector("[data-valuesOne]");

const elementMissionTwo = document.querySelector("[data-missionTwo]");
const elementVisionTwo = document.querySelector("[data-visionTwo]");
const elementValuesTwo = document.querySelector("[data-valuesTwo]");

export const GradeOne = {
  handleMissionOneClick(addClassOne, addClassTwo, removeClassOne, removeClass) {
    elementMissionTwo.classList.add(addClassOne);
    elementMissionTwo.classList.remove(addClassTwo);
    elementVisionTwo.classList.remove(removeClassOne);
    elementValuesTwo.classList.remove(removeClass);
  },
};

export const GradeTwo = {
  handleMissionOneClick(addClassOne, addClassTwo, removeClassOne, removeClass) {
    elementVisionTwo.classList.add(addClassOne);
    elementMissionTwo.classList.add(addClassTwo);
    elementMissionTwo.classList.remove(removeClassOne);
    elementValuesTwo.classList.remove(removeClass);
  },
};

export const GradeThree = {
  handleMissionOneClick(addClassOne, addClassTwo, removeClassOne, removeClass) {
    elementValuesTwo.classList.add(addClassOne);
    elementMissionTwo.classList.add(addClassTwo);
    elementMissionTwo.classList.remove(removeClassOne);
    elementVisionTwo.classList.remove(removeClass);
  },
};

elementMissionOne.addEventListener("click", () =>
  GradeOne.handleMissionOneClick(
    "mission-active",
    "mission-none",
    "vision-active",
    "values-active"
  )
);

elementVisionOne.addEventListener("click", () =>
  GradeTwo.handleMissionOneClick(
    "vision-active",
    "mission-none",
    "mission-active",
    "values-active"
  )
);

elementValuesOne.addEventListener("click", () =>
  GradeThree.handleMissionOneClick(
    "values-active",
    "mission-none",
    "mission-active",
    "vision-active"
  )
);
