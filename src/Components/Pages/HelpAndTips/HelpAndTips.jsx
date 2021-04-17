import React from "react";
import Header from "../../Common/Header/Header";
import rightCheck from "../../../assets/check-right.png";
import wrongCheck from "../../../assets/check-wrong.png";
import "./HelpAndTips.scss";

function HelpAndTips() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="good">
          <div className="good__text">
            <h3 className="good__title">What is good for your CV?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptate tempora impedit maxime doloremque distinctio consequatur
              eius. Dolorem consectetur adipisci magni facilis quis facere
              omnis, aspernatur nihil dolores nam molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptate tempora impedit maxime doloremque distinctio consequatur
              eius. Dolorem consectetur adipisci magni facilis quis facere
              omnis, aspernatur nihil dolores nam molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptate tempora impedit maxime doloremque distinctio consequatur
              eius. Dolorem consectetur adipisci magni facilis quis facere
              omnis, aspernatur nihil dolores nam molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptate tempora impedit maxime doloremque distinctio consequatur
              eius. Dolorem consectetur adipisci magni facilis quis facere
              omnis, aspernatur nihil dolores nam molestias.
            </p>
          </div>
          <div className="good__image">
            <img src={rightCheck} alt="Right Check" />
          </div>
        </div>
        <div className="bad">
          <div className="bad__text">
            <h3 className="bad__title">What is bad for your CV?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptate tempora impedit maxime doloremque distinctio consequatur
              eius. Dolorem consectetur adipisci magni facilis quis facere
              omnis, aspernatur nihil dolores nam molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptate tempora impedit maxime doloremque distinctio consequatur
              eius. Dolorem consectetur adipisci magni facilis quis facere
              omnis, aspernatur nihil dolores nam molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptate tempora impedit maxime doloremque distinctio consequatur
              eius. Dolorem consectetur adipisci magni facilis quis facere
              omnis, aspernatur nihil dolores nam molestias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              voluptate tempora impedit maxime doloremque distinctio consequatur
              eius. Dolorem consectetur adipisci magni facilis quis facere
              omnis, aspernatur nihil dolores nam molestias.
            </p>
          </div>
          <div className="bad__image">
            <img src={wrongCheck} alt="Wrong Check" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpAndTips;
