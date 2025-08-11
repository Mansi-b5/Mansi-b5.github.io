import React from "react";
import { content } from "../Content";

const Contact = () => {
  const { Contact } = content;
  return <section className="bg-dark_primary text-white">

  <div className="md: container px-5 pt-14 py-16 ">
    <h2 className="title !text-white"> {Contact.title} </h2>
    <br/>
    <div className="flex gap-20">
    
      <form className="flex-1 flex flex-col gap-5">
        <input type="text" name="from_name"
        placeholder="Name" required className="border
        border-slate-600 p-3 rounded"/>
        <input type="email" name="user_email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\-[A-Za-z]{1,63}$"
        placeholder="Email Id" required className="border
        border-slate-600 p-3 rounded"/>
        <textarea name= "message"
        placeholder= "Message"
        className="border border-slate-600 p-3 rounded h-44"
        required></textarea>
        <button className="btn self-start bg-white text-dark_primary">Submit</button>
      </form>

      <div className="flex-1 flex flex-col gap-5">
        <img alt="..." src={Contact.image} className="w-64 h-65 rounded-full border-4 border-white" />
      </div>
    </div>

  </div>



  </section>;
};

export default Contact;
