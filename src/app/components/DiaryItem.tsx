import React from "react";

import Button from "./Button";
import { useRouter } from "next/navigation";

const DiaryItem = ({ id, emotion, content, date }) => {
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const router = useRouter();
  const goDetail = () => {
    router.push(`/diary/${id}`);
    // navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    router.push(`/edit/${id}`);
    // navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        {/* process.env.PUBLIC_URL = 퍼블릭디렉토리의 주소 */}
        <img src={`assets/emotion${emotion}.png`} alt="emotion" />
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <Button text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
