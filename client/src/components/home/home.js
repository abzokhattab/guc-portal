import React, { Component } from "react";
// import CardUi from './card';
import "./section.css";
import { Alert, Col, Image } from "react-bootstrap";
// import { FcButtingIn } from 'react-icons/fc'

import { Cards } from "../cards/cards";
import { Footer } from "../footer/footer";

class MainComponent extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")),

  };
  render() {
    let infoArr = [
      {
        src: "https://picsum.photos/id/1/500/325",
        title: "My Attendance",
        text: "View My Attendance record",
        link: "/viewAttendance",
      },
      {
        src: "https://picsum.photos/id/100/500/325",
        title: "My Profile",
        text: "View and edit my Profile settings",
        link: "/viewProfile",
      },
    ];

    let staffMgmtArr = [
      {
        src: "https://picsum.photos/id/1/500/325",
        title: "New Staff",
        text: "Add New Staff Member",
        link: "/newStaff",
      },
      {
        src: "https://picsum.photos/id/100/500/325",
        title: "Existing Staff",
        text: "View Existing Staff Members",
        link: "/viewStaff",
      },
      {
        src: "https://picsum.photos/id/100/500/325",
        title: "Staff missing days/hours",
        text: "View current every staff member with missing days or hours",
        link: "/viewStaffMissing",
      },

      {
        src: "https://picsum.photos/id/100/500/325",
        title: "HOD (View Requests)",
        text: "view all requests. make sure you are authorized",
        link: "/viewStaffRequests",
      },
      {
        src: "https://picsum.photos/id/100/500/325",
        title: "HOD (staff dashboard)",
        text:
          "view all staff and allow hod to perform certain operations . make sure you are authorized",
        link: "/HOD/viewStaff",
      },
      {
        src: "https://picsum.photos/id/100/500/325",
        title: "CI (staff dashboard)",
        text:
          "view all staff and allow ci to perform certain operations . make sure you are authorized",
        link: "/CI/viewStaff",
      },
    ];

    let facMgmt = [
      {
        src: "https://picsum.photos/id/1/500/325",
        title: "Locations",
        text: "View all the available locations",
        link: "/locations",
      },
      {
        src: "https://picsum.photos/id/100/500/325",
        title: "Faculties",
        text: "View all the available faculties",
        link: "/faculties",
      },
      {
        src: "https://picsum.photos/id/100/500/325",
        title: "Departments",
        text: "View all the available Departments",
        link: "/departments",
      },
      {
        src: "https://picsum.photos/id/100/500/325",
        title: "Courses",
        text: "View all the available courses",
        link: "/courses",
      },
    ];

    return (
      <div>
        <div className="container">
          <div className="jumbotron mt-4 mb-0">
            <h1 className="display-4">
              <span>
                {" "}
                <Image
                  style={{ height: 100 }}
                  className="m-3"
                  src="https://img.icons8.com/cute-clipart/50/000000/user-male.png"
                  roundedCircle
                />

              </span>
              Welcome {this.state.user.role} {this.state.user.name}!
            </h1>

            <p className="lead">
              You have {this.state.user.notifications.length} notifications
              <br></br>
              Signed in as {this.state.user.email}
            </p>
            
          </div>
          <Alert variant="secondary" className="m-3">
            My Information
          </Alert>
          <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center m-3">
            {infoArr.map((item, index) => {
              return (
                <Col className="d-flex justify-content-center">
                  <Cards
                    className="h-100"
                    key={item.link}
                    src={item.src}
                    title={item.title}
                    text={item.text}
                    link={item.link}
                  />
                </Col>
              );
            })}
          </div>
          <Alert variant="secondary" className="m-3">
            Staff Management
          </Alert>
          <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center m-3">
            {staffMgmtArr.map((item, index) => {
              return (
                <Col className="d-flex justify-content-center">
                  <Cards
                    className="h-100"
                    key={item.link}
                    src={item.src}
                    title={item.title}
                    text={item.text}
                    link={item.link}
                  />
                </Col>
              );
            })}
          </div>
          <Alert variant="secondary" className="m-3">
            Faculty & Facility Management
          </Alert>
          <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center m-3">
            {facMgmt.map((item, index) => {
              return (
                <Col className="d-flex justify-content-center">
                  <Cards
                    className="h-100"
                    key={item.link}
                    src={item.src}
                    title={item.title}
                    text={item.text}
                    link={item.link}
                  />
                </Col>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
