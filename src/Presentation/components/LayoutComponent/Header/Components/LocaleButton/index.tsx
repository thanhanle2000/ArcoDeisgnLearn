import { Button } from "@arco-design/web-react";
import { IconLanguage } from "@arco-design/web-react/icon";
import DropDownComponent from "src/Presentation/components/Dropdown";
import DropList from "src/Presentation/components/DropList";
import {
  useAppDispatch,
  useAppSelector,
} from "src/Data/DataSource/Api/LocalDB/reduxHooks";
import { ChangeLocale } from "src/Data/DataSource/Api/LocalDB/Slices/CommonSlice";
import { DropListDataInterface } from "src/Core";

function LocaleButton() {
  // REDUX
  const dispatch = useAppDispatch();

  // LOCALE
  const locale = useAppSelector((state) => state?.common?.locale);

  // DROP DATAS
  const dropDatas: DropListDataInterface[] = [
    {
      title: "English",
      handleClickFunction: () => {
        dispatch(ChangeLocale("en-US"));
      },
      key: "en-US",
    },
    {
      title: "Vietnamese",
      handleClickFunction: () => {
        dispatch(ChangeLocale("vi-VN"));
      },
      key: "vi-VN",
    },
  ];

  return (
    <DropDownComponent
      dropList={
        <DropList data={dropDatas} mode="pop" defaultSelectedKey={locale} />
      }
    >
      <Button shape="round" type="default" icon={<IconLanguage />} />
    </DropDownComponent>
  );
}

export default LocaleButton;
