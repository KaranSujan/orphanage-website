import React, {useEffect, useState} from 'react';

export default function Donation(){
  const [donations,setDonations]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/donations')
      .then(res=>res.json())
      .then(data=>setDonations(data));
  },[]);

  return (
    <section id="donation" className="py-20 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Donations</h2>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {donations.map(d=>(
          <div key={d._id} className="bg-white p-4 rounded shadow">
            <img src={d.picture||'https://via.placeholder.com/150'} alt={d.name} className="w-full h-32 object-cover mb-2"/>
            <h3 className="font-semibold">{d.name}</h3>
            <p>Amount: ${d.amount}</p>
            <p>{d.message}</p>
          </div>
        ))}
      </div>
      <form className="max-w-md mx-auto bg-white p-6 rounded shadow" onSubmit={async e=>{
        e.preventDefault();
        const form=new FormData(e.target);
        const data={name:form.get('name'),email:form.get('email'),amount:form.get('amount'),message:form.get('message')};
        await fetch('http://localhost:5000/donations',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(data)
        });
        window.location.reload();
      }}>
        <h3 className="text-xl mb-4">Make a Donation</h3>
        <input name="name" placeholder="Name" className="w-full mb-3 p-2 border rounded"/>
        <input name="email" placeholder="Email" className="w-full mb-3 p-2 border rounded"/>
        <input name="amount" placeholder="Amount" type="number" className="w-full mb-3 p-2 border rounded"/>
        <textarea name="message" placeholder="Message" className="w-full mb-3 p-2 border rounded"/>
        <button type="submit" className="w-full p-2 bg-gray-700 text-white rounded">Donate</button>
      </form>
    </section>
  );
}