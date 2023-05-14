export default class Text {
  static between(
    value: string,
    min: number,
    max: number,
    trim: boolean = true,
  ): boolean {
    const endValue = (trim ? value?.trim?.() : value) ?? ''
    return endValue.length >= min && endValue.length <= max
  }
}
