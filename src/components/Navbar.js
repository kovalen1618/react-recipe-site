import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                {/* Link is used over the anchor tag as it's much simpler to read the reference, doesn't cause the page to refresh
                    can be easily used with other React Router features such as route rendering and route protection. */}
                <Link to="/" className='brand'>
                    <h1>Cooking Ninja</h1>
                </Link>
                <Link to="/create">Create Recipe</Link>
            </nav>
        </div>
    )
}

export default Navbar
