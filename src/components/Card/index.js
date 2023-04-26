import styled from "styled-components"

const Board = styled.div`
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  background-color: var(--white);
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BoardText = styled.h4`
  color: var(--black);
  padding: 0 calc(1rem + 1vw);

  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`

const Name = styled.h3`
  color: var(--pink);
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
`

const Card = ({ name, text }) => {
 
  return (
    <Board>
      <BoardText>{text}</BoardText>
      <Name>{name}</Name>
    </Board>
  );
};

export default Card;
