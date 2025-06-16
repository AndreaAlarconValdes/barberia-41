import './ContactForm.css'

const ContactForm = () => {
    return (
        <form className="form_container">
            <div className="input_container">
                <label className="input_label">Nombre</label>
                <input placeholder="Nombre completo" name="input-name" type="email" className="input_field" id="name_field" />
            </div>
            <div className="input_container">
                <label className="input_label" >Correo electrónico</label>
                <input placeholder="name@mail.com" name="input-email" type="email" className="input_field" id="email_field" />
            </div>
            <div className="input_container">
                <label className="input_label" >Mensaje</label>
                <textarea placeholder="Escribe aquí..." name="input-email" className="textarea_field" id="message_field" />
            </div>
            <button className='form-btn'>Enviar mensaje</button>
        </form>
    )
}

export default ContactForm