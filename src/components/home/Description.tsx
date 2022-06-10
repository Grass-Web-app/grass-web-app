import {
  DivContainerDescription,
  PWordDescription,
  PWordDescriptionRale,
} from "./StyledDescription";
const Description = (props: { title: string; subtitle: string }) => {
  const { title, subtitle } = props;
  return (
    <DivContainerDescription>
      <PWordDescription>{subtitle}</PWordDescription>
      <PWordDescriptionRale>{title}</PWordDescriptionRale>
    </DivContainerDescription>
  );
};

export default Description;
