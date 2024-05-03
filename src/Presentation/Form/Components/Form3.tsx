import { Button } from "@arco-design/web-react";
import { IconCheck } from "@arco-design/web-react/icon";

interface Props {
    handleChangeCurrentStep: (step: number) => void;
}

function Form3({ handleChangeCurrentStep }: Props) {
    return (
        <div className="my-6 flex flex-col justify-center items-center">
            <div className="w-[45px] h-[45px] my-3 rounded-full bg-green-100 text-green-600 flex flex-row justify-center items-center">
                <IconCheck className="text-lg font-bold" />
            </div>
            <span>Created successfully</span>
            <span className="font-light text-xs">
                Form created successfully
            </span>
            <div className="flex flex-row justify-center items-center gap-2 mt-4">
                <Button type="secondary">View form</Button>
                <Button
                    type="primary"
                    onClick={() => handleChangeCurrentStep(1)}
                >
                    Create again
                </Button>
            </div>
        </div>
    );
}

export default Form3;
