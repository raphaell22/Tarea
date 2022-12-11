import React from 'react';
import { contacto } from '../../../models/contacto.class';
import ContactoComponent from '../contacto';


const Contacto1 = () => {
    const contacto1 = new contacto("Rafael","Carmona","rafaelcarmona295",false)

    return (
        <div>
        <div>
            <h1>El Contacto</h1>
        </div>
        <ContactoComponent contacto = {contacto1}></ContactoComponent>
        </div>
    
    );
};




export default Contacto1;
