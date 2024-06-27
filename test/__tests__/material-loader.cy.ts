import App from '@/App.vue'
import { h } from 'vue'
import { MaterialLoader } from 'vue-loading'
import { BASE_PRIMARY_COLOR } from './const'
import { hexToRgb } from './utils/rgb-hex'

describe('<MaterialLoader />', () => {
  it('should render the component with default props', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(MaterialLoader),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('44px')
      expect(styles.height).to.be.equal('44px')

      const colorRGB = hexToRgb(BASE_PRIMARY_COLOR)
      const circleElement = element[0].firstChild as HTMLElement
      const circleStyles = window.getComputedStyle(circleElement)
      expect(circleStyles.stroke).to.be.equal(colorRGB)

      expect(circleStyles.strokeWidth).to.be.equal('4px')
    })
  })

  it('should render the component properly with props provided', () => {
    const color = '#ff0000'
    const size = 24

    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(MaterialLoader, {
          size,
          color,
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('30px')
      expect(styles.height).to.be.equal('30px')

      const colorRGB = hexToRgb(color)
      const circleElement = element[0].firstChild as HTMLElement
      const circleStyles = window.getComputedStyle(circleElement)
      expect(circleStyles.stroke).to.be.equal(colorRGB)

      const borderWidth = Math.floor(size / 8)
      expect(circleStyles.strokeWidth).to.be.equal(`${borderWidth}px`)
    })
  })

  it('should override base styles with tailwind classes', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(MaterialLoader, {
          class: 'w-6 h-6 [&>circle]:stroke-[6px]',
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('24px')
      expect(styles.height).to.be.equal('24px')

      const circleElement = element[0].firstChild as HTMLElement
      const circleStyles = window.getComputedStyle(circleElement)

      expect(circleStyles.strokeWidth).to.be.equal('6px')
    })
  })
})
