function excursionCalculator(input) {
  let people = Number(input[0]);
  let season = input[1];
  let pricePerPerson = 0;
  let discount = 0;

  switch (season) {
    case "spring":
      if (people <= 5) {
        pricePerPerson = 50;
      } else if (people > 5) {
        pricePerPerson = 48;
      }
      break;
    case "summer":
      if (people <= 5) {
        pricePerPerson = 48.5;
        discount = pricePerPerson - pricePerPerson * 0.15;
      } else if (people > 5) {
        pricePerPerson = 45;
        discount = pricePerPerson - pricePerPerson * 0.15;
      }
      break;
    case "autumn":
      if (people <= 5) {
        pricePerPerson = 60;
      } else if (people > 5) {
        pricePerPerson = 49.5;
      }
      break;
    case "winter":
      if (people <= 5) {
        pricePerPerson = 86;
        discount = pricePerPerson + pricePerPerson * 0.08;
      } else if (people > 5) {
        pricePerPerson = 85;
        discount = pricePerPerson + pricePerPerson * 0.08;
      }
      break;
    default:
      break;
  }

  if (season == "winter") {
    console.log(`${(people * discount).toFixed(2)} leva.`);
  } else if (season == "summer") {
    console.log(`${(people * discount).toFixed(2)} leva.`);
  } else {
    console.log(`${(people * pricePerPerson).toFixed(2)} leva.`);
  }
}
excursionCalculator(["20", "winter"]);
