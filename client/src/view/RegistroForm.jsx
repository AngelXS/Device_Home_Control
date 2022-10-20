// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const RegistroForm = () => {
    const navigate = useNavigate();
    const [ ip, setIP] = useState('0.0.0.0');
    const [ mac, setMac] = useState('00-00-00-00-00-00');
    const [ usuario, setUsuario] = useState('');
    const [ tipo, setTipo] = useState('');
    const [ dispositivo, setDispositivo] = useState('');
    const [ descripcion, setDescripcion ] = useState('');
    const [ errorip, seterrorIP] = useState('');
    const [ errortipo, seterrorTipo] = useState('');
    const [ errormac, seterrorMac] = useState('');
    const [ errorusuario, seterrorUsuario] = useState('');
    const [ errordispositivo, seterrorDispositivo] = useState('');
    const [ errordescripcion, seterrorDescripcion ] = useState('');
    const handlerCreateAutor = (e) =>{
        e.preventDefault();
        let estado = "0";
        axios.post('http://192.168.100.73:8011/api/ip/new',{ip,mac,usuario,dispositivo,descripcion, estado, tipo})
            .then(res => {
                setIP("0.0.0.0");
                setMac("00-00-00-00-00-00");
                setUsuario("");
                setDispositivo("");
                setDescripcion("");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                if(Object.keys(errorResponse).includes('ip')){
                    seterrorIP(errorResponse['ip'].message);
                }
                if(Object.keys(errorResponse).includes('mac')){
                    seterrorMac(errorResponse['ip'].message);
                }
                if(Object.keys(errorResponse).includes('dispositivo')){
                    seterrorDispositivo(errorResponse['dispositivo'].message);
                }
                if(Object.keys(errorResponse).includes('usuario')){
                    seterrorUsuario(errorResponse['usuario'].message);
                }
                if(Object.keys(errorResponse).includes('tipo')){
                    seterrorTipo(errorResponse['tipo'].message);
                }
                if(Object.keys(errorResponse).includes('descripcion')){
                    seterrorDescripcion(errorResponse['descripcion'].message);
                }               
            })
    }
    return(
        <div>
           <h1>Registro de dispositivos</h1>
           <button className='button home' onClick={e=>{navigate('/')}}><span>Home</span></button>
           <p>Agregar dipositivo:</p>
           <Form onSubmit={handlerCreateAutor}>
                <div className='Form-1'>
                    <p>USUARIO:</p>
                    <input type="text" onChange={e => {setUsuario(e.target.value)}} value={usuario}/>
                    <p><span>{errorusuario}</span></p>
                    <p>Conexión:</p>  
                            <select name="select" onChange={e => {setTipo(e.target.value)}}>
                                <option value="" disabled selected>Seleccione el tipo de conexión...</option>
                                <option value="0">Inalámbrica</option>
                                <option value="1">Cableada</option>
                            </select>
                            <p><span>{errortipo}</span></p>
                    <div className="Form-Cuadro">
                        <div>
                            <p>MAC:</p>
                            <input type="text" onChange={e => {setMac(e.target.value)}} value={mac}/>
                            <p><span>{errormac}</span></p>
                            <p>IP:</p>
                            <input type="text" onChange={e => {setIP(e.target.value)}} value={ip}/>
                            <p><span>{errorip}</span></p>
                        </div>
                        <div>
                            <p>DISPOSITIVO:</p>  
                            <select name="select" onChange={e => {setDispositivo(e.target.value)}}>
                                <option value="" disabled selected>Seleccione un dispositivo...</option>
                                <option value="Celular">Celular</option>
                                <option value="Laptop">Laptop</option>
                                <option value="PC">PC</option>
                                <option value="TV">TV</option>
                                <option value="Impresora">Impresora</option>
                                <option value="Tablet">Tablet</option>
                            </select>
                            <p><span>{errordispositivo}</span></p>
                            <p>DESCRIPCION:</p>
                            <input type="text" onChange={e => {setDescripcion(e.target.value)}} value={descripcion}/>
                            <p><span>{errordescripcion}</span></p>
                        </div>
                    </div>
                    <div className='div-btn'>
                        <button className='button' onClick={e=>{navigate('/')}}><span>Cancelar</span></button>
                        <button className='button2 button' type='submit'><span>Registrar</span></button>
                    </div>
                </div>
           </Form>

        </div>
    );
}


  
 
export default RegistroForm;