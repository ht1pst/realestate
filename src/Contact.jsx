function Contact(){
 return(
    <section id="contact">
    <div className="mt-50">
        <h1 className="text-black text-4xl font-bold">Let's talk</h1>
        <h1 className="text-gray-400 font-bold text-4xl">Get in touch</h1>
        <input type="text" placeholder="name@funto123.com"  className="h-10 bg-gray-200 p-4 rounded-xl mt-10 b w-60 text-sm"/>
    </div>
    <div className="mt-3"> <button className="bg-black text-white h-10 w-60 rounded-xl">Submit</button></div>
    </section>
 )   
}
export default Contact;