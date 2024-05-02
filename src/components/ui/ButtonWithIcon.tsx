import Magnifine from "../svg/Magnifine";

export default function ButtonWithIcon({
  buttonColor,
  iconColor,
  text,
  otherClass,
}: {
  buttonColor?: string;
  iconColor?: string;
  text: string;
  otherClass?: string;
}) {
  return (
    <button className={`btn bg-[${buttonColor}] ${otherClass} rounded`}>
      <Magnifine color={iconColor} />
      {text}
    </button>
  );
}
