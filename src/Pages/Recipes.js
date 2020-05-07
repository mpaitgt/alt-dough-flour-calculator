import React, {useState} from 'react';
import {keys} from '../hidden-keys';

function Recipes() {
  const [hits, setHits] = useState([]);
  const { edamam_api_key, edamam_app_id } = keys;
  const url = `https://api.edamam.com/search?q=cookies&app_id=${edamam_app_id}&app_key=${edamam_api_key}`;

  fetch(url)
    .then(res => res.json())
    .then(data => setHits([...data.hits]));

  return (
    <div>
      <h1>Recipes</h1>
      { 
        hits.length > 0
        ?
        hits.map(item => {
          return (
            <p>{item.recipe.label}</p>
          )
        })
        :
        null
      }
    </div>
    
    
  )
}

export default Recipes;