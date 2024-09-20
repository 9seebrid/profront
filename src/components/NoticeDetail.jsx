import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams 사용
import axios from 'axios';
import Navbar from './Navbar';

const NoticeDetail = () => {
  const { id } = useParams(); // 게시글 번호를 URL 파라미터에서 가져옴
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        // 조회수 업데이트 API 호출
        await axios.put(`https://whippedback.9seebird.site/community_detail/${id}`);

        // 데이터를 가져와서 확인하는 로깅 추가
        const response = await axios.get(`https://whippedback.9seebird.site/community_detail/${id}`);
        console.log(response.data); // 데이터 확인용 로깅
        setNotice(response.data);
        console.log(setNotice); // 데이터 확인용 로깅
      } catch (error) {
        console.error('Error fetching notice:', error);
      }
    };
    fetchNotice();
  }, [id]);

  if (!notice) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ backgroundColor: 'rgb(246, 246, 242)', height: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '110px', paddingLeft: '3rem', paddingRight: '3rem' }}>
        <h2>{notice.write_title}</h2>
        <p>작성자: {notice.userid}</p>
        <p>작성일자: {new Date(notice.write_date).toLocaleDateString()}</p>
        <p>조회수: {notice.view_number}</p>
        <p>{notice.content}</p>
      </div>
    </div>
  );
};

export default NoticeDetail;
