import React from 'react'

function Footer() {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "30vh",
      color: "#000", 
      fontSize: "2rem",
    },
  };

  return (
    <div style={styles.container}>Footer</div>
  )
}

export default Footer