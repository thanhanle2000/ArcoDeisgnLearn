import { memo, useEffect, useState } from "react";

import { Form, Input } from "@arco-design/web-react";
import FormItem from "@arco-design/web-react/es/Form/form-item";
import { useDebounce } from "src/Core";

const InputSearch = Input.Search;

interface Props {
    handleSearch: (value: string) => void;
}

function FilterCpn({ handleSearch }: Props) {
    const [text, setText] = useState("");
    const debouncedValue = useDebounce<string>(text, 500);

    useEffect(() => {
        handleSearch(debouncedValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    return (
        <Form className="w-full flex flex-row justify-end" autoComplete="off">
            <FormItem className="w-full flex flex-row justify-end m-0 [&_div]:flex [&_div]:flex-row [&_div]:justify-end">
                <InputSearch
                    className="w-[350px] rounded-lg"
                    allowClear
                    placeholder="Tìm kiếm"
                    onChange={(value) => setText(value)}
                />
            </FormItem>
        </Form>
    );
}

export default memo(FilterCpn);
