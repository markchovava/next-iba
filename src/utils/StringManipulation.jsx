export function TrimString(str, num) {
    if (!str) {
      return "";
    }
    return str.length > num ? str.substring(0, 20) + "..." : str;
  }