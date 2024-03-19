import { useState } from "react";
import Product from "./Product";

export default function Adicion({ setProducts }) {
    const [cedula, setCedula] = useState('')
    const [nombre, setNombre] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        let student = new Product(null, nombre, cedula);

        fetch("http://localhost:8080/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            fetch("http://localhost:8080/api/products", {
                method: "GET",
            })
                .then(res => res.json())
                .then(response => {
                    setProducts(response);
                });
        });
    }
    return (
        <>
            <form>
                <h3>Adicion de Pipes Buenos</h3>
                <h4>Ingresa la cedula</h4>
                <input type="text" placeholder="Ingresa la cedula" value={cedula} onChange={(e) => setCedula(e.target.value)}></input>
                <h4>Ingresa el nombre</h4>
                <input type="text" placeholder="Ingresa el nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                <button type="submit" onClick={handleClick}>Agregar</button>
            </form>
            <style jsx="true">{`
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                h3 {
                    text-align: center;
                }
                `}</style>
        </>

    );
}