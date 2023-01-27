import React, { useEffect, useState } from "react";
import { Container, Box, ContainerUsers, Users  } from "./styled";


export default function Home() {

    const [storageName, setStorageName] = useState('')
    const [users, setUsers] = useState([])
    const [item, setItem] = useState([])
    
    function HandleName() {
        const filtros = users.map(item => item.name).filter(item => item.first == storageName);
        setItem(filtros)
        if( storageName == ""){
        return alert ('Insira um nome')
        }else if(filtros == item){
            setItem(item)
            setStorageName("");     

        }  
        }
     

    useEffect (() => {
    fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
    .then((res) => res.json()).then(data => setUsers(data.results)) 
    },[]);

    

    return (
        <>
            <Container>
                <Box>
                    <div>
                        <span>Insira um nome</span>
                    </div>
                    <input type="text" value={storageName}  placeholder="Nome" onChange={(e) => setStorageName(e.target.value)} />
                    <button onClick={HandleName}>Pesquisar</button>
                   {item.map( (user) => <ContainerUsers key={user.picture}> 
                            <div>
                            <img src={user.picture.thumbnail}  />
                            </div>
                            <Users>
                            <label>{user.name.first} {user.name.last}</label>
                            <span>{user.dob.age} anos</span>
                            <span> cpf : {user.id.value}</span>
                          </Users>
                    </ContainerUsers>
                   )}
                </Box>
            </Container>
        </>
    );
}
