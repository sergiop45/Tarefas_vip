import React from 'react';
import './modal.css';
import Button from '../Button';
import FormContent from './FormContent';
import { useState } from 'react';

const Modal = ({ closemodal, saveTask }) => {

  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  return (
    <div className='modal-back'>
        <article className='modal-container'>
            <h2 className='modal-title'>Criar tarefa</h2>

            <form action="">

                <FormContent 
                type='text'
                id='description'
                placeholder='Descrição'
                value={description}
                onchange={e => setDescription(e.target.value)}
                label="Descrição da tarefa"
                />

                
                <FormContent 
                type='date'
                id='date'
                value={date}
                onchange={e => setDate(e.target.value)}
                label="Data"
                />

                <div className='modal-buttons'>

                    <Button 
                    onclick={() => closemodal(false)}
                    classname='btn-cancel'
                    title='Cancelar'
                    />

                    <Button 
                    onclick={() => saveTask(description, date)}
                    classname='btn-save'
                    title='Salvar'
                    />
                </div>

            </form>

        </article>
    </div>
  )
}

export default Modal;