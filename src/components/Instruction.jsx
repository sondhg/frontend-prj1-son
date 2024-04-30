function Instruction() {
  const instructText = (
    <div>
      <h2>Instruction:</h2>

      <ol className="white">
        <li>Refer to the map image</li>
        <li>Use dropdown menus to select commands for your AGVs</li>
        <li>Click "Send order" to submit AGV inputs to server</li>
      </ol>
    </div>
  );
  return instructText;
}

export default Instruction;
