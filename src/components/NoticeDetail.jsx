import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams 사용
import axios from 'axios';
import Navbar from './Navbar';

const NoticeDetail = () => {
  const { write_number } = useParams(); // 게시글 번호를 URL 파라미터에서 가져옴
  const [notice, setNotice] = useState(null);
  console.log(write_number);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        // 데이터를 가져와서 확인하는 로깅 추가
        const response = await axios.get(`https://whippedback.9seebird.site/community_detail/${write_number}`);
        console.log(response.data); // 데이터 확인용 로깅
        setNotice(response.data);
      } catch (error) {
        console.error('Error fetching notice:', error);
      }
    };
    fetchNotice();
    console.log(fetchNotice);
  }, [write_number]);

  console.log(setNotice);

  if (!notice) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ backgroundColor: 'rgb(246, 246, 242)', height: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '110px', paddingLeft: '3rem', paddingRight: '3rem' }}>
        <h2>{notice[0].write_title}</h2>
        <p>작성자: {notice[0].userid}</p>
        <p>작성일자: {new Date(notice[0].write_date).toLocaleDateString()}</p>
        <p>조회수: {notice[0].view_number}</p>
        <p>{notice[0].content}</p>
        {console.log(notice[0].content)}
      </div>
    </div>
  );
};

export default NoticeDetail;
