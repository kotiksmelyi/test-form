import { Outlet, useLocation } from "react-router";
import styles from "./LoanWizardPage.module.css";
import { LoanWizardRoutes } from "@/shared/config/routes";
import NavigationButtons from "@/features/loan/ui/NavigationButtons";
import { LoanWizardFormLayout } from "@/features/loan/ui";

const steps = [
  LoanWizardRoutes.STEP1,
  LoanWizardRoutes.STEP2,
  LoanWizardRoutes.STEP3,
];

const LoanWizardPage = () => {
  const location = useLocation();

  const index = steps.findIndex((step) => location.pathname.endsWith(step));
  const currentStep = index === -1 ? 0 : index;

  return (
    <div className={styles.container}>
      <h1 className="text-2xl">Шаг {currentStep + 1}</h1>
      {/*React-hook-form для удобной работы с формой и контекстом (без лишних стейтов)*/}
      <LoanWizardFormLayout>
        <Outlet />
        <NavigationButtons currentStep={currentStep} steps={steps} />
      </LoanWizardFormLayout>
    </div>
  );
};

export default LoanWizardPage;
