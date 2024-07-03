import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://vtservices.it',
            lastModified: new Date(),
            alternates: {
                languages: {
                    it: 'https://vtservices.it/it',
                    en: 'https://vtservices.it/en',
                },
            },
        },
        {
            url: 'https://vtservices.it/azienda',
            lastModified: new Date(),
            alternates: {
                languages: {
                    it: 'https://vtservices.it/it/azienda',
                    en: 'https://vtservices.it/en/company',
                },
            },
        },
        {
            url: 'https://vtservices.it/lavora_con_noi',
            lastModified: new Date(),
            alternates: {
                languages: {
                    it: 'https://vtservices.it/it/lavora_con_noi',
                    en: 'https://vtservices.it/en/work_with_us',
                },
            },
        },
    ]
}