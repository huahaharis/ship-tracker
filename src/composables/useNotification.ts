import { notification } from "ant-design-vue";

export function useNotification() {
  function showSuccess(message: string, description?: string) {
    notification.success({
      message,
      description,
      placement: "topRight",
      duration: 2
    });
  }

  function showError(message: string, description?: string) {
    notification.error({
      message,
      description,
      placement: "topRight",
      duration: 2
    });
  }

  return { showSuccess, showError };
}
