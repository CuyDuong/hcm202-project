import { useEffect } from "react";
/* global CozeWebSDK */

const BoxChat = () => {
  useEffect(() => {
    // Xóa cache chat khi load lại trang
    sessionStorage.clear();
    localStorage.removeItem("coze_chat_history");

    // Tạo script để nhúng Coze AI SDK
    const script = document.createElement("script");
    script.src =
      "https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.2.0-beta.3/libs/oversea/index.js";
    script.async = true;
    script.onload = () => {
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: "7476361587511705601", // Thay bằng bot_id thật của bạn
          history: {
            save: false, // Không lưu lịch sử chat giữa các user
          },
        },
        componentProps: {
          title: "Chat AI",
          onClose: () => {
            sessionStorage.clear(); // Xóa session khi đóng chat
            localStorage.removeItem("coze_chat_history"); // Xóa cache chat
          },
        },
        auth: {
          type: "token",
          token:
            "pat_nyMNPhEUlRe2NG2mz0Hg76wLLK3zH7bxgkXrYaU4bmUuBkOWTmlZTxuRDuzMkWgY", // Thay bằng token thật của bạn
          onRefreshToken: function () {
            return "pat_********"; // Nếu token hết hạn, trả về token mới
          },
        },
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Xóa script khi component unmount
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {/* <Welcome /> */}
      {/* <button
        className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        onClick={() => {
          const chatContainer = document.querySelector(".coze-web-chat");
          if (chatContainer) {
            chatContainer.style.display =
              chatContainer.style.display === "none" ? "block" : "none";
          }
        }}
      >
        🗨️ Chat với AI
      </button> */}
    </div>
  );
};

export default BoxChat;
