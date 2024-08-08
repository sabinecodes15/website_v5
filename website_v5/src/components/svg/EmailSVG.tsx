interface Props {
  classes: string;
  width?: string;
  height?: string;
}

const EmailSVG = ({ classes, width, height }: Props) => {
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
    >
      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
    </svg>
  );
};

export default EmailSVG;
