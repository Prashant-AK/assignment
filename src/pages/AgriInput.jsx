import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Accordion,
  useAccordionButton,
  Table,
  Image,
  Button,
} from "react-bootstrap";
import { IoIosArrowDropdown } from "react-icons/io";

const AgriInput = () => {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      // <button >
      <Card.Title onClick={decoratedOnClick}>
        {children} <IoIosArrowDropdown />
      </Card.Title>
      // </button>
    );
  }

  return (
    <Container>
      <Card style={{ height: "90vh", padding: "10px" }}>
        <div>
          <Row className="container">
            <Col
              sm={2}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                color: "white",
                padding: "20px",
                margin: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "red",
                  borderRadius: "100%",
                  fontSize: "20px",
                }}
              >
                <b>1</b>
              </div>
              Pending
              {/* <Card style={{ textAlign: "center" }}> </Card> */}
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                color: "white",
                padding: "20px",
                margin: "5px",
              }}
              sm={2}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "yellow",
                  borderRadius: "100%",
                  fontSize: "20px",
                }}
              >
                <b>2</b>
              </div>
              Executing
              {/* <Card style={{ textAlign: "center" }}> </Card> */}
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                color: "white",
                padding: "20px",
                margin: "5px",
              }}
              sm={2}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "orange",
                  borderRadius: "100%",
                  fontSize: "20px",
                }}
              >
                <b>3</b>
              </div>
              Executed
              {/* <Card style={{ textAlign: "center" }}>  </Card> */}
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                color: "white",
                padding: "20px",
                margin: "5px",
              }}
              sm={2}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "green",
                  borderRadius: "100%",
                  fontSize: "20px",
                }}
              >
                <b>4</b>
              </div>
              Completed
              {/* <Card style={{ textAlign: "center" }}> </Card> */}
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: "10px" }}>
          {" "}
          <Card>
            <Card.Body>
              {" "}
              <Row>
                <Col style={{ textAlign: "center" }} md={4}>
                  {" "}
                  <Card.Title>Executing Agri-Input Orders </Card.Title>{" "}
                </Col>
                <Col style={{ textAlign: "center" }} md={4}>
                  <Card.Title> Batch By </Card.Title>
                </Col>
                <Col style={{ textAlign: "center" }} md={3}>
                  <Card.Title> RFQ List </Card.Title>
                </Col>
                <Col style={{ textAlign: "center" }} md={1}></Col>
              </Row>{" "}
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Accordion>
            <Card>
              <Card.Header>
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Col style={{ textAlign: "center" }} md={4}>
                    {" "}
                    <CustomToggle eventKey="0">
                      AGBUY27687698_2312{" "}
                    </CustomToggle>
                  </Col>
                  <Col style={{ textAlign: "center" }} md={4}>
                    <Card.Title>
                      <span>
                        <Image
                          roundedCircle
                          width={50}
                          src="https://4.imimg.com/data4/CB/DA/ANDROID-26789309/product-500x500.jpeg"
                        />
                        <b>Chris Fong</b>
                      </span>{" "}
                    </Card.Title>
                  </Col>
                  <Col style={{ textAlign: "center" }} md={3}>
                    <Card.Title>
                      {" "}
                      <Button variant="success"> RfqList_42348798</Button>{" "}
                    </Card.Title>
                  </Col>
                  <Col style={{ textAlign: "center" }} md={1}></Col>
                </Row>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Table bordered textAlign="center">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Agri-Input Category</th>
                        <th>Product image</th>
                        <th>Product Description</th>
                        <th>Order Quantity</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>pesticide</td>
                        <td>
                          <Image
                            thumbnail
                            roundedCircle
                            width={80}
                            src="https://4.imimg.com/data4/CB/DA/ANDROID-26789309/product-500x500.jpeg"
                          />
                        </td>
                        <td>Xtra Clouter 1L</td>
                        <td>8</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Card>
    </Container>
  );
};

export default AgriInput;
