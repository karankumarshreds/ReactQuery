import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPlanets = async () => {
  const res = await axios.get('https://swapi.dev/api/planets/');
  return res;
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);

  return (
    <div>
      <h1>Planets</h1>
      {data?.data?.results.map((each) => (
        <p>{each.name}</p>
      ))}
    </div>
  );
};

export default Planets;
