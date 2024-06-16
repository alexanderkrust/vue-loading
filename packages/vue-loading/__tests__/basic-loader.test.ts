import { render } from '@testing-library/vue'
import BasicLoader from '../src/basic-loader.vue'
import { expect, it } from 'vitest'
import './index.css'

it('it should have default styles and class', async () => {
  const { findByRole } = render(BasicLoader)

  const loader = await findByRole('progress')
  expect(loader.style.width).toBe('28px')
  expect(loader.style.height).toBe('28px')

  expect(loader.classList.contains('vl-basic-loader')).toBe(true)
})

it('it should have custom styles and class', async () => {
  const { findByRole } = render(BasicLoader, {
    props: {
      size: 50,
      primaryColor: 'red',
      secondaryColor: 'blue',
      class: 'text-xs',
    },
  })

  const loader = await findByRole('progress')
  expect(loader.style.width).toBe('50px')
  expect(loader.style.height).toBe('50px')
  expect(loader.style.borderRightColor).toBe('red')
  expect(loader.style.borderColor).toBe('blue red blue blue')
})

it('it should work with tailwind', async () => {
  const { findByRole } = render(BasicLoader, {
    props: {
      size: 50,
      primaryColor: 'red',
      secondaryColor: 'blue',
      class: 'text-xs',
    },
  })

  const loader = await findByRole('progress')
  expect(loader.style.width).toBe('50px')
  expect(loader.style.height).toBe('50px')
  expect(loader.style.borderRightColor).toBe('red')
  expect(loader.style.borderColor).toBe('blue red blue blue')
})
