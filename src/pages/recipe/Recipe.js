import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

import './Recipe.css'

function Recipe() {
    const { id } = useParams();
    const url = 'http://localhost:3000/recipes/' + id;

    const { isPending, error,  data: recipe } = useFetch(url);

    return (
        <div className='recipe'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && <h1>{recipe.title}</h1>}
        </div>
    )
}

export default Recipe
