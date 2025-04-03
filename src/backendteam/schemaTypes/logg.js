export const logg = {
    name: 'logg',
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
                            name: 'personname',
                            title: 'Uført av',
                            type: 'reference',
                            to: [{type: 'person'}] // Viser til det som ligger i members.js slik at vi kan bruke noe som allerede er laget inn her
                        },
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