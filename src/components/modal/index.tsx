import { useDispatch } from "react-redux";
import { addEvent } from "../../models/redux/selection";
import { SelectionType } from "../../models/entities/event";
import { ModalContainer, Row } from "./styled";
import { ButtonComponent } from "../bet-container/styled";
import { ExitIcon } from "../../assets/icons";
import Button from "../custom-button";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  price: number;
  selection: SelectionType;
}
export default function Modal({
  open,
  setOpen,
  name,
  price,
  selection,
}: ModalProps) {
  const dispatch = useDispatch();
  const handleConfirm = (item: SelectionType) => {
    dispatch(addEvent(item));
    setOpen(false);
  };
  return (
    <ModalContainer open={open}>
      <ButtonComponent onClick={() => setOpen(false)}>
        {ExitIcon}
      </ButtonComponent>
      Seguro que deseas agregar a {name} con una cuota de {price}
      <Row>
        <Button
          color="secondary"
          onClick={() => handleConfirm(selection)}
          description="Si"
        />
        <Button
          color="primary"
          onClick={() => setOpen(false)}
          description="No"
        />
      </Row>
    </ModalContainer>
  );
}
