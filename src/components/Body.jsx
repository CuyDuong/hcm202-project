import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const imageCarousel = [
  "https://assets2.htv.com.vn/Images/11/bac-ho-voi-dai-hoi.jpg",
  "https://tulieuvankien.dangcongsan.vn/Uploads/2023/5/6/22/lenin-2.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskXDOfo90TIZsB73AxQ0TovDvisAGm1hA9g&s", // add more if you want
];

function Body() {
  const styles = {
    container1: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      background: "linear-gradient(to right, #f0f0f0, #cccccc)",
      gap: "80px",
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
    container2: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        background: "linear-gradient(to left, #f0f0f0, #cccccc)",
        gap: "80px",
        flexWrap: "wrap",
      },
  };

  return (
    <div>
      <div style={styles.container1}>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          viewport={{ once: true }}
          src="https://tuyenquang.dcs.vn/Image/Large/202249155536_85319.jpg"
          style={styles.imageStyle}
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div
            style={{
              ...styles.contentStyle,
              marginBottom: "40px",
              fontWeight: "bold",
            }}
          >
            Tư tưởng Hồ Chí Minh là nền tảng tư tưởng và kim chỉ nam cho hành
            động của Đảng Cộng sản Việt Nam.
          </div>
          <div style={styles.contentStyle}>
            Trong tác phẩm Đường cách mệnh (năm 1927), Hồ Chí Minh khẳng định:
            Cách mạng trước hết phải có “đảng cách mệnh, để trong thì vận động
            và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô
            sản giai cấp ở mọi nơi. Đảng có vững, cách mệnh mới thành công, cũng
            như người cầm lái có vững thuyền mới chạy”.
          </div>
        </motion.div>
      </div>

      <div style={styles.container2}>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div
            style={{
              ...styles.contentStyle,
              marginBottom: "40px",
            }}
          >
            Đảng Cộng sản Việt Nam do Hồ Chí Minh sáng lập và rèn luyện là một đảng chính trị 
            tồn tại và phát triển theo những quan điểm của V.I Lênin về đảng kiểu mới của
            giai cấp vô sản.
          </div>
          <div style={styles.contentStyle}>
            Trong tác phẩm Đường cách mệnh (năm 1927), Hồ Chí Minh khẳng định:
            Cách mạng trước hết phải có “đảng cách mệnh, để trong thì vận động
            và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô
            sản giai cấp ở mọi nơi. Đảng có vững, cách mệnh mới thành công, cũng
            như người cầm lái có vững thuyền mới chạy”.
          </div>
        </motion.div>
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          viewport={{ once: true }}
          src="https://tulieuvankien.dangcongsan.vn/Uploads/2023/5/6/22/lenin-2.jpg"
          style={styles.imageStyle}
        />
      </div>
    </div>
  );
}

export default Body;
