import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>에러 페이지</h1>
      <p>죄송합니다. 에러가 발생했어요.</p>
      <p>아래 버튼을 누르면 메인 페이지로 돌아갈 수 있어요.</p>
      <button>메인페이지로 돌아가기</button>
    </div>
  );
}

export default ErrorPage;
