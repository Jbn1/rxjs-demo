import {IConvention} from "./IConvention";
import {IConvention2} from "./IConvention2";
import {IPayRate} from "./IPayRate";

export const  conventions = [{
    id: 1,
    caption: 'Convention 1',
    code: 'C1',
    maxPay: 10
}, {
    id: 2,
    caption: 'Convention 2',
    code: 'C2',
    maxPay: 20,
}, {
    id: 3,
    caption: 'Convention 3',
    code: 'C3',
    maxPay: 30,
}, {
    id: 4,
    caption: 'Convention 4',
    code: 'C4',
    maxPay: 40,
},{
    id: 4,
    caption: 'Convention 4',
    code: 'C4',
    maxPay: 40,
}, {
    id: 5,
    caption: 'Convention 5',
    code: 'C5',
    maxPay: 50,
}] as IConvention[];

export const  conventions2 = [{
    id: 1,
    caption: 'Convention 1',
    code: 'AAA',
    maxPay: 10,
    year: 2022
}, {
    id: 2,
    caption: 'Convention 2',
    code: 'BBB',
    maxPay: 11,
    year: 2020
}, {
    id: 3,
    caption: 'Convention 3',
    code: 'BBB',
    maxPay: 12,
    year: 2021
}, {
    id: 31,
    caption: 'Convention 31',
    code: 'BBB',
    maxPay: 18,
    year: 2021
}, {
    id: 32,
    caption: 'Convention 2',
    code: 'BBB',
    maxPay: 12,
    year: 2022
}, {
    id: 33,
    caption: 'Convention 33',
    code: 'BBB',
    maxPay: 16,
    year: 2022
}, {
    id: 4,
    caption: 'Convention 4',
    code: 'CCC',
    maxPay: 13,
    year: 2022
},{
    id: 41,
    caption: 'Convention 41',
    code: 'CCC',
    maxPay: 14,
    year: 2022
},{
    id: 44,
    caption: 'Convention 44',
    code: 'CCC',
    maxPay: 14,
    year: 2022
},{
    id: 42,
    caption: 'Convention 42',
    code: 'CCC',
    maxPay: 19,
    year: 2021
}, {
    id: 5,
    caption: 'Convention 5',
    code: 'DDD',
    maxPay: 15,
    year: 2022
}, {
    id: 6,
    caption: 'Convention 6',
    code: 'DDD',
    maxPay: 15,
    year: 2022
}, {
    id: 7,
    caption: 'Convention 7',
    code: 'DDD',
    maxPay: 15,
    year: 2021
}, {
    id: 71,
    caption: 'Convention 71',
    code: 'DDD',
    maxPay: 15,
    year: 2021
}, {
    id: 72,
    caption: 'Convention 72',
    code: 'DDD',
    maxPay: 19,
    year: 2022
}, {
    id: 73,
    caption: 'Convention 73',
    code: 'DDD',
    maxPay: 13,
    year: 2022
}, {
    id: 8,
    caption: 'Convention 8',
    code: 'DDD',
    maxPay: 12,
    year: 2021
}, {
    id: 9,
    caption: 'Convention 9',
    code: 'DDD',
    maxPay: 12,
    year: 2022
}] as IConvention2[];

export const payRates = [{
    id: 1,
    caption: 'AAA',
    code: 'PA',
    payRate: 10,
    isEnabled: true
}, {
    id: 2,
    caption: 'AAB',
    code: 'PA',
    payRate: 11,
    isEnabled: true
}, {
    id: 3,
    caption: 'AAC',
    code: 'PA',
    payRate: 12,
    isEnabled: false
}, {
    id: 4,
    caption: 'DDD',
    code: 'PA',
    payRate: 13,
    isEnabled: true
}, {
    id: 5,
    caption: 'DDE',
    code: 'PE',
    payRate: 14,
    isEnabled: true
}, {
    id: 6,
    caption: 'DDF',
    code: 'PE',
    payRate: 15,
    isEnabled: false
}, {
    id: 7,
    caption: 'GGG',
    code: 'PE',
    payRate: 16,
    isEnabled: false
}, {
    id: 8,
    caption: 'GGH',
    code: 'PH',
    payRate: 17,
    isEnabled: true
}, {
    id: 9,
    caption: 'GGI',
    code: 'PH',
    payRate: 18,
    isEnabled: false
}, {
    id: 10,
    caption: 'JJJ',
    code: 'PH',
    payRate: 19,
    isEnabled: true
}, {
    id: 11,
    caption: 'JJK',
    code: 'PH',
    payRate: 20,
    isEnabled: false
}] as IPayRate[];
