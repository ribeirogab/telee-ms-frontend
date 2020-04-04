export default async function showSnackbar (callback, setSnackbarProperties, setOpenSnackbar) {
  const properties = await callback
  setSnackbarProperties(properties)
  setOpenSnackbar(true)
}
