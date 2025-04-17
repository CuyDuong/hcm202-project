import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Lấy chủ nghĩa Mác – Lênin làm nền tảng tư tưởng.",
    detail:
      "Chủ nghĩa Mác được hình thành, từ sự kết tinh những giá trị tinh thần sâu sắc, tiến bộ của lịch sử văn minh nhân loại, với những tiền đề về khoa học tự nhiên, khoa học xã hội, từ triết học cổ điển Đức, kinh tế chính trị học Anh và Chủ nghĩa xã hội không tưởng Pháp. Chủ nghĩa Mác là hệ thống lý luận khoa học, vũ khí lý luận, ngọn cờ tập hợp lực lượng của giai cấp vô sản cách mạng, để chính đảng kiểu mới vạch ra cương lĩnh hành động, chiến lược và sách lược cách mạng, xây dựng chế độ xã hội mới của người lao động.",
  },
  {
    title: "Tổ chức theo nguyên tắc tập trung dân chủ.",
    detail:
      "Đây là nguyên tắc sẽ tạo nên sự đoàn kết, thống nhất trong Đảng, tạo thành một khối vững chắc cho sức mạnh chung của toàn Đảng.",
  },
  {
    title: "Gắn bó chặt chẽ với quần chúng.",
    detail: "Luôn lắng nghe, thấu hiểu và hành động vì lợi ích của nhân dân. Bởi vì, đảng không thể lãnh đạo được giai cấp, nếu như không có mối liên hệ chặt chẽ với giai cấp công nhân ngoài đảng và các tầng lớp lao động khác.",
  },
  {
    title:
      "Tích cực kết nạp những đại biểu ưu tú của giai cấp công nhân và nhân dân lao động.",
    detail:
      "Để một đảng cách mạng - đảng kiểu mới xứng đáng là đội tiên phong, không ngừng lớn mạnh thì phải thường xuyên bổ sung những quần chúng ưu tú cho đảng, đồng thời loại bỏ cơ thể mình những phần tử thoái hóa, biến chất, cơ hội. Đây cũng là điều kiện để đảng tồn tại và phát triển, đủ uy tín lãnh đạo nhân dân qua các giai đoạn cách mạng ở mỗi nước.",
  },
  {
    title: "Theo chủ nghĩa quốc tế của giai cấp công nhân",
    detail:
      "Đây là vấn đề xuất phát từ bản chất giai cấp của giai cấp công nhân, đòi hỏi đảng kiểu mới phải kết hợp đúng đắn giữa lợi ích dân tộc, lợi ích giai cấp trong từng nước và lợi ích quốc tế; giữa chủ nghĩa yêu nước chân chính với chủ nghĩa quốc tế cao cả.",
  },
  {
    title: "Không ngừng tự chỉnh đốn, đổi mới và nâng cao năng lực lãnh đạo.",
    detail:
      "Đảng phải “là đạo đức, là văn minh”, chống bệnh quan liêu, tham nhũng, xa rời quần chúng. Đảng luôn giữ vai trò lãnh đạo cách mạng, gắn bó với nhân dân, không ngừng tự đổi mới, chỉnh đốn để đáp ứng yêu cầu thời đại. Đây là điều kiện tất yếu để Đảng giữ vị thế tiên phong, đồng thời giữ được niềm tin và sự ủng hộ của nhân dân.",
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
    cardTitle: {
      marginBottom: "20px",
      fontSize: "24px",
      color: "#333",
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
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
      fontFamily: "'Merriweather', 'Times New Roman'",
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
      <h2 style={styles.cardTitle}>Đặc điểm nổi bật của đảng kiểu mới:</h2>

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
                fontFamily: "'Merriweather', 'Times New Roman'",
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
                  transition={{ duration: 0.2, ease: "easeInOut" }}
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
