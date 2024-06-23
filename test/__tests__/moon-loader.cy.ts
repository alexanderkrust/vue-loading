import App from '@/App.vue'
import { h } from 'vue'
import { MoonLoader } from 'vue-loading'
import { BASE_PRIMARY_COLOR, BASE_SIZE } from './const'
import { hexToRgb } from './utils/rgb-hex'

describe('<MoonLoader />', () => {
  it('should render the component with default props', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(MoonLoader),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('44px')
      expect(styles.height).to.be.equal('44px')

      const ballElement = element.find('.vl-moon-ball')[0]
      const ballStyles = window.getComputedStyle(ballElement)

      const ballSize = Math.floor(BASE_SIZE / 8)
      expect(ballStyles.width).to.be.equal(`${ballSize}px`)
      expect(ballStyles.width).to.be.equal(`${ballSize}px`)
      expect(ballStyles.opacity).to.be.equal('0.8')
      expect(ballStyles.borderRadius).to.be.equal('50%')

      const ballColor = hexToRgb(BASE_PRIMARY_COLOR)
      expect(ballStyles.backgroundColor).to.be.equal(ballColor)

      const circleElement = element.find('.vl-moon-circle')[0]
      const circleStyles = window.getComputedStyle(circleElement)

      expect(circleStyles.width).to.be.equal('36px')
      expect(circleStyles.width).to.be.equal('36px')
      expect(circleStyles.borderWidth).to.be.equal(`${ballSize}px`)
      expect(circleStyles.opacity).to.be.equal('0.1')
      expect(circleStyles.borderRadius).to.be.equal('50%')
    })
  })

  it('should render the component properly with props provided', () => {
    const color = '#ff0000'
    const size = 24

    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(MoonLoader, {
          size,
          color,
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('30px')
      expect(styles.height).to.be.equal('30px')

      const ballElement = element.find('.vl-moon-ball')[0]
      const ballStyles = window.getComputedStyle(ballElement)

      const ballSize = Math.floor(size / 8)
      expect(ballStyles.width).to.be.equal(`${ballSize}px`)
      expect(ballStyles.width).to.be.equal(`${ballSize}px`)
      expect(ballStyles.opacity).to.be.equal('0.8')
      expect(ballStyles.borderRadius).to.be.equal('50%')

      const ballColor = hexToRgb(color)
      expect(ballStyles.backgroundColor).to.be.equal(ballColor)

      const circleElement = element.find('.vl-moon-circle')[0]
      const circleStyles = window.getComputedStyle(circleElement)

      expect(circleStyles.width).to.be.equal('24px')
      expect(circleStyles.width).to.be.equal('24px')
      expect(circleStyles.borderWidth).to.be.equal(`${ballSize}px`)
      expect(circleStyles.opacity).to.be.equal('0.1')
      expect(circleStyles.borderRadius).to.be.equal('50%')
    })
  })

  it('should override base styles with tailwind classes', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(MoonLoader, {
          class: '[&>*:first-child]:bg-slate-700 [&>*:nth-child(2)]:border-slate-700',
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const ballElement = element.find('.vl-moon-ball')[0]
      const ballStyles = window.getComputedStyle(ballElement)

      expect(ballStyles.backgroundColor).to.be.equal('rgb(51, 65, 85)')

      const circleElement = element.find('.vl-moon-circle')[0]
      const circleStyles = window.getComputedStyle(circleElement)

      expect(circleStyles.borderColor).to.be.equal('rgb(51, 65, 85)')
    })
  })
})
