import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        name: "",
        contact: "",
        email: "",
        message: ""
    })

    const inputEvent = (event) => {
        const {name, value} = event.target;

        setData((oldData) => {
            return {
                ...oldData, 
                [name]: value
            };
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Your name is ${data.name}\nYour number is ${data.contact}\nYour email is ${data.email}\nYour message is ${data.message}`);
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full name</label>
                                <input type="text" class="form-control" name="name" value={data.name} onChange={inputEvent} id="exampleFormControlInput1" placeholder="Shrut Dorugade" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Contact No.</label>
                                <input type="number" class="form-control" name="contact" value={data.contact} onChange={inputEvent} id="exampleFormControlInput1" placeholder="9012157684" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" name="email" value={data.email} onChange={inputEvent} id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Your message</label>
                                <textarea class="form-control" name="message" value={data.message} onChange={inputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;