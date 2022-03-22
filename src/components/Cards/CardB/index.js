import styled from "@emotion/styled";
import { Bathtub, Bed } from "phosphor-react";
import cardB_image from "./cardB-image.jpg";
import realtor_image from "./realtor.jpg";

const CardBJSX = ({ className }) => (
  <article className={className}>
    <header className="card-header">
      <img
        className="card-image"
        src={cardB_image}
        alt="front view of the house"
      />
    </header>

    <main className="card-body">
      <section className="profile">
        <h3 className="house-intro">DETACHED HOUSE &#183; 5Y OLD</h3>
        <p className="price">&#36;750,000</p>
        <span className="address">742 Evergreen Terrace</span>
      </section>

      <section className="facilities">
        <div className="bedrooms">
          <Bed size={36} weight="thin" />
          &nbsp;&nbsp;
          <span className="count">3</span>
          &nbsp;
          <span>Bedrooms</span>
        </div>

        <div className="bathrooms">
          <Bathtub size={36} weight="thin" />
          &nbsp;&nbsp;
          <span className="count">2</span>
          &nbsp;
          <span>Bathrooms</span>
        </div>
      </section>
    </main>

    <footer className="card-footer">
      <h6 className="contact-title">REALTOR</h6>
      <div className="contact-info">
        <img
          className="contact-image"
          src={realtor_image}
          alt="Realtor - Tiffany Heffner"
        />
        <div className="contact-profile">
          <h4 className="contact-name">Tiffany Heffner</h4>
          <span className="contact-number">(555) 555-4321</span>
        </div>
      </div>
    </footer>
  </article>
);

const CardB = styled(CardBJSX)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 410px;
  height: 620px;
  border-radius: 10px;
  overflow: hidden;
  font-family: sans-serif;
  box-shadow: 5px 5px 40px 1px rgba(0, 0, 0, 0.2);

  /* CARD HEADER */
  .card-header {
    position: relative;
    height: 44.35%;
    overflow: hidden;
  }

  .card-header:after {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
    content: "♡";
    font-size: 1.5rem;
    color: white;
  }

  .card-image {
    width: 100%;
  }

  /* BODY */
  .card-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: dimgray;
    background-color: white;
  }

  .profile {
    flex-grow: 2;
    padding: 20px;
    text-align: left;

    & .house-intro {
      font-size: 1.1rem;
    }

    & .price {
      margin: 15px 0;
      font-size: 2.2rem;
      font-weight: 350;
      color: black;
    }

    & .address {
      font-size: 1.2rem;
      font-weight: 350;
    }
  }

  .facilities {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    outline: 1px solid lightgray;
    font-weight: 300;
    color: gray;

    & .bedrooms,
    & .bathrooms {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 20px 0 20px 20px;
      font-size: 1.2rem;
    }

    & .count {
      font-weight: bold;
      color: black;
    }
  }

  /* FOOTER */
  .card-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    outline: 1px solid lightgray;
    height: 20.16%;
    padding: 20px;
    color: dimgray;
    background-color: #f5f8f8;
  }

  .contact-title {
    text-align: left;
    letter-spacing: 1px;
  }

  .contact-image {
    float: left;
    margin-right: 15px;
    width: 50px;
    border-radius: 50%;
  }

  .contact-profile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    float: left;
    text-align: left;

    & .contact-name {
      font-size: 1.2rem;
      letter-spacing: 0.8px;
      color: black;
    }

    & .contact-number {
      font-size: 1rem;
      font-weight: 300;
    }
  }
`;

export default CardB;
