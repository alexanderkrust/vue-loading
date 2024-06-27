import App from '@/App.vue'
import { h } from 'vue'
import { CircularBarSharp } from 'vue-loading'

describe('<CircularBarSharp />', () => {
  it('should render the component with default props', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(CircularBarSharp),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('36px')
      expect(styles.height).to.be.equal('36px')

      const children = element[0].querySelectorAll('.vl-blade').length
      expect(children).to.be.equal(12)
    })
  })

  it('should render the component properly with props provided', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(CircularBarSharp, {
          size: 16,
          color: '#ff0000',
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('16px')
      expect(styles.height).to.be.equal('16px')

      const children = element[0].querySelectorAll('.vl-blade').length
      expect(children).to.be.equal(12)
    })
  })

  it('should override base styles with tailwind classes', () => {
    // @ts-expect-error -- don't know why this is throwing an error
    cy.mount(App, {
      slots: {
        default: h(CircularBarSharp, {
          class: 'w-6 h-6',
        }),
      },
    })

    cy.get('[role="progress"]').then((element) => {
      const styles = window.getComputedStyle(element[0])
      expect(styles.width).to.be.equal('24px')
      expect(styles.height).to.be.equal('24px')

      const children = element[0].querySelectorAll('.vl-blade').length
      expect(children).to.be.equal(12)
    })
  })
})
