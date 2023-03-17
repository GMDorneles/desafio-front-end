import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { DatePicker, Form, Input } from 'antd';
import MaskedInput from 'antd-mask-input';
import dayjs from 'dayjs';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { useAppDispatch } from "../../hooks/useTypeSelector";
import { postFuncionarios, putFuncionarios } from '../../redux/funcionariosSlice';
import { FuncionarioForm } from '../../redux/types';
import { validarCpf } from '../../utils/validarCpf';

export function FormFuncionario() {

    const { state } = useLocation();

    let history = useNavigate();

    const dispatch = useAppDispatch();

    const onFinish = async (values: FuncionarioForm) => {

        if (validarCpf(values.cpf) === false) {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'CPF inválido!',
            })
            return;
        } else {
            const dataConvertida = dayjs(values.data_nascimento).format('YYYY-MM-DD');
            const dataCadastro = {
                idfuncionarios: state?.data.idfuncionarios,
                nome: values.nome,
                email: values.email,
                telefone: values.telefone,
                data_nascimento: dataConvertida,
                cpf: values.cpf,
                funcao: values.funcao
            }
            if (state?.data) {
                const res = await dispatch(putFuncionarios(dataCadastro));

                Swal.fire({
                    icon: res.payload === "Funcionário atualizado com sucesso" ? 'success' : 'error',
                    title: res.payload === "Funcionário atualizado com sucesso" ? 'Success' : 'Erro',
                    text: res.payload === "Funcionário atualizado com sucesso" ? 'Editado com sucesso!' : 'Erro ao editar!',
                })

                if (res.payload === "Funcionário atualizado com sucesso") {
                    history('/');
                }

            } else {
                const res = await dispatch(postFuncionarios(dataCadastro));
                Swal.fire({
                    icon: res.payload === "Funcionário criado com sucesso" ? 'success' : 'error',
                    title: res.payload === "Funcionário criado com sucesso" ? 'Success' : 'Erro',
                    text: res.payload === "Funcionário criado com sucesso" ? 'Cadastrado com sucesso!' : 'Erro ao cadastrar!',
                })

                if (res.payload === "Funcionário criado com sucesso") {
                    history('/');
                }
            }
        }
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
                            {state?.data ?
                                <Typography sx={{ color: 'gray', fontSize: 15 }} mb={1}>Edição</Typography>
                                :
                                <Typography sx={{ color: 'gray', fontSize: 15 }} mb={1}>Cadastro</Typography>
                            }
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
                                    initialValue={state?.data?.nome}
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
                                    initialValue={state?.data?.cpf}
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
                                    name="data_nascimento"
                                    rules={[{ required: true, message: 'Este campo é obrigatório!' }]}>
                                    <DatePicker
                                        defaultValue={state?.data && dayjs('01-01-2000', state.data.data_nascimento)}
                                        format="DD-MM-YYYY"
                                    />
                                </Form.Item>
                            </Box>
                        </Grid>
                        <Grid item xs={10}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                <Typography variant="caption" sx={{ color: 'gray' }}>*Email</Typography>
                                <Form.Item
                                    initialValue={state?.data?.email}
                                    name="email"
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
                                    initialValue={state?.data?.telefone}
                                    name="telefone"
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
                                    initialValue={state?.data?.funcao}
                                    name="funcao"
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


