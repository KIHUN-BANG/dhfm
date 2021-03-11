import React , {useState, useEffect} from 'react';
import {Navbar, NavDropdown, Nav, Jumbotron, Button, Tab, Row, Col, Container, Image, Form, FormLabel } from 'react-bootstrap';
import './App.scss';
import {CSSTransition} from "react-transition-group";
import MapContainer from "./MapContainer.js";
import Footer from "./footer.js";

// import images
import gear from './res/icon_gear.svg';
import support from './res/icon_support.svg';
import handshake from './res/icon_handshake.svg';
import logo from './logo.svg';

function App() {

  let [tabAnimationSwitch, tabAnimationSwitchChange] = useState(false);
  let [tabCSS, tabCSSChange] = useState([{"background-color" : "#23b1ec", "text" :"red"}]);
  let [tabNum, tabNumChange] = useState(0);

  return (
    <div>
      <div className="main-jumbotron">
        <div className="main-navbar-background">
          <Navbar expand="lg" variant="light" className="main-navbar">
          <Navbar.Brand href="#home">대하산업기계 주식회사</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="회사소개" id="basic-nav-dropdown">
                <NavDropdown.Item>CEO 인사말</NavDropdown.Item>
                <NavDropdown.Item>회사연혁</NavDropdown.Item>
                <NavDropdown.Item>경영방침</NavDropdown.Item>
                <NavDropdown.Item>조직도</NavDropdown.Item>
                <NavDropdown.Item>인증서</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="고객지원" id="basic-nav-dropdown">
                <NavDropdown.Item>FAQ</NavDropdown.Item>
                <NavDropdown.Item>온라인상담</NavDropdown.Item>
                <NavDropdown.Item>견적요청</NavDropdown.Item>
                <NavDropdown.Item>개인정보 보호정책</NavDropdown.Item>
                <NavDropdown.Item>이용약관</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="제품정보" id="basic-nav-dropdown">
                <NavDropdown.Item>링블로워</NavDropdown.Item>
                <NavDropdown.Item>고압플린저 펌프</NavDropdown.Item>
                <NavDropdown.Item>고압세척기</NavDropdown.Item>
                <NavDropdown.Item>고압세척시스템</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="사업분야" id="basic-nav-dropdown">
                <NavDropdown.Item>블로워사업</NavDropdown.Item>
                <NavDropdown.Item>펌프사업</NavDropdown.Item>
                <NavDropdown.Item>펌프시스템사업</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="홍보센터" id="basic-nav-dropdown">
                <NavDropdown.Item>제품사진</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="인재채용" id="basic-nav-dropdown">
                <NavDropdown.Item>채용안내</NavDropdown.Item>
                <NavDropdown.Item>복리후생</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </div>

        <div className="container">
          <div className="main-jumbotron-content">
            <h4>안녕하세요</h4>
            <h4>대하산업기계를 방문해주셔서 감사합니다</h4>
            <h4>테스트 중입니다</h4>
          </div>
          <Button variant="outline-primary" className="main-jumbotron-button">Learn more</Button>
        </div>
        <Jumbotron fluid className="main-inner-jumbotron">
          <div className="row main-inner-jumbotron-content">
            <div className="col-md-4">
              <img src={handshake} className="main_icons"/>
              <div>
                <h4>신뢰</h4>
              </div>
            </div>
            <div className="col-md-4">
              <img src={gear} className="main_icons"/>
              <div>
                <h4>기술</h4>
              </div>
            </div>
            <div className="col-md-4">
              <img src={support} className="main_icons"/>
              <div>
                <h4>지원</h4>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
      <div className="main-product-intro">
        <div className="main-product-intro-content">
          <h2>Sed adipising ornare risus</h2>
          <h4>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue eu vulpu magna erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus, metus lorem feugiat tempus adipiscing.</h4>
        </div>
      </div>
      <Tab.Container defaultActiveKey="home">
        <Row>
          <Nav variant="pills" className="row main-product-tabs">
            <Nav.Item className="col-md-4 custom-nav-item">
              <Nav.Link className="nav-link-custom" eventKey="home" onClick={()=>{tabNumChange(0); tabAnimationSwitchChange(false)}} >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-md-4 custom-nav-item">
              <Nav.Link className="nav-link-custom" eventKey="profile" onClick={()=>{tabNumChange(1); tabAnimationSwitchChange(false)}}>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-md-4 custom-nav-item">
              <Nav.Link className="nav-link-custom" eventKey="contact" onClick={()=>{tabNumChange(2); tabAnimationSwitchChange(false)}}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <CSSTransition in={tabAnimationSwitch} classNames="tab-animation" timeout={500}>
            <TabContent _tabNum={tabNum} _tabAnimationSwitchChange={tabAnimationSwitchChange}/>
          </CSSTransition>
        </Row>
      </Tab.Container>
      
      
      <Jumbotron fluid className="main-aboutus">
        <Container>
          <h1>About Us</h1>
          <hr/>
          <h5>대하산업기계(주) 홈페이지를 방문해주셔서 감사합니다</h5>
          <p>
            당사는 링블로워, 고압 플린저펌프, 고압 세척기, R/O 시스템용 고압 펌프 및 고압세척시스템을 제조, 판매하는 업체입니다
            균일한 고품질 제품 생산을 위해 항상 노력하는 자세를 유지하며, 책임있는 사후 관리를 위하여 전직원이 한마음으로 노력할 것입니다.
          </p>
        </Container>
      </Jumbotron>

      <div className="wrap">
        <Container>
          <h1>Contact Us</h1>
          <hr/>
          <Row>
            <Col xs={12} md={6}>
              <h5>인천광역시 서구 설원로 94</h5>
              <h5>(인천광역시 서구 대곡동 415-14)</h5>
              <p>E-mail : master@dhfm.co.kr</p>
              <p>대표전화 : 032-567-9087</p>
              <p>Fax : 032-567-9088</p>
            </Col>
            <Col xs={12} md={6}>
              <Form>
                <h5>온라인 문의</h5>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="your.Account@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="input" placeholder="010-0000-0000" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select">
                    <option>견적 요청</option>
                    <option>A/S 요청</option>
                    <option>온라인상담</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} placeholder="상세 내용"/>
                </Form.Group>
                <Button variant="outline-primary">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="wrap">
        <h1>오시는 길</h1>
        <hr/>
        <MapContainer />
      </div>
      <Footer/>
    </div>

  );
}

function TabContent(props) {

  useEffect(()=>{
    props._tabAnimationSwitchChange(true);
  });
 
  if(props._tabNum == 0) {
    return (
        <ProductSummary />
    );
  } else if (props._tabNum == 1) {
    return (
        <ProductSummary />
    );
  } else if (props._tabNum == 2) {
    return (
        <ProductSummary />
    );
  } else {
    // do nothing
  }
};

function ProductSummary(props) {

  return (
    <Container>
      <Row>
        <Col className="pannel" xs={6} md={4, {order:1}}>
          <div>
            <h4>hello1</h4>
            <p> test string</p>
          </div>
          <div>
            <h4>hello2</h4>
            <p> test string</p>
          </div>
        </Col>
        <Col className="pannel" xs={12, {span: "true", order:"first"}} md={4, {order:2}}>
          <Image src={logo} className="pannelImage" roundedCircle />
        </Col>
        <Col className="pannel" xs={6} md={4, {order:3}}>
          <div>
            <h4>hello3</h4>
            <p> test string</p>
          </div>
          <div>
            <h4>hello4</h4>
            <p> test string</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
} 

export default App;
