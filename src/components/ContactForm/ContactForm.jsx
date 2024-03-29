import Button from "../Button/Button"
import styles from "./ContactForm.module.css";
import {MdMessage} from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {

    const [name, setName] = useState("sakir")
    const [email, setEmail] = useState("support@gmail.com")
    const [text, setText] = useState("contact form using React")



     const onSubmit = (event) => {
       
        setName(event.target[0].value)
       setEmail(event.target[1].value)
        setText(event.target[2].value)


       event.preventDefault();
      
      console.log("name",event.target[0].value)
      console.log("email",event.target[1].value)
      console.log("text",event.target[2].value)
     }  




 return (
        <section className={styles.container}>
           <div className={styles.contact_form}>
           <div className={styles.top_btn}>
           <Button text=" VIA SUPPORT CHAT" icon={<MdMessage fontSize="15px" />} />
           <Button
            text=" VIA CALL" icon={<FaPhoneAlt fontSize="15px" />} />
           </div>
           <Button
           isOutline={true}
            text="VIA EMAIL FORM" icon={<MdEmail />} />

            <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            </div>

            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            </div>
             
            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea  name="text" rows="7" />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "end",
            }}>
            <Button text="SUBMIT" />
            </div>
            <div>{name + " " + email + " " + text }</div>
            </form>
           </div>
           <div className={styles.contact_Image}>
            <img src="/images/conatctus.png" alt="contact image" />
           </div>


        </section>

    )
}

export default ContactForm