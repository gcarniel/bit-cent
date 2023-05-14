export default class Cpf {
  private static _pattern = '???.???.???-??'

  static format(value: string): string {
    const nums = this.unformat(value).split('')
    return nums
      .reduce((formatted: string, num: string) => {
        return formatted.replace('?', num)
      }, this._pattern)
      .split('?')[0]
      .replace(/[-.]$/, '')
  }

  static unformat(value: string): string {
    return value.replace(/[^0-9]+/g, '')
  }
}
