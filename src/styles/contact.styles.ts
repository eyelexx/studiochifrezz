import { colors, screenSizes } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 7.5em 0;
  gap: 4em;
  height: 100vh;
`

export const TalkWithUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    p {
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: ${screenSizes.laptop}) {
    width: 75%;
    text-align: center;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  gap: 1em;
  text-align: center;

  label {
    display: none;
  }
`

export const TextArea = styled.textarea`
  width: 32em;
  padding: 0.5em;
  border-radius: 0.25em;
  border: 1px solid ${colors.cinzaChumbo};
  font-family: 'Candara', sans-serif;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  height: 8em;
  resize: none;
  outline: none;

  &:focus {
    border-color: ${colors.roxoEscuro};
    box-shadow:
      2px 4px 6px rgba(0, 0, 0, 0.1),
      inset 0 0 5px 2px ${colors.roxoPastel};
  }
`

export const Input = styled.input`
  width: 32em;
  height: 3em;
  padding: 0.5em;
  border-radius: 0.25em;
  border: 1px solid ${colors.cinzaChumbo};
  font-family: 'Candara', sans-serif;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-color: ${colors.roxoEscuro};
    box-shadow:
      2px 4px 6px rgba(0, 0, 0, 0.1),
      inset 0 0 5px 0px ${colors.roxoPastel};
  }
`

export const Button = styled.button`
  width: 8em;
  padding: 1em;
  font-family: 'Candara', sans-serif;
  font-size: 1em;
  font-weight: bold;
  border-radius: 0.25em;
  border: 1px solid ${colors.cinzaChumbo};
  align-self: flex-end;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: ${colors.branco};
`
