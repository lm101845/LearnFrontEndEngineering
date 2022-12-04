/**
 * @Author liming
 * @Date 2022/12/3 19:27
 **/
import _ from 'lodash';
import numRef from './ref.json';
import path from "path";

export function numToWord(num) {
    return _.reduce(
        numRef,
        (accum, ref) => {
            return ref.num === num ? ref.word : accum;
        },
        ''
    );
}

export function wordToNum(word) {
    return _.reduce(
        numRef,
        (accum, ref) => {
            return ref.word === word && word.toLowerCase() ? ref.num : accum;
        },
        -1
    );
}


