import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { DatePicker, Form, Input } from 'antd';
import MaskedInput from 'antd-mask-input';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { validarCpf } from '../../utils/validarCpf';

export function FormFuncionario() {

    const onFinish = (values: any) => {
        if (validarCpf(values.cpf) == false) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'CPF inválido!',
            })
        }

        console.log('Success:', values);
    };

    return (
        <Container maxWidth="lg" sx={{ justifyContent: 'center', display: "flex", padding: '15px' }}>

            <Box sx={{ border: 1, borderRadius: '16px', borderColor: 'rgb(223 219 219)', padding: '45px', width: '100%' }} m={6}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'rgb(75,78,252)' }}>Funcionários</Typography>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'center' }}>
                            <Link to={"/"}>
                                <Typography sx={{ color: 'gray', fontSize: 15, }} mb={1}>Listagem</Typography>
                            </Link>
                            <ArrowForwardIosIcon sx={{ color: 'gray', fontSize: 16, marginTop: '3px' }} />
                            <Typography sx={{ color: 'gray', fontSize: 15 }} mb={1}>Cadastro</Typography>
                        </Box>

                        <Button type='submit' sx={{ bgcolor: 'rgb(75,78,252)', borderRadius: '10px', maxHeight: '80px' }}>
                            <Typography sx={{ fontWeight: 'bold', color: 'white', fontSize: 10 }} py={1} px={2}>
                                Salvar
                            </Typography>
                        </Button>
                    </Box>

                    <Grid container spacing={2} mt={3}>
                        <Grid item xs={8}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="caption" sx={{ color: 'gray' }}>*Nome</Typography>
                                <Form.Item
                                    name="nome"
                                    rules={[{ required: true, message: 'Este campo é obrigatório!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="caption" sx={{ color: 'gray' }}>*CPF</Typography>
                                <Form.Item
                                    name="cpf"
                                    rules={[{ required: true, message: 'Este campo é obrigatório!' }]}
                                >
                                    <MaskedInput mask="000.000.000-00" />
                                </Form.Item>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="caption" sx={{ color: 'gray' }}>*Data de Nascimento</Typography>
                                <Form.Item
                                    name="dataNascimento"
                                    rules={[{ required: true, message: 'Este campo é obrigatório!' }]}>
                                    <DatePicker
                                        format="DD-MM-YYYY"
                                    />
                                </Form.Item>
                            </Box>
                        </Grid>
                        <Grid item xs={10}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                <Typography variant="caption" sx={{ color: 'gray' }}>*Email</Typography>
                                <Form.Item
                                    name="Email"
                                    rules={[{ required: true, message: 'Este campo é obrigatório!' }, { message: 'Este campo Precisa de um email válido!', type: 'email' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                <Typography variant="caption" sx={{ color: 'gray' }}>*Telefone</Typography>
                                <Form.Item
                                    name="Telefone"
                                    rules={[{ required: true, message: 'Este campo é obrigatório!' }]}
                                >
                                    <MaskedInput mask="(00)000000000" />
                                </Form.Item>
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                <Typography variant="caption" sx={{ color: 'gray' }}>*Função</Typography>
                                <Form.Item
                                    name="Funcao"
                                    rules={[{ required: true, message: 'Este campo é obrigatório!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Box>
                        </Grid>
                    </Grid>
                </Form>
            </Box>
        </Container >
    )
}


