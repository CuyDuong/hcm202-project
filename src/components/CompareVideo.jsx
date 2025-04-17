import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Carousel from "./Carousel";

const imageCarousel = [
  "https://assets2.htv.com.vn/Images/11/bac-ho-voi-dai-hoi.jpg",
  "https://tulieuvankien.dangcongsan.vn/Uploads/2023/5/6/22/lenin-2.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskXDOfo90TIZsB73AxQ0TovDvisAGm1hA9g&s",
];

function CompareVideo() {
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
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
    container2: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "auto",
      background: "linear-gradient(to left, #f0f0f0, #cccccc)",
      gap: "80px",
      flexWrap: "wrap",
    },
  };

  return (
    <div>
      <div style={styles.container2}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Tiêu đề chính */}
          <div
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              fontFamily: "'Merriweather', 'Times New Roman', serif",
              marginBottom: "20px",
              color: "#222",
              textAlign: "center",
            }}
          >
            So sánh Đảng Cộng sản Việt Nam với các đảng chính trị trên thế giới
          </div>

          {/* Tiêu đề phụ */}
          <div
            style={{
              fontSize: "18px",
              fontFamily: "'Merriweather', 'Times New Roman', serif",
              color: "#444",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Đảng kiểu mới – Tiên phong, tổ chức chặt chẽ, vì nhân dân
          </div>

          {/* Video thay cho ảnh */}
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%", // 16:9 ratio
              height: 0,
              overflow: "hidden",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              marginBottom: "50px",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/XJZixlhPBNo" // Thay VIDEO_ID bằng ID thật
              title="So sánh Đảng Cộng sản Việt Nam"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </div>
        </motion.div>

        {/* <div
          style={{
            width: "35%",
          }}
        >
          <Carousel />
        </div> */}
      </div>
    </div>
  );
}

export default CompareVideo;
