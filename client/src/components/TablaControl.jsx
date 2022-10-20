
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const TablaControl = (props) => {
    const navigate = useNavigate();
    const [ desh, setDesh] = useState('true');
    const { registros, removeFromDom, setRegistros } = props;
    const borrarAutor = (_id) => {
        axios.delete('http://192.168.100.73:8011/api/ip/'+_id+'/delete')
            .then(res => {
                removeFromDom(_id);
            })
            .catch(err => console.error(err));
    }
    const editar = (id) => {
        navigate('/autor/'+id+'/edit');
    }
    const actualizarEstado = (registro) => {
        axios.put('http://192.168.100.73:8011/api/ip/'+registro._id+'/'+registro.ip+'/ping/edit')
            .then(res => {
                axios.get('http://192.168.100.73:8011/api/ips')
                    .then(res=>{
                        setDesh('false');
                        setRegistros(res.data);
                    } )
                    .catch(err=> console.log(err));
            })
            .catch(err => console.error(err));
    }

return (
    <div className='div-table table-responsive'>
        <table className="table ">
            <thead className="tbl-encabezado">
                <tr className="table-tr">
                <th>Estado</th>
                <th>Conexión</th>
                <th>MAC</th>
                <th>IP</th>
                <th>Usuario</th>
                <th>Dispositivo</th>
                <th>Descripción</th>
                <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    registros.map((registro,idx)=>{
                        return (
                            <tr className="table" key={idx}>
                                <td>
                                {
                                    (registro.estado === '0')?
                                    <div className="circulo-A"></div>:
                                    <></>
                                }
                                {
                                    (registro.estado === '1')?
                                    <div className="circulo-V"></div>:
                                    <></>
                                }
                                {
                                    (registro.estado === '2')?
                                    <div className="circulo-N"></div>:
                                    <></>
                                }
                                </td>
                                <td>
                                {
                                    (registro.tipo === "0")?
                                    <img src=" https://www.svgrepo.com/show/51926/wifi.svg" alt="tablet" height="40px" width="40px" />:
                                    <></>
                                }
                                {
                                    (registro.tipo === "1")?
                                    <img src=" https://www.svgrepo.com/show/292021/ethernet.svg" alt="tablet" height="40px" width="40px" />:
                                    <></>
                                }
                                </td>
                                <td className='table-Default color-blanco'>{registro.mac}</td>
                                <td className='table-Default color-blanco'>{registro.ip}</td>
                                <td className='table-Default color-blanco'>{registro.usuario}</td>
                                <td>
                                {
                                    (registro.dispositivo === "PC")?
                                    <svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><g id="Computer"><path d="M54.5,45H9.5A6.51,6.51,0,0,1,3,38.5V9.5A6.51,6.51,0,0,1,9.5,3h45A6.51,6.51,0,0,1,61,9.5v29A6.51,6.51,0,0,1,54.5,45ZM9.5,5A4.51,4.51,0,0,0,5,9.5v29A4.51,4.51,0,0,0,9.5,43h45A4.51,4.51,0,0,0,59,38.5V9.5A4.51,4.51,0,0,0,54.5,5Z"/><path d="M46.45,41H17.55a9,9,0,0,1-9-9V16a9,9,0,0,1,9-8.95h28.9a9,9,0,0,1,8.95,9v16.1A9,9,0,0,1,46.45,41ZM17.55,9a7,7,0,0,0-7,7v16.1a7,7,0,0,0,7,7h28.9a7,7,0,0,0,6.95-7V16A7,7,0,0,0,46.45,9Z"/><path d="M52,61H12a1,1,0,0,1,0-2H52a1,1,0,0,1,0,2Z"/><path d="M12,61a1,1,0,0,1-.58-.19,1,1,0,0,1-.23-1.39l5.72-8a1,1,0,1,1,1.62,1.16l-5.72,8A1,1,0,0,1,12,61Z"/><path d="M52,61a1,1,0,0,1-.81-.42l-5.71-8a1,1,0,0,1,1.62-1.16l5.71,8a1,1,0,0,1-.23,1.39A1,1,0,0,1,52,61Z"/><path d="M36,41H28a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"/><path d="M40,57H24a1,1,0,0,1-.88-.53,1,1,0,0,1,.05-1L27,49.7V44a1,1,0,0,1,2,0v6a1,1,0,0,1-.17.55l-3,4.45H38.13l-3-4.45A1,1,0,0,1,35,50V44a1,1,0,0,1,2,0v5.7l3.83,5.75a1,1,0,0,1,.05,1A1,1,0,0,1,40,57Z"/><path d="M46.29,53h-9a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z"/><path d="M26.67,53h-9a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z"/></g></svg>:
                                    <></>
                                }
                                {
                                    (registro.dispositivo === "Tablet")?
                                    <img src="https://www.svgrepo.com/show/11657/tablet.svg" alt="tablet" height="40px" width="40px" />:
                                    <></>
                                }
                                {
                                    (registro.dispositivo === "TV")?
                                    <img src="https://www.svgrepo.com/show/325715/tv.svg" alt="tablet" height="40px" width="40px" />:
                                    <></>
                                }
                                {
                                    (registro.dispositivo === "Laptop")?
                                    <svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><g id="Laptop"><path d="M52,33H12a1,1,0,0,1-1-1V4a1,1,0,0,1,1-1H52a1,1,0,0,1,1,1V32A1,1,0,0,1,52,33ZM13,31H51V5H13Z"/><path d="M44.91,30H19.09A4.1,4.1,0,0,1,15,25.91V11.42A5.42,5.42,0,0,1,20.42,6H43.58A5.42,5.42,0,0,1,49,11.42V25.91A4.1,4.1,0,0,1,44.91,30ZM20.42,8A3.42,3.42,0,0,0,17,11.42V25.91A2.1,2.1,0,0,0,19.09,28H44.91A2.1,2.1,0,0,0,47,25.91V11.42A3.42,3.42,0,0,0,43.58,8Z"/><path d="M60,46H4a1,1,0,0,1-.87-.51,1,1,0,0,1,0-1l8-13a1,1,0,1,1,1.7,1L5.79,44H58.21L51.15,32.52a1,1,0,0,1,1.7-1l8,13a1,1,0,0,1,0,1A1,1,0,0,1,60,46Z"/><path d="M60,49H4a1,1,0,0,1-1-1V45a1,1,0,0,1,2,0v2H59V45a1,1,0,0,1,2,0v3A1,1,0,0,1,60,49Z"/><path d="M36,43.5H28a1,1,0,0,1-.86-.5,1,1,0,0,1,0-1l2-3.5A1,1,0,0,1,30,38h4a1,1,0,0,1,.87.5l2,3.5a1,1,0,0,1,0,1A1,1,0,0,1,36,43.5Zm-6.28-2h4.56L33.42,40H30.58Z"/></g></svg>:
                                    <></>
                                }
                                {
                                    (registro.dispositivo === "Impresora")?
                                    <svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><g id="Print"><path d="M60,54H4a1,1,0,0,1-1-1V32.38A10.38,10.38,0,0,1,13.38,22H50.63A10.38,10.38,0,0,1,61,32.38V53A1,1,0,0,1,60,54ZM5,52H59V32.38A8.39,8.39,0,0,0,50.63,24H13.38A8.39,8.39,0,0,0,5,32.38Z"/><path d="M52,24H12a1,1,0,0,1-.78-.37,1,1,0,0,1-.2-.84l4-19A1,1,0,0,1,16,3H48a1,1,0,0,1,1,.79l4,19a1,1,0,0,1-.2.84A1,1,0,0,1,52,24ZM13.23,22H50.77L47.19,5H16.81Z"/><path d="M45.68,24H18.32a1,1,0,0,1-.78-.37,1,1,0,0,1-.2-.83L20,9.8A1,1,0,0,1,21,9H43a1,1,0,0,1,1,.8l2.68,13a1,1,0,0,1-.2.83A1,1,0,0,1,45.68,24ZM19.54,22H44.46L42.19,11H21.81Z"/><path d="M52,54H12a1,1,0,0,1-1-1V39.81A7.81,7.81,0,0,1,18.81,32H45.19A7.81,7.81,0,0,1,53,39.81V53A1,1,0,0,1,52,54ZM13,52H51V39.81A5.82,5.82,0,0,0,45.19,34H18.81A5.82,5.82,0,0,0,13,39.81Z"/><path d="M59,61H4a1,1,0,0,1-.66-1.75l8-7a1,1,0,1,1,1.32,1.5L6.66,59H56.59l-5.3-5.29a1,1,0,0,1,1.42-1.42l7,7a1,1,0,0,1,.21,1.09A1,1,0,0,1,59,61Z"/><path d="M52,40.81H12a1,1,0,0,1,0-2H52a1,1,0,0,1,0,2Z"/><path d="M17,29H9a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"/><path d="M15,32H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"/></g></svg>:
                                    <></>
                                }   
                                {
                                    (registro.dispositivo === "Celular")?
                                    <svg width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><g id="Handphone"><path d="M40.94,61H23.06A10.07,10.07,0,0,1,13,50.94V13.06A10.07,10.07,0,0,1,23.06,3H40.94A10.07,10.07,0,0,1,51,13.06V50.94A10.07,10.07,0,0,1,40.94,61ZM23.06,5A8.07,8.07,0,0,0,15,13.06V50.94A8.07,8.07,0,0,0,23.06,59H40.94A8.07,8.07,0,0,0,49,50.94V13.06A8.07,8.07,0,0,0,40.94,5Z"/><path d="M41.73,53H22.27A5.28,5.28,0,0,1,17,47.73V12.27A5.28,5.28,0,0,1,22.27,7H41.73A5.28,5.28,0,0,1,47,12.27V47.73A5.28,5.28,0,0,1,41.73,53ZM22.27,9A3.28,3.28,0,0,0,19,12.27V47.73A3.28,3.28,0,0,0,22.27,51H41.73A3.28,3.28,0,0,0,45,47.73V12.27A3.28,3.28,0,0,0,41.73,9Z"/><path d="M32,59a3,3,0,1,1,3-3A3,3,0,0,1,32,59Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,32,55Z"/></g></svg>:
                                    <></>
                                }      
                                </td>                       
                                <td className='table-Default color-blanco'>{registro.descripcion}</td>
                                <td>
                                     
                                    <button className='button2-t' onClick={e => {actualizarEstado(registro)}}>Ping</button>
                                    <button className='button2-t' onClick={()=>{editar(registro._id)}}>Edit</button>
                                    <button className='button2-t' onClick={e => {borrarAutor(registro._id)}}>Delete</button>
                                    
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
)
}
export default TablaControl;