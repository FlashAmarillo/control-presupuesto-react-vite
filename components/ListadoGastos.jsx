import Gasto from "./Gasto"

const ListadoGastos = ({
  gastos, 
  setGastoEditar, 
  eliminarGasto, 
  gastosFiltrados, 
  filtro
}) => {
  return (
    <div className='listado-gastos contenedor'>

        {/* Mapeo de todos los gastos dentro del objeto u dentro de los gastos filtrados*/}

        { filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta categoría '}</h2>
            {gastosFiltrados.map( gasto => (
              <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
              />
            ))}
          </>
          ) : (
            <>
              <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún '}</h2>
              {gastos.map( gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                />
              ))}
            </>
          )
        }
    </div>
  )
}

export default ListadoGastos