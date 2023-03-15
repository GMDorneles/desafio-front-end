import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Container, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export function ListagemFuncionario() {
    return (
        <Container maxWidth="lg" sx={{ justifyContent: 'center', display: "flex", padding: '15px' }}>

            <Box sx={{ border: 1, borderRadius: '16px', borderColor: 'rgb(223 219 219)', padding: '45px', width: '100%' }} m={6}>

                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'rgb(75,78,252)' }}>Funcionários</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: '16px', }}>
                    <Typography sx={{ color: 'gray', fontSize: 15 }} mt={1} mb={1}>Listagem</Typography>
                    <Link to={"/from"}>
                        <Button sx={{ bgcolor: 'rgb(75,78,252)', borderRadius: '10px', maxHeight: '80px' }}>
                            <Typography sx={{ fontWeight: 'bold', color: 'white', fontSize: 10 }} py={1} px={2}>
                                Cadastrar
                            </Typography>
                        </Button>
                    </Link>
                </Box>

                <Box mt={4}>
                    <TextField sx={{ width: '100%', }} id="outlined-basic" label="Pesquisar funcionário" variant="outlined" size="small" />
                </Box>

                <Box mt={3}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 14, color: 'gray', }} align="left" >
                                    Nome
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 14, color: 'gray', }} align="left" >
                                    Função
                                </TableCell>
                                <TableCell>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key=''>
                                <TableCell sx={{ fontSize: 16 }} align="left">
                                    Gabrielly
                                </TableCell>
                                <TableCell sx={{ fontSize: 16 }} align="left">
                                    Front-End
                                </TableCell>
                                <TableCell align={'right'}>
                                    <Button >
                                        <EditIcon sx={{ color: 'black', fontSize: 20 }} />
                                    </Button>
                                    <Button >
                                        <DeleteIcon sx={{ color: 'black', fontSize: 20 }} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'center' }} mt={1}>
                    <Typography sx={{ fontWeight: 'normal', fontSize: 14, color: 'gray', }} mt={0.5}> página x de xx</Typography>
                    <Button>
                        <ArrowBackIosNewIcon sx={{ color: 'gray', fontSize: 16 }} />
                    </Button>
                    <Button>
                        <ArrowForwardIosIcon sx={{ color: 'gray', fontSize: 16 }} />
                    </Button>
                </Box>
            </Box>
        </Container >
    )
}