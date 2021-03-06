/**
 * Created by atyun on 17/3/20.
 */
'use strict';
const path = require('path');
module.exports = function (plop) {
    plop.addPrompt('recursive', require('inquirer-recursive'));

    plop.setGenerator('resource', {
        description: 'generate a resource',
        prompts: [
            {
                type: 'input',
                name: 'resource',
                message: 'What is the resource name?',
            }, {
                type: 'recursive',
                name: 'attrs',
                message: 'Do you want to add an attr',
                prompts: [
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is attr\'s name?',
                    }
                ]
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{snakeCase resource}}/index.js',
                templateFile: 'plop_template/index.txt',
                abortOnFail: true
            },
            {
                type: 'add',
                path: 'src/components/{{snakeCase resource}}/edit_{{snakeCase resource}}.js',
                templateFile: 'plop_template/edit.txt',
                abortOnFail: true
            },
            {
                type: 'add',
                path: 'src/components/{{snakeCase resource}}/show_{{snakeCase resource}}.js',
                templateFile: 'plop_template/show.txt',
                abortOnFail: true
            },
            {
                type: 'modify',
                path: 'src/components/App.js',
                pattern: /{!!/gi,
                templateFile: 'plop_template/route.txt'
            }
        ]
    });

};
