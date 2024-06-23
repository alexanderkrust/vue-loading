// function that converts hex like #ffffff to rgb like rgb(255, 255, 255)
export function hexToRgb(hex: string): string {
  const hexValue = hex.replace('#', '')
  const r = parseInt(hexValue.substring(0, 2), 16)
  const g = parseInt(hexValue.substring(2, 4), 16)
  const b = parseInt(hexValue.substring(4, 6), 16)
  return `rgb(${r}, ${g}, ${b})`
}


