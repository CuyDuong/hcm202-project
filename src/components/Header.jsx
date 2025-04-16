import React from "react";
import { motion } from "framer-motion";

function Header() {
  const styles = {
    containerHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundImage:
        "url('https://special.nhandan.vn/nguyenaiquoc_thanhlapdang/assets/cWHyU8MoIO/cover-2560x1440.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    },
    titleHeader: {
      color: "#000", 
      fontSize: "2.2rem",
      marginLeft: "3%",
      marginTop: "25%",
      fontFamily: "'Merriweather', 'Times New Roman'",
      // backgroundColor: "rgba(255, 255, 255, 0.16)", // lớp nền mờ để dễ đọc chữ
      fontWeight: "bold",
      padding: "0.5rem",
      borderRadius: "12px",
    },
  };

  return (
    <div
      style={styles.containerHeader}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.titleHeader}
      >
        TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẢNG CỘNG SẢN VIỆT NAM
      </motion.div>
    </div>
  );
}

export default Header;
