import { useContext, useState } from "react";
import { BlocContext } from "../Context/blocContext";
import "../Style/FormStyle.css";

function BlocForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const  { keyId, setKeyId, CreateNote } = useContext(BlocContext);
    

    const HandleSubmit = (e) => {
        e.preventDefault();
        CreateNote({
            id: setKeyId(keyId + 1),
            title, 
            description,
        });
        setTitle("");
        setDescription("");
    };

    return (
        <section>
            <h1 className="form_title">Bloco de  Notas</h1>
            <form className="form" onSubmit={HandleSubmit}>
                <input
                className="form_input"
                placeholder="Escreva um Titulo"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
                />
                <textarea
                className="form_textarea"
                placeholder="Escreva uma Descrição"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
                />
                <button className="form_button">Salvar</button>
            </form>
        </section>
    );
};

export default BlocForm;