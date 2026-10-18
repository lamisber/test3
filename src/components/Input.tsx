import React from 'react';
interface InputProps {

    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, onChange }: InputProps) => {

    return (
<div key={name}>
    <label> {name} </label>
    <input
    name={name} 
    onChange={onChange}
    value={value}
    />
</div>

    )
}
export default Input;