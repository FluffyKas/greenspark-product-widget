export const colorToTailwind = (color: string) => {
  let bgTailwindClass;

  switch (color) {
    case 'blue':
      bgTailwindClass = 'bg-greenspark_blue';
      break;
    case 'green':
      bgTailwindClass = 'bg-greenspark_green';
      break;
    case 'beige':
      bgTailwindClass = 'bg-greenspark_beige';
      break;
    case 'white':
      bgTailwindClass = 'bg-greenspark_white';
      break;
    case 'black':
      bgTailwindClass = 'bg-greenspark_black';
      break;
    default:
      bgTailwindClass = 'bg-greenspark_green';
  }

  return bgTailwindClass;
};
