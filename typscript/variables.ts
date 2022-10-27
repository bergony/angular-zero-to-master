// string, number, boolean, null, undefined
let myName: string | null = null;
myName = 'test';

// Arrays
let items = ['teste', 2]

interface IAccount {
    name: string,
    balance:  number,
    status?: string
    deposit?: () => void
};

const account: IAccount = {
    name: 'Luis',
    balance: 10
};

let accounts: IAccount[];

class InvestmentAccount implements IAccount {

    constructor(
       public name: any, public balance: any
    ) {

    }

    private withdraw(){

    }
}