import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import petImg from "../../Assets/Projects/thepet.png"; // Update image accordingly
import bookImg from "../../Assets/Projects/bookuit.png"; // Update image accordingly
import app from "../../Assets/Projects/app.png"; // Add appropriate image
import book from "../../Assets/Projects/book.png"; // Add appropriate image

import Accessories from "../../Assets/Projects/accsessories.png"; // Add appropriate image

import bookstoreImg from "../../Assets/Projects/blog.png"; // Add appropriate image for Bookstore project

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently based on real-world
          applications and academic work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* The PET Project */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={petImg}
              isBlog={false}
              title="THE PET – Connect Pet Lovers"
              description="A social networking platform for pet lovers. Features include real-time messaging via Socket.IO, Google/Facebook login with Passport.js, secure JWT authentication, post creation with images/videos via Cloudinary, a donation module, and more. Built with NextJS, NodeJS, and MongoDB."
              ghLink="https://github.com/LQT2201/social-network"
              demoLink="https://social-network-orpin-chi.vercel.app/homepage"
            />
          </Col>

          {/* Book UIT Project */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bookImg}
              isBlog={false}
              title="BOOK UIT – Bookstore Management"
              description="A responsive web app for small bookstores. Customers can search, browse, place orders, and track deliveries. Admin panel supports managing products and orders. Built with Spring Boot and NextJS; payment integrated via VNPay."
              ghLink="https://github.com/LQT2201/bookweb"
              // demoLink="https://bookuit.vercel.app"
            />
          </Col>

          {/* Fashion E-commerce App (2 Members) */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={app}
              isBlog={false}
              title="Fashion E-commerce App (2 Members)"
              description="A mobile e-commerce application for the fashion industry, built with React Native. Customers can browse categories, search for items, place orders, and track deliveries. Admin panel supports product listing management, order processing, and customer data handling."
              ghLink="https://github.com/dinhkhanh2104/FE_IE307"
              demoLink="https://github.com/LQT2201/APIs_for_E-commerce_System"
            />
          </Col>

          {/* Fashion E-commerce App (4 Members) */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Accessories} // Update with the correct image
              isBlog={false}
              title="Fashion E-commerce App (4 Members)"
              description="A responsive e-commerce website for selling Accessories, built with Laravel. The app enables customers to browse categories, search for items, place orders, and track deliveries. Admin panel for managing product listings, order processing, and customer data handling."
              ghLink="https://github.com/Thuytrinhne/Sell-Accessories-E-commerce-Website"
              demoLink="https://github.com/Thuytrinhne/Sell-Accessories-E-commerce-Website"
            />
          </Col>

          {/* Bookstore Project */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={book} // Add correct image for bookstore project
              isBlog={false}
              title="Bookstore Website"
              description="A modern e-commerce website for a bookstore with features including product search, order placement, and order tracking. The admin panel allows inventory management, order processing, and customer data management. Built with PHP, MySQL, and integrated with PayPal for payments."
              ghLink="https://github.com/truongcaophuc/book"
              demoLink="https://github.com/truongcaophuc/book"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
