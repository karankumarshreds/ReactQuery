import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPeople = async () => {
  const res = await axios.get('https://swapi.dev/api/people/');
  return res;
};

const People = () => {
  const { data, status } = useQuery('People', fetchPeople);

  return (
    <div>
      <h1>People</h1>
      {data?.data?.results.map((each) => (
        <p>{each.name}</p>
      ))}
    </div>
  );
};

export default People;
