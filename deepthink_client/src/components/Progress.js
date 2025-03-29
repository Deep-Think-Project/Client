import React, { useEffect, useState } from 'react'
import '../styles/Progress.css'

function Progress({ loading }) {
    const [percentage, setPercentage] = useState(0); // 진행 바 상태 (0~100)

    useEffect(() => {
        let interval;

        if (loading) {
            // 로딩 중이면 진행 바 증가
            interval = setInterval(() => {
                setPercentage(prev => (prev < 99 ? prev + 1 : 99));
            }, 50);
        } else {
            // 로딩이 끝나면 진행 바 100%
            setPercentage(100);
        }

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, [loading]); // `loading` 값이 변경될 때마다 실행

    return (
        <div className="progress-container">
            <p>정보를 요약 중입니다...</p>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            {/* 퍼센트 표시 */}
            <p className="percentage">{percentage}%</p>

            {/* 툴팁 부분: 초록색과 보라색 사각형과 텍스트 */}
            <div className="tooltip-container">
                <div className="tooltip-box green-box"></div>
                <span className="tooltip-text">:  객관적인 근거를 가진 문장</span>
            </div>
            <div className="tooltip-container">
                <div className="tooltip-box purple-box"></div>
                <span className="tooltip-text">:  다양한 해석이 가능한 문장</span>
            </div>
        </div>
    );
}

export default Progress;