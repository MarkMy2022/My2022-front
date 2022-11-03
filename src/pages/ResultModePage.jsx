import Header from '../components/common/Header';
import ResultMode from '../components/ResultMode';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ResultModePage() {
  const { answer } = useSelector((state) => state.post);

  return (
    <>
      <Header />
      {answer.post_content ? (
        <ResultMode />
      ) : (
        <>
          <p>잘못된 접근입니다!</p>
          <Link to="/">HOME</Link>
        </>
      )}
    </>
  );
}
