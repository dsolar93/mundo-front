import * as React from 'react';
import { Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import fetchRegiones from './service/Regiones';
import fetchProvincias from './service/Provincias';
import fetchCiudades from './service/Ciudad';
import fetchCalles from './service/Calle';
import Tabla from './Component/Tabla';

function App() {

  const [Regiones, setRegiones] = React.useState([])
  const [Provincias, setProvincias] = React.useState([])
  const [Ciudades, setCiudades] = React.useState([])
  const [Calles, setCalles] = React.useState([])
  const [select, setSelect] = React.useState({
    regionSelected : '',
    provinciaSelected: '',
    ciudadSelected: '',
  })
  
  React.useEffect(() => {
    getRegiones()
  },[])

  const getRegiones = async () => {
    setRegiones(await fetchRegiones())
  }

  const getProvincias = async (id) => {
    setProvincias(await fetchProvincias(id))
  }

  const getCiudades = async (id) => {
    setCiudades(await fetchCiudades(id))
  }

  const getCalles = async (id) => {
    setCalles(await fetchCalles(id))
  }

  const handleChange = (valor) => (event) => {
    switch(valor){
      case 'region':
        setSelect({
          ...select,
          'regionSelected':event.target.value,
          'provinciaSelected':'',
          'ciudadSelected':'',
        })
        setCalles([])
        getProvincias(event.target.value)
        break;
      case 'provincia':
        setSelect({
          ...select,'provinciaSelected':event.target.value,
          'ciudadSelected':''
        })
        setCalles([])
        getCiudades(event.target.value)
        break;
      case 'ciudad':
        setSelect({
          ...select,'ciudadSelected':event.target.value
        })
        getCalles(event.target.value)
        break;
      default:
        return select
    }
    
  };
  console.log(select)

  return (
  
    <div>
      <Grid 
      container 
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      style={{margin:'15px'}}
      >
        <Grid item lg={3} md={3} sm={3}>
          <FormControl fullWidth>
          <InputLabel id="select-region">Region</InputLabel>
          <Select
          id = 'region-selected'
          labelId='select-region'
          label = 'region-selected'
          value = {select.regionSelected}
          name = 'region'
          onChange={handleChange('region')}
          >
            {
              Regiones?.map(item => (
                <MenuItem key={item.nombre} value={item.id} name={item.nombre}>{item.nombre}</MenuItem>
              ))
            }
          </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={3} sm={3}>
          <FormControl fullWidth>
          <InputLabel id="select-provincia">Provincia</InputLabel>
          <Select
          id = 'provincia-selected'
          labelId='select-provincia'
          label = 'provincia-selected'
          value = {select.provinciaSelected}
          name = 'provincia'
          onChange={handleChange('provincia')}
          disabled={select.regionSelected.length===0?true:false}
          >
            {
              Provincias?.map(item => (
                <MenuItem key={item.nombre} value={item.id} name={item.nombre}>{item.nombre}</MenuItem>
              ))
            }
          </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={3} sm={3}>
          <FormControl fullWidth>
          <InputLabel id="select-ciudad">Ciudad</InputLabel>
          <Select
          id = 'ciudad-selected'
          labelId='select-ciudad'
          label = 'ciudad-selected'
          value = {select.ciudadSelected}
          name = 'ciudad'
          onChange={handleChange('ciudad')}
          disabled={select.provinciaSelected.length===0?true:false}
          >
            {
              Ciudades?.map(item => (
                <MenuItem key={item.nombre} value={item.id} name={item.nombre}>{item.nombre}</MenuItem>
              ))
            }
          </Select>
          </FormControl>
        </Grid>
       
      <Grid item lg={5} md={5} sm={12}>
        <Tabla Calles={Calles}/>
      </Grid>
      </Grid>
    </div>
  );
}

export default App;
