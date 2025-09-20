import { useState } from 'react';

import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Input';

function Tasks() {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState(['teste 1', 'teste 2', 'teste 3']);

    function handleButtonClick(e) {
        e.preventDefault();
        setMessages([...messages, inputValue]);
        setInputValue('');
    }

    return (
        <main className="flex flex-col gap-4 p-3 bg-gray-100">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg mb-4">
                <h2 className="text-xl font-bold">Teste do Tailwind CSS</h2>
                <p className="text-sm mt-2">Se você está vendo este box azul com texto branco, o Tailwind CSS está funcionando perfeitamente!</p>
            </div>
            <Header>Adicione uma tarefa</Header>
            <div className="flex flex-col items-center gap-2">
                <Input className="input" 
                       type="text" 
                       placeholder="Digite uma tarefa" 
                       value={inputValue} 
                       onChange={(e) => setInputValue(e.target.value)} />
                <Button className="button" onClick={(e) => handleButtonClick(e)}>Adicionar Tarefa</Button>
            </div>
            <Header className="flex flex-col gap-2">
                Lista de Tarefas
            </Header>
            <div className="flex flex-col gap-2">
                <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
                </ul>
            </div>
        </main>
    )
}

export default Tasks;