/**
 * Converte uma string em um slug amigável para URL.
 * Ex: "São Paulo" -> "sao-paulo"
 */
export const FormatToSlug = (text: string): string => {
  return text
    .toString()
    .normalize("NFD")                   // Decompõe caracteres acentuados (ex: ã vira a + ~)
    .replace(/[\u0300-\u036f]/g, "")    // Remove os acentos (diacríticos)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")               // Substitui espaços por hífens
    .replace(/[^\w-]+/g, "")            // Remove tudo que não for letra, número ou hífen
    .replace(/--+/g, "-");              // Remove hífens duplicados
};

/**
 * Converte um numero em uma string formatada.
 * Ex: "1003004" -> "1.003.004"
 */
export const formatNumber = (valor: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "decimal",
    maximumFractionDigits: 0
  }).format(valor)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getValuesList = (obj: Record<string, any> | undefined): string => {
  if (!obj) return "N/A";
  
  const values = Object.values(obj);
  
  const limitedValues = values.slice(0, 3);
  
  const formatted = limitedValues.map(v => 
    typeof v === 'object' && v !== null ? v.name : v
  ).join(", ");

  return values.length > 3 ? `${formatted}...` : formatted;
};