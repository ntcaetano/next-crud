import { useState } from "react";

export default function useTableOutForm() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario,
    }
}