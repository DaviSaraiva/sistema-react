import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Col, Row, Tabs, Form, Input, message, Button, Image } from 'antd';
import 'antd/dist/antd.css';
import InputMask from 'antd-mask-input';
import './EstiloPagamento.css';
import { cpf } from 'cpf-cnpj-validator';
import * as AiIcons from 'react-icons/fa';
import logo from './models/img/logo.svg';

const { TabPane } = Tabs;

export default function teste() {
  const Cpf = (values: any) => {
    if (cpf.isValid(values.target.value) === false) {
      message.error('CPF inválido');
    } else {
      message.success('CPF válido');
    }
  };
  return (
    <div>
      <Row>
        <div>
          <Row>
            <Col
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              id="logo"
            >
              <Image src={logo} />
            </Col>

            <Col
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              id="botom"
            >
              <Button htmlType="submit" id="sair">
                <strong>
                  <span id="sair">Sair</span>
                </strong>
                <AiIcons.FaPowerOff />
              </Button>
            </Col>
          </Row>
        </div>
        <Col span={24} offset={2}>
          <div>
            <Row>
              <Tabs>
                <Col span={6}>
                  <div>
                    <h2>Descrição da compra</h2>
                    <h4>
                      Atualização Cadastral do Estudante
                      <AiIcons.FaCartArrowDown />
                    </h4>
                  </div>
                </Col>
                <Col span={6}>
                  <div>
                    <h2>Valor da Taxa</h2>
                    R$ 2,99
                    <AiIcons.FaMoneyBillAlt />
                  </div>
                </Col>
                <hr />
              </Tabs>
            </Row>
          </div>

          <Tabs>
            <TabPane tab="Cartão de Crédito" key="2">
              <Form>
                <Row>
                  <Col>
                    <Form.Item
                      name="numerocartao"
                      label="Numero do Cartão"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          message: 'Insira o numero do seu Cartão',
                        },
                      ]}
                    >
                      <InputMask mask="1111 1111 1111 1111" />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      name="cvv"
                      label="CVV"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          message: 'Insira o CVV do cartão',
                        },
                      ]}
                    >
                      <InputMask mask="111" />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      name="vencimento"
                      label="Vencimento (MM/AAAA)"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          message: 'Insira a data de vencimento do cartão',
                        },
                      ]}
                    >
                      <InputMask mask="11/1111" />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      name="name"
                      label="Nome do titular do cartão"
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
                  </Col>
                  <Col>
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
                  </Col>
                  <Col>
                    <Form.Item
                      name="cep"
                      label="CEP"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          message: 'Insira seu Cep',
                        },
                      ]}
                    >
                      <InputMask mask="11.111-111" />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      name="locadouro"
                      label="Localdouro"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          message: 'Insira o locadouro',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      name="bairro"
                      label="Bairro"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          message: 'Insira seu bairro',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      name="cidade"
                      label="Cidade"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          message: 'Insira sua cidade',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      name="numerocasa"
                      label="Numero"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          message: 'Insira o numero da casa',
                        },
                      ]}
                    >
                      <Input type="number" />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      name="uf"
                      label="UF"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          message: 'Insira sua cidade',
                        },
                      ]}
                    >
                      <InputMask mask="AA" />
                    </Form.Item>
                  </Col>
                </Row>
                <div id="centralizar">
                  <h3>
                    Por se tratar de pagamento com instituição financeira, o
                    mesmo terá um acréscimo de taxa no valor de R$ 1,99.
                  </h3>
                  <h2>Valor Total R$ 4,98</h2>
                  <div>
                    <Button type="primary" id="centralizar">
                      Pagar
                    </Button>
                  </div>
                </div>
              </Form>
            </TabPane>

            <TabPane tab="Boleto" key="3">
              <Row>
                <Col>
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
                </Col>
                <Col>
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
                </Col>
                <Col>
                  <Form.Item
                    name="cep"
                    label="CEP"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: 'Insira seu Cep',
                      },
                    ]}
                  >
                    <InputMask mask="11.111-111" />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name="locadouro"
                    label="Localdouro"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: 'Insira o locadouro',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name="bairro"
                    label="Bairro"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: 'Insira seu bairro',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name="cidade"
                    label="Cidade"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: 'Insira sua cidade',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col>
                  <Form.Item
                    name="numerocasa"
                    label="Numero"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: 'Insira o numero da casa',
                      },
                    ]}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name="uf"
                    label="UF"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: 'Insira sua cidade',
                      },
                    ]}
                  >
                    <InputMask mask="AA" />
                  </Form.Item>
                </Col>
              </Row>
              <div id="centralizar">
                <h3>
                  Por se tratar de pagamento com instituição financeira, o mesmo
                  terá um acréscimo de taxa no valor de R$ 4,00.
                </h3>
                <h2>Valor Total R$ 6,99</h2>
                <Button type="primary">Gerar Boleto</Button>
              </div>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}
