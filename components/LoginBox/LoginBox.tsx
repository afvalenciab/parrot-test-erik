import React, { useState } from "react"
import { StyledLoginBox } from "./login-box.styles"
import Input from "./Input/Input"
import Label from "./Label/Label"
import Button from "./Button/Button"
import { useForm, SubmitHandler } from "react-hook-form"
import { LoginParams } from "./login-box.interfaces"
import { insecurePostToAPI } from "../../requests/fetch"
import Loader from "../Loader/Loader"
import { connect } from "react-redux"
import { storeSession } from "../../actions/session/session"

const LoginBox = ({ ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>()
  const [showLoader, setShowLoader] = useState<Boolean>(false)

  const onSubmit: SubmitHandler<LoginParams> = (loginData) => {
    setShowLoader(true)
    insecurePostToAPI("/api/auth/token", loginData)
      .then((response: any) => {
        const hasErrorStatus = response.status !== 200
        if (hasErrorStatus) throw response
      })
      .catch((err) => console.error(err))
      .finally(() => setShowLoader(false))
  }

  return (
    <StyledLoginBox {...props} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className='login-box--field-wrapper'>
          <Label>
            Correo Electronico <span>*</span>
          </Label>
          <Input {...register("username", { required: true })} type='text' />
          {errors?.username?.type === "required" && (
            <p className='login-box--error'>
              El correo electrónico es un campo obligatorio*
            </p>
          )}
        </div>
        <div className='login-box--field-wrapper'>
          <Label>
            Contraseña <span>*</span>
          </Label>
          <Input
            {...register("password", { required: true })}
            type='password'
          />
          {errors?.password?.type === "required" && (
            <p className='login-box--error'>
              La contraseña es un campo obligatorio*
            </p>
          )}
        </div>
      </div>
      <div className='login-box--forgot-password'>
        <span>Olvidé mi contraseña</span>
      </div>
      <div className='login-box--submit'>
        <Button buttonType='submit'>Iniciar Sesión</Button>
      </div>
      {showLoader && <Loader />}
    </StyledLoginBox>
  )
}

export default LoginBox
// export default connect((state) => state, { storeSession })(LoginBox)
