export class JsonDLL {
  constructor(dllName) {
    this.dllName = dllName;
    this.lib = Deno.dlopen(this.dllName, {
      Call: { parameters: ["buffer", "buffer"], result: "pointer" },
    });
  }
  Call(name, args) {
    let input = JSON.stringify(args, null, 2);
    const buffer1 = StringToCStringBuffer(name);
    const buffer2 = StringToCStringBuffer(input);
    const ret = this.lib.symbols.Call(buffer1, buffer2);
    const output = CStringPointerToString(ret);
    return JSON.parse(output);
  }
  CallOne(name, args) {
    const result = this.Call(name, args);
    if (result == null) return null;
    if (!Array.isArray(result)) return result;
    if (result.length >= 1) return result[0];
    return null;
  }
}

function StringToCStringBuffer(s) {
  // C 文字列は末尾に \0 を置く必要がある
  return new TextEncoder().encode(`${s}\0`).buffer;
}

function CStringPointerToString(p) {
  const dataView = new Deno.UnsafePointerView(p);
  return dataView.getCString();
}