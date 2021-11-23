export class Excel {
  constructor(selector, options) {
    this.$element = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = document.createElement('div')

    this.components.forEach(Component => {
      const component = new Component()
    })

    return $root
  }

  render() {
    this.$element.append(this.getRoot())
  }
}