/**
 * Created by atyun on 17/3/20.
 */
import Mock from 'mockjs'
Mock.mock(/\/domain\/list\.json/, {
    'name' : '[@name](/user/name)()',
    'age|1-100': 100,
    'color' : '[@color](/user/color)'
});
