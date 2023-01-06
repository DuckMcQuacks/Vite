import {useState} from 'react'
interface props{
    darkmode: boolean
}

export default function Contact({darkmode}:props){
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""

    })
    function handleChange(event : any){
        setFormData((prev) => {
            return {...prev, [event.target.name]: event.target.value}
        })
    }
    function containsNumbers(str: string) {
        return /[0-9]/.test(str);
      }
    //back-end express train
        async function sendData(e:any){
            e.preventDefault();
            setFormData({
                name: "",
                email: "",
                message: ""
            })
            //Didn't do checking, form already did enough for client.
            fetch('api/email',{
                method:'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
            })})
        }
        
    return(
        <div className="contact">
            <div className={"container pattern"+(darkmode?"" : " patternGrey")}>
                <div className="contactSection">
                    <div className="contactIntro">
                        <h1>Contact</h1>
                        <hr />
                        <p>You can <span>Contact </span> me by filling out the form below, I will try to get back to you as soon as possible.</p>
                    </div>
                    <form className={darkmode ? "dark" : "light"} onSubmit={sendData}>
                        <h3>Name</h3>
                        <input className={darkmode ? "dark" : "light"} value={formData.name} type="text" name="name" id="name" placeholder="Enter Your Name" onChange={handleChange} required/>
                        <h3>Email</h3>
                        <input className={darkmode ? "dark" : "light"} value={formData.email} type="email" name="email" id="email" placeholder="Enter Your Mail" onChange={handleChange} required/>
                        <h3>Message</h3>
                        <textarea className={darkmode ? "dark" : "light"} value={formData.message} name="message" placeholder="Enter Your Message" onChange={handleChange} required></textarea>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}