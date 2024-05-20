import { memo, useEffect, useState } from "react";

import { Form, Input } from "@arco-design/web-react";
import FormItem from "@arco-design/web-react/es/Form/form-item";
import { useDebounce } from "src/Core";

const InputSearch = Input.Search;

interface Props {
    handleSearch: (value: string) => void;
}

function FilterCpn({ handleSearch }: Props) {
    // STATE
    const [filters, setFilters] = useState<{ text: string }>();

    // DEBOUNCE
    const debouncedValue = useDebounce<string>(filters?.text!, 500);

    useEffect(() => {
        handleSearch(debouncedValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    return (
        <Form autoComplete="off" className="w-full">
            <FormItem className="w-full flex-1 flex flex-row justify-start m-0 [&_div]:flex [&_div]:flex-row [&_div]:justify-end">
                <InputSearch
                    className="w-full md:w-[350px] rounded-lg"
                    allowClear
                    placeholder="Tìm kiếm"
                    onChange={(value) =>
                        setFilters({ ...filters, text: value })
                    }
                />
            </FormItem>
        </Form>
    );
}

export default memo(FilterCpn);
