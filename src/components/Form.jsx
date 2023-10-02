import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: 2px solid ${(props) => props.theme.body};

  width: 30vw;
  height: 30vw;
  padding: 3rem;
  padding-top: 4rem;

  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontmd};
  font-family: 'Montserrat', sans-serif;

  @media screen and (min-width: 2000px) {
    gap: 5rem;
  }

  @media screen and (min-width: 920px) and (max-width: 1500px) {
    width: 80%;
    height: 60vh;
    padding: 1rem;
    gap: 4rem;

    padding: 2rem;
    padding-top: 4rem;
  }
  @media screen and (max-width: 920px) {
    width: 80%;
    height: 80vw;

    gap: 4rem;

    padding: 2rem;
    padding-top: 2.5rem;
  }
  @media screen and (max-width: 728px) {
    gap: 2rem;

    padding: 0.5rem;
    padding-top: 1rem;
  }
  @media screen and (max-width: 500px) {
    width: 80vw;
    height: 80vw;
    padding: 1rem;
    padding-top: 2rem;

    gap: 2rem;
  }
  @media screen and (max-width: 380px) {
    gap: 1.5rem;
  }
  @media screen and (max-height: 470px) {
    gap: 1.1rem;
    padding-top: 1rem;
  }
  @media screen and (max-height: 420px) {
    gap: 1.5rem;
  }
  @media screen and (max-height: 400px) {
    gap: 1rem;
  }

  .newsletter {
    display: flex;
    gap: 15px;

    margin: 20px 0;
    input {
      @media screen and (min-width: 2000px) {
        width: 40px;
      }
      @media screen and (min-width: 728px) and (max-width: 920px) {
        width: 40px;
      }
    }

    @media screen and (min-width: 2000px) {
      font-size: ${(props) => props.theme.fontxl};
    }

    @media screen and (max-width: 728px) {
      margin-top: 0;
    }
    @media screen and (max-width: 380px) {
      font-size: ${(props) => props.theme.fontsm};
    }
    @media screen and (max-height: 470px) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;
const LabelContainer = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 500px) and (max-width: 920px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    text-align: center;
  }

  span {
    width: 45%;

    @media screen and (min-width: 2000px) {
      font-size: ${(props) => props.theme.fontxl};
    }

    @media screen and (max-width: 380px) {
      font-size: ${(props) => props.theme.fontsm};
    }
    @media screen and (min-width: 728px) and (max-width: 920px) {
      font-size: ${(props) => props.theme.fontlg};
    }
  }
  input {
    width: 100%;
    padding: 2px;
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontsm};
    font-family: 'Montserrat', sans-serif;

    @media screen and (min-width: 2000px) {
      font-size: ${(props) => props.theme.fontxl};
    }
    @media screen and (min-width: 728px) and (max-width: 920px) {
      font-size: ${(props) => props.theme.fontlg};
    }
  }
  .error-message {
    position: absolute;
    bottom: -1.5rem;
    right: 0;
    width: 60%;
    font-size: ${(props) => props.theme.fontsm};
    color: #e48080;

    @media screen and (min-width: 2000px) {
      font-size: ${(props) => props.theme.fontlg};
      bottom: -2rem;
    }
    @media screen and (min-width: 728px) and (max-width: 920px) {
      font-size: ${(props) => props.theme.fontmd};
      width: 100%;

      bottom: -3rem;
    }
    @media screen and (max-width: 728px) {
      width: 100%;
      font-size: ${(props) => props.theme.fontxs};

      bottom: -2rem;
    }
    @media screen and (max-width: 500px) {
      font-size: ${(props) => props.theme.fontxs};
      font-weight: 600;

      width: 79%;

      bottom: -1.4rem;
    }
    @media screen and (max-width: 380px) {
      font-weight: 300;
      width: 85%;
      bottom: -1rem;
    }
    @media screen and (max-height: 450px) {
      bottom: -1rem;
    }
  }
`;
const Button = styled(motion.button)`
  position: absolute;
  bottom: 3rem;
  left: 38%;

  padding: 7px 10px;

  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontmd};
  font-family: 'Montserrat', sans-serif;

  background-color: ${(props) => props.theme.body};
  border: none;

  @media screen and (min-width: 2000px) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media screen and (min-width: 728px) and (max-width: 920px) {
    left: 32%;
  }
  @media screen and (max-width: 728px) {
    bottom: 1.5rem;
    left: 35%;
  }
  @media screen and (min-width: 520px) and (max-width: 728px) {
    left: 24%;
  }

  @media screen and (max-height: 470px) {
    bottom: 1.5rem;
  }
  @media screen and (max-height: 400px) {
    bottom: 1.1rem;
  }
`;
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log(data);
  };
  const errorFunc = (data) => {
    console.log(data);
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit, errorFunc)}>
      <LabelContainer>
        <span>Имя</span>
        <input
          placeholder='Имя'
          aria-invalid={errors.name ? true : false}
          aria-errormessage='err_name'
          aria-live='polite'
          {...register('name', {
            required: 'Поле обязательно для заполнения!',
            minLength: { value: 2, message: 'Минимальная длинна: 2' },
          })}
        />
        {errors.name && (
          <span id='err_name' className='error-message'>
            {errors.name.message}
          </span>
        )}
      </LabelContainer>
      <LabelContainer>
        <span>Фамилия</span>
        <input
          placeholder='Фамилия'
          aria-invalid={errors.surname ? true : false}
          aria-errormessage='err_surname'
          aria-live='polite'
          {...register('surname', {
            required: 'Поле обязательно для заполнения!',
            minLength: { value: 2, message: 'Минимальная длинна: 2' },
          })}
        />
        {errors.surname && (
          <span id='err_surname' className='error-message'>
            {errors.surname.message}
          </span>
        )}
      </LabelContainer>
      <LabelContainer>
        <span>Почта</span>
        <input
          type='email'
          placeholder='Email'
          aria-invalid={errors.email ? true : false}
          {...register('email', { required: true })}
        />
      </LabelContainer>
      <label className='newsletter'>
        <input type='checkbox' name='newsletter' id='newsletter' {...register('newsletter')} />{' '}
        <span>Получать информацию о новых коллекциях</span>
      </label>
      <Button whileTap={{ scale: 0.9, y: 5 }} type='submit'>
        Отправить
      </Button>
    </FormContainer>
  );
}
