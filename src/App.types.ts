export type ShowWeatherTypes = {
  weatherData: {
    weather: {
      main: string;
      icon: string;
    }[];
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
    };
    wind: {
      speed: number;
    };
    name: string;
  };
};

export type SearchLocationTypes = {
  value?: string;
  onChange: (event: any) => void;
  onKeyPress: (event: any) => void;
};

export type LinkTypes = {
  link?: string;
  linkTitle?: string;
};

export type IconTypes = {
  iconName?: string;
};

export type MainWeatherDataTypes = {
  city?: string;
  temp?: string;
  desc?: string;
};

export type DetailWeatherDataTypes = {
  tempMax?: string;
  tempMin?: string;
  pressure?: number;
  wind?: string;
}
