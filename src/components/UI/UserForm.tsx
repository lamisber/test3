import React, { useState } from 'react';
import './Input.css';
import'./botton.tsx';

import Button from './botton.tsx';

// interface UserFormProps {
//   onSubmit: (data: { name: string; email: string }) => void;
//   onCancel: () => void;
// }
 const onsubmit = () => { alert("Form submitted!"); };
const onCancel = () => { alert("Form cancelled!"); };


function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <form  className="inputfiled" onSubmit={(e) => { e.preventDefault(); onsubmit(); }}>
      <input  name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button  className='btn btn-primary' type="submit" onClick={onsubmit}>Submit</button>
      <button className='btn btn-secondary' type="button" onClick={onCancel}>Cancel</button>
      {/* <Button
        btnText="Click Me"
        onClick={() => alert("Button clicked!")}
        variant="primary"/> */}
    </form>
  );
}
export default UserForm;