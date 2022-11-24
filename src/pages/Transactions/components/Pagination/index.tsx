import {PaginationContainer, PagesConst} from './styles'

import {CaretRight, CaretLeft} from 'phosphor-react'

export function Pagination () {
    return (
        <PaginationContainer>
            <CaretLeft size={32} color='gray'/>
            <PagesConst>1</PagesConst>
            <PagesConst>2</PagesConst>
            <PagesConst>3</PagesConst>
            <CaretRight size={32} color='gray'/>
        </PaginationContainer>
    )
}