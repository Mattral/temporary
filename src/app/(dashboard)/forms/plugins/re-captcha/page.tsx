// PROJECT IMPORTS
import RecaptchaPage from 'views/forms-tables/forms/plugins/RecaptchaPage';
import { useClient } from 'next/compat';

// ==============================|| PLUGIN - RECAPTCHA ||============================== //

const Recaptcha = () => {
  return <RecaptchaPage />;
};

export default useClient(RecaptchaPage);
