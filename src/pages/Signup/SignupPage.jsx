import { 
    Button, 
    Checkbox, 
    Flex, 
    FormControl, 
    Input, 
    Link, 
    Spinner, 
    Stack, 
    Text 
  } from '@chakra-ui/react'
  import axios from 'axios'
  import React, { useContext, useEffect, useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  import Footer from '../components/Footer/Footer'
  import Header from '../components/Header'
  import StatusBar from '../components/StatusBar'
  import { BASE_URL } from '../constants/url'
  import { GlobalContext } from '../contexts/GlobalContext'
  import { goToPostsPage } from '../routes/coordinator'
  
  
  const SignupPage = () => {
    const context = useContext(GlobalContext)
    const {
      isLoading,
      setIsLoading,
      isAuth,
      setIsAuth
    } = context
    const navigate = useNavigate()
  
    useEffect(() => {
      if (isAuth) {
        goToPostsPage(navigate)
      }
    })
  
    const [form, setForm] = useState({
      name: "",
      email: "",
      password: ""
    })
  
    const onChangeForm = (event) => {
      setForm({ ...form, [event.target.name]: event.target.value })
    }
  
    const signup = async () => {
      try {
        setIsLoading(true)
        const body = {
          name: form.name,
          email: form.email,
          password: form.password
        }
  
        const response = await axios.post(
          `${BASE_URL}/users/signup`, body
        )
  
        window.localStorage.setItem("labeddit-token", response.data.token)
        setIsLoading(false)
        setIsAuth(true)
        goToPostsPage(navigate)
      } catch (error) {
        alert(error.response.data)
        console.log(error)
        setIsLoading(false)
      }
    }
  
    return (
      <Flex
        w="428px"
        h="120vh"
        flexDirection={'column'}
        alignItems={'center'}
      >
        <Flex
          flexDirection={'column'}
        >
          <StatusBar />
          <Header signup={signup}/>
        </Flex>
        <Flex
          w='364px'
          h='185px'
          paddingTop='38px'>
          <Text
            fontFamily="IBM Plex Sans, sans-serif"
            fontSize='33px'
            fontWeight='700'
          >
            Olá, boas vindas ao LabEddit ;)
          </Text>
        </Flex>
        <Stack
          paddingTop='160px'
          spacing={-3}
        >
          <FormControl
            id="name"
            w='363px'
            h='60px'
            borderColor='#D5D8DE'
          >
            <Input
              type="text"
              value={form.name}
              onChange={onChangeForm}
              name="name"
              autoComplete='off'
              placeholder="Apelido"
              isRequired
            />
          </FormControl>
  
          <FormControl
            id="email"
            w='363px'
            h='60px'
            borderColor='#D5D8DE'
          >
            <Input
              type="email"
              value={form.email}
              onChange={onChangeForm}
              name="email"
              autoComplete='off'
              placeholder="E-mail"
              pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
              title="O email deve ter o formato 'exemplo@exemplo.com'"
            />
          </FormControl>
  
          <FormControl
            id="password"
            w='363px'
            h='60px'
            borderColor='#D5D8DE'
          >
            <Input
              type="password"
              value={form.password}
              onChange={onChangeForm}
              name="password"
              autoComplete='off'
              placeholder="Senha"
              pattern='/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,12}$/g'
              title="'password' deve possuir entre 8 e 12 caracteres, com letras maiúsculas e minúsculas e no mínimo um número e um caractere especial"
            />
          </FormControl>
        </Stack>
        <Stack
          w='364px'
          h='170px'
          paddingTop='50px'
          fontFamily="Noto Sans, sans-serif"
          fontWeight='400'
          fontSize='14px'
        >
          <Text>
            Ao continuar, você concorda com o nosso{' '}
            <Link color='#4088CB' href='#' fontWeight='500'>
              Contrato de usuário{' '}
            </Link>
            e a nossa{' '}
            <Link color='#4088CB' href='#' fontWeight='500'>
              Política de Privacidade
            </Link>
          </Text>
          <Checkbox colorScheme='orange' size={'sm'} isRequired>
            Eu concordo em receber emails sobre coisas legais do LabEddit
          </Checkbox>
        </Stack>
        <Flex
          h='80vh'
          paddingTop='30px'
        >
          <Button
            w='365px'
            h='50px'
            color='white'
            bgGradient='linear(to-r, #FF6489, #F9B24E)'
            borderRadius='27px'
            fontFamily="Noto Sans, sans-serif"
            fontWeight='700'
            fontSize='18px'
            colorScheme='orange'
            onClick={signup}
          >
            {isLoading ? <Spinner /> : "Cadastrar"}
          </Button>
        </Flex>
        <Footer />
      </Flex>
    )
  }
  
  export default SignupPage