import styled from "styled-components";


export const Container = styled.div`
    width: 600px;
    height: 350px;
    border: 2px solid #ecebe4;
    border-radius: 8px;
    margin: 80px 200px ;
    background-color: #FEFCF3;
    padding: 12px;
    background-color: #0093E9;


`

export const Box = styled.div`
 
 margin: 25px 160px;


 ul{
    margin-top: 30px;
    font-size: 17px;
    list-style: none;
 }


 span{
    font-size: 11px;
 }

input{
    width: 190px;
    height: 25px;
    border: solid 1px #c5ced5;
    border-radius: 4px;
}

button{
    width: 60px;
    height: 28px;
    background-color: #6558f4;
    color: white;
    font-size: 11px;
    border: none;
    border-radius: 4px;
    margin-left: 5px;
}

`
export const ContainerUsers = styled.div`
    width: 190px;
    height: 50px;
    border: 2px solid #ecebe4;
    border-radius: 8px;
    background-color: #FEFCF3;
    background-color: #ffffff;
    margin-top: 20px;
    display: flex;
    justify-items: center;
    flex-direction: row;
    img{
       width: 50px;
       height: 50px;
       border: 1px transparent;
       border-radius: 50px;
    }
`
export const Users = styled.div`
    display: flex;
    flex-direction: column; 
    margin-left: 15px;

  
    `