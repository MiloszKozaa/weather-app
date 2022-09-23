type ShowWeather = {
  name?: string;
   temp?: number;
  main?: string;
   pressure?: number;
};

const ShowWeather = ({ name, main, pressure, temp }: ShowWeather) => {
  return (
    <>
      <div>{name}</div>
      <div>{temp}</div>
      <div>{main}</div>
      <div>{pressure}</div>
    </>
  );
};

export default ShowWeather;
