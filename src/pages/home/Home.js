import { useFetch } from '../../hooks/useFetch'

import './Home.css'

import RecipeList from '../../components/RecipeList';

function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3000/recipes');

    return (
        <div className='home'>
            {/* && Checks if the state on the left side is true, and if it is then it will output anything on the right side */}
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}

export default Home
