export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const actions = {
  openModal: id => {
    return {type: OPEN_MODAL, id}
  },
  closeModal: () => {
    return {type: CLOSE_MODAL}
  },
}