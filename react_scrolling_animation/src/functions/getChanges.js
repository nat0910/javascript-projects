export function sectionChanges() {
  function firstSection(val) {
    if (val < 0) {
      return {
        opacity: 0,
        transform: `scale(${5})`,
      };
    } else if (val < 0.1) {
      return {
        opacity: val * 10,
        transform: `scale(${5 - 4 * val * 10})`,
      };
    } else if (val < 1) {
      return { opacity: 1 };
    } else if (val < 1.1) {
      return {
        opacity: (1.1 - val) * 10,
        transform: `scale(${4 - (1.1 - val) * 10 * 3})`,
      };
    } else {
      return { opacity: 0 };
    }
  }

  function secondSection(val) {
    if (val < -0.3) {
      return {
        transform: `translateY(10rem) scaleX(0.05)`,
        bordeRadius: "100%",
      };
    } else if (val < 0) {
      const position = -val * 10 * 3.3;
      const scale = 1 + val * 3.3 * 0.95;
      return { transform: `translateY(${position}rem) scaleX(${scale})` };
    } else if (val < 1) {
      return {};
    } else if (val < 1.3) {
      const scale = (1.3 - val) / 0.3;
      return { transform: `scaleX(${scale})` };
    } else {
      return { transform: "scaleX(0.05)" };
    }
  }

  function thirdSection(val) {
    console.log(val);
    
    if (val < 1) {
      console.log(val*10);
      return {
        opacity: val * 10,
        transform: `scale(${val * 10})`,
      };
    } else {
      return {
        opacity: 0,
      };
    }
  }

  function fourthSection(val) {
    if (val < -0.3) {
      return {
        transform: `translateX(20rem) translateY(10rem)`,
      };
    } else if (val < 0) {
      let radius = -val * 50 * 3.3;
      let x_axis = -val * 20 * 3.3;
      let y_axis = -val * 10 * 3.3;
      // console.log(x_axis.toFixed(2));
      console.log(radius);
      return {
        borderRadius: `${radius}rem 0 0 0`,
        transform: `translateX(${x_axis}rem) translateY(${y_axis}rem)`,
      };
    }
  }
  return { firstSection, secondSection, thirdSection, fourthSection };
}
