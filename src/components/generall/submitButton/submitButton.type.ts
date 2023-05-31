export enum buttonType {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}
export type submitbuttonProps = {
  text: string;
  type?: buttonType;
  onClick?: () => void;
};
