import React, { useState, useEffect } from "react";
import styled from 'styled-components'


export const Post = () => {
    //add localstorage
    const NameLocalHost = "cursoreact";
    const addPost = localStorage.getItem(NameLocalHost) ? JSON.parse(localStorage.getItem(NameLocalHost)) : [];
    const [text, seText] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [Post, setPost] = useState(addPost);

    useEffect(() => {
        localStorage.setItem(NameLocalHost, JSON.stringify(Post));
    }, [Post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPost([...Post, {
            name: name,
            age: age,
            text: text
        }]);
        console.log("activate!!")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Container>
                    <h1>MiniForm</h1>
                    <label>
                        <h4>Name: {name}</h4>
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        <h4>Age: {age}</h4>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                    </label>
                    <hr></hr>
                    <label>
                        <h4>Text</h4>
                        <textarea
                            value={text}
                            onChange={(e) => { seText(e.target.value) }}
                            cols="25" rows="6"
                        >
                        </textarea>
                    </label>
                    <button type="submit">Enviar</button>
                </Container>
            </form>
            <GrupoElemtos>
                <h1>Show List</h1>
                {Post.map((index) => {
                    return (
                        <Elemento>
                            <h2>{index.name}</h2>
                            <h2>{index.age}</h2>
                            <h2>{index.text}</h2>
                        </Elemento>)
                })}
            </GrupoElemtos>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px black solid;
    margin: 0px;
`;
const GrupoElemtos = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const Elemento = styled.div`
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    margin: 2px;
`;