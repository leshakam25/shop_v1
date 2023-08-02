import React from 'react';
import {Container} from "@mui/material";

const TheFooter = () => {
    return (
        <footer>
            <Container
                maxWidth={false}
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    height: 60,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",
                    background: "lightyellow",
                }}>
                <h4>NextJS13 project</h4>
            </Container>
        </footer>
    );
};

export default TheFooter;