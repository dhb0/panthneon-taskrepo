import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import Flag from "react-world-flags";
import Rating from "@material-ui/lab/Rating";
import driveClimberIcon from "../Images/appIcons/driveClimberIcon.jpg";
import facebookMessengerIcon from "../Images/appIcons/facebookMessengerIcon.jpg";
import bowMastermultiplayerGameIcon from "../Images/appIcons/bowMastermultiplayerGameIcon.jpg";

const ListItem = ({ listData, index }) => {
  const {
    id,
    name,
    publisher,
    rating,
    country,
    rank,
    progress,
    iconName,
  } = listData;

  const images = require.context('../Images/appIcons', true);

  return (
    <ListGroup.Item>
      <Row>
        <Col
          md={1}
          className="d-flex align-items-center justify-content-center"
        >
          {index + 1}
        </Col>
        <Col md={8} className="d-flex align-items-center">
          <img
            src={images(`./${iconName.replace(".jpg", "").replace("-", "")}.jpg`)}
            className="game-icon"
            alt="game icon"
          />
          <div className="info d-flex flex-column justify-content-between">
            <h6 className="ml-1 mb-0">{name}</h6>
            <div className="info-details d-flex align-items-center">
              <Flag code={country == "UK" ? "GB_NIR" : country} height="16" />
              <p>{publisher}</p>
              <div className="star-voting">
                <Rating name="read-only" value={rating} readOnly />
              </div>
              <p>{`(${rank})`}</p>
            </div>
          </div>
        </Col>
        <Col
          md={3}
          className="d-flex align-items-center justify-content-center right-pannel"
          style={progress > 0 ? { color: "green" } : { color: "red" }}
        >
          {progress !== undefined ? (
            <div>
              {Math.abs(progress)}
              <i
                className={`fa fa-caret-${progress > 0 ? "up" : "down"} p-2`}
                aria-hidden="true"
                style={{ fontSize: "18px" }}
              ></i>
            </div>
          ) : null}
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ListItem;
