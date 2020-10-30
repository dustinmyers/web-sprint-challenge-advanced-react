import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../hooks/useForm';

test('returns initial values', () => {
  const initialValues = { name: 'Donald Duck', funny: true, employer: "Disney" }
  const { result } = renderHook(() => useForm(initialValues))
  expect(result.current[0]).toBe(initialValues)
})

test('returns handler function', () => {
  const { result } = renderHook(() => useForm())
  expect(typeof result.current[1]).toBe('function');
})

test('updates values through changeHandle', () => {
  const initialValues = { name: 'Donald Duck', funny: true, employer: "Disney" }

  const { result } = renderHook(() => useForm(initialValues))

  act(() => {
    result.current[1]({ target: { name: 'name', value: 'Mickey Mouse' }})
  })

  expect(result.current[0]).toStrictEqual({ ...initialValues, name: 'Mickey Mouse' });
})

