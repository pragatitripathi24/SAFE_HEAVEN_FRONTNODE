import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import { FaRegCheckCircle, FaUser, FaFileAlt, FaPhone, FaEnvelope, FaUpload, FaChild } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const successStories = [
  {
    title: "successStories.anjali.title",
    image: "/images/Adoption/ad1.png",
    content: "successStories.anjali.content"
  },
  {
    title: "successStories.rahul.title",
    image: "/images/Adoption/ad2.png",
    content: "successStories.rahul.content"
  },
  {
    title: "successStories.meera.title",
    image: "/images/Adoption/ad3.png",
    content: "successStories.meera.content"
  }
];

export default function AdoptionPage() {
  const { t } = useTranslation();
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
              <Card.Title className="fw-bold">{t("adoption.processTitle")}</Card.Title>
              <Card.Text>
                {t("adoption.processIntro")}
                <ul>
                  <li><FaRegCheckCircle className="me-2 text-success" />{t("adoption.steps.registration")}</li>
                  <li><FaRegCheckCircle className="me-2 text-success" />{t("adoption.steps.counseling")}</li>
                  <li><FaRegCheckCircle className="me-2 text-success" />{t("adoption.steps.study")}</li>
                  <li><FaRegCheckCircle className="me-2 text-success" />{t("adoption.steps.matching")}</li>
                  <li><FaRegCheckCircle className="me-2 text-success" />{t("adoption.steps.legal")}</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 bg-light">
            <Card.Img variant="top" src={currentStory.image} alt={t(currentStory.title)} />
            <Card.Body>
              <Card.Title className="fw-bold">{t(currentStory.title)}</Card.Title>
              <Card.Text>{t(currentStory.content)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Second Row - Adoption Form */}
      <Row className="mb-4">
        <Col>
          <Card className="bg-light">
            <Card.Body>
              <Card.Title className="fw-bold">{t("form.title")}</Card.Title>
              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formFullName">
                      <Form.Label><FaUser className="me-2" />{t("form.fullName")}</Form.Label>
                      <Form.Control type="text" placeholder={t("form.fullNamePlaceholder")} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formAge">
                      <Form.Label>{t("form.age")}</Form.Label>
                      <Form.Control type="number" placeholder={t("form.agePlaceholder")} required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formMaritalStatus">
                      <Form.Label>{t("form.maritalStatus")}</Form.Label>
                      <Form.Select required>
                        <option>{t("form.married")}</option>
                        <option>{t("form.single")}</option>
                        <option>{t("form.divorced")}</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formOccupation">
                      <Form.Label>{t("form.occupation")}</Form.Label>
                      <Form.Control type="text" placeholder={t("form.occupationPlaceholder")} required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formContact">
                      <Form.Label><FaPhone className="me-2" />{t("form.contact")}</Form.Label>
                      <Form.Control type="text" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label><FaEnvelope className="me-2" />{t("form.email")}</Form.Label>
                      <Form.Control type="email" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formAddress" className="mb-3">
                      <Form.Label>{t("form.address")}</Form.Label>
                      <Form.Control as="textarea" rows={2} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formPreferences" className="mb-3">
                      <Form.Label><FaChild className="me-2" />{t("form.preferences")}</Form.Label>
                      <Form.Control as="textarea" rows={2} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="formReason" className="mb-3">
                      <Form.Label>{t("form.reason")}</Form.Label>
                      <Form.Control as="textarea" rows={3} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formDocuments" className="mb-3">
                      <Form.Label><FaUpload className="me-2" />{t("form.documents")}</Form.Label>
                      <Form.Control type="file" multiple required />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit">{t("form.submit")}</Button>
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
              <Card.Title className="fw-bold">{t("resources.title")}</Card.Title>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>{t("resources.table.title")}</th>
                    <th>{t("resources.table.link")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t("resources.items.guide")}</td>
                    <td><a href="/docs/adoption-guide.pdf" target="_blank" rel="noreferrer">{t("resources.download")}</a></td>
                  </tr>
                  <tr>
                    <td>{t("resources.items.legal")}</td>
                    <td><a href="/docs/legal-procedure.pdf" target="_blank" rel="noreferrer">{t("resources.download")}</a></td>
                  </tr>
                  <tr>
                    <td>{t("resources.items.agencies")}</td>
                    <td><a href="/docs/agency-list.pdf" target="_blank" rel="noreferrer">{t("resources.download")}</a></td>
                  </tr>
                  <tr>
                    <td>{t("resources.items.faqs")}</td>
                    <td><a href="/docs/faqs.pdf" target="_blank" rel="noreferrer">{t("resources.download")}</a></td>
                  </tr>
                  <tr>
                    <td>{t("resources.items.helpline")}</td>
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
