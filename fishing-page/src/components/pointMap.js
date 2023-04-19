import React, { useCallback, useEffect, useRef, useState } from "react";
import './css/pointMap.css'

function PointMap() {
    const mapRef = useRef(null);
    const infoWindowRef = useRef(null);

    const initMap = useCallback(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 35.131525, lng: 129.102670 },
            zoom: 12,
        });

        // 여러개의 마커 생성
        const markers = [
            {
                position: { lat: 35.068351, lng: 129.065051 },
                title: "포인트1",
                depth: "10m",
                substrate: "모래",
                optimalWater: "20도",
                targetFish: "전갱이",
                description: "지역설명",
                caution: "주의사항"
            },
            {
                position: { lat: 35.057756, lng: 128.987618 },
                title: "포인트2",
                depth: "10m",
                substrate: "모래",
                optimalWater: "20도",
                targetFish: "전갱이",
                description: "지역설명",
                caution: "주의사항"
            },
            {
                position: { lat: 35.063628, lng: 129.021395 },
                title: "포인트3",
                depth: "10m",
                substrate: "모래",
                optimalWater: "20도",
                targetFish: "전갱이",
                description: "지역설명",
                caution: "주의사항"
            }
        ];

        markers.forEach((markerInfo) => {
            const marker = new window.google.maps.Marker({
                position: markerInfo.position,
                map: map,
                title: markerInfo.title,
            });

            // 마커 클릭 시 정보창 표시
            const infoWindow = new window.google.maps.InfoWindow({
                content: `<div>${markerInfo.title} 설명 스크립트</div>`,
            });
            marker.addListener("click", () => {
                infoWindow.open(map, marker);
            });
        });
    }, [mapRef]);

    useEffect(() => {
        initMap();
    }, [initMap]);

    return (
        <div id="google-map">
            <h1>PointMap</h1>
            <div
                className="map"
                style={{ width: "1000px", height: "800px", margin: "auto" }}
                ref={mapRef}
            ></div>
        </div>
    );
}

export default PointMap;