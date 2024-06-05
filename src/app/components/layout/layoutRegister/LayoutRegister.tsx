'use client';
import RegisterLogic from '../../forms/registerForm/RegisterFormLogic';
import Layout from '../Layout';

const LayoutRegister = () => {
  return (
    <>
      <Layout />
      <div className="absolute inset-0 flex items-center justify-center">
        <RegisterLogic />
      </div>
    </>
  );
};

export default LayoutRegister;
