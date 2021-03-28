import React from "react";
import styled from "styled-components";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import TotalRatioChart from "./TotalRatioChart";
import { deleteBudget, monthBudget } from "../../redux/actions/budgetActions";
import {
  deleteSavingGoal,
  monthSavingGoal,
} from "../../redux/actions/savingGoalActions";

const TotalRatioGaugeBlock = styled.div`
  position: relative;
  background-color: grey;
  width: 10rem;
  height: 1rem;
  margin-right: 1rem;
`;

const DeleteButton = styled.div`
  position: absolute;
  top: -400%;
  right: 0%;
  font-size: 2rem;
`;

const TotalRatioTemplate = ({
  categorySum,
  isBudget,
  data,
  yearInfo,
  monthInfo,
}) => {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    let body = {
      year: yearInfo,
      month: monthInfo,
    };
    if (isBudget) {
      dispatch(deleteBudget(id)).then((response) => {
        if (response.payload.data.success) {
          alert("삭제 되었습니다.");
        }
      });
      dispatch(monthBudget(body));
    } else {
      dispatch(deleteSavingGoal(id)).then((response) => {
        if (response.payload.data.success) {
          alert("삭제 되었습니다.");
        }
      });
      dispatch(monthSavingGoal(body));
    }
  };

  return (
    <TotalRatioGaugeBlock>
      <DeleteButton>
        <RiDeleteBack2Fill onClick={() => onDelete(data._id)} />
      </DeleteButton>
      <TotalRatioChart
        data={data}
        isBudget={isBudget}
        categorySum={categorySum}
      ></TotalRatioChart>
    </TotalRatioGaugeBlock>
  );
};

export default TotalRatioTemplate;
