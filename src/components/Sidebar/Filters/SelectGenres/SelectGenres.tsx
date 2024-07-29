import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import getGenresFilms from "../../../../api-films/api";
import { useFilters, useFiltersDispatch } from "../FiltersContext";

interface IGenre {
  name: string;
  id: number;
}

function SelectGenres() {
  const [ genres, setGenres ] = useState<IGenre[]>([]);
  const selectedGenresIds = useFilters().genresIds;
  const dispatch = useFiltersDispatch();

  useEffect(() => {
    let ignore = false;

    const fetchAPI = async () => {
      const genresData = await getGenresFilms();

      if (!ignore) {
        setGenres(genresData);
      }
    }

    fetchAPI();
    return () => { ignore = true }
  }, []);

  const genresIds = genres.map(genre => genre.id);

  const handleChangeGenres = (e: SyntheticEvent, newValueGenres:number[]) => {
    e.stopPropagation();

    dispatch(
      {
        type: 'selectedGenre',
        genresIds: newValueGenres
      }
    )
  }

  const getOptionLabel = (option: number) => {
    const genreName = genres.find(genre => genre.id === option);
    return genreName ? genreName.name : '';
  }

  return (
      <Autocomplete
        onChange={handleChangeGenres}
        value={selectedGenresIds}
        multiple
        options={genresIds}
        disableCloseOnSelect
        getOptionLabel={getOptionLabel}
        renderInput={ params => (
          <TextField {...params} variant='standard' label='Жанры:' />
        ) }
      />
  )
}

export default SelectGenres;