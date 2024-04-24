function Instruction() {
  const instructText = (
    <div>
      <h2>Instruction:</h2>

      <ol className="white">
        <li>Refer to the map image</li>
        <li>Use dropdown menus to select commands for your AGVs</li>
        <li>Click "Send to draft" to temporarily store an order </li>
        <li>
          If you don't want an order you sent to draft anymore, you can delete it via
          "Delete" button
        </li>
        <li>
          When you've decided which order you'd want to proceed, click "Submit
          to server"
        </li>
      </ol>
    </div>
  );
  return instructText;
}

export default Instruction;
