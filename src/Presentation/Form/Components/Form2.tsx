import {
    Button,
    Form,
    FormInstance,
    Input,
    InputTag,
    Switch,
} from "@arco-design/web-react";
import TextAreaRef from "@arco-design/web-react/es/Input/textarea";
import { useRef, useState } from "react";

interface Props {
    handleChangeCurrentStep: (step: number) => void;
}

function Form2({ handleChangeCurrentStep }: Props) {
    const formRef = useRef<FormInstance>(null);
    const [pushReminderCheck, setPushReminderCheck] = useState(true);
    return (
        <div className="flex flex-row justify-center items-center">
            <Form
                ref={formRef}
                autoComplete="off"
                onSubmit={() => handleChangeCurrentStep(3)}
                className="[&_.arco-form-label-item]:self-start [&_.arco-form-item-wrapper]:ml-auto [&_.arco-form-item-wrapper]:mr-auto [&_.arco-row]:flex-col [&_.arco-row]:md:flex-row md:w-full [&_label]:flex [&_label]:flex-row [&_label]:justify-end [&_label]:items-center [&_.arco-form-item-symbol]:me-2 [&_.arco-col-5]:w-fit [&_.arco-col-5]:md:w-1/5 [&_.arco-col-19]:md:w-4/5 [&_.arco-row-align-start]:md:justify-start justify-center items-center"
            >
                <Form.Item
                    label={
                        <div className="text-nowrap">Advertising source</div>
                    }
                    field="AdvertisingSource"
                    rules={[{ required: true }]}
                    className=""
                >
                    <Input placeholder="Referal address: sohu, sina" />
                </Form.Item>

                <Form.Item
                    label={
                        <div className="text-nowrap">Advertising medium</div>
                    }
                    field="AdvertisingMedium"
                    rules={[{ required: true }]}
                    className=""
                >
                    <Input placeholder="Marketing media: cpc, banner, edm" />
                </Form.Item>

                <Form.Item
                    label={<div className="text-nowrap">Key words</div>}
                    required
                    field="KeyWord"
                    className=""
                    rules={[{ type: "array", minLength: 1, required: true }]}
                >
                    <InputTag allowClear placeholder="Input and press Enter" />
                </Form.Item>

                <Form.Item
                    label={<div className="text-nowrap">Push Reminder</div>}
                    required
                    field="PushReminder"
                    className="[&_.arco-form-item-control-children]:flex [&_.arco-form-item-control-children]:justify-center [&_.arco-form-item-control-children]:md:justify-start"
                >
                    <Switch
                        type="circle"
                        className={`${
                            pushReminderCheck
                                ? "!bg-[color:rgb(var(--primary-6))]"
                                : "!bg-[color:var(--color-fill-4)]"
                        }`}
                        onChange={() => setPushReminderCheck((prev) => !prev)}
                        defaultChecked={pushReminderCheck}
                    />
                </Form.Item>
                <Form.Item
                    label={
                        <div className="text-nowrap">Advertising content</div>
                    }
                    required
                    field="AdvertisingContent"
                    className=""
                    // extra="Such as Android or iOS download address, intermediate redirect URL, the URL must start with http:// or https://"
                    extra="Please enter the description of the advertisement content, no more than 200 words"
                >
                    <TextAreaRef
                        autoSize
                        className=""
                        placeholder="Description"
                    />
                </Form.Item>

                <Form.Item
                    label=" "
                    className="[&_.arco-form-item-control-children]:flex [&_.arco-form-item-control-children]:justify-end [&_.arco-form-item-control-children]:md:justify-start"
                >
                    <Button
                        type="secondary"
                        onClick={() => handleChangeCurrentStep(1)}
                    >
                        Prev
                    </Button>
                    <Button className="ms-2" type="primary" htmlType="submit">
                        Next
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Form2;
