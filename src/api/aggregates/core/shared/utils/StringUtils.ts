export function getFileName(fileName: string): string {
  const extension = getFileExtension(fileName);
  const splittedName = fileName.split(`.${extension}`);
  return splittedName[0];
}
export function getFileExtension(fileName: string): string {
	if (!fileName) return false as unknown as any; // TODO change return type and adapt others
  let extension = fileName.split('.').slice(-1)[0];
  return extension;
}
export function getFileNameWithoutExtension(fileName: string): string {
	const possibleExtensionInRename = getFileExtension(fileName);
	if (!possibleExtensionInRename) return false as unknown as any; // TODO change return type and adapt others
	if (possibleExtensionInRename.length === 3 || possibleExtensionInRename.length === 4) {
		fileName.split('.').pop();
		return fileName;
	}
	return fileName;
}

export function drawLine(length: number, characterToDraw: string) {
  let output = '';
  for (let i = 0; i < length; i = i + characterToDraw.length) {
    output += characterToDraw;
  }

  return output.slice(0, length);
}

export function printTitle(
  str: string,
  length: number,
  characterToDraw: string,
) {
  let output = `${str} ${drawLine(length - str.length - 1, characterToDraw)}`;
  return output;
}
function zeroPad(buf: any, blocksize: number): string {
  const buffer = typeof buf === 'string' ? Buffer.from(buf, 'utf8') : buf;
  const pad = Buffer.alloc(
    (blocksize - (buffer.length % blocksize)) % blocksize,
    0,
  );
  return Buffer.concat([buffer, pad]).toString();
}

function zeroUnpad(buf: any, blocksize: number): string {
  let lastIndex = buf.length;
  while (lastIndex >= 0 && lastIndex > buf.length - blocksize - 1) {
    lastIndex -= 1;
    if (buf[lastIndex] !== 0) {
      break;
    }
  }
  return buf.slice(0, lastIndex + 1).toString('utf8');
}

export { zeroPad, zeroUnpad };
