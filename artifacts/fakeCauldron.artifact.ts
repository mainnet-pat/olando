export default {
  contractName: "FakeCauldron",
  constructorInputs: [],
  abi: [
    {
      name: "spend",
      inputs: []
    }
  ],
  bytecode: "c7c94c0d3957ca2608 OP_SIZE OP_NIP OP_0 OP_GREATERTHAN",
  source: "contract FakeCauldron() {\n  function spend() {\n    bytes output = 0xc7c94c0d3957ca268;\n    require(output.length > 0, \"Output must not be empty\");\n  }\n}\n",
  debug: {
    bytecode: "09c7c94c0d3957ca2608827700a0",
    sourceMap: "3:19:3:38;4:12:4:25:1;;:28::29:0;:12:::1",
    logs: [],
    requires: [
      {
        ip: 5,
        line: 4,
        message: "Output must not be empty"
      }
    ]
  },
  compiler: {
    name: "cashc",
    version: "0.11.0-next.4"
  },
  updatedAt: "2025-06-11T19:24:24.441Z"
} as const;