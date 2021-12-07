import React from 'react';
import { useParams } from 'react-router';
import SelectedMovie from './SelectedMovie';
import './SelectedPage.css';

const SelectedPage = () => {
  const id = useParams().movieId;
  return <SelectedMovie id={id} />
}

export default SelectedPage;