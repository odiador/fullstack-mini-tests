
const searchAccount = async (email) => {
    try {
        const usr = await fetch("http://localhost:3000/api/get", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        })
        const result = await usr.json();
        const status = usr.status;
        return { status, result };
    } catch (error) {
        return { status: -1, error };
    }
}

export default function UserView({ user, setShowSearchInput, showSearchInput }) {
    return (

        <div className="flex flex-col size-full p-2">
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {!showSearchInput && <button className="bg-white w-fit rounded-lg text-black px-4 py-1 hover:scale-110 transition-transform" onClick={() => {
                setShowSearchInput(true);
            }} >Buscar cliente</button>}
            {showSearchInput && (
                <form className="w-full flex flex-col gap-2" onSubmit={e => {
                    e.preventDefault();
                    const formdata = new FormData(e.currentTarget);
                    const email = formdata.get("email");
                    searchAccount(email + "").then(e => {
                        if (e.status == -1) {
                            alert("Error: " + e.error)
                        } else {
                            if (e.status == 200) {

                                alert(e.result.msg);
                                alert(JSON.stringify(e.result.user));
                            } else {
                                alert(e.result.error);
                            }
                        }
                    });
                }}>
                    <input name="email" className='px-5 py-2 outline-none w-72 text-black rounded-lg border-[1px] transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]' />
                    <div className="flex gap-4">
                        <button type="submit" className="bg-white rounded-lg text-black px-4 py-1 hover:scale-110 transition-transform" >Buscar</button>
                        <button type="button" className="bg-white rounded-lg text-black px-4 py-1 hover:scale-110 transition-transform" onClick={() => {
                            setShowSearchInput(false);
                        }} >Cancelar</button>
                    </div>
                </form>)}
        </div>
    );
}