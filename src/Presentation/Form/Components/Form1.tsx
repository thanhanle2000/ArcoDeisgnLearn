import {
    Button,
    DatePicker,
    Form,
    FormInstance,
    Input,
    Select,
} from "@arco-design/web-react";
import { useRef } from "react";

interface Props {
    handleChangeCurrentStep: (step: number) => void;
}

function Form1({ handleChangeCurrentStep }: Props) {
    const formRef = useRef<FormInstance>(null);
    return (
        <div className="flex flex-row justify-center items-center">
            <Form
                ref={formRef}
                autoComplete="off"
                onSubmit={() => handleChangeCurrentStep(2)}
                className="[&_.arco-form-label-item]:self-start [&_.arco-form-item-wrapper]:ml-auto [&_.arco-form-item-wrapper]:mr-auto [&_.arco-row]:flex-col [&_.arco-row]:md:flex-row [&_label]:flex [&_label]:flex-row [&_label]:justify-end [&_label]:items-center [&_.arco-form-item-symbol]:me-2 [&_.arco-col-5]:w-fit [&_.arco-col-5]:md:w-1/5 [&_.arco-col-19]:md:w-4/5 [&_.arco-row-align-start]:md:justify-start justify-center items-center"
            >
                <Form.Item
                    label={<div className="text-nowrap">Event name</div>}
                    field="EventName"
                    rules={[{ required: true, maxLength: 20 }]}
                    className=""
                >
                    <Input placeholder="Enter Chinese characters, letters or numbers, up to 20 characters" />
                </Form.Item>

                <Form.Item
                    label={<div className="text-nowrap">Channel Type</div>}
                    field="ChannelType"
                    rules={[{ required: true }]}
                    className=""
                >
                    <Select placeholder="Please select" allowClear>
                        <Select.Option value="1">1</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label={<div className="text-nowrap">Promotion time</div>}
                    required
                    field="PromotionTime"
                    className=""
                    rules={[{ required: true }]}
                >
                    <DatePicker.RangePicker className="w-full" />
                </Form.Item>

                <Form.Item
                    label={<div className="text-nowrap">Promotion URL</div>}
                    required
                    rules={[{ required: true }]}
                    field="PromotionURL"
                    className="[&_.arco-form-item-control-children]:flex [&_.arco-form-item-control-children]:justify-center [&_.arco-form-item-control-children]:md:justify-start"
                    extra="Such as Android or iOS download address, intermediate redirect URL, the URL must start with http:// or https://"
                >
                    <Input placeholder="Please enter the promotion page address" />
                </Form.Item>

                <Form.Item
                    label=" "
                    className="[&_.arco-form-item-control-children]:flex [&_.arco-form-item-control-children]:justify-end [&_.arco-form-item-control-children]:md:justify-start"
                >
                    <Button type="primary" htmlType="submit">
                        Next
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Form1;
