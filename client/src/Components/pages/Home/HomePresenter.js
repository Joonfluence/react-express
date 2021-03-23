import React from "react";
import styled from "styled-components";
const HomePresenterBlock = styled.div``;
const MessageBlock = styled.div`
  background-color: white;
  font-size: 1.1rem;

  h2,
  p {
    padding: 1rem;
  }
`;
const HomePresenter = () => {
  return (
    <>
      <HomePresenterBlock>
        {/* 사용 방법을 추가할 것 */}
        <MessageBlock>
          <h2>어플 사용 방법</h2>
          <p>
            1. [이번달 목표 정하기] 탭에서 이번달 예산과 지출 목표액을 작성한다.{" "}
          </p>
          <p>2. [가계부 쓰기] 탭에서 지출 목록과 저축 목록을 작성한다. </p>
          <p>3. [마이페이지] 탭에서 전체적인 데이터를 확인한다. </p>
        </MessageBlock>
      </HomePresenterBlock>
    </>
  );
};

export default HomePresenter;
