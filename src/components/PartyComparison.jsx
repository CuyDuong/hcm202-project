import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function PartyComparison() {
  const [activeTab, setActiveTab] = useState("modern");

  const partyTypes = {
    modern: {
      id: "modern",
      name: "Đảng kiểu mới",
      color: "#1f1f1f",
      iconBg: "rgba(31, 31, 31, 0.1)",
      backgroundImage: "https://www.tapchicongsan.org.vn/image/journal/article?img_id=31480821&t=1743921920514",
      characteristics: [
        {
          title: "Tư tưởng lý luận",
          description: "Đảng kiểu mới được xây dựng trên nền tảng lý luận khoa học của chủ nghĩa Mác-Lênin, có hệ thống quan điểm và đường lối rõ ràng về cách mạng và phát triển xã hội.",
          icon: "📚"
        },
        {
          title: "Cơ cấu tổ chức",
          description: "Tổ chức chặt chẽ, có kỷ luật cao theo nguyên tắc tập trung dân chủ, thống nhất về tư tưởng và hành động từ trung ương đến cơ sở.",
          icon: "🏛️"
        },
        {
          title: "Mối quan hệ với quần chúng",
          description: "Gắn bó mật thiết với quần chúng nhân dân, đại diện cho lợi ích của giai cấp công nhân và nhân dân lao động, lấy dân làm gốc trong mọi chính sách và hoạt động.",
          icon: "👥"
        },
        {
          title: "Phương thức lãnh đạo",
          description: "Lãnh đạo toàn diện, khoa học và linh hoạt; thường xuyên đổi mới phương thức lãnh đạo theo hướng dân chủ, công khai, minh bạch và hiệu quả.",
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
      color: "#444444",
      iconBg: "rgba(68, 68, 68, 0.1)",
      backgroundImage: "https://yeulichsu.edu.vn/upload/2024/01/tim-hieu-su-ra-doi-cua-chu-nghia-tu-ban-phuong-tay.webp",
      characteristics: [
        {
          title: "Tư tưởng lý luận",
          description: "Thường dựa trên tư tưởng phục vụ cho giai cấp tư sản hoặc phong kiến, thiếu hệ thống lý luận khoa học và toàn diện về phát triển xã hội.",
          icon: "💰"
        },
        {
          title: "Cơ cấu tổ chức",
          description: "Tổ chức lỏng lẻo, thiếu tính kỷ luật và thống nhất cao; cương lĩnh và chương trình hành động không rõ ràng, thường thay đổi theo lợi ích nhóm.",
          icon: "🏚️"
        },
        {
          title: "Mối quan hệ với quần chúng",
          description: "Tách rời khỏi quần chúng nhân dân, chủ yếu đại diện và bảo vệ lợi ích của các giai cấp thống trị, chưa thực sự quan tâm đến lợi ích của đa số người dân lao động.",
          icon: "👤"
        },
        {
          title: "Phương thức lãnh đạo",
          description: "Phương thức lãnh đạo bảo thủ, thiếu linh hoạt và dân chủ; chậm đổi mới, ít tiếp thu ý kiến từ cơ sở và thường áp đặt quyết định từ trên xuống.",
          icon: "🔒"
        }
      ],
      examples: [
        "Các đảng phong kiến thế kỷ 19",
        "Các đảng tư sản cổ điển",
        "Các đảng quý tộc châu Âu thời kỳ đầu"
      ],
      quote: "Duy trì hiện trạng và bảo vệ đặc quyền của giai cấp thống trị."
    }
  };

  const styles = {
    container: {
      padding: "40px",
      background: "linear-gradient(to right, #f0f0f0, #cccccc)",
      minHeight: "100vh",
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      color: "#333",
      fontSize: "36px",
      fontWeight: "700",
      textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
    tabContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "30px",
    },
    tab: {
      padding: "14px 30px",
      margin: "0 15px",
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease",
      fontSize: "18px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
    activeTab: {
      backgroundColor: "#1f1f1f",
      color: "#dcd7d7",
      boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
      transform: "translateY(-3px)",
    },
    inactiveTab: {
      backgroundColor: "#dcd7d7",
      color: "#333",
    },
    contentContainer: {
      maxWidth: "900px",
      margin: "0 auto",
      backgroundColor: "#fff",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    },
    modernBanner: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "40px 20px",
      backgroundImage: `url("${partyTypes.modern.backgroundImage}")`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
      color: "white",
      position: "relative",
      height: "350px",
    },
    traditionalBanner: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "40px 20px",
      backgroundImage: `url("${partyTypes.traditional.backgroundImage}")`,
      backgroundSize: "cover",
      backgroundPosition: "center top",
      color: "white",
      position: "relative",
      height: "350px",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(31, 31, 31, 0.75)",
      zIndex: 1,
    },
    traditionalOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(68, 68, 68, 0.75)",
      zIndex: 1,
    },
    bannerContent: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      marginTop: "auto",
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
    partyName: {
      fontSize: "38px",
      fontWeight: "bold",
      marginBottom: "15px",
      textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
      letterSpacing: "1px",
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
    quote: {
      fontStyle: "italic",
      textAlign: "center",
      maxWidth: "700px",
      textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
      marginBottom: "15px",
      fontSize: "18px",
      lineHeight: "1.6",
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
    characteristicsContainer: {
      padding: "40px",
    },
    characteristicCard: {
      marginBottom: "30px",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      padding: "25px",
      boxShadow: "0 8px 15px rgba(0,0,0,0.05)",
      transition: "all 0.3s ease",
      border: "1px solid rgba(0,0,0,0.05)",
    },
    modernCard: {
      borderLeft: "5px solid #1f1f1f",
    },
    traditionalCard: {
      borderLeft: "5px solid #444444",
    },
    characteristicHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      marginRight: "20px",
      fontSize: "24px",
    },
    modernIcon: {
      backgroundColor: "rgba(31, 31, 31, 0.1)",
      color: "#1f1f1f",
    },
    traditionalIcon: {
      backgroundColor: "rgba(68, 68, 68, 0.1)",
      color: "#444444",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#333",
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
    description: {
      color: "#333",
      lineHeight: "1.8",
      fontSize: "18px",
      paddingLeft: "70px",
      fontFamily: "'Merriweather', 'Times New Roman'",
      fontWeight: "normal",
    },
    examples: {
      margin: "40px 0 30px",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 8px 15px rgba(0,0,0,0.05)",
    },
    modernExamples: {
      backgroundColor: "rgba(31, 31, 31, 0.05)",
      borderLeft: "5px solid #1f1f1f",
    },
    traditionalExamples: {
      backgroundColor: "rgba(68, 68, 68, 0.05)",
      borderLeft: "5px solid #444444",
    },
    examplesTitle: {
      marginBottom: "15px",
      fontSize: "22px", 
      fontWeight: "bold",
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
    modernExamplesTitle: {
      color: "#1f1f1f",
    },
    traditionalExamplesTitle: {
      color: "#444444",
    },
    examplesList: {
      listStyle: "none",
      paddingLeft: "5px",
      color: "#333",
    },
    exampleItem: {
      margin: "10px 0",
      padding: "5px 0",
      display: "flex",
      alignItems: "center",
      fontSize: "18px",
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
    exampleBullet: {
      marginRight: "10px",
      fontSize: "20px",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      margin: "30px 0",
    },
    button: {
      padding: "14px 28px",
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease",
      fontSize: "16px",
      border: "none",
      boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
      fontFamily: "'Merriweather', 'Times New Roman'",
    },
    switchButton: {
      backgroundColor: "#dcd7d7",
      color: "#333",
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
                style={{
                  ...styles.characteristicCard,
                  ...(activeTab === "modern" ? styles.modernCard : styles.traditionalCard)
                }}
                whileHover={{ transform: "translateY(-5px)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div style={styles.characteristicHeader}>
                  <div 
                    style={{
                      ...styles.iconContainer,
                      ...(activeTab === "modern" ? styles.modernIcon : styles.traditionalIcon)
                    }}
                  >
                    {characteristic.icon}
                  </div>
                  <h3 style={styles.title}>{characteristic.title}</h3>
                </div>
                <p style={styles.description}>{characteristic.description}</p>
              </motion.div>
            ))}

            <motion.div
              style={{
                ...styles.examples,
                ...(activeTab === "modern" ? styles.modernExamples : styles.traditionalExamples)
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <h3 
                style={{
                  ...styles.examplesTitle,
                  ...(activeTab === "modern" ? styles.modernExamplesTitle : styles.traditionalExamplesTitle)
                }}
              >
                Ví dụ điển hình:
              </h3>
              <ul style={styles.examplesList}>
                {activeParty.examples.map((example, index) => (
                  <li key={index} style={styles.exampleItem}>
                    <span 
                      style={{
                        ...styles.exampleBullet,
                        color: activeTab === "modern" ? "#1f1f1f" : "#444444"
                      }}
                    >
                      •
                    </span>
                    {example}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div style={styles.buttonContainer}>
            <button
              style={{
                ...styles.button,
                ...styles.switchButton
              }}
              onClick={() => togglePartyType(activeTab === "modern" ? "traditional" : "modern")}
            >
              Xem {activeTab === "modern" ? "Đảng kiểu cũ" : "Đảng kiểu mới"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default PartyComparison;