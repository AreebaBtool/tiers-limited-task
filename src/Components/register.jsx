import React from 'react';
import {Link} from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBFile
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Register() {
  return (
    < MDBContainer fluid>
      <center>
        <MDBCard className='text-black' style={{ borderRadius: "25px", widows: "70%", marginTop: "130px", width: "500px" }} >

          <MDBCardBody>
            <MDBRow>
              {/* "https://shiny-complex-barge.glitch.me/register" */}
              <form action="https://shiny-complex-barge.glitch.me/register" method='post' encType='multipart/form-data'>
                <MDBCol >
                  <MDBRow> <MDBCardTitle>Registration Form</MDBCardTitle></MDBRow>
                  <div style={{ margin: "10px" }}>
                    <MDBCol> <MDBInput label='Name' id='typeText' type='text' name='name'/></MDBCol>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <MDBCol> <MDBInput label='Email ' id='typeEmail' type='email' name='email' /></MDBCol>
                  </div>
                  <div style={{ margin: "10px" }}>
                    <MDBCol><MDBInput label='Password' id='typePassword' type='password' name='password'/></MDBCol>
                  </div>
                  <div  style={{ margin: "10px" }}>
                    <MDBFile  id='customFile' type='file' name='profileImg' />
                  </div>
                  {/* <div  style={{ margin: "10px" }}>
                    <MDBFile  id='customFile' type='file' name='profileImg2' />
                  </div> */}
                  <div  style={{ margin: "10px" }}> 
                  <MDBCol>
                    <MDBBtn >Register</MDBBtn>
                  </MDBCol>
                  </div>
                  <div style={{margin:"10px"}}>
                  <MDBCol>
                    <Link to="/viewusers">
                    <MDBBtn >View Registerd</MDBBtn>
                    </Link>
                  </MDBCol>
                  </div>
                </MDBCol>
              </form>

            </MDBRow>

          </MDBCardBody>
        </MDBCard>
      </center>
    </MDBContainer>
  );
}