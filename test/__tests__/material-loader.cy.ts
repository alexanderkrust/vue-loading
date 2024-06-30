import App from '@/App.vue'
import { h } from 'vue'
import { MaterialLoader } from '@alexanderkrust/vue-loading'
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
      expect(styles.borderWidth).to.be.equal('4px')
      const colorRGB = hexToRgb(BASE_PRIMARY_COLOR)
      expect(styles.borderColor).to.be.equal(colorRGB)
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
      expect(styles.borderWidth).to.be.equal('3px')
      const colorRGB = hexToRgb(color)
      expect(styles.borderColor).to.be.equal(colorRGB)
    })
  })

  it('should override base styles with tailwind classes', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(MaterialLoader, {
          class: 'w-6 h-6 border-2 border-slate-200',
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('24px')
      expect(styles.height).to.be.equal('24px')

      expect(styles.borderWidth).to.be.equal('2px')
      expect(styles.borderColor).to.be.equal('rgb(226, 232, 240)')
    })
  })
})
