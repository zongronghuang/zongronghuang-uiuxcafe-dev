import styled from "@emotion/styled";
import CardA_image from "./cardA-image.jpg";

const CardAJSX = ({ className }) => (
  <div className={className}>
    <header className="card-header">
      <img className="card-image" src={CardA_image} alt="bush leaves" />
    </header>
    <div className="card-body">
      <h1 className="card-title">Card Grid Layout</h1>
      <p className="card-description">
        Demo of pixel perfect pure CSS simple responsive card grid layout
      </p>
    </div>
  </div>
);

const CardA = styled(CardAJSX)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 520px;
  height: 460px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 40px 1px rgba(0, 0, 0, 0.2);

  .card-header {
    width: 100%;
    height: 68.47%;
    overflow: hidden;
  }

  .card-image {
    width: 100%;
  }

  .card-body {
    height: calc(460px - 315px);
    padding: 23px;
    font-family: sans-serif;
    text-align: left;
  }

  .card-title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.4;
  }

  .card-description {
    font-size: 1.4rem;
    font-weight: 200;
    line-height: 1.2;
  }
`;

export default CardA;
