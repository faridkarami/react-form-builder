import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import Components from "./Components";

const DropBox = ({ fields, setFields }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.FIELD,
    drop: (item) => setFields((prevFields) => [...prevFields, item.field]),
  });

  return (
    <div ref={drop} className="p-4 border-dashed border-2 border-gray-400 min-h-[150px] flex flex-col gap-2">
      {fields.length === 0 ? <p className="text-gray-500">Drop fields here</p> : fields.map((field, index) => (
        <div key={index} className="p-2 border rounded">
          {/* {field.label} */}
          {Components[field.type]}
        </div>
      ))}
    </div>
  );
};

export default DropBox;