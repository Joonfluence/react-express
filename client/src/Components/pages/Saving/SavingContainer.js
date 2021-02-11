import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import SavingPresenter from "./SavingPresenter";

const SavingContainerBlock = styled.div``;

const SavingContainer = () => {
  // const { date, title, price, memo, category } = useSelector(({ savingReducer }) => ({
  //   date: savingReducer.payload.date,
  //   title: savingReducer.payload.title,
  //   price: savingReducer.payload.price,
  //   memo: savingRedcuer.payload.memo,
  //   category: savingReducer.payload.category,
  // }));
  return (
    <SavingContainerBlock>
      <Header HeaderInfo="저축"></Header>
      <SavingPresenter></SavingPresenter>
    </SavingContainerBlock>
  );
};

export default SavingContainer;
