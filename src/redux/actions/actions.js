export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SUBMIT_MEETING = "SUBMIT_MEETING";
export const CANCEL_MEETING = "CANCEL_MEETING";

export const actions = {
  openModal: slot => {
    return {type: OPEN_MODAL, slot}
  },
  closeModal: () => {
    return {type: CLOSE_MODAL}
  },
  submitMeeting: (meetings) => {
    return {type: SUBMIT_MEETING, meetings}
  },
  cancelMeeting: (id) => {
    return {type: CANCEL_MEETING, id}
  },
}