import { OrderStepsData } from "./OrderSteps-data";

export default function OrderSteps() {
  return (
    <div className="mx-20 mt-10 flex flex-col justify-center items-center gap-y-6 md:mx-10 md:flex-row md:gap-x-6">
      {OrderStepsData.map((step) => {
        if (step.id === "2") {
          return (
            <div className="flex flex-col justify-center items-center gap-y-4 mx-8">
              <h2 className="text-center font-bold">{step.header}</h2>
              <img src={step.icon} alt={step.header} />
              <p className="text-center">{step.paragraph}</p>
            </div>
          );
        } else if (step.id === "1" || step.id === "3") {
          return (
            <div className="flex flex-col justify-center items-center gap-y-4">
              <h2 className="text-center font-bold">{step.header}</h2>
              <img src={step.icon} alt={step.header} className="text-white" />
              <p className="text-center">{step.paragraph}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
