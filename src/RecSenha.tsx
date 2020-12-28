import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Col, Row, Form, Input, Image, Button } from 'antd';
import 'antd/dist/antd.css';
import './RecSenha.css';
import * as AiIcons from 'react-icons/md';
import logo from './models/img/logo.svg';

export default function RecSenha() {
  return (
    <div>
      <div className="container">
        <Row>
          <Col>
            <div />
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <div id="img">
              <Image src={logo} />
            </div>
            <Form>
              <h1>
                <center>Reinicie sua senha</center>
              </h1>
              <div>
                <p id="font">
                  Digite o endereço de e-mail verificado da sua conta de usuário
                  e enviaremos um link de redefinição de senha.
                </p>
              </div>
              <Form.Item
                label="Email"
                name="email"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: 'Insira seu email para redefinição de senha',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <div id="btn-div">
                <Button type="primary" id="btn">
                  <span style={{ marginRight: '10px', marginTop: '5px' }}>
                    Enviar
                  </span>
                  <AiIcons.MdEmail />
                </Button>
              </div>
            </Form>
          </Col>
          <Col>
            <div />
          </Col>
        </Row>
      </div>
    </div>
  );
}
