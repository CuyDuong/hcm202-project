import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";

function Carousel() {
  const styles = {
    imageStyle: {
      width: "100%",
      height: "400px",
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
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              src="https://tulieuvankien.dangcongsan.vn/Uploads/2023/5/6/22/lenin-2.jpg"
              style={styles.imageStyle}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskXDOfo90TIZsB73AxQ0TovDvisAGm1hA9g&s"
            style={styles.imageStyle}
          />
        </SwiperSlide>

        <SwiperSlide>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src="https://assets2.htv.com.vn/Images/11/bac-ho-voi-dai-hoi.jpg"
            style={styles.imageStyle}
          />
        </SwiperSlide>

        {/* Add more SwiperSlide components if you want more images */}
        {/* <SwiperSlide>
      <motion.img ... />
    </SwiperSlide> */}
      </Swiper>
    </motion.div>
  );
}

export default Carousel;
