export default {
  contractName: "FakeCauldron",
  constructorInputs: [],
  abi: [
    {
      name: "spend",
      inputs: []
    }
  ],
  bytecode: "c7c94c0d3957ca2608 OP_DROP OP_1",
  source: "contract FakeCauldron() {\n  function spend() {\n    bytes output = 0xc7c94c0d3957ca268;\n    console.log(output, \"spend\");\n  }\n}\n",
  debug: {
    bytecode: "09c7c94c0d3957ca26087551",
    sourceMap: "3:19:3:38:1;2:2:5:3;",
    logs: [
      {
        ip: 1,
        line: 4,
        data: [
          {
            stackIndex: 0,
            type: "bytes",
            ip: 1
          },
          "spend"
        ]
      }
    ],
    requires: []
  },
  compiler: {
    name: "cashc",
    version: "0.11.0-next.4"
  },
  updatedAt: "2025-06-11T18:31:39.969Z"
} as const;