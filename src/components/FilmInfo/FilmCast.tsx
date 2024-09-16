import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { IArtist } from "../../interfaces/interfaces";
import { TEXTS } from "../../constants";

interface FilmCastProps {
    cast: IArtist[];
}

function FilmCast({ cast }: FilmCastProps) {
    const topArtists = cast.slice(0, 5);

    return (
        <Box sx={{backgroundColor: '#57cc99', borderRadius: '5px', p: '5px'}}>
            <Typography variant='h5' mb='10px'>
                { TEXTS.ARTIST }
            </Typography>
            <List>
                {
                    topArtists.map(artist => (
                        <ListItem key={artist.id}>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`avatar ${artist.name}`}
                                    sx={{width: '50px', height: '50px'}}
                                    src={`https://image.tmdb.org/t/p/w500${artist.profile_path}`}
                                />
                            </ListItemAvatar>
                            <ListItemText>
                                {artist.name}
                            </ListItemText>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}

export default FilmCast;