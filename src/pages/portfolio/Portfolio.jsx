import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Portfolio.css'

import perfil from '../../assets/perfil.jpeg'
import fondoPerfil from '../../assets/fondo-perfil.gif'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'black',
  fontSize: '17px',
  margin: '5px 0px 20px 0px',
  border: '2px solid #AC4C49',
  boxShadow: '0px 5px 8px rgba(147, 20, 50)'
}));

export const Portfolio = () => {
  return (
    <>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <div className="slide-wrapper">
        <div className="container-slide" style={{ backgroundImage: `url(${fondoPerfil})` }}>
          <div className="title-wr">
             <h1 className='title-portfolio'>Mi portafolio</h1>
          </div>
          <img className="perfil" src={perfil} alt="" height={350} width={250} />
        </div>
      </div>
      <div className="container-content">
        <Box sx={{ flexGrow: 1 }}>
          {/* justifyContent y lignItems dentro del grid que envuelve para que se distribuya de manera centrada 
          cubriendo toda la pantalla */}
          <Grid container spacing={5} justifyContent="center" alignItems="center">
            <Grid item xs={3}>
              <Item>Mis datos personales:<br />
                Nombre y apellido: Maia Aedo<br />
                Edad: 19 años<br />
                Localidad: Cipolletti, Rio Negro<br />
                Email: aedomaia10@gmail.com<br />
                Contacto: 2994209274<br />
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>Mis hobbies y aptitudes: <br />
                Soy alguien que se adapta rápidamente a diferentes situaciones, lo cual me ha ayudado mucho en roles de liderazgo.
                Me encanta trabajar con equipos y siempre trato de crear un ambiente donde todos puedan colaborar y sentirse valorados.
                Creo que trabajar juntos es la mejor manera de alcanzar nuestras metas.<br />
                Siempre estoy buscando aprender cosas nuevas. Mi mayor comodidad es el desarrollo front end,
                así que he dedicado mucho tiempo a aprender HTML, CSS y JavaScript. Me gusta estar al día con las últimas tecnologías y
                endencias para asegurarme de que lo que hago siempre sea lo mejor posible.<br />
                En cuanto a mis hobbies, disfruto mucho de actividades que me ayudan a crecer tanto personal como profesionalmente.
                Me encanta trabajar en proyectos personales, leer libros sobre tecnología y liderazgo, y participar en
                comunidades de desarrolladores. Estas actividades no solo me mantienen ocupado, sino que también me ayudan a aportar ideas
                frescas e innovadoras en el trabajo.<br />
              </Item>
            </Grid>
            <Grid item xs={3}>
              <Item>Formación:<br />
                CET N°30 - Técnico en Programación<br />
                Inglés B2 Cambridge Certified<br />
                ITS - Tecnicatura Superior en Desarrollo de Software Full-Stack
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}
