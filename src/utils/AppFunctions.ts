class AppFunctions {
  public addClass(element: any, className: any) {
    document.querySelector(element).classList.add(className)
  }

  public removeClass(element: any, className: any) {
    document.querySelector(element).classList.remove(className)
  }

  public toggleClass(element: any, className: any) {
    document.querySelector(element).classList.toggle(className)
  }

  public flatDeep(arr: any, d = 1) {
    return d > 0
      ? arr.reduce(
        (acc: any, val: any) =>
          acc.concat(Array.isArray(val) ? this.flatDeep(val, d - 1) : val),
        []
      )
      : arr.slice()
  }

  public slugify(text: any) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
  }

  public containsObject(obj: any, list: any) {
    let i
    for (i = 0; i < list.length; i++) {
      if (list[i].slug === obj.slug) {
        return i
      }
    }

    return -1
  }
}

export const appFunctions = new AppFunctions()
