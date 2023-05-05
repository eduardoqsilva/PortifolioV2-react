import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Error404Animate } from "../../components/Lotties";
import { ErrorContainer } from "./error.styled";

export function Error404() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3000)
  },[])

  return (
    <ErrorContainer>
      <div className="wrapper">
        <Error404Animate/>
      </div>
    </ErrorContainer>
  )
}