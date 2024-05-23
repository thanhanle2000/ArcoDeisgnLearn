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
  const [text, setText] = useState("");

  // USE DEBOUNCE
  const debouncedValue = useDebounce<string>(text, 500);

  useEffect(() => {
    handleSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <Form autoComplete="off" className="w-full">
      <FormItem className="w-full flex-1 flex flex-row justify-start m-0 [&_div]:flex [&_div]:flex-row [&_div]:justify-end">
        <InputSearch
          className="w-full md:w-[350px] rounded-lg"
          allowClear
          placeholder="Tìm kiếm"
          onChange={(value) => setText(value)}
        />
      </FormItem>
    </Form>
  );
}

export default memo(FilterCpn);
