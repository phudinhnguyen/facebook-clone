import { CURRENT_LANGUAGE, USA } from "src/ui/shared/config/index";
// import { notification } from 'alta-rc';
import { serverTranslateKey } from "src/ui/shared/translateKey/index";
import { notification } from "antd";
export type notification = "success" | "info" | "error" | "warning";

interface Props {
  type?: notification;
  fileTranslateKey?: any;
  translateKey?: string;
  description?: string;
}

const notifiTranslate = (props: Props) => {
  const currentLangue = localStorage.getItem(CURRENT_LANGUAGE) || USA;

  const {
    type = "info",
    fileTranslateKey = serverTranslateKey,
    translateKey = "",
    description = "description",
  } = props;

  let message = translateKey;

  if (
    fileTranslateKey[ translateKey ] &&
    fileTranslateKey[ translateKey ][ currentLangue ]
  ) {
    message = fileTranslateKey[ translateKey ][ currentLangue ];
  }

  notification[ type ]({
    message,
    placement: "bottomRight",
  });
};
export default notifiTranslate;
