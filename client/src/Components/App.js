import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Main from "./Main";
import Card from "./Card"
import { Container, Grid } from "@mui/material";

function App(){
    const [posts, setPost] = useState(null);

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
            <Container sx={{mt:7, textAlign:"center"}}>
                <h1>Our Products</h1>
                <Grid container spacing={2}>
                    {posts && posts.map(item => {
                        return (
                            <>
                                <Grid key={item.id} item xs={4}>
                                <Card item={item}/>
                                </Grid>
                                
                            </>
                        )
                    })}
                </Grid>    
            </Container>
        </>
    );
}

export default App