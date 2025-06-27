declare const _default: {
    readonly contractName: "Multisig_2of3";
    readonly constructorInputs: readonly [];
    readonly abi: readonly [{
        readonly name: "spend";
        readonly inputs: readonly [{
            readonly name: "signatureA";
            readonly type: "sig";
        }, {
            readonly name: "signatureB";
            readonly type: "sig";
        }, {
            readonly name: "dummy";
            readonly type: "int";
        }];
    }];
    readonly bytecode: "OP_2 <pubkeyC> <pubkeyB> <pubkeyA> OP_3 OP_CHECKMULTISIG";
    readonly source: "";
    readonly compiler: {
        readonly name: "cashc";
        readonly version: "0.11.0";
    };
    readonly updatedAt: "2025-06-12T06:27:28.123Z";
};
export default _default;
