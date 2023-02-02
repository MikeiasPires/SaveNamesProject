import React, { useEffect, useState } from "react";
import { Container, Box, ContainerUsers, Users  } from "./styled";


export default function Home() {

    const [storageName, setStorageName] = useState('')
    const [users, setUsers] = useState([])
    const [filtedUser, setFiltedUser] = useState([])
    const [filterNames, setFilterNames] = useState([]);
    const [filterNamesFity, setfilterNamesFity] = useState([]);
    const [usersten, setUsersten] = useState(0)

        function handleSearch() {
        const filtered = users.filter(item => item.name.first === storageName);
        setFiltedUser(filtered);
        if( storageName == ""){
         return alert ('Insira um nome')
         }else {
         setStorageName("");    
        }  
        };

        function handleinput(e){
            setStorageName(e.target.value)
            const seach = users.filter(item => item.name.first.toLowerCase().includes(storageName.toLowerCase()))
            setFiltedUser(seach)
        }

        function selectionNumberUsers(e){
            setUsersten(e.target.value);
            if(usersten == 10){
                setFiltedUser(filterNames);
            }else if(usersten == 50){
                setFiltedUser(filterNamesFity)
             }else if(usersten == 100){
            setFiltedUser(users)

             }

        }

           useEffect(()=>{
            fetch("https://randomuser.me/api/?seed=javascript&results=10&nat=BR&noinfo")
            .then((res) => res.json()).then(data => {
                setFilterNames(data.results)
            })
           },[])
        
           useEffect(()=>{
            fetch("https://randomuser.me/api/?seed=javascript&results=50&nat=BR&noinfo")
            .then((res) => res.json()).then(data => {
                setfilterNamesFity(data.results)
            })
           },[])

           useEffect (() => {
            fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo")
           .then((res) => res.json()).then(data => {
            setUsers(data.results)
          //  setFiltedUser(data.results)
            }
            ) 
            },[]);
     
    return (
        <>
            <Container>
                <Box>
                    <div>
                        <span>Insira um nome</span>
                    </div>
                    <input type="text" value={storageName}  placeholder="Nome" onChange={handleinput} />
                    <button onClick={handleSearch}>Pesquisar</button>
                    <div>
                        <label >Quantidade</label>
                            <select name="Quantidade" onClick={selectionNumberUsers}>
                                <option value="10">10</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                           </div>
                   {  filtedUser.map( (user) => <ContainerUsers key={user.email}> 
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
