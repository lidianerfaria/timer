import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const History = () => {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((it) => {
              return (
                <tr key={it.id}>
                  <td>{it.task}</td>
                  <td>{it.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(it.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {it.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}

                    {it.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}

                    {!it.finishedDate && !it.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}

export default History
