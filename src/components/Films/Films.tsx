import { Box } from "@mui/material";
import CardFilm from "./CardFilm/CardFilm";
import demoFilms from "./demoData";

function Films() {
    return (
        <Box ml='30px' display='flex' flexWrap='wrap' gap='30px' alignSelf='start'>
            {
                demoFilms.map(film => (
                    <CardFilm key={film.id} image={film.img} name={film.name} reting={film.reting} />
                ))
            }
        </Box>
    )
}

export default Films;
