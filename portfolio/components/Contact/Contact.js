import dynamic from 'next/dynamic';
const MyAwesomeMap = dynamic(() => import('../MapLeaflet/MapLeaflet'), { ssr: false });
import React, { useEffect, useRef, useState } from "react";
import CircleAnimation from '../P5Components/CircleAnimation';

function Contact() {
    const stageCanvasRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);


    //form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isMailValid, setMailValid] = useState(false);
    const [isFormValid, setFormValid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(isFormValid) { 
            submitForm(name, message, email, subject);
        }
    }

    const validateFields = (event) => {
        event.preventDefault();
        let key = event.target.name;
        let value = event.target.value;

        switch (key) {
            case "Name":
                setName(value);
                break;
            case "Email":
                validateMail(value);
                setEmail(value);
                break;
            case "Subject":
                setSubject(value);
                break;
            case "Message":
                setMessage(value);
                break;
            default:
                break;
        }

        if (name && isMailValid && subject && message) { setFormValid(true) } else { setFormValid(false) }
    }

    const validateMail = (email) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            setMailValid(true);
        } else {
            setMailValid(false);
        }
    }


     const submitForm = async (name, message, mail, subject) => {

        const postValues = {
            "to": mail,
            "from":"tikeshverma2494@gmail.com",
            "subject":`${name} has send you a message: ${subject}`,
            "text": message
        }

        try{
           const res = await fetch('/api/sendmail', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(postValues)
               });

               resetValues();
        } catch(err){
            console.log(err);
        }
        
    }

    const resetValues = ()=>{
            setName("");
            setSubject("");
            setEmail("");
            setMessage("");
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setWidth(stageCanvasRef.current.scrollWidth)
            setHeight(stageCanvasRef.current.scrollHeight)
        }, 500);
        return () => clearTimeout(timer);
    });

    return (
        <div className="welcome w-auto z-10 relative" ref={stageCanvasRef}>
            <div className="absolute">
                {/* Background with p5 animation */}
                {width > 0 && height > 0 ? <CircleAnimation width={width} height={height} /> : null}
            </div>

            <div className="absolute w-auto h-auto md:h-screen z-10 grid md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 pb-4">
                <form className="pl-16 pt-12 pb-16 pr-16 md:pr-8" onSubmit={handleSubmit} >
                    <div className="text-2xl xs:text-4xl sm:text-4xl md:text-6xl lg:text-6xl text-pink-700 font-mono">
                        <h2>Contact me</h2>
                    </div>
                    <div className="break-words pt-6 text-base md:text-lg font-light">
                        <p className="p-2">
                            I’m interested in freelance opportunities – especially ambitious or large projects.
                            However, if you have other request or question, don’t hesitate to use the form.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2 font-extralight">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2" >
                            <div>
                                <input onChange={validateFields} className={"form-input h-10 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 " + (name.length > 0 ? "focus:border-blue-600" : "focus:border-red-600") + " transition duration-500 ease-in p-4"} name="Name" placeholder="Name" />
                            </div>
                            <div>
                                <input onChange={validateFields} className={"form-input h-10 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 " + (isMailValid > 0 ? "focus:border-blue-600" : "focus:border-red-600") + " transition duration-500 ease-linear p-4"} name="Email" placeholder="Email"/>
                            </div>
                        </div>
                        <div>
                            <input onChange={validateFields} className={"form-input h-10 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 " + (subject.length > 0 ? "focus:border-blue-600" : "focus:border-red-600") + " transition duration-500 ease-linear p-4"} name="Subject" placeholder="Subject"  />
                        </div>
                        <div>
                            <textarea onChange={validateFields} className={"form-input h-48 block w-full bg-gray-800 border-transparent focus:outline-none focus:border-b-2 " + (message.length > 0 ? "focus:border-blue-600" : "focus:border-red-600") + " transition duration-500 ease-linear p-6"} name="Message" placeholder="Message" />
                        </div>
                        <div className="text-right">
                            <input className={"bg-transparent border text-white " + (isFormValid ? "border-blue-500 hover:bg-blue-400" : "border-red-500 hover:bg-red-700") + " hover:text-black transition duration-300 ease-linear tracking-widest uppercase text-sm px-6 py-3 shadow"} type="submit" value="Send Message!" />
                        </div>
                    </div>
                </form>
                <div className="pl-16 pt-8 pr-16 md:pl-16 md:pt-12">
                    <MyAwesomeMap />
                </div>
            </div>
        </div>
    )
}

export default Contact