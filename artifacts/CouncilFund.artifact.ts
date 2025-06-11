export default {
  contractName: "CouncilFund",
  constructorInputs: [
    {
      name: "salt",
      type: "int"
    }
  ],
  abi: [
    {
      name: "spend",
      inputs: []
    }
  ],
  bytecode: "OP_0 OP_GREATERTHANOREQUAL OP_VERIFY OP_INPUTINDEX OP_0 OP_NUMEQUAL",
  source: "// A test council fund contract that allows spending only from the first input\ncontract CouncilFund(int salt) {\n  function spend() {\n    require(salt >= 0, \"Salt must be greater than zero\"); // just a sample check\n    require(this.activeInputIndex == 0, \"Only the first input can be spent\");\n  }\n}\n",
  debug: {
    bytecode: "00a269c0009c",
    sourceMap: "4:20:4:21;:12:::1;:4::57;5:12:5:33:0;:37::38;:12:::1",
    logs: [],
    requires: [
      {
        ip: 3,
        line: 4,
        message: "Salt must be greater than zero"
      },
      {
        ip: 7,
        line: 5,
        message: "Only the first input can be spent"
      }
    ]
  },
  compiler: {
    name: "cashc",
    version: "0.11.0-next.4"
  },
  updatedAt: "2025-06-11T18:31:39.963Z"
} as const;