export default class Money {
  private static _language = 'pt-BR'
  private static _currency = 'BRL'

  static format(num: number): string {
    return (num ?? 0).toLocaleString(this._language, {
      style: 'currency',
      currency: this._currency,
    })
  }

  static unformat(valor: string): number {
    const nums = valor.replace(/[^0-9]+/g, '')
    const i = nums.length - 2
    return Number(`${nums.substring(0, i)}.${nums.substring(i)}`)
  }
}
