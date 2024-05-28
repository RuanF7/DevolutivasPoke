import RegisterForm from '../../forms/registerForm/registerForm';
import Layout from '../Layout';

const LayoutRegister = () => {
  return (
    <>
      <Layout />
      <div className="absolute inset-0 flex items-center justify-center">
        <RegisterForm />
      </div>
    </>
  );
};

export default LayoutRegister;
