export function getYearDif(year) {
  return new Date().getFullYear() - year;
}

export function increaseBrand(brand) {
  let increase;
  switch (brand) {
    case "european":
      increase = 1.3;
      break;
    case "american":
      increase = 1.15;
      break;
    case "asian":
      increase = 1.05;
      break;
    default:
      break;
  }
  return increase;
}

export function getPlan(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

export function firstMayus(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
