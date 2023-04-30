function csvToObject(csvString: string) {
  const lines = csvString.split("\n");
  const headers = lines[0].split(",");
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split(",");
    console.log(`[${i}]`);
    console.log("currentLine == ", currentLine);
    if (currentLine.length !== headers.length) {
      throw new Error("CSV file is malformed");
    }

    const obj: any = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j];
    }
    result.push(obj);
  }

  return result;
}

export default csvToObject;
