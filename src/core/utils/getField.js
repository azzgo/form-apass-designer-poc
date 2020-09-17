import ui from "../contants/ui";

export function getFieldWidget(obj) {
  if (obj == null || typeof obj !== "object") {
    return null;
  }

  if (obj[ui.widget] != null) {
    return obj[ui.widget];
  }

  if (obj.type === "string") {
    return "input";
  }

  if (obj.type === "boolean") {
    return "checkbox";
  }
}

export function getFieldProps(obj) {
  if (obj == null || typeof obj !== "object") {
    return {};
  }

  let props = {};

  if (obj[ui.placeholder] != null) {
    props.placeholder = obj[ui.placeholder];
  }

  return props;
}