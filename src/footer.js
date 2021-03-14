import React from 'react';
import styled from 'styled-components';
import './footer.scss';

function Footer(props) {

  return (
    <div className="footer-background">
      <div className="row footer-container">
        <div className="col-md-3">
          <h3>대하산업기계</h3>
          <h4>DHFM Co., Ltd.</h4>
        </div>
        <div className="col-md-9">
          <p style={{fontSize:"15px"}}>
          본사 : 인천광역시 서구 설원로 94 , 사업자등록번호 : 123-456-789<br/>
          대표전화 : 032-567-9087, FAX : 032-567-9088<br/>
          이메일 : master@dhfm.co.kr ,
          <a href="" className="footer-link"> | 개인정보 보호정책</a> | <a href="" className="footer-link">ISO 인증서 |</a><br/>
          Copyright © 2016 대하산업기계 주식회사 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
