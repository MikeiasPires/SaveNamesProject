import React, { useEffect, useState } from "react";
import { Container, Box, ContainerUsers, Users  } from "./styled";


export default function Home() {

    const [storageName, setStorageName] = useState('')
    const [users, setUsers] = useState([])
    const [filtedUser, setFiltedUser] = useState([])
    const [filterNames, setFilterNames] = useState([])
    
   

        function handleSearch() {
        const Filtered = users.filter(item => item.name.first === storageName);
        setFiltedUser(Filtered);
        if( storageName == ""){
         return alert ('Insira um nome')
         }else {
         setStorageName("");    
        }  
        }
   

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
        const Reposição = users.map((repo) => { return repo.name.first})
        const Search = Reposição.filter((repo) => repo.includes(storageName))
        setFilterNames(Search);

     //  const repositor = users.filter(item => item.name.first);
      // const Search = repositor.filter(item => item.name.first.includes(storageName));
     //  setFilterNames(Search);
      // console.log(filterNames)
    },[]);
    

    return (
        <>
            <Container>
                <Box>
                    <div>
                        <span>Insira um nome</span>
                    </div>
                    <input type="text" value={storageName}  placeholder="Nome" onChange={(e) => setStorageName(e.target.value)} />
                    <button onClick={handleSearch}>Pesquisar</button>
                   {filtedUser.map( (user) => <ContainerUsers key={user.email}> 
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
