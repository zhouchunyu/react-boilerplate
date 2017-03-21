/**
 * Created by atyun on 17/3/20.
 */
module.exports = function (plop) {
    plop.addHelper('split', function (attrs) {
        attrs = attrs.split(' ');
        var attrs_s = "";
        attrs.forEach((value) => {
            attrs_s += "{title: '" + value + "', dataIndex: '" + value + "', key: '" + value + "'},"
            });
        return attrs_s;
    });
    plop.addPrompt('recursive', require('inquirer-recursive'));
    // resource generator
    plop.setGenerator('resource', {
        description: 'an application resource',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'resource name please'
        },{
            type: 'recursive',
            name: 'attrs',
            message: 'add a attr?',
            prompts: [{
                    type: 'input',
                    name: 'name',
                    message: 'What is attr\'s name?',
            }]
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{name}}.js',
            templateFile: 'plop-templates/resource.txt'
        }]
    });
};