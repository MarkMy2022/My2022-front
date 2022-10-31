import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TitleNick from './TitleNick';

function Modify2() {
  /* const [dataList, setDataList] = useState([]);

    console.log(postList);
  
    useEffect(() => {
      setDataList(postList);
    }, []);
 */

  const EditBoard = () => {
    const token = useSelector((state) => state.Auth.token);
    const navigate = useNavigate();
    // URI 파라미터 가져오기
    const { board_id } = useParams();
    // 글 간단 답변, 상세 답변, 사진

    const [simple, setSimple] = useState('');
    const [detail, setDetail] = useState('');
    const [image, setImage] = useState({
      image_file: '',
      preview_URL: 'img/logo.png',
    });

    // 사용자가 직전에 등록한 게시물의 상태를 그대로 보여주기 위해
    // 컴포넌트가 마운트되고 URI 파라미터에 해당하는 board를 가져와서
    // title, content, image의 상태를 바꿔줌
    useEffect(() => {
      const getBoard = async () => {
        const { data } = await axios.get(`/api/board/${board_id}`);
        return data;
      };
      getBoard().then((result) => {
        setTitle(result.simple);
        setContent(result.detail);
        // 이미지는 파일을 불러올 필요가 없이 미리보기 url만 가져온다.
        // 이미지를 선택하지 않고 올리면 db에 저장되어 있는 이미지를 그대로 사용!
        setImage({ ...image, preview_URL: `/api/image/view/${board_id}` });
      });
    }, []);

    const canSubmit = useCallback(() => {
      return detail !== '' && simple !== '';
    }, [image, simple, detail]);

    const handleSubmit = useCallback(async () => {
      try {
        const formData = new FormData();
        formData.append('simple', simple);
        formData.append('content', detail);
        // 이미지를 선택했을 때만 formdata에 넣음
        formData.append('file', image.image_file);
        // 수정할 땐 board_id를 보내자
        formData.append('id', board_id);
        await api.put('/api/board', formData);
        window.alert('😎수정이 완료되었습니다😎');
        // 이전 페이지로 돌아가기
        window.location.href = `/board/${board_id}`;
      } catch (e) {
        // 서버에서 받은 에러 메시지 출력
        toast.error(
          '오류발생! 이모지를 사용하면 오류가 발생할 수 있습니다' + '😭',
          {
            position: 'top-center',
          }
        );
      }
    }, [canSubmit]);

    return (
      <div className="addBoard-wrapper">
        <div className="addBoard-header">게시물 수정하기 🖊️</div>
        <div className="submitButton">
          {canSubmit() ? (
            <Button
              onClick={handleSubmit}
              className="success-button"
              variant="outlined"
            >
              수정하기😃
            </Button>
          ) : (
            <Button className="disable-button" variant="outlined" size="large">
              제목과 내용을 모두 입력하세요😭
            </Button>
          )}
        </div>
        <div className="addBoard-body">
          <ImageUploader setImage={setImage} preview_URL={image.preview_URL} />
          <TextArea
            setTitle={setTitle}
            setContent={setContent}
            title={title}
            content={content}
          />
        </div>
      </div>
    );
  };
}
export default Modify2;
