export function validateEmail(email: string): boolean {
    let regex = /^([A-Za-z0-9_\-\.])+\@(successive.tech)$/;
    return regex.test(email);
  }
  