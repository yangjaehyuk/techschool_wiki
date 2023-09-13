import React, {useEffect, useState} from "react";
import "../../styles/Wiki.css";
import {useParams} from "react-router-dom";
import TextEditor from "./TextEditor";

function Content() {
  const {id} = useParams() as {id: string};
  const [text, setText] = useState("");
  const [editTrue, setEditTrue] = useState(false);

  const clickEdit = () => {
    setEditTrue(!editTrue);
    console.log(editTrue);
  };

  /**
   * 메인컨텐츠 렌더링 시 초기 세팅 함수
   * - 수정창 닫은 상태로 렌더링
   * - wiki 메인페이지의 경우 첫번째 리스트 렌더링
   */
  const initialSet = () => {
    setEditTrue(false);
    if (id) {
      setText(id);
    } else {
      setText("회사내규");
    }
  };

  useEffect(() => {
    initialSet();
  }, [id]);

  return (
    <div className="WikiContentWrap">
      <h1 id="ContentTitle">{text}</h1>
      <button
        className="WikiButton"
        type="button"
        onClick={clickEdit}
        style={{
          backgroundColor: editTrue ? "rgba(255, 55, 115, 0.8)" : "#34576d",
        }}
      >
        {editTrue ? "수정취소" : "수정하기"}
      </button>
      <div id="main-content">
        {editTrue ? (
          <TextEditor />
        ) : (
          <div>
            Url 파라미터값(현재값 : {text})을 Key로 갖는 데이터를 가져와
            렌더링합니다, <br /> 렌더링 시에는 외부라이브러리를 통해
            마크다운텍스트(데이터)를 html로 변환하여 렌더링합니다
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
