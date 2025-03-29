export const logg = {
    name: 'log',
    title: 'arbeidslogg',
    type: 'document',
    fields: [
        {
            name: 'logEntries',
            title: 'Loggføringer',
            type: 'array', // Hentet fra: https://www.sanity.io/docs/array-type
            of: [
                {
                    type: 'object', //hentet fra: https://www.sanity.io/docs/object-type
                    fields: [
                        {
                            name: 'description',
                            title: 'Beskrivelse',
                            type: 'text'
                        },
                        {
                            name: 'date',
                            title: 'Dato',
                            type: 'datetime', // Hentet fra: https://www.sanity.io/docs/datetime-type
                            options: {
                                dateformat: 'DD-MM-YYYY',
                            }
                        }
                    ]
                }
            ]
        }
    ]
}