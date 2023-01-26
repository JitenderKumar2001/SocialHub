import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Main from "./Main";
import Card from "./Card"

function App(){
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/posts");
            setPost(data);
        };
        fetchData();
    }, []);

    return(
        <>
            <Navbar />
            <Main />
            <Card />
            <Card />
        </>
    );
}

export default App