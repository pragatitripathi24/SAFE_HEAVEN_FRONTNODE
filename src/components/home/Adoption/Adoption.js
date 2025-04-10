import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import { FaRegCheckCircle, FaUser, FaFileAlt, FaPhone, FaEnvelope, FaUpload, FaChild } from "react-icons/fa";

const successStories = [
  {
    title: "A New Beginning for Anjali",
    image: "/images/Adoption/ad1.png",
    content: "Anjali found her forever home and now enjoys school and dancing with her new family."
  },
  {
    title: "Rahul's Bright Future",
    image: "/images/Adoption/ad2.png",
    content: "Rahul was adopted last year and dreams of becoming a doctor."
  },
  {
    title: "Meera's Smile Returns",
    image: "/images/Adoption/ad3.png",
    content: "Meera's journey to healing began when she was adopted by a loving couple."
  }
];

export default function AdoptionPage() {
  const [storyIndex, setStoryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStoryIndex((prevIndex) => (prevIndex + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentStory = successStories[storyIndex];

  return (
    <Container className="my-4">
      {/* First Row */}
      <Row className="mb-4">
        <Col md={8}>
          <Card className="h-100 bg-light">
            <Card.Body>
              <Card.Title className="fw-bold">Adoption Process</Card.Title>
              <Card.Text className="">
                Adopting a child is a beautiful journey that changes lives. The process includes:
                <ul>
                  <li><FaRegCheckCircle className="me-2 text-success" />Registration with a licensed adoption agency</li>
                  <li><FaRegCheckCircle className="me-2 text-success" />Pre-adoption counseling</li>
                  <li><FaRegCheckCircle className="me-2 text-success" />Home study and background checks</li>
                  <li><FaRegCheckCircle className="me-2 text-success" />Matching with a child</li>
                  <li><FaRegCheckCircle className="me-2 text-success" />Legal procedures and final adoption order</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 bg-light">
            <Card.Img variant="top" src={currentStory.image} alt={currentStory.title} />
            <Card.Body>
              <Card.Title className="fw-bold">{currentStory.title}</Card.Title>
              <Card.Text>{currentStory.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Second Row - Adoption Form */}
      <Row className="mb-4">
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title className="fw-bold">Adoptive Parent Application Form</Card.Title>
              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formFullName">
                      <Form.Label><FaUser className="me-2" />Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your full name" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formAge">
                      <Form.Label>Age</Form.Label>
                      <Form.Control type="number" placeholder="Enter your age" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formMaritalStatus">
                      <Form.Label>Marital Status</Form.Label>
                      <Form.Select required>
                        <option>Married</option>
                        <option>Single</option>
                        <option>Divorced</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formOccupation">
                      <Form.Label>Occupation</Form.Label>
                      <Form.Control type="text" placeholder="Enter your occupation" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formContact">
                      <Form.Label><FaPhone className="me-2" />Contact Number</Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label><FaEnvelope className="me-2" />Email Address</Form.Label>
                      <Form.Control type="email" required />
                    </Form.Group>
                  </Col>
                </Row>
             <Row>
              <Col md={6}>
              <Form.Group controlId="formAddress" className="mb-3">
                  <Form.Label>Residential Address</Form.Label>
                  <Form.Control as="textarea" rows={2} required />
                </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group controlId="formPreferences" className="mb-3">
                  <Form.Label><FaChild className="me-2" />Child Preferences (age, gender, etc.)</Form.Label>
                  <Form.Control as="textarea" rows={2} />
                </Form.Group>
                </Col>
             </Row>
             <Row>
              <Col md={6}>
              <Form.Group controlId="formReason" className="mb-3">
                  <Form.Label>Why do you want to adopt?</Form.Label>
                  <Form.Control as="textarea" rows={3} required />
                </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group controlId="formDocuments" className="mb-3">
                  <Form.Label><FaUpload className="me-2" />Upload Required Documents</Form.Label>
                  <Form.Control type="file" multiple required />
                </Form.Group>
                </Col>
             </Row>
               
              
                <Button variant="primary" type="submit">
                  Submit Application
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Third Row - Resources */}
      <Row>
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title className="fw-bold">Adoption Resources & Legal Guidelines</Card.Title>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Download Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Comprehensive Adoption Guide</td>
                    <td><a href="/docs/adoption-guide.pdf" target="_blank" rel="noreferrer">Download PDF</a></td>
                  </tr>
                  <tr>
                    <td>Legal Procedure Overview</td>
                    <td><a href="/docs/legal-procedure.pdf" target="_blank" rel="noreferrer">Download PDF</a></td>
                  </tr>
                  <tr>
                    <td>List of Licensed Adoption Agencies</td>
                    <td><a href="/docs/agency-list.pdf" target="_blank" rel="noreferrer">Download PDF</a></td>
                  </tr>
                  <tr>
                    <td>Frequently Asked Questions</td>
                    <td><a href="/docs/faqs.pdf" target="_blank" rel="noreferrer">Download PDF</a></td>
                  </tr>
                  <tr>
                    <td>Adoption Helpline</td>
                    <td><strong>1800-123-4567</strong></td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}