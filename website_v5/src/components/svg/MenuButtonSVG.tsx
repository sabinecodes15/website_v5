interface Props {
  classes?: string;
  width?: string;
  height?: string;
}

const MenuButtonSVG = ({ classes, width, height }: Props) => {
  return (
    <svg
      className={classes}
      width={width ? width : "24"}
      height={height ? height : "19"}
      viewBox={"0 0 " + (width ? width : "24") + " " + (height ? height : "19")}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="1.73148"
        x2="24"
        y2="1.73148"
        stroke="white"
        strokeWidth="1.5"
      />
      <line
        y1="17.9167"
        x2="24"
        y2="17.9167"
        stroke="white"
        strokeWidth="1.5"
      />
      <line y1="10.25" x2="24" y2="10.25" stroke="white" strokeWidth="1.5" />
    </svg>
  );
};

export default MenuButtonSVG;
