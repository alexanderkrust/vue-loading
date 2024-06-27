import App from '@/App.vue'
import { h } from 'vue'
import { CircularBarSimple } from 'vue-loading'

describe('<CircularBarSimple />', () => {
  it('should render the component with default props', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(CircularBarSimple),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('36px')
      expect(styles.height).to.be.equal('36px')

      const children = element[0].querySelectorAll('.vl-blade').length
      expect(children).to.be.equal(8)
    })
  })

  it('should render the component properly with props provided', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(CircularBarSimple, {
          size: 16,
          color: '#ff0000',
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('16px')
      expect(styles.height).to.be.equal('16px')

      const children = element[0].querySelectorAll('.vl-blade')
      expect(children.length).to.be.equal(8)

      const bladeElement = children[0]

      const firstChildStyles = window.getComputedStyle(bladeElement)
      expect(firstChildStyles.background).includes('rgb(255, 0, 0)')
    })
  })

  it('should override base styles with tailwind classes', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(CircularBarSimple, {
          class: 'w-6 h-6',
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('24px')
      expect(styles.height).to.be.equal('24px')

      const children = element[0].querySelectorAll('.vl-blade').length
      expect(children).to.be.equal(8)
    })
  })
})
