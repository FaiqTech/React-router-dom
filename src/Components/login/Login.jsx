import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Container,
  Row,
  Col,
  Spinner,
} from "reactstrap";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty, isTouched, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      localStorage.setItem("login", data.username); // Simulate login
      navigate(`/profile/${data.username}`);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md="6">
          <h2 className="text-center mb-4">Giriş Forması</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label htmlFor="username">İstifadəçi adı</Label>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                rules={{ required: "İstifadəçi adı tələb olunur" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="username"
                    placeholder="İstifadəçi adınızı daxil edin"
                    type="text"
                    invalid={!!errors.username && (isDirty || isTouched)}
                    aria-describedby="usernameHelp"
                  />
                )}
              />
              <FormFeedback id="usernameHelp">
                {errors.username ? errors.username.message : ""}
              </FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Şifrə</Label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "Şifrə tələb olunur",
                  minLength: {
                    value: 6,
                    message: "Şifrə ən azı 6 simvol olmalıdır",
                  },
                }}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="password"
                    placeholder="Şifrənizi daxil edin"
                    type="password"
                    invalid={!!errors.password && (isDirty || isTouched)}
                    aria-describedby="passwordHelp"
                  />
                )}
              />
              <FormFeedback id="passwordHelp">
                {errors.password ? errors.password.message : ""}
              </FormFeedback>
            </FormGroup>

            <Button
              color="primary"
              block
              type="submit"
              disabled={isSubmitting || loading || !isValid}
            >
              {loading ? <Spinner size="sm" /> : "Giriş"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
