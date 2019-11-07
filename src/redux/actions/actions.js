export const OPEN_TIME_SLOT = "OPEN_TIME_SLOT";

export const actions = {
  openTimeSlot: id => {
    return {type: OPEN_TIME_SLOT, id}
  },
}