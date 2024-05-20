import { Divider, Steps } from "@arco-design/web-react";
import { useEffect, useState } from "react";
import useDebouncedFunction from "src/Core/Hooks/useDebounceFunc";
import Form1 from "./Components/Form1";
import Form2 from "./Components/Form2";
import Form3 from "./Components/Form3";
import WhiteContainer from "src/Core/Components/WhiteContainer";

function FormContainer() {
    const [currentStep, setCurrentStep] = useState(1);
    const [windowInnerWidth, setWindowInnerWidth] = useState(
        window?.innerWidth
    );

    const handleResize = useDebouncedFunction(() => {
        setWindowInnerWidth(window?.innerWidth);
    }, 100);

    // USE EFFECT
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("orientationchange", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("orientationchange", handleResize);
        };
    }, [handleResize]);

    const handleChangeCurrentStep = (step: number) => {
        setCurrentStep(step);
    };

    return (
        <WhiteContainer>
            <h5 className="text-xl">Create event channel</h5>
            <div className="flex flex-col justify-center items-center">
                <Steps
                    lineless
                    direction={
                        windowInnerWidth >= 768 ? "horizontal" : "vertical"
                    }
                    current={currentStep}
                    className="mt-6 mb-6 md:gap-10"
                >
                    <Steps.Step
                        title="Basic Information"
                        description="Create event channel"
                    />
                    <Steps.Step
                        title="Channel Information"
                        description="Enter detailed channel content"
                    />
                    <Steps.Step
                        title="Complete creation"
                        description="Created successfully"
                    />
                </Steps>
                <Divider className="md:hidden" />
                <div className="w-full md:w-auto">
                    {currentStep === 1 && (
                        <Form1
                            handleChangeCurrentStep={handleChangeCurrentStep}
                        />
                    )}
                    {currentStep === 2 && (
                        <Form2
                            handleChangeCurrentStep={handleChangeCurrentStep}
                        />
                    )}
                    {currentStep === 3 && (
                        <Form3
                            handleChangeCurrentStep={handleChangeCurrentStep}
                        />
                    )}
                </div>
            </div>
        </WhiteContainer>
    );
}

export default FormContainer;
