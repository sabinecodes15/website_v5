interface Props {
  classes?: string;
  width?: string;
  height?: string;
}

const MenuArrowSVG = ({ classes, width, height }: Props) => {
  return (
    <svg
      className={classes}
      width={width ? width : "24"}
      height={height ? height : "11"}
      viewBox={"0 0 " + (width ? width : "24") + " " + (height ? height : "11")}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 11L0.741669 0.5L23.2583 0.5L12 11Z" />
    </svg>
  );
};

export default MenuArrowSVG;
