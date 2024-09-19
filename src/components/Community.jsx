import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Community.css';

const Community = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('https://whippedback.9seebird.site/community_announcement');
        setNotices(response.data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };
    fetchNotices();
  }, []);

  return (
    <div style={{ backgroundColor: 'rgb(246, 246, 242)', height: '100vh' }}>
      <Navbar />
      <div
        className="community-container"
        style={{ height: '100%', paddingTop: '110px', paddingLeft: '3rem', paddingRight: '3rem' }}
      >
        <div className="community-contents">
          <div className="contents-header">
            <h2>공지사항</h2>
          </div>
          <div className="contents-body">
            <div className="contents-container">
              <div>
                <div className="contents-basis">
                  <p className="number">번호</p>
                  <p className="basis-title">제목</p>
                  <p className="author">작성자</p>
                  <p className="date">작성일자</p>
                  <p className="views">조회</p>
                </div>
                {notices.length > 0 ? (
                  notices.map((notice, index) => (
                    <div key={notice.write_number} className="contents-upload">
                      <p>{notice.write_number}</p>
                      <p className="basis-title">{notice.write_title}</p>
                      <p className="author">{notice.userid}</p>
                      <p className="date">{new Date(notice.write_date).toLocaleDateString()}</p>
                      <p className="views">{notice.view_number}</p>
                    </div>
                  ))
                ) : (
                  <div className="contents-empty">
                    <p>내용이 없습니다.</p>
                  </div>
                )}
              </div>
              <div className="contents-footer">
                <select className="footer-dropdown">
                  <option value="title">제목</option>
                  <option value="author">작성자</option>
                </select>
                <input type="text" placeholder="" className="search-input" />
                <button className="search-btn">찾기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
