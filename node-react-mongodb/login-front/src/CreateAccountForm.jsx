import { useState } from 'react';

const CreateAccountForm = ({ onClick, crearCuenta }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (<form className='px-8 py-4 w-min h-5/12 bg-white text-black rounded-lg gap-2 flex flex-col'>
        <div className='font-bold text-center text-3xl'>Crea tu cuenta</div>
        <div>Escribe tu correo</div>
        <input className='px-5 py-2 outline-none w-72 text-black rounded-lg border-b-[1px] border-0 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]' onChange={(e) => setEmail(e.target.value)} />
        <div>Escribe tu nombre</div>
        <input className='px-5 py-2 outline-none w-72 text-black rounded-lg border-b-[1px] border-0 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]' onChange={(e) => setName(e.target.value)} />
        <div>Escribe tu contraseña</div>
        <input type='password' className='px-5 py-2 outline-none w-72 text-black rounded-lg border-b-[1px] border-0 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]' onChange={(e) => setPassword(e.target.value)} />
        <div className='flex gap-1 justify-center'>
            <button type='button' onClick={() => crearCuenta({ email, password, name })} className='bg-black text-white px-6 py-2 w-fit place-self-center rounded-lg hover:scale-110 transition-transform'>Entrar</button>
            <button type='button' onClick={onClick} className='bg-black text-white px-6 py-2 w-fit place-self-center rounded-lg hover:scale-110 transition-transform'>Volver</button>
        </div>
    </form>)
}

export default CreateAccountForm;
