"use client";

import { useContext, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { DiaryStateContext } from "@/app/context/AppContext";
import DiaryEditor from "@/app/components/DiaryEditor";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const id = useParams().id;
  const router = useRouter();
  // const navigate = useNavigate();
  const diaryList = useContext(DiaryStateContext);

  // 타이틀 번경
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기 수정`;
  }, []);

  // id, diaryList가 변할때 데이터꺼내오기
  useEffect(() => {
    // @ts-ignore
    if (diaryList.length >= 1) {
      // @ts-ignore
      const targetDiary = diaryList.find(
        // @ts-ignore
        (it) => parseInt(it.id) === parseInt(id),
      );
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        router.replace("/");
        // navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
