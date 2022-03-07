const { Article } = require('../models');

const articleData = [
    {
        title: 'Article 1',
       /*  author: 'Christine Nguyen', */
        description: 'This is the first article',
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nisl sed pharetra faucibus, odio odio finibus orci, in bibendum nisl lectus aliquam orci. Praesent quis odio dolor. Morbi enim massa, lacinia vel hendrerit non, hendrerit mollis nisl. In hac habitasse platea dictumst. Cras sodales mattis pretium. Etiam ultricies, risus a pharetra faucibus, mauris lacus tristique risus, sed rutrum quam dui sed libero. Praesent vel tellus leo. Fusce a porttitor dolor. Curabitur interdum nibh vitae feugiat tristique. Aenean lectus ligula, volutpat ut imperdiet ut, eleifend mattis ipsum. Etiam porttitor egestas nisi quis sodales. Aliquam blandit scelerisque pretium. Proin sit amet consectetur arcu, eget laoreet tortor. Quisque et ultricies enim, a hendrerit sem. Donec pretium eget nisi ut consectetur. Vestibulum vitae finibus sem, non vulputate mauris.",
        date_created: 'February 25, 2022 7:00:00',
        user_id: 1
    },
    {
        title: 'Article 2',
       /*  author: 'Christine Nguyen', */
        description: 'This is the second article',
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nisl sed pharetra faucibus, odio odio finibus orci, in bibendum nisl lectus aliquam orci. Praesent quis odio dolor. Morbi enim massa, lacinia vel hendrerit non, hendrerit mollis nisl. In hac habitasse platea dictumst. Cras sodales mattis pretium. Etiam ultricies, risus a pharetra faucibus, mauris lacus tristique risus, sed rutrum quam dui sed libero. Praesent vel tellus leo. Fusce a porttitor dolor. Curabitur interdum nibh vitae feugiat tristique. Aenean lectus ligula, volutpat ut imperdiet ut, eleifend mattis ipsum. Etiam porttitor egestas nisi quis sodales. Aliquam blandit scelerisque pretium. Proin sit amet consectetur arcu, eget laoreet tortor. Quisque et ultricies enim, a hendrerit sem. Donec pretium eget nisi ut consectetur. Vestibulum vitae finibus sem, non vulputate mauris.",
        date_created: 'February 26, 2022 7:00:00',
        user_id: 1
    },
    {
        title: 'Article 3',
        /* author: 'Christine Nguyen', */
        description: 'This is the third article',
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nisl sed pharetra faucibus, odio odio finibus orci, in bibendum nisl lectus aliquam orci. Praesent quis odio dolor. Morbi enim massa, lacinia vel hendrerit non, hendrerit mollis nisl. In hac habitasse platea dictumst. Cras sodales mattis pretium. Etiam ultricies, risus a pharetra faucibus, mauris lacus tristique risus, sed rutrum quam dui sed libero. Praesent vel tellus leo. Fusce a porttitor dolor. Curabitur interdum nibh vitae feugiat tristique. Aenean lectus ligula, volutpat ut imperdiet ut, eleifend mattis ipsum. Etiam porttitor egestas nisi quis sodales. Aliquam blandit scelerisque pretium. Proin sit amet consectetur arcu, eget laoreet tortor. Quisque et ultricies enim, a hendrerit sem. Donec pretium eget nisi ut consectetur. Vestibulum vitae finibus sem, non vulputate mauris.",
        date_created: 'February 27, 2022 7:00:00',
        user_id: 1
    },
]

const seedArticle = () => Article.bulkCreate(articleData);

module.exports = seedArticle