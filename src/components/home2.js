import React, { useState } from 'react'

import Navbar from './Navbar';
import Footer from './footer';
import { Axios, db } from './Firebase/firebase'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Form } from 'react-router-dom';


function Home(){
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const form = useRef();
    const { theme } = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)

        // add data in firebase 
        var data = new FormData(e.currentTarget);
        
        var name = data.get('name');
        var email = data.get('email');
        var message = data.get('message');


       
        db.collection("LoginUser")
          .add({
            Name: name,
            Email: email,
            Message: message,
          })
          .then((succ) => {
            alert("Your Application is send to Dalip :) ");
          })
          .catch((err) => {
            alert("can't send your Application , please send Again :) ");
          });

        //   end  add data in firebase 
      

        if (name && email && message) {
            if (isEmail(email)) {
                emailjs.sendForm('service_qxwd33p', 'template_rchyera', form.current, 'Xswf-fBSF_Z-h8fvU')
                    .then((result) => {
                        console.log('success');
                        setSuccess(true);
                        setErrMsg('');
                        setName('');
                        setEmail('');
                        setMessage('');
                        setOpen(false);
                    }, (error) => {
                        console.log(error.text);
                    });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

     return(
       <>
<Navbar/>

 {/* Hero Section Begin   */}
    <section class="hero-section set-bg-hero1">
        <div class="container">
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={updateInput}
          value={formData.name || ''}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateInput}
          value={formData.email || ''}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          onChange={updateInput}
          value={formData.message || ''}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
        </div>
    </section>

    {/* Hero Section End */}

{/* <Splide>
onScroll={(item) => {
        console.log(item, "scroll");
    }}
    options={{
        arrows: true,
        perPage: 1,
        rewind: true,
        // gap: "3rem",
    }}
                    {testimonals.map((item) => (
                        <SplideSlide className="flex flex-col items-center justify-center space-y-4 py-4">
                            <div className="overflow-hidden w-[120px] h-[120px]   rounded-full bg-gray-400">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <p className="max-w-[60%] text-justify xl:text-center text-sm text-gray-500">
                                {item.message}
                            </p>
                            <div className="space-y-1 flex-col flex items-center justify-center">
                              
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-xs text-gray-400 pb-4">({item.from})</p>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide> */}

<Footer/>

       </>
    );
}

export default Home;