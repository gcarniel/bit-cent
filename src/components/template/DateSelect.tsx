import DateFormatter from '@/logic/utils/date'
import { Button, NumberInput, Popover } from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useState } from 'react'

export interface DateSelectProps {
  date?: Date
  changeDate?: (date: Date) => void
}

export function DateSelect({ changeDate, date }: DateSelectProps) {
  const hoje = new Date()

  const [data, setData] = useState<Date>(
    new Date(
      date?.getFullYear() ?? hoje.getFullYear(),
      date?.getMonth() ?? hoje.getMonth(),
      1,
    ),
  )

  function changeYear(year: number) {
    if (!year) return
    const newDate = new Date(data)
    newDate.setFullYear(year)
    setData(newDate)
    changeDate?.(newDate)
  }

  function changeMonth(month: number) {
    const newDate = new Date(data)
    newDate.setMonth(month)
    setData(newDate)
    changeDate?.(newDate)
  }

  function increment() {
    const newDate = new Date(data)
    newDate.setMonth(newDate.getMonth() + 1)
    setData(newDate)
    changeDate?.(newDate)
  }

  function decrement() {
    const newDate = new Date(data)
    newDate.setMonth(newDate.getMonth() - 1)
    setData(newDate)
    changeDate?.(newDate)
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        className={`
                flex justify-center items-center bg-red-500
                text-white cursor-pointer p-1
            `}
        color="red"
        onClick={decrement}
      >
        <IconChevronLeft size={14} />
      </Button>
      <Popover withArrow>
        <Popover.Target>
          <Button
            className={`
                        bg-gradient-to-r from-indigo-600 to-cyan-600
                        text-white cursor-pointer select-none 
                        w-full sm:w-44 px-3
                    `}
          >
            {DateFormatter.mmyy.format(data)}
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <div className="flex justify-center mb-5">
            <NumberInput value={data.getFullYear()} onChange={changeYear} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {DateFormatter.month().map((months, i) => {
              const selecionada = data.getMonth() === i
              return (
                <Button
                  key={i}
                  color={selecionada ? 'red' : 'blue'}
                  className={`${selecionada ? 'bg-red-500' : 'bg-blue-500'}`}
                  onClick={() => changeMonth(i)}
                >
                  {months}
                </Button>
              )
            })}
          </div>
        </Popover.Dropdown>
      </Popover>
      <Button
        className={`
                flex justify-center items-center bg-red-500
                text-white cursor-pointer p-1
            `}
        color="red"
        onClick={increment}
      >
        <IconChevronRight size={14} />
      </Button>
    </div>
  )
}
