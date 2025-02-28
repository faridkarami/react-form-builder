import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";
import Components from "./Components";

const DraggableField = ({ field, index }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.FIELD,
    item: { index, field },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} className="p-2 border rounded mb-2 cursor-move">
      {/* {field.label} */}
      {Components[field.type]}
    </div>
  );
};

export default DraggableField;