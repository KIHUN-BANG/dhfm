import React from 'react';
import './introduction.scss';

function Introduction() {

  return (
    <div>
      <div className="intro-banner">
        <div className="intro-banner-container">
          <h6 className="intro-banner-title">안녕하세요</h6>
          <hr/>
          <h3 className="intro-banner-title">C E O 인 사 말</h3>
        </div>
      </div>
      <div className="intro-body-background">
        <div className="container intro-body">
          <p style={{fontSize:"1.5em"}}>
          대하산업기계 주식회사 홈페이지를 방문해 주셔서 감사합니다<br/>
          </p>
          <p>
          대하산업기계(주) 대표이사 전차녀 입니다
          </p>
          <p>
          ​당사는 링블로워, 고압 플린저펌프, 고압 세척기, R/O 시스템용 고압 펌프 및 고압세척시스템을<br/>
          제조, 판매하는 업체입니다.<br/>
          균일한 고품질 제품 생산을 위해 항상 노력하는 자세를 유지하며, 책임있는 사후 관리를<br/>
          ​위하여 전 임직원이 한마음으로 노력할 것입니다.<br/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;