/**
 * It returns true if the event is a modifier key event (ctrl or meta)
 * @param event - React.KeyboardEvent<any>
 */
export const isMod = (event: React.KeyboardEvent<any>) => {
  return (event.metaKey && !event.ctrlKey) || event.ctrlKey;
};
