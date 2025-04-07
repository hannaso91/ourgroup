export const logg = {
    name: 'logg',
    title: 'Arbeidslogg',
    type: 'document',
    fields: [
        {
            name: 'personName',
            title: 'Utført av:',
            type: 'reference',
            to: [{type: 'person'}]
        },
        {
            name: 'task',
            title: 'Hva er gjort?',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Dato:',
            type: 'datetime'
        },
        {
            name: 'timeused',
            title: 'Tid brukt:',
            type: 'string'
        }
    ]
}