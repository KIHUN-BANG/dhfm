import React, {useEffect} from 'react';

const {kakao} = window;

const MapContainer = () => {
  useEffect(()=>{
    let container = document.getElementById("mapContainerId");
    let options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level:5
    };
    const map = new kakao.maps.Map(container, options);

    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch('인천 서구 설원로 94', function(result, status) {

      // 정상적으로 검색이 완료됐으면 
       if (status === kakao.maps.services.Status.OK) {
  
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  
          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
              map: map,
              position: coords
          });
  
          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;">대하산업기계</div>'
          });
          infowindow.open(map, marker);
  
          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
      }
    });
  },[]);

  return (
    <div id="mapContainerId" className="map-Container">
    </div>
  );
}

export default MapContainer;
