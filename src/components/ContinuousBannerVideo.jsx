import React, { useEffect, useRef } from "react";

const ContinuousBannerVideo = () => {
  const bannerRef = useRef(null);

  const youtubeUrls = [
    "https://www.youtube.com/embed/LaqR2I104XA",
    "https://www.youtube.com/embed/34GKvR8nZus",
    "https://www.youtube.com/embed/M0pm1FRlj7g",
    "https://www.youtube.com/embed/ltGF2yxdzlI",
    "https://www.youtube.com/embed/o0OBNdFU56A",
    "https://www.youtube.com/embed/9WZ5Rlj18uY",
    "https://www.youtube.com/embed/sbERKLyvB5w",
    "https://www.youtube.com/embed/OEusC90AFEI",
    "https://www.youtube.com/embed/6lL5TfVt80M",
    "https://www.youtube.com/embed/9BoUGuUy9v4",
    "https://www.youtube.com/embed/C3-HHefTxWc",
    "https://www.youtube.com/embed/cSjffDVnDoU",
    "https://www.youtube.com/embed/MecWiL8SD3w",
    "https://www.youtube.com/embed/TRg0XB96IN8",
    "https://www.youtube.com/embed/0Knnumhx1-M",
  ];

  useEffect(() => {
    const banner = bannerRef.current;
    let position = 0;
    let animationId;

    const animate = () => {
      position -= 0.5;

      if (position <= -((youtubeUrls.length * 320) / 2)) {
        position = 0;
      }

      if (banner) {
        banner.style.transform = `translateX(${position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [youtubeUrls.length]);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#f9f9f9",
        padding: "20px 0",
        borderTop: "1px solid #ccc",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div
        ref={bannerRef}
        style={{
          display: "flex",
          flexDirection: "row",
          height: "200px",
          width: `${youtubeUrls.length * 320}px`,
        }}
      >
        {youtubeUrls.concat(youtubeUrls).map((url, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              height: "200px",
              padding: "0 10px",
              flexShrink: 0,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`${url}?autoplay=1&mute=1&loop=1&controls=0&playlist=${getVideoId(
                url
              )}`}
              title={`YouTube video ${index}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper để lấy video ID từ URL
const getVideoId = (url) => {
  const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
};

export default ContinuousBannerVideo;
