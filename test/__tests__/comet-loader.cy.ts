import App from '@/App.vue'
import { h } from 'vue'
import { CometLoader } from 'vue-loading'
import { hexToRgb } from './utils/rgb-hex'
import { BASE_PRIMARY_COLOR } from './const'

describe('<CometLoader />', () => {
  it('should render the component with default props', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(CometLoader),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('44px')
      expect(styles.height).to.be.equal('44px')
      expect(styles.borderRadius).to.be.equal('50%')

      const colorRGB = hexToRgb(BASE_PRIMARY_COLOR)
      expect(element.css('background')).includes(colorRGB)
    })
  })

  it('should render the component properly with props provided', () => {
    const color = '#ff0000'
    const size = 24

    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(CometLoader, {
          size,
          color,
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('30px')
      expect(styles.height).to.be.equal('30px')
      expect(styles.borderRadius).to.be.equal('50%')

      const colorRGB = hexToRgb(color)
      expect(element.css('background')).includes(colorRGB)
    })
  })

  it('should override base styles with tailwind classes', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(CometLoader, {
          class: 'w-6 h-6',
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('24px')
      expect(styles.height).to.be.equal('24px')
    })
  })
})
