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
import useStorage from "../../utils/hooks/useStorage"
import { SessionProps } from "../../actions/session/session.interfaces"
import { useRouter } from "next/router"
const LoginBox = ({ ...props }) => {
  const router = useRouter()
  const { setItem } = useStorage()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>()
  const [showLoader, setShowLoader] = useState<Boolean>(false)
  const [accountError, setAccountError] = useState<boolean>(false)
  const onSubmit: SubmitHandler<LoginParams> = (loginData) => {
    setShowLoader(true)
    setAccountError(false)
    insecurePostToAPI("/api/auth/token", loginData)
      .then((response: any) => {
        const hasErrorStatus = response.status !== 200
        if (hasErrorStatus) throw response
        const userData: SessionProps = {
          access: response.data.access,
          refresh: response.data.refresh,
        }
        storeSession({
          access: response.data.access,
          refresh: response.data.refresh,
        })
        setItem("userData", JSON.stringify(userData), "session")
        router.push("/store")
      })
      .catch((err) => setAccountError(true))
      .finally(() => setShowLoader(false))
  }

  return (
    <StyledLoginBox {...props} onSubmit={handleSubmit(onSubmit)}>
      <div>
        {accountError && (
          <div>
            <p className='login-box--error'>
              Ups! Revisa tus datos de acceso. :(
            </p>
          </div>
        )}
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

export default connect((state) => state, { storeSession })(LoginBox)
