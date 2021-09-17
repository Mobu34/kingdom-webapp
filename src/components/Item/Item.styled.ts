import styled from "styled-components";

export const StyledItemDivContainer = styled.div`
  border: 1px #000000 solid;
  width: 500px;
  border-radius: 20px;
  padding: 20px;
  height: 100px;
`;

export const StyledItemDiv = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledItemDivRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledItemDivColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
