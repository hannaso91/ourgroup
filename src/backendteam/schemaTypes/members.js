export const members = 
    {
        name: 'person',
        title: 'Person',
        type: 'document',
        fields: [
            {
                name: 'name',
                title: 'Navn',
                type: 'string'
            },
            
            {
                name: 'age',
                title: 'Alder',
                type: 'number'
            },
            {
                name: 'email',
                title: 'E-mail',
                type: 'string',
            },
            {
                name: 'image',
                title: 'Bilde',
                type: 'image'
            },
            {
                name: 'description',
                title: 'Om',
                type: 'text'
            },
            {
                name: 'slug',
                title: 'Slug',
                type: 'slug',
                options: { // hentet fra: https://www.sanity.io/docs/slug-type
                    source: 'name',
                    maxLength: 200, 
                    slugify: input => input
                                         .toLowerCase()
                                         .replace(/\s+/g, '-')
                                         .replace('æ', 'ae')
                                         .replace('ø', 'o')
                                         .replace('å', 'a')
                                         .slice(0, 200)
                  }
            },
        ]
    }


