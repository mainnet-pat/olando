import { compileString } from 'cashc';
import fs from 'fs';
import { URL } from 'url';
import urlJoin from 'url-join';

export const compile = (): void => {
  const directory = new URL('../contracts', import.meta.url);
  const result = fs.readdirSync(directory)
    .filter((fn) => fn.endsWith('.cash'))
    .map((fn) => ({ fn, contents: fs.readFileSync(new URL(urlJoin(directory.toString(), fn)), { encoding: 'utf-8' }) }));

  result.forEach(({ fn, contents }) => {
    console.log(`Compiling ${fn}...`);
    const artifact = compileString(contents);

    exportArtifact(artifact, new URL(`../artifacts/${fn.replace('.cash', '.artifact.ts')}`, import.meta.url));
  });
};

export const exportArtifact = (obj: object, outPath: string | URL): void => {
  const toTs = (value: any): string => {
    // First, stringify the object with indentation
    let json = JSON.stringify(value, null, 2);

    // Remove quotes from object keys where valid (simple JS identifiers)
    json = json.replace(
      /"([a-zA-Z_][a-zA-Z0-9_]*)":/g,
      '$1:'
    );

    return json;
  };

  const content = `export default ${toTs(obj)} as const;`;
  fs.writeFileSync(outPath, content, { encoding: 'utf-8' });
};

switch (process.argv[2]) {
  case 'compile':
    compile();
    break;
  default:
    console.log('Unknown task');
    break;
}
