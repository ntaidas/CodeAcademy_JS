import styled from "styled-components";

const StyledMain = styled.main`
  height: calc(100vh - 83px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  > h1 {
    font-size: 3rem;
  }
  > p {
    width: 60%;
    font-size: 1.3rem;
    text-align: justify;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <h1>Hero page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id doloribus similique inventore corrupti, sunt explicabo! Modi dolore, commodi nulla nemo debitis accusamus possimus quod! Ullam laboriosam praesentium cumque nulla quae ex ad fugiat itaque laudantium excepturi tempore voluptate animi, consequatur voluptas, inventore aspernatur ipsa odio expedita temporibus similique facere voluptatum rerum autem nam! Beatae consectetur possimus eveniet distinctio repellat. Voluptatibus, rerum quod nisi, aut, illo necessitatibus dolor deserunt est fugit mollitia incidunt eos pariatur ullam voluptatum voluptates? Quasi eum rerum qui velit, vel error dolorem maiores eaque quis officia tempore optio molestias earum doloribus laudantium perferendis, molestiae fuga ea voluptatum!
      </p>
    </StyledMain>
  );
}
 
export default Main;