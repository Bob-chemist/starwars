export default class StarWarAPI {
  _apiBase = 'https://swapi.co/api/';

  getResourse = async url => {
    const res = await fetch(`${this._apiBase + url}`);

    if (!res.ok) {
      throw new Error(`Cant fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResourse('people/');
    return res.results.map(this._transformPerson);
  };

  getPerson = async id => {
    const person = await this.getResourse(`people/${id}/`);
    console.log(person);

    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResourse('planets/');
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getResourse(`planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResourse('starships/');
    return res.results.map(this._transformStarship);
  };

  getStarship = async id => {
    const starship = await this.getResourse(`starships/${id}/`);
    return this._transformStarship(starship);
  };

  _extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  };

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}
