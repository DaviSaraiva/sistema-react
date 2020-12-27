import React from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Checkbox,
  Button,
  Image,
  Select,
  Row,
  Col,
  Popover,
  message,
} from 'antd';
import logo from './models/img/logo.svg';
import './estilo.css';
import InputMask from 'antd-mask-input';
import {cpf} from 'cpf-cnpj-validator';

const RegistrationForm = () => {


  const content = (
    <div>
      <p>Termos de uso do sistema </p>
      <p>Ler ai usuario</p>
      <p>
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
  const Cpf = (values:any)=>{
    if(cpf.isValid(values.target.value)===false){
      message.error('CPF inválido');
    }else{
      message.success('CPF válido')
    }

  }


  return (
    <div>
      <Row>
        <Col
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          id="formulario"
        >
          <div>
            <Row>
              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                id="logo"
              >
                <a href="#">
                  <Image src={logo} />
                </a>
              </Col>

              <Col
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                id="botom"
              >
                <Button type="secondary" htmlType="submit">
                  Acesse sua conta
                </Button>
              </Col>
            </Row>
          </div>

          <br />
          <h2>
            <center>Atualização Cadastral 2020</center>
          </h2>
          <h3>
            <center>
              Insira abaixo os dados do estudante para solicitar o documento.
            </center>
          </h3>
          <Form>
            <Form.Item
              name="name"
              label="Nome Completo"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'Insira um nome',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              labelCol={{ span: 24 }}
              rules={[
                {
                  type: 'email',
                  message: 'Insira um email valido',
                },
                {
                  required: true,
                  message: 'Insira seu email',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="emailConf"
              label="Confirme E-mail"
              labelCol={{ span: 24 }}
              dependencies={['email']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Por favor confime seu Email!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('email') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Seus emails estao diferentes!');
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Senha"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'Por favor insira sua senha',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirme Senha"
              labelCol={{ span: 24 }}
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Por favor confime sua senha',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      'Suas senhas estão diferentes, confiara novamente!',
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="cpf"
              label="CPF"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'INSIRA SEU CPF',
                },
              ]}
            >
              <InputMask mask="111.111.111-11" onBlur={Cpf} />
            </Form.Item>
            <Form.Item
              name="telefone"
              label="Telefone"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'Insira seu telefone',
                },
              ]}
            >
              <InputMask mask="(11)11111-1111"/>
            </Form.Item>
            <Form.Item
              label="Escolaridade Atual"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'Escola sua escolaridade',
                },
              ]}
            >
              <Select>
                <Select.Option value="basica">Educação Basica</Select.Option>
                <Select.Option value="graducao">Graduação</Select.Option>
                <Select.Option value="pos">Pós-Graduação</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              labelCol={{ span: 24 }}
              rules={[
                {
                 validator: (_, value) => value
                    ? Promise.resolve()
                    : Promise.reject('Por favor aceite os termos de uso do sistema!'),
                },
              ]}
            >
              <Checkbox>
                Eu li e aceito o
                  <Popover content={content} title="Titulo" trigger="hover">
                    <Button>Termo de uso</Button>
                  </Popover>
              </Checkbox>
            </Form.Item>

            <Form.Item labelCol={{ span: 24 }}>
              <Button type="primary" htmlType="submit">
                Solicitar
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} id="back" />
      </Row>
    </div>
  );
};

export default RegistrationForm;
