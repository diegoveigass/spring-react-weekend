import { NotificationButton } from '../NotificationButton'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

export function SalesCard() {
  const [initialDate, setInitialDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 365)),
  )
  const [finalDate, setFinalDate] = useState(new Date())

  return (
    <>
      <div className="sales-card">
        <h1>Vendas</h1>
        <div className="date-picker-inputs">
          <div>
            <DatePicker
              selected={initialDate}
              onChange={(date: Date) => {
                setInitialDate(date)
              }}
              className="input-date"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div>
            <DatePicker
              selected={finalDate}
              onChange={(date: Date) => {
                setFinalDate(date)
              }}
              className="input-date"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
      </div>
      <main className="table-container">
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="notification-button-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="notification-button-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="notification-button-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}
