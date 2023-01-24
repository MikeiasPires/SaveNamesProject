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
        const Findword = saveName.find(word => word == storageName)
        if( storageName == ""){
        return alert ('Insira um nome')
        } else if(Findword){
            alert('esta palavra ja existe')
        }else{
             setStorageName("");
             setSaveNames(prevState => [...prevState, ArmazenName]);

        }
        
        
    }



    const HandleErased = (a) => {
    const RemoveWord = saveName.filter(nameSave => nameSave !== a )
    setSaveNames(RemoveWord)
   

    }
  
   
    return (
        <>
            <Container>
                <Box>
                    <div>
                        <span>Insira um nome</span>
                    </div>
                    <input type="text" value={storageName}  placeholder="Nome" onChange={(e) => setStorageName(e.target.value)} />
                    <button onClick={HandleName}>Salvar</button>
                    <NameGenerator>
                        <ul>
                            {saveName.map(name => <li>{name}
                            <FcCancel onClick={() => HandleErased(name)}/>
                            </li>)}
                        </ul>

                    </NameGenerator>

                </Box>
            </Container>
        </>
    );
}
