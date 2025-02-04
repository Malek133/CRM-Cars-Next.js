export const carMakes = [
  "Audi",
  "BMW",
  "Chevrolet",
  "Ford",
  "Honda",
  "Lexus",
  "Mercedes-Benz",
  "Tesla",
  "Toyota",
] as const

export const carModels: { [key: string]: readonly string[] } = {
  Audi: ["A3", "A4", "A6", "Q5", "Q7","A8","S3"],
  BMW: ["3 Series", "5 Series", "X3", "X5", "i4"],
  Chevrolet: ["Malibu", "Camaro", "Equinox", "Silverado", "Corvette"],
  Ford: ["Mustang", "F-150", "Explorer", "Escape", "Focus"],
  Honda: ["Civic", "Accord", "CR-V", "Pilot", "Odyssey"],
  Lexus: ["IS", "ES", "RX", "NX", "LS"],
  "Mercedes-Benz": ["C-Class", "E-Class", "S-Class", "GLC", "GLE"],
  Tesla: ["Model 3", "Model S", "Model X", "Model Y", "Cybertruck"],
  Toyota: ["Corolla", "Camry", "RAV4", "Highlander", "Tacoma"],
} as const

export type CarMake = (typeof carMakes)[number]
export type CarModel = (typeof carModels)[CarMake][number]

