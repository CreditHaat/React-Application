import React from "react";

function Loader() {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)", // Adjust opacity and color as needed
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999 // Ensure it's on top of other content
        }}>
            <div style={{
                backgroundColor: "white", // Optional: Background color for loader content
                padding: "20px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" // Optional: Box shadow for loader content
            }}>
                Finding a best Lenders for you!<br/> <center>Please wait...</center>
            </div>
        </div>
    );
}

export default Loader;
