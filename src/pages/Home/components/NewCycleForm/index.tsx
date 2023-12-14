import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { useContext } from 'react'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        disabled={!!activeCycle}
        id="task"
        list="task-suggestions"
        placeholder="Insira uma atividade"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        disabled={!!activeCycle}
        id="minutesAmount"
        // min={5}
        max={60}
        placeholder="00"
        // step={5}
        type="number"
        {...register('minutesAmountInput', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}

export default NewCycleForm
