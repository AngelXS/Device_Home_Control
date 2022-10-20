import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TablaControl from '../components/TablaControl';
const Main = () => {
    const [ registros, setRegistros ] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://192.168.100.73:8011/api/ips')
            .then(res=>setRegistros(res.data))
            .catch(err=> console.log(err));
    },[]);
    const removeFromDom = (registroId) => {
        setRegistros(registros.filter(registro => registro._id !== registroId));
    }

    return(
        <div>
            <h1>Dashboard Registros Dispositivos Hogar</h1>
            <button className='button' onClick={e=>{navigate('/registro/new')}}><span>Agregar</span></button>
            <TablaControl removeFromDom={removeFromDom} registros={registros} setRegistros={setRegistros}></TablaControl>
        </div>
    );
}
export default Main;



