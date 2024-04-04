import { memo } from "react";

import { Form, Input } from "@arco-design/web-react";
import FormItem from "@arco-design/web-react/es/Form/form-item";

const InputSearch = Input.Search;

interface Props {
    handleSearch: (value: string) => void;
}

function FilterCpn({ handleSearch }: Props) {
    return (
        <Form className="w-full flex flex-row justify-end" autoComplete="off">
            <FormItem className="w-full flex flex-row justify-end m-0 [&_div]:flex [&_div]:flex-row [&_div]:justify-end">
                <InputSearch
                    className="w-[350px] rounded-lg"
                    allowClear
                    placeholder="Tìm kiếm"
                    onChange={(value) => handleSearch(value)}
                />
            </FormItem>
        </Form>
    );
}

export default memo(FilterCpn);
