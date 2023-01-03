import React from 'react';
import './modal.css';
import Button from '../Button';
import FormContent from './FormContent';

const Modal = () => {
  return (
    <div className='modal-back'>
        <article className='modal-container'>
            <h2 className='modal-title'>Criar tarefa</h2>

            <form action="">

                <FormContent 
                type='text'
                id='description'
                placeholder='Descrição'
                value=''
                onchange={() => {}}
                label="Descrição da tarefa"
                />

                
                <FormContent 
                type='date'
                id='date'
                value=''
                onchange={() => {}}
                label="Data"
                />

                <div className='modal-buttons'>

                    <Button 
                    onclick={() => {}}
                    classname='btn-cancel'
                    title='Cancelar'
                    />

                    <Button 
                    onclick={() => {}}
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