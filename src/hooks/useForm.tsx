import { useCallback, useState } from 'react'

export function useForm<T = any>(initialData?: T) {
  const [data, setData] = useState<T>(initialData ?? ({} as T))

  const onChangeField = useCallback(
    (field: string, fn?: Function) => {
      return (value: any) => {
        const v = value?.target?.value ?? value
        setData({ ...data, [field]: fn?.(v) ?? v })
      }
    },
    [data],
  )

  const changeData = useCallback((data: T) => {
    setData(data)
  }, [])

  return {
    data,
    setData: changeData,
    onChangeField,
  }
}
