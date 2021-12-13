import { ActionType } from '../action-types'
import { Dispatch } from 'redux'
import { Action } from '../actions/index'

// DepositAction
export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

// WithdrawAction
export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

// BankruptAction
export const bankruptMoney = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT,
        })
    }
}