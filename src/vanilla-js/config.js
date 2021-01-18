var config = {
    style: 'mapbox://styles/wendyyyyyyy/ck11ernma0lc41cphshau4o2f',
    accessToken: 'pk.eyJ1Ijoid2VuZHl5eXl5eXkiLCJhIjoiY2sxMTh2ZXczMGUzMjNub2lwaHA0djNqZCJ9.p-0wXLB_KtzmQI88DBmA9A',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Racial and Educational Segregation in New York City',
    subtitle: 'How racial segregation in one place leads to poor educational quality',
    byline: 'By Chengwei Wang',
    footer: 'Source: New York City Department of Education; NYC Open Data',
    chapters: [
        {
            id: 'initial',
            title: '',
            image: '',
            description: 'According to sociologist Annette Lareau, those who success in an institional way always have a cultural guide, meaning they have sufficient information. Besides, parents communicating around the school playground helps them amply the chance for their children to achieve better. Therefore, lack of communication, or in other words, segregation are more likely to lead to a worse student performance.',
            location: {
              center: [-74.10708, 40.70168],
              zoom: 9.70,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'school-point',
            title: '463 high schools in NYC',
            image: "",
            description: "Each of these schools are assigned by the Department of Education in New York City a score based on their students' achievement, in a range from 1 to 5. The greatst school among them got around 4.24, while the weakest one only got 2.81.",
            location: {
              center: [-74.10708, 40.70168],
              zoom: 9.70,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                    layer: 'school-point',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'school-point',
                    opacity: 0
                }
            ]
        },
        {
            id: 'council district',
            title: '51 council districts in NYC',
            image: '',
            description: 'These council districts are not only the lawmaking body of the City of New York, but also often the units whith contacts to be responsible for these schools.',
            location: {
              center: [-74.10708, 40.70168],
              zoom: 9.70,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                    layer: 'council-district',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'council-district',
                    opacity: 0
                }
            ]
        },
        {
            id: 'score-distribution',
            title: 'How school scores differ across the city',
            image: '',
            description: '',
            location: {
              center: [-74.10708, 40.70168],
              zoom: 9.70,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                    layer: 'score',
                    opacity: 0.7
                }
            ],
            onChapterExit: [
                {
                    layer: 'score',
                    opacity: 0
                }
            ]
        },
        {
            id: 'segregation-distribution',
            title: 'How segregated are these 51 council districts',
            image: '',
            description: '',
            location: {
              center: [-74.10708, 40.70168],
              zoom: 9.70,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                    layer: 'seg',
                    opacity: 0.7
                }
            ],
            onChapterExit: [
                {
                    layer: 'seg',
                    opacity: 0
                }
            ]
        },
        {
            id: '2ed-identifier',
            title: 'Brooklyn',
            image: '',
            description: 'In the center of Brooklyn, the deep red districts are districts 35, 36, 40, 41, 42, and 45. The segregation level there is extremely high, while the schools there ranks reletively lower than other schools.',
            location: {
                center: [-73.94403, 40.64539],
                zoom: 12,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [{
              layer: 'seg',
              opacity: 0.7
            }],
            onChapterExit: [{
              layer: 'seg',
              opacity: 0
            }]
        },
        {
            id: '3rd-identifier',
            title: 'Mahanttan',
            image: '',
            description: 'In Mahanttan, the same pattern can also be seen clearly. As these districts are way less segregated, students in their schools are performing better than the others.',
            location: {
              center: [-74.00868, 40.74064],
              zoom: 12.88,
              pitch: 60.00,
              bearing: 34.40
            },
            onChapterEnter: [{
              layer: 'seg',
              opacity: 0.7
            }],
            onChapterExit: [{
              layer: 'seg',
              opacity: 0
            }]
        },
        {
            id: '4th-identifier',
            title: 'Bronx',
            image: '',
            description: 'However, the pattern mentioned above is violated in southern Bronx, where the segregation level and the educational quality are both high.',
            location: {
              center: [-73.92940, 40.82762],
              zoom: 12.88,
              pitch: 60.00,
              bearing: 34.40
            },
            onChapterEnter: [{
              layer: 'seg',
              opacity: 0.7
            }],
            onChapterExit: [{
              layer: 'seg',
              opacity: 0
            }]
        }
    ]
};
