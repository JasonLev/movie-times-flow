import React from 'react';
// @flow

type Props = {
  list: String
}

const MovieList = (props:Props) => {
  console.log(props.doesNotExist);
  return props.list.map(movie => <p>{movie}</p>)
}

export default MovieList
