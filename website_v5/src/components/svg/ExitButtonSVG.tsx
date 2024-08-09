interface Props {
  classes: string;
  width?: string;
  height?: string;
}

const ExitButtonSVG = ({ classes, width, height }: Props) => {
  return (
    <svg
      className={classes}
      width={width ? width : "29"}
      height={height ? height : "27"}
      viewBox={"0 0 " + (width ? width : "29") + " " + (height ? height : "27")}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-0.75"
        x2="35.3553"
        y2="-0.75"
        transform="matrix(0.707107 -0.707106 0.707107 0.707106 2 27)"
        stroke="white"
        strokeWidth="1.5"
      />
      <line
        y1="-0.75"
        x2="35.3553"
        y2="-0.75"
        transform="matrix(0.707107 0.707106 -0.707107 0.707106 2 2)"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default ExitButtonSVG;
