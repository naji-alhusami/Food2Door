import { OrderStepsData } from "./OrderSteps-data";

export default function OrderSteps() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl">Order Steps</h1>
      <div className="mx-20 mt-10 flex flex-col justify-center items-center gap-y-6 md:mx-10 md:flex-row md:gap-x-6">
        {OrderStepsData.map((step) => (
          <div
            key={step.id}
            className="flex flex-col justify-center items-center gap-y-4 mx-8"
          >
            <h2 className="text-center font-bold">{step.header}</h2>
            <img src={step.icon} alt={step.header} />
            <p className="text-center">{step.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
