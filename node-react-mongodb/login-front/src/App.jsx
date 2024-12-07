
import { useState } from 'react';
import LoginForm from './LoginForm';
import UserView from './UserView';
import CreateAccountForm from './CreateAccountForm';

export default function App() {
  const [user, setUser] = useState(undefined);
  const [createAccount, setCreateAccount] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const crearCuenta = async (data) => {
    try {
      const usr = await fetch("http://localhost:3000/api/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      usr.json().then(s => {
        if (usr.status == 200) {
          alert(s.msg);
        } else {
          alert(s.error);
        }
      });

    } catch (error) {
      console.log(error);
    }
  }

  const onClick = async (email, password) => {
    try {
      const usr = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      usr.json().then(s => {
        if (usr.status == 401)
          alert(s.error)
        else {
          alert("¡Iniciaste sesión exitosamente! Bienvenido, " + s.name);
          setUser({ name: s.name, email })
        }
      });

    } catch (error) {
      alert(error);

    }
  }

  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
      <header className="flex w-full p-2 gap-2 justify-end">
        {user && (
          <button className="bg-white rounded-lg text-black px-4 py-1 hover:scale-110 transition-transform" onClick={() => {
            setUser(undefined);
          }}>Cerrar Sesión</button>
        )}
        {
          !user && (
            <button className="bg-white rounded-lg text-black px-4 py-1 hover:scale-110 transition-transform" onClick={() => {
              setCreateAccount(p => !p)
            }}>{!createAccount ? "Crea tu cuenta" : "Inicia Sesión"}</button>
          )
        }
      </header>
      {
        createAccount && (<div className='w-full h-full flex items-center justify-center'>
          <CreateAccountForm onClick={() => { setCreateAccount(false) }} crearCuenta={crearCuenta} />
        </div>)
      }
      {
        !createAccount && (<div className='w-full h-full items-center justify-center flex'>
          {!user && (<LoginForm onClick={onClick} />)}
          {user && (<UserView user={user} setShowSearchInput={setShowSearchInput} showSearchInput={showSearchInput} />)}
        </div>)
      }
    </div>
  )

}

