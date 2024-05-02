import { memo, useRef } from "react";

import { Button, Form, Input, Select } from "@arco-design/web-react";
import { FormInstance } from "@arco-design/web-react/es/Form";

function BasicInfo() {
    const formRef = useRef<FormInstance>(null);
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-9">
                <Form
                    ref={formRef}
                    autoComplete="off"
                    initialValues={{ country: "2" }}
                >
                    <Form.Item
                        label="Email"
                        field="name"
                        rules={[{ required: true }]}
                        className="[&_label]:hidden [&_label]:md:flex [&_label]:flex-row [&_label]:justify-end [&_label]:items-center [&_.arco-form-item-symbol]:me-1"
                    >
                        <Input placeholder="Please enter your email address, such as xxx@bytedance.com" />
                    </Form.Item>

                    <Form.Item
                        label="Nick name"
                        field="nickName"
                        rules={[{ required: true }]}
                        className="[&_label]:hidden [&_label]:md:flex [&_label]:flex-row [&_label]:justify-end [&_label]:items-center [&_.arco-form-item-symbol]:me-2"
                    >
                        <Input placeholder="Please enter your nickname" />
                    </Form.Item>

                    <Form.Item
                        label="Country / Region"
                        field="country"
                        rules={[{ required: true }]}
                        className="[&_label]:hidden [&_label]:md:flex [&_label]:flex-row [&_label]:justify-end [&_label]:items-center [&_.arco-form-item-symbol]:me-2"
                        defaultValue="0"
                    >
                        <Select
                            placeholder="Please select location"
                            options={[
                                { value: "All", label: "All" },
                                { value: "1", label: "1" },
                                { value: "2", label: "2" },
                                { value: "3", label: "3" },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Your location"
                        field="location"
                        rules={[{ required: true }]}
                        className="[&_label]:hidden [&_label]:md:flex [&_label]:flex-row [&_label]:justify-end [&_label]:items-center [&_.arco-form-item-symbol]:me-2"
                    >
                        <Select
                            placeholder="Please select a location"
                            options={["All", "1", "2", "3"]}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 5 }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ marginRight: 24 }}
                        >
                            Submit
                        </Button>
                        <Button
                            style={{ marginRight: 24 }}
                            onClick={() => {
                                if (formRef?.current) {
                                    formRef?.current?.resetFields();
                                }
                            }}
                        >
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default memo(BasicInfo);
