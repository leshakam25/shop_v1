import React from 'react';
import {Container} from "@mui/material";

const FooterWrapper = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                height: 60,
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
                background: "lightyellow",
            }}>
            <h4>NextJS13 project</h4>
        </Container>
    );
};

export default FooterWrapper;