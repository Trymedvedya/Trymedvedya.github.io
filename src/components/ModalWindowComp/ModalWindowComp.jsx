import React, { useState } from 'react';
import ModalWindow from '../UI/ModalWindow'
import UserForm from '../form/UserForm'
import InputForm from '../UI/InputForm/InputForm'
import ButtonForm from '../UI/ButtonForm/ButtonForm'
import TextAreaForm from '../UI/TextArForm/TextAreaForm'
import axios from 'axios';




const ModalWindowComp = ({ visible, setVisible }) => {

    const inputHandler = (e) => {
        setValue(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }
    const [value, setValue] = useState({
        name: '',
        tel: '',
        message: ''
    }

    );
    const hanleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: value.name,
            tel: value.tel.replace(/[()-]/g, ''),
            message: value.message
        };
        try{
        axios.post('https://jsonplaceholder.typicode.com/posts', { formData })
            .then(res => {
                const { name, tel, message } = res.data.formData;
                alert(`
            Имя: ${name}  
            Телефон: ${tel}  
            Сообщение: ${message}`);
                console.log(res);
                console.log(res.data);
            })
        }catch(e){alert(e)}
        setValue({ name: '', tel: '', message: '' })
    }
    return (
        <div>

            <ModalWindow visible={visible} setVisible={setVisible}>
                <UserForm onSubmit={hanleSubmit}>
                    <InputForm

                        required={true}
                        type="tel"
                        id='#formSend'
                        name={'tel'}
                        mask='+7(999)999-99-99'
                        value={value.tel}
                        onChange={inputHandler}
                        style={{ marginBottom: '5px' }}
                        placeholder='+7(___)___-__-__'
                    />
                    <InputForm
                        required={true}
                        name={'name'}
                        onChange={inputHandler}
                        value={value.name.replace(/[._\-/*(),&?@#№*!`="'{};<>%^~|$+]|[0-9]/iu, '')}
                        style={{ marginBottom: '5px' }}
                        placeholder='Имя'
                    />
                    <TextAreaForm
                        required={true}
                        onChange={inputHandler}
                        name={'message'}
                        value={value.message.replace(/[_/&@#*`=^~|+&]/iu, '')}
                        placeholder="Сообщение"
                        style={{ marginBottom: '5px' }}

                    />
                    <ButtonForm
                        disabled={value.name === '' || value.tel === '' || value.tel.replace(/[\D]/g, '').length !== 11 || value.message === '' ? true : false}
                        onClick={() => setVisible(false)}
                        type="submit"
                    >
                        {value.name === '' || value.tel === '' || value.tel.replace(/[\D]/g, '').length !== 11 || value.message === '' ? "Заполните все поля" : "Отправить"}
                    </ButtonForm>
                </UserForm>
            </ModalWindow>
        </div>
    );
};



export default ModalWindowComp;