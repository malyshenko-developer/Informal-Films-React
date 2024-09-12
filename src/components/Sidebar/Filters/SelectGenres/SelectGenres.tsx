import { Autocomplete, TextField } from "@mui/material";
import { useGenres } from "./hooks";



const SelectGenres = () => {
  const {
    handleChangeGenres,
    selectedGenresIds,
    genresIds,
    getOptionLabel
  } = useGenres();

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