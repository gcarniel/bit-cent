import { useState } from 'react'

export function useForm<T = any>(initialData?: T) {
  const [data, setData] = useState<T>(initialData ?? ({} as T))

  const onChangeField = (field: string, fn?: Function) => {
    return (value: any) => {
      const v = value?.target?.value ?? value
      setData({ ...data, [field]: fn?.(v) ?? v })
    }
  }

  return {
    data,
    setData,
    onChangeField,
  }
}
