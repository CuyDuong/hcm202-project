import React, { useEffect, useRef } from "react";

const ContinuousBanner = () => {
  // Tham chiếu đến container banner
  const bannerRef = useRef(null);

  // Mảng URL hình ảnh từ Google (mẫu hình ảnh - hãy thay thế bằng hình ảnh bạn muốn)
  const images = [
    "https://file.qdnd.vn/data/images/0/2021/01/14/vuhuyen/25122020huyen87pg.jpg?dpi=150&quality=100&w=575",
    "https://nld.mediacdn.vn/2021/1/26/trong-1611627544992198539550.jpg",
    "https://snnptnt.binhdinh.gov.vn/upload/images/2(1)(1).jpg",
    "https://laichau.gov.vn/upload/2000066/20210201/grab6b49aDH13_copy.jpg",
    "https://congan.hanoi.gov.vn/Portals/0/000%20%C4%90%C3%A0o%20Trang/002_2_22.jpg?ver=2022-02-02-143515-707",
    "https://baovinhlong.com.vn/file/e7837c027f6ecd14017ffa4e5f2a0e34/dataimages/202001/original/images2257143_image003.jpg",
    "https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Org/2025/01/08/171725-anh1.jpg",
    "https://img.cand.com.vn/resize/800x800/NewFiles/Images/2024/02/05/Untitled_1-1707093081951.jpg",
    "https://file.vnua.edu.vn/data/0/images/2022/01/30/host/dang1.jpg?w=680",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB16U11zDiNgIQKPDPQJ9jH-invoe-5Am41Q&s",
    "https://media.thanhtra.com.vn/public/uploads/2024/11/08/672dc2cea8beff5b04fad11c.jpg?w=1319",
    "https://daihoi13.dangcongsan.vn/Uploads/Images/2021/1/23/30/toan-canh-DH-anh-to.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEhDy37LuYv6AvxVUkeAFi99Shy5JJ6EYafw&s",
    "https://congan.hanoi.gov.vn/Portals/0/000%20%C4%90%C3%A0o%20Trang/001_2_22.jpg",
    "https://www.thanthongnhat.vn/uploads/news/2025_02/1224g.jpg",
  ];

  useEffect(() => {
    const banner = bannerRef.current;
    let position = 0;
    let animationId;

    const animate = () => {
      position -= 1; // Tốc độ di chuyển - số càng nhỏ thì càng chậm

      // Đặt lại vị trí khi đủ số lượng hình ảnh đã cuộn qua
      if (position <= -((images.length * 300) / 2)) {
        position = 0;
      }

      if (banner) {
        banner.style.transform = `translateX(${position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Dọn dẹp animation khi unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [images.length]);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#f8f9fa",
        padding: "20px 0",
        borderTop: "1px solid #e9ecef",
        borderBottom: "1px solid #e9ecef",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "200px",
          width: `${images.length * 300}px`, // Chiều rộng dựa trên số lượng hình ảnh
        }}
        ref={bannerRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              height: "200px",
              padding: "0 10px",
              flexShrink: 0,
            }}
          >
            <img
              src={image}
              alt={`Hình ảnh banner ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        ))}

        {/* Nhân đôi hình ảnh để tạo hiệu ứng liên tục */}
        {images.map((image, index) => (
          <div
            key={`duplicate-${index}`}
            style={{
              width: "300px",
              height: "200px",
              padding: "0 10px",
              flexShrink: 0,
            }}
          >
            <img
              src={image}
              alt={`Hình ảnh banner ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousBanner;
