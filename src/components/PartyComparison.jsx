import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function PartyComparison() {
  const [activeTab, setActiveTab] = useState("modern");

  const partyTypes = {
    modern: {
      id: "modern",
      name: "Đảng kiểu mới",
      backgroundImage: "https://www.tapchicongsan.org.vn/image/journal/article?img_id=31480821&t=1743921920514",
      characteristics: [
        {
          title: "Nền tảng tư tưởng",
          description: "Đảng kiểu mới là đảng của giai cấp công nhân hiện đại, dựa trên nền tảng lý luận của chủ nghĩa Mác-Lênin.",
          icon: "📚"
        },
        {
          title: "Tổ chức",
          description: "Chặt chẽ, nguyên tắc tập trung dân chủ",
          icon: "🏛️"
        },
        {
          title: "Quan hệ với nhân dân",
          description: "Đảng kiểu mới luôn gắn bó mật thiết với quần chúng nhân dân, lãnh đạo cuộc đấu tranh của giai cấp công nhân và nhân dân lao động để xây dựng và bảo vệ chủ nghĩa xã hội.",
          icon: "👥"
        },
        {
          title: "Phương thức lãnh đạo",
          description: "Đảng kiểu mới có sự thống nhất về tư tưởng và hành động, luôn đổi mới và sáng tạo trong phương thức lãnh đạo, điều hành.",
          icon: "💡"
        }
      ],
      examples: [
        "Đảng Cộng sản Việt Nam",
        "Đảng Cộng sản Liên Xô (trước đây)",
        "Đảng Cộng sản Trung Quốc"
      ],
      quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công."
    },
    traditional: {
      id: "traditional",
      name: "Đảng kiểu cũ",
      backgroundImage: "https://yeulichsu.edu.vn/upload/2024/01/tim-hieu-su-ra-doi-cua-chu-nghia-tu-ban-phuong-tay.webp",
      characteristics: [
        {
          title: "Nền tảng tư tưởng",
          description: "Đảng kiểu cũ thường là đảng của giai cấp tư sản, hoặc đảng của các tầng lớp phong kiến, địa chủ.",
          icon: "💰"
        },
        {
          title: "Tổ chức",
          description: "Đảng kiểu cũ có tổ chức lỏng lẻo, chương trình, cương lĩnh không rõ ràng.",
          icon: "🏚️"
        },
        {
          title: "Quan hệ với nhân dân",
          description: "phục vụ lợi ích của giai cấp thống trị, không đại diện cho lợi ích của giai cấp công nhân và nhân dân lao động.",
          icon: "👤"
        },
        {
          title: "Phương thức lãnh đạo",
          description: "Đảng kiểu cũ thiếu sự thống nhất về tư tưởng và hành động, thường bảo thủ, không có sự đổi mới trong phương thức lãnh đạo, điều hành.",
          icon: "🔒"
        }
      ],
      examples: [
        "Các đảng phong kiến thế kỷ 19",
        "Đảng tư sản cổ điển",
        "Các đảng quý tộc châu Âu thời kỳ đầu"
      ],
      quote: "Vì lợi ích của giai cấp thống trị và duy trì hiện trạng."
    }
  };

  const styles = {
    container: {
      padding: "40px",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      minHeight: "100vh",
      fontFamily: "'Roboto', sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      color: "#333",
    },
    tabContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "30px",
    },
    tab: {
      padding: "12px 24px",
      margin: "0 10px",
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    },
    activeTab: {
      backgroundColor: "#0056b3",
      color: "white",
      boxShadow: "0 4px 10px rgba(0,86,179,0.3)",
    },
    inactiveTab: {
      backgroundColor: "#f0f0f0",
      color: "#555",
    },
    contentContainer: {
      maxWidth: "900px",
      margin: "0 auto",
      backgroundColor: "#fff",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },
    modernBanner: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end", // Để nội dung ở phía dưới
      alignItems: "center",
      padding: "40px 20px",
      backgroundImage: `url("${partyTypes.modern.backgroundImage}")`,
      backgroundSize: "cover",
      backgroundPosition: "center top", // Giữ ảnh ở vị trí trên giữa
      color: "white",
      position: "relative",
      height: "350px", // Tăng chiều cao để có thêm không gian
    },
    traditionalBanner: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end", // Để nội dung ở phía dưới
      alignItems: "center",
      padding: "40px 20px",
      backgroundImage: `url("${partyTypes.traditional.backgroundImage}")`,
      backgroundSize: "cover",
      backgroundPosition: "center top", // Giữ ảnh ở vị trí trên giữa
      color: "white",
      position: "relative",
      height: "350px", // Tăng chiều cao để có thêm không gian
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 86, 179, 0.5)",
      zIndex: 1,
    },
    traditionalOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(139, 69, 19, 0.5)", // Màu nâu cho đảng kiểu cũ
      zIndex: 1,
    },
    bannerContent: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      marginTop: "auto", // Đẩy nội dung xuống dưới
    },
    logo: {
      width: "120px",
      height: "120px",
      objectFit: "contain",
      marginBottom: "20px",
      borderRadius: "60px",
      backgroundColor: "white",
      padding: "10px",
    },
    partyName: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "10px",
      textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    },
    quote: {
      fontStyle: "italic",
      textAlign: "center",
      maxWidth: "600px",
      textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
      marginBottom: "15px", // Thêm margin dưới cho câu quote
    },
    characteristicsContainer: {
      padding: "30px",
    },
    characteristicCard: {
      marginBottom: "25px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
      transition: "transform 0.3s ease",
    },
    characteristicHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    icon: {
      fontSize: "24px",
      marginRight: "10px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
    },
    description: {
      color: "#555",
      lineHeight: "1.6",
    },
    examples: {
      margin: "30px 0",
      padding: "20px",
      backgroundColor: "#f0f5ff",
      borderRadius: "10px",
    },
    examplesTitle: {
      marginBottom: "10px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#0056b3",
    },
    examplesList: {
      listStyle: "disc",
      paddingLeft: "20px",
      color: "#444",
    },
    exampleItem: {
      margin: "5px 0",
    },
    compareButton: {
      display: "block",
      margin: "30px auto",
      padding: "12px 24px",
      backgroundColor: "#0056b3",
      color: "white",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 10px rgba(0,86,179,0.3)",
    }
  };

  const togglePartyType = (type) => {
    setActiveTab(type);
  };

  const activeParty = partyTypes[activeTab];

  const renderBanner = () => {
    if (activeTab === "modern") {
      return (
        <div style={styles.modernBanner}>
          <div style={styles.overlay}></div>
          <div style={styles.bannerContent}>
            <h2 style={styles.partyName}>{activeParty.name}</h2>
            <p style={styles.quote}>"{activeParty.quote}"</p>
          </div>
        </div>
      );
    } else {
      return (
        <div style={styles.traditionalBanner}>
          <div style={styles.traditionalOverlay}></div>
          <div style={styles.bannerContent}>
            <h2 style={styles.partyName}>{activeParty.name}</h2>
            <p style={styles.quote}>"{activeParty.quote}"</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={styles.header}>So sánh đảng kiểu cũ và đảng kiểu mới</h1>
      </motion.div>

      <div style={styles.tabContainer}>
        {Object.values(partyTypes).map((partyType) => (
          <motion.div
            key={partyType.id}
            style={{
              ...styles.tab,
              ...(activeTab === partyType.id ? styles.activeTab : styles.inactiveTab)
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => togglePartyType(partyType.id)}
          >
            {partyType.name}
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          style={styles.contentContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {renderBanner()}

          <div style={styles.characteristicsContainer}>
            {activeParty.characteristics.map((characteristic, index) => (
              <motion.div
                key={index}
                style={styles.characteristicCard}
                whileHover={{ transform: "translateY(-5px)" }}
              >
                <div style={styles.characteristicHeader}>
                  <span style={styles.icon}>{characteristic.icon}</span>
                  <h3 style={styles.title}>{characteristic.title}</h3>
                </div>
                <p style={styles.description}>{characteristic.description}</p>
              </motion.div>
            ))}

            <div style={styles.examples}>
              <h3 style={styles.examplesTitle}>Ví dụ điển hình:</h3>
              <ul style={styles.examplesList}>
                {activeParty.examples.map((example, index) => (
                  <li key={index} style={styles.exampleItem}>{example}</li>
                ))}
              </ul>
            </div>
          </div>

          <button
            style={styles.compareButton}
            onClick={() => togglePartyType(activeTab === "modern" ? "traditional" : "modern")}
          >
            So sánh với {activeTab === "modern" ? "Đảng kiểu cũ" : "Đảng kiểu mới"}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default PartyComparison;