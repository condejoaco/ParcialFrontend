const Card = ({nombre, banda}) =>{
    return (
        /*<div>
        {usuario.map((usuario, index) => (
            <div key={index} className="card">
            <h3>Hola {usuario.nombre}</h3>
            <h3>Me alegro que tu banda favorita sea {usuario.banda}</h3>
            </div>
            ))}
        </div>*/
        <div>
        <h3>Hola {nombre}</h3>
        <h3>Me alegro que tu banda favorita sea {banda}</h3>
        </div>

        );
};

export default Card;