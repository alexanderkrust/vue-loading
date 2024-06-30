import App from '@/App.vue'
import { h } from 'vue'
import { BasicLoader } from '@alexanderkrust/vue-loading'
import { BASE_PRIMARY_COLOR, BASE_SECONDARY_COLOR } from './const'
import { hexToRgb } from './utils/rgb-hex'

describe('<BasicLoader />', () => {
  it('should render the component with default props', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(BasicLoader),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('44px')
      expect(styles.height).to.be.equal('44px')
      expect(styles.borderRadius).to.be.equal('50%')

      const primaryColorRGB = hexToRgb(BASE_PRIMARY_COLOR)
      const secondaryColorRGB = hexToRgb(BASE_SECONDARY_COLOR)

      expect(styles.borderColor).to.be.equal(`${secondaryColorRGB} ${primaryColorRGB} ${secondaryColorRGB} ${secondaryColorRGB}`)
      expect(styles.borderRightColor).to.be.equal(primaryColorRGB)

      expect(styles.borderWidth).to.be.equal('4px')
    })
  })

  it('should render the component properly with props provided', () => {
    const primaryColor = '#ff0000'
    const secondaryColor = '#00ff00'
    const size = 24

    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(BasicLoader, {
          size,
          primaryColor,
          secondaryColor,
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('30px')
      expect(styles.height).to.be.equal('30px')
      expect(styles.borderRadius).to.be.equal('50%')

      const primaryColorRGB = hexToRgb(primaryColor)
      const secondaryColorRGB = hexToRgb(secondaryColor)

      expect(styles.borderColor).to.be.equal(`${secondaryColorRGB} ${primaryColorRGB} ${secondaryColorRGB} ${secondaryColorRGB}`)
      expect(styles.borderRightColor).to.be.equal(primaryColorRGB)

      const borderWidth = Math.floor(size / 8)
      expect(styles.borderWidth).to.be.equal(`${borderWidth}px`)
    })
  })

  it('should override base styles with tailwind classes', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(BasicLoader, {
          class: 'w-6 h-6 border-2',
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('24px')
      expect(styles.height).to.be.equal('24px')

      expect(styles.borderWidth).to.be.equal('2px')
    })
  })
})
