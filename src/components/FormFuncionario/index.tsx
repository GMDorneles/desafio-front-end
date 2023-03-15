import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from "react-router-dom";
export function FormFuncionario() {
    return (
        <Container maxWidth="lg" sx={{ justifyContent: 'center', display: "flex", padding: '15px' }}>

            <Box sx={{ border: 1, borderRadius: '16px', borderColor: 'rgb(223 219 219)', padding: '45px', width: '100%' }} m={6}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'rgb(75,78,252)' }}>Funcionários</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'center' }}>
                        <Link to={"/"}>
                            <Typography sx={{ color: 'gray', fontSize: 15, }} mb={1}>Listagem</Typography>
                        </Link>
                        <ArrowForwardIosIcon sx={{ color: 'gray', fontSize: 16, marginTop: '3px' }} />
                        <Typography sx={{ color: 'gray', fontSize: 15 }} mb={1}>Cadastro</Typography>
                    </Box>

                    <Button sx={{ bgcolor: 'rgb(75,78,252)', borderRadius: '10px', maxHeight: '80px' }}>
                        <Typography sx={{ fontWeight: 'bold', color: 'white', fontSize: 10 }} py={1} px={2}>
                            Salvar
                        </Typography>
                    </Button>
                </Box>
                <Grid container spacing={2} mt={3}>
                    <Grid item xs={8}>
                        <TextField sx={{ width: '100%', }} id="outlined-basic" label="Nome Completo" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField sx={{ width: '100%', }} id="outlined-basic" label="CPF" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker sx={{ width: '100%', }} />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField sx={{ width: '100%', }} id="outlined-basic" label="Pesquisar funcionário" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField sx={{ width: '100%', }} id="outlined-basic" label="Pesquisar funcionário" variant="outlined" />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField sx={{ width: '100%', }} id="outlined-basic" label="Pesquisar funcionário" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}