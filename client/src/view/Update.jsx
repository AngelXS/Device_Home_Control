// import axios from 'axios';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ nombre, setNombre] = useState('');
    const [ updateAlerta, setUpdateAlerta ] = useState('');
    const [ nombreAnterior, setNombreAnterior] = useState('');
    const [ auxSinId, setauxSinId ] = useState(true);
    useEffect(()=>{
        axios.get('http://localhost:8011/api/autor/'+id)
            .then(res=>{
                setNombre(res.data[0].nombre);
                setNombreAnterior(res.data[0].nombre);
            })
            .catch(err=>{
                console.log(err); 
                setauxSinId(false);
            })
    },[id])
    const handlerUpdateAutor = e => {
        e.preventDefault();
        axios.put('http://localhost:8011/api/autor/'+id+'/edit',{nombre})
            .then(res=> {
                setUpdateAlerta(res.data.msg +" "+ nombreAnterior);
            })
            .catch(res=>setUpdateAlerta(res.data.smg));
    }
    return(
        <div>{
            auxSinId ?
            <div>
                <h1>Favorite Authors</h1>
                <Link to={'/'}>Home</Link>
                <p>Edit this author:</p>
                <Form onSubmit={handlerUpdateAutor}>
                    <div>
                        <p>Name:</p>
                        <input type="text"  onChange={e => {setNombre(e.target.value)}} value={nombre}/>
                        <div>
                            <button onClick={e=>{navigate('/')}}>Cancelar</button>
                            <button type='submit'>Submit</button>
                        </div>
                    </div>
                </Form>
                <div>
                    {updateAlerta}
                </div>
            </div>:
            <div>
                <h1>ERROR</h1>
                <p>Lo sentimos, pero no pudimos encontrar el autor que estás buscando, ¿Deseas agregar este autor a nuestra base de datos?</p>
                <Link to={'/autor/new'}>Agregar</Link>
            </div>
        }
        </div>
    );
}
export default Update;