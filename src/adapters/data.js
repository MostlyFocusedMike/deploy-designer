export default {
    phases: [
        {
            id: 1,
            title: 'Phase 1: Basics',
            position: 0,
            streams: [
                {
                    id: 1,
                    position: 0,
                    title: 'Setting up env',
                    tickets: [
                        {
                            id: 1,
                            position: 0,
                            title: 'OPS-1',
                            description: 'Setup stuff',
                            url: 'https://google.com'
                        },
                        {
                            id: 2,
                            position: 0,
                            title: 'OPS-2',
                            description: 'Add Containers',
                            url: 'https://google.com'
                        }
                    ]
                },
                {
                    id: 1,
                    position: 0,
                    title: 'Setting up env',
                    tickets: [
                        {
                            id: 1,
                            position: 0,
                            title: 'FRONT-1',
                            description: 'Render basic',
                            url: 'https://google.com'
                        },
                        {
                            id: 2,
                            position: 0,
                            title: 'FRONT-2',
                            description: 'Show list in full detail',
                            url: 'https://google.com'
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: 'Phase 2',
            position: 1,
            streams: []
        }
    ]
}