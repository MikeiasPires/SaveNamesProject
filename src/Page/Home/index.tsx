import React, { useEffect, useState } from "react";
import { Container, Box, ContainerUsers, Users  } from "./styled";


export default function Home() {

    const [storageName, setStorageName] = useState('')
    const [users, setUsers] = useState([])
    const [usersten, setUsersten] = useState([])
    const [filtedUser, setFiltedUser] = useState([])
    const [filterNames, setFilterNames] = useState([])
    
        function handleSearch() {
        const filtered = users.filter(item => item.name.first === storageName);
        setFiltedUser(filtered);
        if( storageName == ""){
         return alert ('Insira um nome')
         }else {
         setStorageName("");    
        }  
        };

        function Clickten(){
            const comp = users.filter 
        }

       useEffect (() => {
        const seach = users.filter(n => n.name.first === storageName);
        setFilterNames(seach);

       },[])

        useEffect (() => {
            fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
           .then((res) => res.json()).then(data => {
            setUsers(data.results),
            setFiltedUser(data.results)
            setFilterNames(data.results)
            }
            
            ) 
            },[]);

                useEffect (() => {
                    fetch("https://randomuser.me/api/?seed=javascript&results=10&nat=BR&noinfo")
                   .then((res) => res.json()).then(data => {
                    setUsersten(data.results)
                    }
                    
                    ) 
                    },[]);
    
 console.log(usersten)
    return (
        <>
            <Container>
                <Box>
                    <div>
                        <span>Insira um nome</span>
                    </div>
                    <input type="text" value={storageName}  placeholder="Nome" onChange={(e) => setStorageName(e.target.value)} />
                    <button onClick={handleSearch}>Pesquisar</button>
                    <div>
                        <label >Quantidade</label>
                            <select name="Quantidade" id="">
                                <option onClick={Clickten}>10</option>
                                <option value="">50</option>
                                <option value="">100</option>
                            </select>
                           </div>
                   {  filterNames.map( (user) => <ContainerUsers key={user.email}> 
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
