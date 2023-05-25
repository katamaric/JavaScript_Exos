function translateRNA(rna) {
  let protein = '';

  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.substr(i, 3);
    switch (codon) {
      case 'UCU':
      case 'UCC':
      case 'UCA':
      case 'UCG':
      case 'AGU':
      case 'AGC':
        protein += 'Sérine';
        break;
      case 'CCU':
      case 'CCC':
      case 'CCA':
      case 'CCG':
        protein += 'Proline';
        break;
      case 'UUA':
      case 'UUG':
        protein += 'Leucine';
        break;
      case 'UUU':
      case 'UUC':
        protein += 'Phénylalanine';
        break;
      case 'CGU':
      case 'CGC':
      case 'CGA':
      case 'CGG':
      case 'AGA':
      case 'AGG':
        protein += 'Arginine';
        break;
      case 'UAU':
      case 'UAC':
        protein += 'Tyrosine';
        break;
    }
    protein += '-';
  }
  return protein.slice(0, -1);
}

const rna1 = 'UUACGCAGUAGA';
const protein1 = translateRNA(rna1);
console.log(protein1);

const rna2 = 'CCGUCGUUGCGCUACAGC';
const protein2 = translateRNA(rna2);
console.log(protein2);

const rna3 = 'CCUCGCCGGUACUUCUCG';
const protein3 = translateRNA(rna3);
console.log(protein3)
