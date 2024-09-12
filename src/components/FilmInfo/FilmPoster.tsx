import { Box, CardMedia } from "@mui/material";

interface FilmPosterProps {
    posterPath: string;
}

function FilmPoster({ posterPath } : FilmPosterProps) {
    return (
        <Box maxWidth='300px'>
            <CardMedia
                component='img'
                alt='poster film'
                height='400px'
                width='100%'
                image={`https://image.tmdb.org/t/p/w300${posterPath}`}
            />
        </Box>
    )
}

export default FilmPoster;