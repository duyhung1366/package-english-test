import type { Meta, StoryObj } from '@storybook/react';
import ExerciseRunner from '../components/ExerciseRunner';

const meta = {
    title: 'Components/GamePara',
    component: ExerciseRunner,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ExerciseRunner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ParaShowOneCheckOnSubmit: Story = {
    args: {
        "topic": {
            "_id": "68c04b8f42820b374152ec7b",
            "name": "A1 Vocabulary - Elementary",
            "description": "",
            "appId": "68a206714c1620ed1d74c2ef",
            "parentId": "68c04b7c42820b374152ec75",
            "questionNum": 10,
            "slug": "a1-vocabulary-test",
            "mediaId": null,
            "difficulty": 1,
            "type": 1,
            "createdAt": "2025-09-09T15:45:19.654Z",
            "updatedAt": "2025-12-30T02:54:36.728Z",
            "orderIndex": 0,
            "media_data": null,
            "parent_topic": {
                "_id": "68c04b7c42820b374152ec75",
                "name": "Vocabulary",
                "slug": "vocabulary-test"
            },
            "children": [
                {
                    "_id": "692020a152d06b540e814b2e",
                    "name": "Everyday Life & Routines",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68c04b8f42820b374152ec7b",
                    "questionNum": 2,
                    "slug": "a1-vocabulary-everyday-routines",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-11-21T08:19:45.181Z",
                    "updatedAt": "2025-12-30T02:54:31.244Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68c04b8f42820b374152ec7b",
                        "name": "A1 Vocabulary - Elementary",
                        "slug": "a1-vocabulary-test"
                    },
                    "children": []
                },
                {
                    "_id": "692020dc52d06b540e814b3a",
                    "name": "Food & Drinks",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68c04b8f42820b374152ec7b",
                    "questionNum": 2,
                    "slug": "a1-vocabulary-food-drinks",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-11-21T08:20:44.992Z",
                    "updatedAt": "2025-12-30T02:54:31.286Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68c04b8f42820b374152ec7b",
                        "name": "A1 Vocabulary - Elementary",
                        "slug": "a1-vocabulary-test"
                    },
                    "children": []
                },
                {
                    "_id": "6920211f52d06b540e814b40",
                    "name": "Home, School & Places in Town",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68c04b8f42820b374152ec7b",
                    "questionNum": 2,
                    "slug": "a1-vocabulary-home-school-town",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-11-21T08:21:51.217Z",
                    "updatedAt": "2025-12-30T02:54:31.303Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68c04b8f42820b374152ec7b",
                        "name": "A1 Vocabulary - Elementary",
                        "slug": "a1-vocabulary-test"
                    },
                    "children": []
                },
                {
                    "_id": "6920213452d06b540e814b46",
                    "name": "Numbers, Time & Dates",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68c04b8f42820b374152ec7b",
                    "questionNum": 2,
                    "slug": "a1-vocabulary-numbers-time-dates",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-11-21T08:22:12.647Z",
                    "updatedAt": "2025-12-30T02:54:31.321Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68c04b8f42820b374152ec7b",
                        "name": "A1 Vocabulary - Elementary",
                        "slug": "a1-vocabulary-test"
                    },
                    "children": []
                },
                {
                    "_id": "692020c952d06b540e814b34",
                    "name": "Personal Information & Family",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68c04b8f42820b374152ec7b",
                    "questionNum": 2,
                    "slug": "a1-vocabulary-personal-information-family",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-11-21T08:20:25.826Z",
                    "updatedAt": "2025-12-30T02:54:31.263Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68c04b8f42820b374152ec7b",
                        "name": "A1 Vocabulary - Elementary",
                        "slug": "a1-vocabulary-test"
                    },
                    "children": []
                }
            ]
        },
        "exercise": {
            "_id": "6920213452d06b540e814b46",
            "name": "Numbers, Time & Dates",
            "description": "",
            "appId": "68a206714c1620ed1d74c2ef",
            "parentId": "68c04b8f42820b374152ec7b",
            "questionNum": 2,
            "slug": "a1-vocabulary-numbers-time-dates",
            "mediaId": null,
            "difficulty": 1,
            "type": 2,
            "submitType": 1,
            "createdAt": "2025-11-21T08:22:12.647Z",
            "updatedAt": "2025-12-30T02:54:31.321Z",
            "media_data": null,
            "parent_topic": {
                "_id": "68c04b8f42820b374152ec7b",
                "name": "A1 Vocabulary - Elementary",
                "slug": "a1-vocabulary-test"
            }
        },
        "cards": [
            {
                "_id": "69241d3152d06b540e814db1",
                "topicId": "6920213452d06b540e814b46",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Choose one word from the Word Bank for each blank. Use each word once.</p>\n<p>&nbsp;</p>\n<p>Word Bank: &nbsp;half &middot; quarter &middot; o&rsquo;clock &middot; Monday &middot; second &middot; past &middot; to &middot; morning &middot; June &middot; week</p>\n<p>&nbsp;</p>\n<p>1. The class starts at nine <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">.</p>\n<p>2. It is <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 2\" data-input-index=\"2\">&nbsp;past six now.</p>\n<p>3. The meeting is at a <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 3\" data-input-index=\"3\"> past three.</p>\n<p>4. We have PE on <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 4\" data-input-index=\"4\">.</p>\n<p>5. I read in the <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 5\" data-input-index=\"5\"> before school.</p>\n<p>6. There are seven days in a <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 6\" data-input-index=\"6\">.</p>\n<p>7. Our exam is in <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 7\" data-input-index=\"7\"> this year.</p>\n<p>8. Today is the <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 8\" data-input-index=\"8\">&nbsp;of May.</p>\n<p>9. We arrive at ten <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 9\" data-input-index=\"9\"> &nbsp;five (10:05).</p>\n<p>10. The bus leaves at twenty <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 10\" data-input-index=\"10\"> seven (6:40).</p>"
                },
                "explanation": "",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 2,
                "childCards": [
                    {
                        "_id": "69241e8652d06b540e814df8",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>10</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "69241d3152d06b540e814db1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "to",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:59:50.652Z",
                        "updatedAt": "2025-11-24T08:59:50.652Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "69241e7c52d06b540e814df2",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>9</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "69241d3152d06b540e814db1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "past",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:59:40.956Z",
                        "updatedAt": "2025-11-24T08:59:40.956Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "69241e7452d06b540e814dec",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>8</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "69241d3152d06b540e814db1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "second",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:59:32.898Z",
                        "updatedAt": "2025-11-24T08:59:32.898Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "69241e6e52d06b540e814de6",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>7</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "69241d3152d06b540e814db1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "June",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:59:26.159Z",
                        "updatedAt": "2025-11-24T08:59:26.159Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "69241e6552d06b540e814de0",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>6</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "69241d3152d06b540e814db1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "week",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:59:17.720Z",
                        "updatedAt": "2025-11-24T08:59:17.720Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "69241e5b52d06b540e814dda",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>5</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "69241d3152d06b540e814db1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "morning",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:59:07.547Z",
                        "updatedAt": "2025-11-24T08:59:07.547Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "69241e5352d06b540e814dd4",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>4</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "69241d3152d06b540e814db1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "Monday",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:58:59.213Z",
                        "updatedAt": "2025-11-24T09:00:05.446Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "69241e4a52d06b540e814dce",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>3</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "69241d3152d06b540e814db1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "quarter",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:58:50.372Z",
                        "updatedAt": "2025-11-24T08:58:50.372Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "69241e4352d06b540e814dc8",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>2</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "69241d3152d06b540e814db1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "half",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:58:43.208Z",
                        "updatedAt": "2025-11-24T08:58:43.208Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "69241e3952d06b540e814dc2",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>1</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "69241d3152d06b540e814db1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "o’clock",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:58:33.295Z",
                        "updatedAt": "2025-11-24T08:58:33.295Z",
                        "isActive": true,
                        "isDeleted": false
                    }
                ],
                "createdAt": "2025-11-24T08:54:09.111Z",
                "updatedAt": "2025-11-24T08:54:09.111Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "6924188152d06b540e814d52",
                "topicId": "6920213452d06b540e814b46",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Fill in each blank by&nbsp;<strong data-start=\"779\" data-end=\"808\">choosing the correct word</strong>&nbsp;from&nbsp;<strong data-start=\"814\" data-end=\"830\">four options</strong></p>"
                },
                "explanation": "",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 3,
                "childCards": [
                    {
                        "_id": "69241a4b52d06b540e814d8d",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>We leave at ten ___ five (10:05).</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "6924188152d06b540e814d52",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "to",
                                "isCorrect": false
                            },
                            {
                                "id": 2,
                                "textId": "B",
                                "content": "over",
                                "isCorrect": false
                            },
                            {
                                "id": 3,
                                "textId": "C",
                                "content": "before",
                                "isCorrect": false
                            },
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "past",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:41:47.476Z",
                        "updatedAt": "2025-11-24T08:41:47.476Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "69241a3652d06b540e814d87",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>My exam is on the ___ of June.</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "6924188152d06b540e814d52",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "two",
                                "isCorrect": false
                            },
                            {
                                "id": 2,
                                "textId": "B",
                                "content": "three",
                                "isCorrect": false
                            },
                            {
                                "id": 3,
                                "textId": "C",
                                "content": "twice",
                                "isCorrect": false
                            },
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "second",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:41:26.488Z",
                        "updatedAt": "2025-11-24T08:41:26.488Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "69241a0552d06b540e814d81",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>He has lunch at twelve ___ .</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "6924188152d06b540e814d52",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "minutes",
                                "isCorrect": false
                            },
                            {
                                "id": 2,
                                "textId": "B",
                                "content": "o’clock",
                                "isCorrect": true
                            },
                            {
                                "id": 3,
                                "textId": "C",
                                "content": "day",
                                "isCorrect": false
                            },
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "year",
                                "isCorrect": false
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:40:37.391Z",
                        "updatedAt": "2025-11-24T08:40:37.391Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "692419f352d06b540e814d7b",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>She works on Monday, Tuesday, and ___ .</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "6924188152d06b540e814d52",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "July",
                                "isCorrect": false
                            },
                            {
                                "id": 2,
                                "textId": "B",
                                "content": "Wednesday",
                                "isCorrect": true
                            },
                            {
                                "id": 3,
                                "textId": "C",
                                "content": "winter",
                                "isCorrect": false
                            },
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "twelve",
                                "isCorrect": false
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:40:19.936Z",
                        "updatedAt": "2025-11-24T08:40:19.936Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "692419de52d06b540e814d75",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>The meeting is at ___ past nine.</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "6924188152d06b540e814d52",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "half",
                                "isCorrect": false
                            },
                            {
                                "id": 2,
                                "textId": "B",
                                "content": "quarter",
                                "isCorrect": true
                            },
                            {
                                "id": 3,
                                "textId": "C",
                                "content": "thirty",
                                "isCorrect": false
                            },
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "noon",
                                "isCorrect": false
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:39:58.781Z",
                        "updatedAt": "2025-11-24T08:39:58.781Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "6924197552d06b540e814d6f",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>There are seven days in a ___ .</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "6924188152d06b540e814d52",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "year",
                                "isCorrect": false
                            },
                            {
                                "id": 2,
                                "textId": "B",
                                "content": "week",
                                "isCorrect": true
                            },
                            {
                                "id": 3,
                                "textId": "C",
                                "content": "season",
                                "isCorrect": false
                            },
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "hour",
                                "isCorrect": false
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:38:13.396Z",
                        "updatedAt": "2025-11-24T08:38:13.396Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "6924196252d06b540e814d69",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>Today is Tuesday; ___ is Wednesday.</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "6924188152d06b540e814d52",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "yesterday",
                                "isCorrect": false
                            },
                            {
                                "id": 2,
                                "textId": "B",
                                "content": "tomorrow",
                                "isCorrect": true
                            },
                            {
                                "id": 3,
                                "textId": "C",
                                "content": "Monday",
                                "isCorrect": false
                            },
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "weekend",
                                "isCorrect": false
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:37:54.895Z",
                        "updatedAt": "2025-11-24T08:37:54.895Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "692418d352d06b540e814d63",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>My birthday is in ___ .</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "6924188152d06b540e814d52",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "today",
                                "isCorrect": false
                            },
                            {
                                "id": 2,
                                "textId": "B",
                                "content": "week",
                                "isCorrect": false
                            },
                            {
                                "id": 3,
                                "textId": "C",
                                "content": "May",
                                "isCorrect": true
                            },
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "morning",
                                "isCorrect": false
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:35:31.188Z",
                        "updatedAt": "2025-11-24T08:35:31.188Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "692418b752d06b540e814d5d",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>It is ___ past six now.</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "6924188152d06b540e814d52",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "quarter",
                                "isCorrect": false
                            },
                            {
                                "id": 2,
                                "textId": "B",
                                "content": "half",
                                "isCorrect": true
                            },
                            {
                                "id": 3,
                                "textId": "C",
                                "content": "twenty",
                                "isCorrect": false
                            },
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "Monday",
                                "isCorrect": false
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:35:03.280Z",
                        "updatedAt": "2025-11-24T08:35:03.280Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "6924189652d06b540e814d57",
                        "topicId": "6920213452d06b540e814b46",
                        "question": {
                            "audio": null,
                            "audio_data": null,
                            "image": null,
                            "image_data": null,
                            "text": "<p>The class starts at seven ___ .</p>"
                        },
                        "explanation": "",
                        "explanationLang": {},
                        "explanationDefaultLang": "en",
                        "difficulty": 1,
                        "status": 1,
                        "parentId": "6924188152d06b540e814d52",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "minute",
                                "isCorrect": false
                            },
                            {
                                "id": 2,
                                "textId": "B",
                                "content": "day",
                                "isCorrect": false
                            },
                            {
                                "id": 3,
                                "textId": "C",
                                "content": "o’clock",
                                "isCorrect": true
                            },
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "month",
                                "isCorrect": false
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-11-24T08:34:30.037Z",
                        "updatedAt": "2025-11-24T08:34:30.037Z",
                        "isActive": true,
                        "isDeleted": false
                    }
                ],
                "createdAt": "2025-11-24T08:34:09.488Z",
                "updatedAt": "2025-11-24T08:34:09.488Z",
                "isActive": true,
                "isDeleted": false
            }
        ],
        "seo": {
            "_id": "6920202052d06b540e814b19",
            "slug": "a1-vocabulary-numbers-time-dates",
            "title": "A1 Numbers, Time & Dates Vocabulary | Practice & Test",
            "description": "Learn A1 Numbers, Time & Dates vocabulary with MCQs, gap-fill, and audio. Tell the time and talk about days and months. Practice tests with instant scoring.",
            "keyword": "",
            "imageSharing": null,
            "imageSharingMeta": {
                "title": "",
                "alt": "",
                "caption": "",
                "description": ""
            },
            "headerScript": "",
            "bodyScript": "",
            "metaRobot": 1,
            "titleH1": "A1 Numbers, Time & Dates Vocabulary Practice",
            "appId": "68a206714c1620ed1d74c2ef",
            "summary": "",
            "content": "",
            "jsonLd": [],
            "locale": "en",
            "seo301": "",
            "status": 1,
            "createdAt": "2025-11-21T08:17:36.511Z",
            "updatedAt": "2025-11-21T08:17:36.511Z"
        },
        "siblingTopics": [
            {
                "_id": "6920213452d06b540e814b46",
                "name": "Numbers, Time & Dates",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68c04b8f42820b374152ec7b",
                "questionNum": 2,
                "slug": "a1-vocabulary-numbers-time-dates",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-11-21T08:22:12.647Z",
                "updatedAt": "2025-12-30T02:54:31.321Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68c04b8f42820b374152ec7b",
                    "name": "A1 Vocabulary - Elementary",
                    "slug": "a1-vocabulary-test"
                }
            },
            {
                "_id": "6920211f52d06b540e814b40",
                "name": "Home, School & Places in Town",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68c04b8f42820b374152ec7b",
                "questionNum": 2,
                "slug": "a1-vocabulary-home-school-town",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-11-21T08:21:51.217Z",
                "updatedAt": "2025-12-30T02:54:31.303Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68c04b8f42820b374152ec7b",
                    "name": "A1 Vocabulary - Elementary",
                    "slug": "a1-vocabulary-test"
                }
            },
            {
                "_id": "692020dc52d06b540e814b3a",
                "name": "Food & Drinks",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68c04b8f42820b374152ec7b",
                "questionNum": 2,
                "slug": "a1-vocabulary-food-drinks",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-11-21T08:20:44.992Z",
                "updatedAt": "2025-12-30T02:54:31.286Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68c04b8f42820b374152ec7b",
                    "name": "A1 Vocabulary - Elementary",
                    "slug": "a1-vocabulary-test"
                }
            },
            {
                "_id": "692020c952d06b540e814b34",
                "name": "Personal Information & Family",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68c04b8f42820b374152ec7b",
                "questionNum": 2,
                "slug": "a1-vocabulary-personal-information-family",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-11-21T08:20:25.826Z",
                "updatedAt": "2025-12-30T02:54:31.263Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68c04b8f42820b374152ec7b",
                    "name": "A1 Vocabulary - Elementary",
                    "slug": "a1-vocabulary-test"
                }
            },
            {
                "_id": "692020a152d06b540e814b2e",
                "name": "Everyday Life & Routines",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68c04b8f42820b374152ec7b",
                "questionNum": 2,
                "slug": "a1-vocabulary-everyday-routines",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-11-21T08:19:45.181Z",
                "updatedAt": "2025-12-30T02:54:31.244Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68c04b8f42820b374152ec7b",
                    "name": "A1 Vocabulary - Elementary",
                    "slug": "a1-vocabulary-test"
                }
            }
        ],
        "showType": "one-by-one",
        "shouldShowReviewResults": true
    } as any
};