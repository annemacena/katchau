import React from 'react';
import Auth from '../services/auth';
import Errors from '../variables/errors';

import NotificationAlert from "react-notification-alert";

import logo from "../assets/img/logo.png"
import { FiZap } from "react-icons/fi";

import {
    Container,
    FormGroup,
    Label,
    Input,
    // FormText,
    Button,
    Card,
    CardBody,
    Form,
    Row,
    Col
} from "reactstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: 'annezao',
            password: 'senhaboladona',
            rememberMe: false,
            isLoading: false,
            redirectUrl: (props.location.redirectFrom ? props.location.redirectFrom : null )
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRememberMeClick = this.handleRememberMeClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoadingStatus = this.handleLoadingStatus.bind(this);    
    }

    notify = (options) => {
        var _options = {
            place: "tr",
            autoDismiss: 6,
            ...options
        };
        this.refs.notificationAlert.notificationAlert(_options);
    };

    handleLoadingStatus(value) {
        this.setState({
            isLoading: value
        })
    }

    componentDidMount() {
        if (this.state.redirectUrl !== null || !!this.props.errorCode) {
            this.notify({
                icon: "tim-icons icon-bell-55",
                message: "Faça login para continuar.",
                type: "primary"
            });
        }
    }

    handleRememberMeClick() {
        this.setState({ rememberMe: !this.state.rememberMe });
    }

    handleUsernameChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        var _class = this,
            _Errors = Errors;

        this.handleLoadingStatus(true);

        Auth.signIn(this.state.username, this.state.password)
            .then((user) => {
                console.log('User logged with name: ' + user.username + ' and email: ' + user.email);
                const { history } = this.props;
                history.push("/admin/dashboard");
        }, 
        function(error) {
            _class.notify({
                place: "tr",
                message: !!error.response ? _Errors.login[error.response.data.status_code].message : _Errors.disabled.message,
                type: "danger",
                icon: "tim-icons icon-alert-circle-exc"
            });
            console.log(error);
            _class.handleLoadingStatus(false);
        });

        return false;
    }

    render() {

        // const state = this;

        return (

            <div className="content" style={this.state.isLoading ? { pointerEvents: "none" } : { pointerEvents: "auto" }}>
                {/* <Progress isAnimating={this.state.isLoading} /> */}
                <div className="react-notification-alert-container">
                    <NotificationAlert ref="notificationAlert" />
                </div>
                <div className="container">
                    <Row>
                        <Col md="12">
                            <Card className="card-user ml-auto mr-auto mt-5" style={{maxWidth: '330px'}}>
                                <CardBody>
                                    <div className="author">
                                        <div className="block block-one" />
                                        <div className="block block-two" />
                                        <div className="block block-three" />
                                        <div className="block block-four" />
                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={logo}
                                        />
                                        <h3 className="description mb-2">Faça login</h3>
                                    </div>
                                    <Form onSubmit={this.handleSubmit}>
                                        {/* <FormText color="muted text-center mb-4">
                                            Para testes use como usuário <b>annezao </b> 
                                            e a senha <b>senhaboladona</b>
                                        </FormText> */}
                                        <FormGroup>
                                            <Label for="exampleEmail">Usuário</Label>
                                            <Input
                                                type="text"
                                                name="username"
                                                id="formUsername"
                                                placeholder="Digite seu usuário"
                                                value={this.state.username}
                                                autoFocus onChange={this.handleUsernameChange}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword">Senha</Label>
                                            <Input
                                                type="password"
                                                name="password"
                                                id="formPassword"
                                                placeholder="Digite sua senha"
                                                autoComplete="off"
                                                value={this.state.password}
                                                onChange={this.handlePasswordChange}
                                                required
                                            />
                                        </FormGroup>
                                        {/* <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" onChange={this.handleRememberMeClick} />{' '}
                                                Lembrar senha
                                                <span className="form-check-sign">
                                                    <span className="check"></span>
                                                </span>
                                            </Label>
                                        </FormGroup> */}
                                        <div className="text-center pt-3">
                                            <Button color="primary" type="submit">
                                                {this.state.isLoading ? "Entrando..." : "Entrar"}
                                            </Button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <Container fluid>
                    <p className="copyright text-center">
                        © Copyright {new Date().getFullYear()} | KATCHAU <FiZap /> Company.
                    </p>
                </Container>  
            </div>

        );
    }


}

export default Login;