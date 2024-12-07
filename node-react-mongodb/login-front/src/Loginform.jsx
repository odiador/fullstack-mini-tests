import { useState } from 'react';

export default function loginForm({ onClick }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (<form className='px-8 py-4 w-min h-5/12 bg-white text-black rounded-lg gap-2 flex flex-col'>
        <div className='font-bold text-center text-3xl'>Inicia Sesión</div>
        <div>Escribe tu correo</div>
        <input className='px-5 py-2 outline-none w-72 text-black rounded-lg border-b-[1px] border-0 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]' onChange={(e) => setEmail(e.target.value)} />
        <div>Escribe tu contraseña</div>
        <input type='password' className='px-5 py-2 outline-none w-72 text-black rounded-lg border-[1px] transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]' onChange={(e) => setPassword(e.target.value)} />
        <button type='button' onClick={() => onClick(email, password)} className='bg-black text-white px-6 py-2 w-fit place-self-center rounded-lg hover:scale-110 transition-transform'>Entrar</button>
    </form>)
}