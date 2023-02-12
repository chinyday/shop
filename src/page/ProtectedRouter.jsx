import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../components/context/AuthContext';

const ProtectedRouter = ({children, requireAdmin}) => {
  /*
  1. 로그인한 사용자가 있늕지 확인
  2. 그 사용자가 어드민 권한이 있는지 확인
  3. requireAdmin이 있는 경우에는 로그인 필수, 어드민 권한 필수 
  4-1. 조건이 맞지 않으면 상위 경로로 이동
  4-2 조건이 맞으면 해당 컴포넌트 (children)로 이동
  */

  const {user} = useAuthContext();

  if(!user || (requireAdmin && !user.isAdmin)){
    return <Navigate to="/" replace/>
  }

  return children;
}

export default ProtectedRouter;
