import { useFetch } from '../../hooks/useFetch'
import Recipe from '../recipe/Recipe';

import './Home.css'

function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3000/recipes');

    return (
        <div className='home'>
            {/* && Checks if the state on the left side is true, and if it is then it will output anything on the right side */}
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && data.map(recipe => (
                <h2 key={recipe.id}>{recipe.title}</h2>
            ))}
        </div>
    )
}

export default Home
