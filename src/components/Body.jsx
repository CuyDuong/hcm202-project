import React from "react";
import { motion } from "framer-motion";

function Body() {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      background: "linear-gradient(to right, #f0f0f0, #cccccc)",
      gap: "40px",
      flexWrap: "wrap",
    },
    imageStyle: {
      width: "35%",
      height: "auto",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    contentStyle: {
      color: "#000",
      fontSize: "20px",
      maxWidth: "600px",
    },
  };

  return (
    <div style={styles.container}>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        src="https://tuyenquang.dcs.vn/Image/Large/202249155536_85319.jpg"
        style={styles.imageStyle}
      />
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={styles.contentStyle}
      >
        Tư tưởng Hồ Chí Minh là nền tảng tư tưởng và kim chỉ nam cho hành động
        của Đảng Cộng sản Việt Nam.
      </motion.div>
    </div>
  );
}

export default Body;
