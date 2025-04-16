import React from 'react'
import { motion } from 'framer-motion';

function Header() {
    const styles = {
        // bgImg: {
        //     backgroundImage: "url('https://assets2.htv.com.vn/Images/Sy%20Thanh/Khong%20gian%20HCM/1/BH-1.jpg')", // Path to your image
        //     backgroundSize: "cover", // Ensures the image covers the entire container
        //     backgroundPosition: "center", // Centers the image
        //     backgroundRepeat: "no-repeat"
        // },
        container: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "#000", // Chữ vàng
          fontSize: "2rem",
          fontFamily: "'Merriweather', 'Times New Roman'"
        },
      };

  return (
    <div >
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.container}
      >
        Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam
      </motion.div>
    </div>
    
  )
}

export default Header