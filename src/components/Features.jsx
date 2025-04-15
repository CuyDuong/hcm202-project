import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Lấy chủ nghĩa Mác – Lênin làm nền tảng tư tưởng.",
    detail:
      "Chính đảng kiểu mới xây dựng lập trường tư tưởng dựa trên chủ nghĩa Mác – Lênin để định hướng và lãnh đạo.",
  },
  {
    title: "Tổ chức theo nguyên tắc tập trung dân chủ.",
    detail:
      "Bảo đảm sự lãnh đạo tập thể, phát huy dân chủ trong nội bộ và tuân thủ kỷ luật tổ chức.",
  },
  {
    title: "Gắn bó chặt chẽ với quần chúng.",
    detail: "Luôn lắng nghe, thấu hiểu và hành động vì lợi ích của nhân dân.",
  },
  {
    title:
      "Tích cực kết nạp những đại biểu ưu tú của giai cấp công nhân và nhân dân lao động.",
    detail:
      "Chọn lựa những cá nhân ưu tú, trung thành với lý tưởng cách mạng để phát triển tổ chức.",
  },
  {
    title: "Theo chủ nghĩa quốc tế của giai cấp công nhân",
    detail:
      "Đoàn kết với phong trào công nhân và các đảng cộng sản trên toàn thế giới.",
  },
  {
    title: "Không ngừng tự đổi mới và nâng cao năng lực lãnh đạo.",
    detail:
      "Luôn nhìn nhận, sửa chữa khuyết điểm và nâng cao năng lực để đáp ứng yêu cầu mới.",
  },
];

function Features() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const styles = {
    cardContainer: {
      maxWidth: "700px",
      margin: "60px auto",
      background: "#dcd7d7",
      padding: "30px 40px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(2, 0, 0, 0.1)",
    },
    cardTitle: { marginBottom: "20px", fontSize: "24px", color: "#333" },
    cardHeader: {
      marginBottom: "12px",
      cursor: "pointer",
      background: "#1f1f1f",
      borderRadius: "8px",
      padding: "12px 16px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      transition: "all 0.2s ease",
    },
    cardDetail: {
      overflow: "hidden",
      marginTop: "8px",
      fontSize: "16px",
      color: "#dcd7d7",
      paddingLeft: "24px",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      style={styles.cardContainer}
    >
      <h2 style={styles.cardTitle}>
        Đặc điểm nổi bật của đảng kiểu mới:
      </h2>

      <ul style={{ listStyle: "none", paddingLeft: "0" }}>
        {features.map((item, index) => (
          <li
            key={index}
            onClick={() => toggle(index)}
            style={styles.cardHeader}
          >
            <div
              style={{
                display: "flex",
                alignItems: "start",
                fontSize: "18px",
                fontWeight: "500",
                color: "#dcd7d7",
              }}
            >
              <span style={{ marginRight: "10px", color: "#dcd7d7" }}>●</span>
              {item.title}
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={styles.cardDetail}
                >
                  {item.detail}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Features;
