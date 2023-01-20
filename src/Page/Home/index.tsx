import React, { useState } from "react";
import { Container, Box, NameGenerator } from "./styled";
import { FcCancel, FcUndo } from "react-icons/fc";


interface SetNames {
    storageName: string;
    erased:any;
}

export default function Home() {

    const [storageName, setStorageName] = useState('')
    const [saveName, setSaveNames] = useState([])
    const [erased, setErased] = useState([])

    function HandleName() {
        const ArmazenName = storageName;

        setSaveNames(prevState => [...prevState, ArmazenName])
    }

    function HandleErased(){
        setSaveNames([erased])
    }
  
    console.log(storageName)
    return (
        <>
            <Container>
                <Box>
                    <div>
                        <span>Insira um nome</span>
                    </div>
                    <input type="text" name="" id="" placeholder="Nome" onChange={(e) => setStorageName(e.target.value)} />
                    <button onClick={HandleName}>Salvar</button>
                    <NameGenerator>
                        <ul>
                            
                            {saveName.map(name => <li>{name}<FcCancel onClick={HandleErased} /></li>)}

                        </ul>

                    </NameGenerator>

                </Box>
            </Container>
        </>
    );
}
