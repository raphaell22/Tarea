import React from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../../models/contacto.class';



const ContactoComponent = ({ contacto }) => {
    return (
        <div>
           <h2>
        Nombre : { contacto.nombre }
           </h2>
           <h3>
           Apellido : { contacto.apellido }
           </h3>
           <h4>
           email : { contacto.email }
           </h4>
           <h5>
           Estado del Contacto : { contacto.conectado ? "SE ENCUENTRA CONECTADO": "NO ESTA CONECTADO" }
           </h5> 
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto : PropTypes.instanceOf(contacto)
};


export default ContactoComponent;
