import tabla from './src/tabla.html?raw';
import cuerpo from './src/index.html?raw';
import { filtraTabla } from './src/scripts/tableFilter'

document.querySelector('#app').innerHTML = cuerpo;
document.querySelector('#dataTabla').innerHTML = tabla;
document.querySelector('#buscarInputVendedorID').addEventListener('keyup', () => filtraTabla(1, 'buscarInputVendedorID'));
document.querySelector('#buscarInputCiudadID').addEventListener('keyup', () => filtraTabla(4, 'buscarInputCiudadID'));
document.querySelector('#buscarInputClienteID').addEventListener('keyup', () => filtraTabla(9, 'buscarInputClienteID'));
document.querySelector('#buscarInputAutoparteID').addEventListener('keyup', () => filtraTabla(11, 'buscarInputAutoparteID'));
document.querySelector('#verDashboard').addEventListener('click', () => window.open("https://lookerstudio.google.com/u/0/reporting/0c7249de-8b72-425b-ac9b-a29ba2dca836/page/p_5iea85zokd", "_blank"));