import React from "react";
import Slider from "react-slick";
import { Card } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompareSlider = () => {
  const slides = [
    {
      title: "Tư tưởng chỉ đạo",
      vn: "Kết hợp chủ nghĩa Mác – Lênin với tư tưởng Hồ Chí Minh và thực tiễn Việt Nam, nhấn mạnh 'dân là gốc', ĐCSVN hướng đến đổi mới theo hướng dân chủ, gần dân.",
      world:
        "Nhiều Đảng khác như Trung Quốc nghiêng mạnh về chủ nghĩa Mác – Lênin thuần túy và kiểm soát chặt chẽ thông tin, ít đề cập đến dân chủ trực tiếp trong tổ chức.",
    },
    {
      title: "Tổ chức và dân chủ nội bộ",
      vn: "ĐCSVN vận hành theo nguyên tắc 'tập trung dân chủ', tăng cường tự phê bình, chỉnh đốn Đảng, mở rộng đối thoại trong nội bộ.",
      world:
        "Một số Đảng như CPC (Trung Quốc) thiên về lãnh đạo tập quyền, ít nhấn mạnh tự phê bình sâu rộng, dân chủ nội bộ bị giới hạn.",
    },
    {
      title: "Mối quan hệ với nhân dân",
      vn: "Luôn đề cao vai trò của nhân dân, thực hiện khẩu hiệu 'Dân biết – Dân bàn – Dân làm – Dân kiểm tra'.",
      world:
        "Nhiều đảng cầm quyền mang tính hành chính hóa, duy trì khoảng cách với dân, ít cơ chế phản hồi từ cơ sở lên trung ương.",
    },
    {
      title: "Tính cải cách & đổi mới",
      vn: "ĐCSVN chủ trương đổi mới từ năm 1986, chuyển từ kinh tế tập trung bao cấp sang kinh tế thị trường định hướng XHCN.",
      world:
        "Liên Xô chậm đổi mới nên tan rã. Trung Quốc đổi mới mạnh hơn nhưng tập trung hóa về quyền lực, thiếu cơ chế phản biện xã hội.",
    },
    {
      title: "Tính bản sắc dân tộc",
      vn: "Đảng Việt Nam luôn nhấn mạnh yếu tố văn hóa, truyền thống dân tộc và tinh thần đoàn kết – điểm đặc trưng so với nhiều Đảng khác.",
      world:
        "Một số Đảng khác áp dụng mô hình XHCN cứng nhắc, ít linh hoạt về văn hóa dân tộc (Liên Xô, Đông Âu).",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Card
            key={index}
            style={{
              backgroundColor: "#d4d4d4",
              border: "2px solid #1f1f1f",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "left",
            }}
          >
            <h2
              style={{ color: "#a80000", fontSize: "22px", fontWeight: "bold" }}
            >
              {slide.title}
            </h2>
            <div style={{ display: "flex", gap: "20px", marginTop: "16px" }}>
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <h3 style={{ color: "#731010", marginBottom: "8px" }}>
                  🔴 ĐCSVN kiểu mới
                </h3>
                <p style={{ color: "#707070", fontSize: "15px" }}>{slide.vn}</p>
              </div>
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <h3 style={{ color: "#1f1f1f", marginBottom: "8px" }}>
                  🔵 Các Đảng trên thế giới
                </h3>
                <p style={{ color: "#707070", fontSize: "15px" }}>
                  {slide.world}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default CompareSlider;
