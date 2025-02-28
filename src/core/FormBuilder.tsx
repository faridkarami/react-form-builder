import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import DraggableField from './DraggableField';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropBox from './DropBox';
import { ComponentTypes } from './Constants';

const FormBuilder = () => {
  const [fields] = useState([
    { id: 1, label: 'Textbox', type: ComponentTypes.TEXTBOX },
    { id: 2, label: 'Radio Button', type: ComponentTypes.RADIO },
  ]);

  const [droppedFields, setDroppedFields] = useState([]);

  const handleData = () => {
    console.log("Form Data:", droppedFields);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 w-96 mx-auto mt-5">
        <h2 className="text-lg font-bold mb-3">Form Builder</h2>
        <div>
          {fields.map((field, index) => (
            <DraggableField key={field.id} field={field} index={index} />
          ))}
        </div>
        <h3 className="text-md font-bold mt-4">Drop Area</h3>
        <DropBox fields={droppedFields} setFields={setDroppedFields} />
        <button className="mt-4" onClick={handleData}>Save Form</button>
      </div>
    </DndProvider>
  );
};

export default FormBuilder;
