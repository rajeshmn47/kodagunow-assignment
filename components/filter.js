import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  height: 35px;
  width: 160px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e7e7ff;
  width: 261px;
  height: 51px;

  /* Grey */
  border: 1px solid #a0a3bd;
  border-radius: 10px;
  img {
    position: absolute;
    left: 15px;
    top: 15px;
  }
`;
const Input = styled.input`
  border: none;
  outline: none;
  background: #e7e7ff;
  margin-left: 35px;
`;

const FilterIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 54px;
  height: 54px;
  margin-left: 10px;
  background: #e7e7ff;
  border-radius: 10px;
`;
export default function Filter() {
  return (
    <Container>
      <InputContainer>
        <img src="./Vector(3).svg" alt="" style={{ position: "absolute" }} />
        <Input placeholder="Search" />
      </InputContainer>

      <FilterIcon>
        <img src="./Vector(2).svg" alt="" />
      </FilterIcon>
    </Container>
  );
}
