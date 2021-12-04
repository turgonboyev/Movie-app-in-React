import Movi from "./Movie";
import "../layout/Navbar.css"

export default function Movies(props) {
    const {movies = []} = props;
    return(
        <div className="movies">
            {movies.length ?
                movies.map(mov => (<Movi key={mov.id} {...mov}/> ))
                : <h4>Nothing found</h4>
            }
        </div>
    )
}