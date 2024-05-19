import { Badge } from "./styled";

interface BadgeProps {
  number: number;
}
const BadgeComponent = ({ number }: BadgeProps) => {
  return <Badge data-testid="badge">{number}</Badge>;
};

export default BadgeComponent;
