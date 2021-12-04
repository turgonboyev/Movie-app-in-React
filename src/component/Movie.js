export default function Movi(props) {
    const {Title, Year, id, Type, Poster} = props;
    return(
        <div key={id} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={Poster} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}<i
                    className="material-icons right">{Type}</i></span>
                <p>{Year}</p>
            </div>
        </div>
    )
}