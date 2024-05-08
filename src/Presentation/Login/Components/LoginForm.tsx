import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
    Button,
    Checkbox,
    Divider,
    Form,
    Input,
    Space,
    Typography,
} from "@arco-design/web-react";
import { IconFacebook, IconGoogle } from "@arco-design/web-react/icon";

import {
    useAppDispatch,
    useAppSelector,
} from "src/Data/DataSource/Api/LocalDB/reduxHooks";
import { loginUser } from "src/Data/DataSource/Api/LocalDB/Slices/AuthSlice";

import { FORMRULEMESSAGES, ROUTES } from "src/Core";

function LoginForm() {
    // NAVIGATE
    const navigate = useNavigate();

    // REDUX
    const user = useAppSelector((state) => state?.auth?.user);
    const dispatch = useAppDispatch();

    // HANDLE SUBMIT
    const handleSubmit = async (values: any) => {
        dispatch(
            loginUser({
                username: values?.username,
                password: values?.isSavePassword ? values?.password : "",
                isSavePassword: values?.isSavePassword,
            })
        );
        navigate(ROUTES.DASHBOARD);
    };

    // UI
    const SignInButtons: React.ReactNode[] = useMemo(
        () => [
            <Button className="" icon={<IconGoogle />}>
                Google
            </Button>,
            <Button className="" icon={<IconFacebook />}>
                Facebook
            </Button>,
        ],
        []
    );

    return (
        <div className="p-4 mb-4 basis-2/3 lg:basis-1/3 max-w-[520px] flex flex-col items-center justify-start bg-[color:var(--color-bg-2)] rounded-lg">
            <h1 className="text-[32px] font-bold m-8">LOGIN</h1>
            <Form
                className="flex flex-col justify-start items-center gap-2 flex-wrap"
                onSubmit={handleSubmit}
                initialValues={{
                    username: user?.username,
                    password: user?.password,
                    isSavePassword: user?.isSavePassword,
                }}
            >
                <Form.Item
                    field="username"
                    className="[&_.arco-input]:rounded-md justify-center w-full"
                    rules={[
                        {
                            required: true,
                            message: FORMRULEMESSAGES.LOGIN.USERNAME_REQUIRED,
                        },
                        {
                            maxLength: 16,
                            message: FORMRULEMESSAGES.LOGIN.USERNAME_MAXLENGTH,
                        },
                    ]}
                >
                    <Input
                        className="flex-1 w-full"
                        size="large"
                        placeholder="Enter Username"
                        type="text"
                    />
                </Form.Item>
                <Form.Item
                    field="password"
                    className="[&_.arco-input-inner-wrapper]:rounded-md justify-center"
                    rules={[
                        {
                            required: true,
                            message: FORMRULEMESSAGES.LOGIN.PASSWORD_REQUIRED,
                        },
                        {
                            minLength: 6,
                            message: FORMRULEMESSAGES.LOGIN.PASSWORD_MINLENGTH,
                        },
                        {
                            maxLength: 16,
                            message: FORMRULEMESSAGES.LOGIN.PASSWORD_MAXLENGTH,
                        },
                    ]}
                >
                    <Input.Password
                        className=""
                        size="large"
                        defaultVisibility={false}
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item className="flex flex-row justify-center items-center">
                    <Space className="flex flex-row flex-wrap justify-center md:justify-between items-center">
                        <Form.Item
                            className="flex flex-row m-0 justify-center items-center"
                            defaultChecked
                            field="isSavePassword"
                            triggerPropName="checked"
                        >
                            <Checkbox className="text-xs md:text-sm">
                                Save Password
                            </Checkbox>
                        </Form.Item>
                        <Button
                            type="text"
                            className="text-xs md:text-sm pe-0 ps-0"
                        >
                            Forgot Password?
                        </Button>
                    </Space>
                </Form.Item>
                <Form.Item className="justify-center m-0">
                    <Button className="w-full" type="primary" htmlType="submit">
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
            <Divider orientation={"center"} type="horizontal">
                Or Sign in with
            </Divider>
            <div className="flex flex-row flex-wrap justify-center items-center gap-4">
                {SignInButtons?.map((buttonNode, index) => (
                    <div key={index}>{buttonNode}</div>
                ))}
            </div>
            <div className="flex flex-row flex-wrap gap-1 justify-center items-center mt-4 mb-8">
                <Typography>Don't have an account?</Typography>
                <Button className="m-0 p-0" type="text">
                    Register now
                </Button>
            </div>
        </div>
    );
}

export default LoginForm;
