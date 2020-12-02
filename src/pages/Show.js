import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();
  const [show, setshow] = useState(null)
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results =>{
        setshow(results);
    })
  }, [id]);

console.log('show',show) 
   
  return <div>This is Show Page</div>;
};

export default Show;
