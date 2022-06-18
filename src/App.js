import { createTheme, makeStyles, MuiThemeProvider} from '@material-ui/core'
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Mywork from './components/Mywork';
import Contact from './components/Contact';
import { purple } from '@material-ui/core/colors';

//creamos paleta de colores
const theme = createTheme({
  palette: {
  primary: {main: purple[500] },
  secondary: {main:"#333"}
  }
})

function App() {
  // configuracion inicial para dar estilos con los hooks
  const classes = useStyles();
  return (
    //envolver a todo con MuiThemeProvider, y se pasa el theme, que se creo
  <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      {/* pasamos un id, que sirve para ir a un 
      punto determinado de una pagina. Colocamos el title como un props.
      atributo dark, que sera verdadero o falso de forma alternativa */}
     <Navbar />
     <About title = "Acerca de mi" id= "about" dark={true}/>
     <Skills title = "Tegnologías" id= "skills" dark={false}/>
     <Mywork title = "Mis Proyectos"  id= "work" dark={true}/>
     <Contact title = "Contáctame" id= "contact" dark={false}/>
    </div>
  </MuiThemeProvider>
  );
}
const useStyles = makeStyles((theme)=>({
  //aqui se escribe todas las clases y sus estilos
  root: {

  }
}))
export default App;
