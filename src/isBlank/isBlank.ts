export default function isBlank(value: string | null | undefined) : boolean {
  return value == null || value === undefined || value == '' || /^\s*$/.test(value);
};