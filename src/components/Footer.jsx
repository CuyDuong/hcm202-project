import React from 'react';

function Footer() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      backgroundColor: "#1f1f1f",
      color: "#f0f0f0",
      fontSize: "16px",
      textAlign: "center",
      lineHeight: "1.6",
    },
    section: {
      marginBottom: "20px",
    },
    link: {
      color: "#ffd700",
      textDecoration: "none",
      fontWeight: "500",
    },
    contact: {
      marginTop: "20px",
      fontStyle: "italic",
    },
  };

  return (
    <footer style={styles.container}>
      <div style={styles.section}>
        <p>© 2025 - Tài nguyên từ các nguồn mở & nghiên cứu cá nhân.</p>
      </div>

      <div style={styles.section}>
        <p><strong>ChatGPT:</strong> Triển khai code cấu hình SP</p>
        <p>
          <a href="https://ai.invideo.io/" target="_blank" rel="noopener noreferrer" style={styles.link}>
            InVideo AI: Prompting to generate Video
          </a>
        </p>
        <p>
          <a href="https://ai.invideo.io/" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Bot Chat CozeAI: Hỗ trợ tìm kiếm và truy xuất dữ liệu
          </a>
        </p>
      </div>

      <div style={styles.section}>
        <p>Dữ liệu tham khảo từ:</p>
        <p><strong>Studocu - GIÁO TRÌNH TƯ TƯỞNG HỒ CHÍ MINH 2019</strong></p>
      </div>

      <div style={styles.contact}>
        Liên hệ:{" "}
        <a href="mailto:TruongNNSE172542@fpt.edu.vn" style={styles.link}>
          TruongNNSE172542@fpt.edu.vn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
