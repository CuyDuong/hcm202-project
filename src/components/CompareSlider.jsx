import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Card } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dan from "../assets/Dan.jpg";
import Lanhdao from "../assets/lanhdao.jpg";
import Kinhte from "../assets/kinhte.jpg";
import Doingoai from "../assets/tbt.png";
import Doimoi from "../assets/doimoi.jpg";

const CompareSlider = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  // Lấy chiều cao của cửa sổ khi component mount
  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    updateHeight(); // Cập nhật ngay lần đầu
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // Nội dung slides đã được cập nhật theo lý thuyết so sánh
  const slides = [
    {
      title: "Tư tưởng và lý luận",
      vn: "Kết hợp Chủ nghĩa Marx-Lenin với tư tưởng Hồ Chí Minh, nhấn mạnh 'dân là gốc'. Đảng xây dựng xã hội XHCN với mục tiêu hướng tới chủ nghĩa cộng sản.",
      world:
        "Đảng cộng sản khác cũng dựa trên Chủ nghĩa Marx-Lenin nhưng có biến thể khác nhau. Ví dụ: Trung Quốc với 'Chủ nghĩa xã hội mang đặc sắc Trung Quốc'.",
      image: Dan,
    },
    {
      title: "Phương thức lãnh đạo và tổ chức",
      vn: "Mô hình Đảng lãnh đạo toàn diện và tuyệt đối, với hệ thống tổ chức từ trung ương đến địa phương. Đảng trực tiếp lãnh đạo nhà nước và xã hội.",
      world:
        "Một số Đảng Cộng sản khác không nắm quyền lãnh đạo trực tiếp mà tham gia chính trị qua liên minh hoặc hoạt động đối lập.",
      image: Lanhdao,
    },
    {
      title: "Chính sách kinh tế",
      vn: "Đổi mới kinh tế từ cuối thập kỷ 1980, chuyển từ kế hoạch hóa tập trung sang kinh tế thị trường định hướng XHCN. Đa phương hóa và đa dạng hóa các quan hệ kinh tế.",
      world:
        "Chính sách kinh tế đa dạng: Trung Quốc cải cách theo hướng thị trường từ 1980, trong khi một số nước khác vẫn duy trì nền kinh tế kế hoạch hóa tập trung.",
      image: Kinhte,
    },
    {
      title: "Quan hệ quốc tế",
      vn: "Chủ trương đa phương hóa và đa dạng hóa quan hệ quốc tế. Xây dựng quan hệ hữu nghị với các nước trên cơ sở tôn trọng lẫn nhau và cùng có lợi.",
      world:
        "Đa dạng trong chính sách: Trung Quốc theo đuổi 'hòa bình và phát triển', các Đảng khác có chính sách đối ngoại riêng tùy điều kiện quốc gia.",
      image: Doingoai,
    },
    {
      title: "Đổi mới và thích ứng",
      vn: "Liên tục đổi mới sáng tạo, tự điều chỉnh chính sách phù hợp với thực tiễn Việt Nam. Kết hợp linh hoạt giữa lý luận và thực tiễn.",
      world:
        "Mức độ thích ứng khác nhau: một số duy trì cứng nhắc các nguyên tắc truyền thống, số khác có cải cách triệt để hoặc thậm chí từ bỏ nhiều nguyên tắc cốt lõi.",
      image: Doimoi,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Tắt autoplay để không tự động xoay
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    pauseOnHover: true,
    arrows: true,
  };

  // Tính chiều cao cho slider
  const slideHeight = windowHeight * 0.9;

  // Màu sắc từ bảng màu mới
  const colors = {
    lightGray: "#d4d4d4", // Xám nhạt - Nền card
    darkGray: "#707070", // Xám đậm - Màu phụ
    black: "#1f1f1f", // Đen - Viền hoặc chữ phụ
    darkRed: "#731010", // Đỏ sậm - Nút / tiêu đề
    brightRed: "#a80000", // Đỏ tươi - Tiêu đề chính, nhấn mạnh
  };

  return (
    <div
      className="slider-container"
      style={{
        width: "100%",
        maxWidth: "100vw",
        margin: "0 auto",
        padding: "0",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#121212", // Background tối hơn để tạo độ tương phản cao hơn
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-wrapper">
            <Card
              style={{
                height: slideHeight,
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url(${slide.image})`, // Tối hơn để nổi bật nội dung
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: colors.lightGray,
                borderRadius: "0",
                padding: "0",
                position: "relative",
                overflow: "hidden",
                border: "none",
              }}
              bodyStyle={{
                background: "transparent",
                height: "100%",
                padding: "40px 60px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: "bold",
                  marginBottom: "30px",
                  textShadow: "3px 3px 6px rgba(0,0,0,0.9)", // Tăng cường shadow cho tiêu đề
                  textAlign: "center",
                  color: colors.brightRed, // Đỏ tươi cho tiêu đề chính
                }}
              >
                {slide.title}
              </h2>
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  height: "auto",
                  width: "100%",
                  maxWidth: "1400px",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    background: "rgba(31, 31, 31, 0.9)", // Sử dụng màu đen với độ trong suốt
                    padding: "30px",
                    borderRadius: "12px",
                    backdropFilter: "blur(8px)",
                    boxShadow: `0 10px 30px rgba(0,0,0,0.6)`, // Đậm hơn
                    border: `2px solid ${colors.darkRed}`, // Viền đậm hơn
                  }}
                >
                  <h3
                    style={{
                      color: colors.brightRed,
                      marginBottom: "20px",
                      fontSize: "28px",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                      fontWeight: "bold",
                    }}
                  >
                    🔴 ĐCSVN kiểu mới
                  </h3>
                  <p
                    style={{
                      fontSize: "20px",
                      lineHeight: "1.6",
                      textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                      color: colors.lightGray,
                    }}
                  >
                    {slide.vn}
                  </p>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "rgba(31, 31, 31, 0.9)", // Sử dụng màu đen với độ trong suốt
                    padding: "30px",
                    borderRadius: "12px",
                    backdropFilter: "blur(8px)",
                    boxShadow: `0 10px 30px rgba(0,0,0,0.6)`, // Đậm hơn
                    border: `2px solid ${colors.darkGray}`, // Viền đậm hơn
                  }}
                >
                  <h3
                    style={{
                      color: "#5b8def", // Giữ màu xanh cho tương phản
                      marginBottom: "20px",
                      fontSize: "28px",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                      fontWeight: "bold",
                    }}
                  >
                    🔵 Đảng Cộng sản khác
                  </h3>
                  <p
                    style={{
                      fontSize: "20px",
                      lineHeight: "1.6",
                      textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                      color: colors.lightGray,
                    }}
                  >
                    {slide.world}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .slider-container :global(.slick-dots) {
          bottom: 25px;
        }

        .slider-container :global(.slick-dots li button:before) {
          color: ${colors.lightGray};
          opacity: 0.7;
          font-size: 12px;
        }

        .slider-container :global(.slick-dots li.slick-active button:before) {
          color: ${colors.brightRed};
          opacity: 1;
        }

        .slider-container :global(.slick-prev),
        .slider-container :global(.slick-next) {
          z-index: 10;
          width: 50px;
          height: 50px;
        }

        .slider-container :global(.slick-prev) {
          left: 20px;
        }

        .slider-container :global(.slick-next) {
          right: 20px;
        }

        .slider-container :global(.slick-prev:before),
        .slider-container :global(.slick-next:before) {
          font-size: 50px;
          opacity: 0.8;
          color: ${colors.brightRed};
        }

        @media (max-width: 768px) {
          .slider-container :global(.slick-prev) {
            left: 10px;
          }

          .slider-container :global(.slick-next) {
            right: 10px;
          }

          .slider-container :global(.slick-prev:before),
          .slider-container :global(.slick-next:before) {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default CompareSlider;
