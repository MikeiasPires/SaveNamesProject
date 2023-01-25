import React, { useEffect, useState } from "react";
import { Container, Box, ContainerUsers, Users  } from "./styled";


export default function Home() {

    const [storageName, setStorageName] = useState('')
    const [users, setUsers] = useState([])

    
    function HandleName() {
        const armazenName = storageName; 
        const names = users;
        if( storageName == ""){
        return alert ('Insira um nome')
        } else{
            setStorageName("");
            console.log(names)
        }   
        }

console.log(users)

    useEffect (() => {
    fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
    .then((res) => res.json()).then(data => setUsers(data.results)) 
    },[])
    

    return (
        <>
            <Container>
                <Box>
                    <div>
                        <span>Insira um nome</span>
                    </div>
                    <input type="text" value={storageName}  placeholder="Nome" onChange={(e) => setStorageName(e.target.value)} />
                    <button onClick={HandleName}>Pesquisar</button>
                   {users.map( (user) => <ContainerUsers> 
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
