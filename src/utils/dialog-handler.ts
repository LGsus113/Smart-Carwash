import { $, $$ } from "@src/utils/dom-selector";

export function setupDialogs() {
  $$("[data-dialog-target]").forEach((button) => {
    const targetId = button.getAttribute("data-dialog-target");
    const dialog = $(`#${targetId}`) as HTMLDialogElement | null;

    if (!dialog) return;

    button.addEventListener("click", () => {
      dialog.showModal();
    });
  });
}
