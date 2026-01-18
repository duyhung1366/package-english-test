import type { Meta, StoryObj } from '@storybook/react';
import ExerciseRunner from '../components/ExerciseRunner';

const meta = {
    title: 'Components/GameQuiz',
    component: ExerciseRunner,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ExerciseRunner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Quiz Exercise - One by One
export const QuizOneByOneCheckOnAnswer: Story = {
    args: {
        "showType": "one-by-one",
        "shouldShowReviewResults": true,
        "topic": {
            "_id": "68bac2c842820b374152eb26",
            "name": "A1 Reading - Elementary",
            "description": "",
            "appId": "68a206714c1620ed1d74c2ef",
            "parentId": "68bac29042820b374152eb20",
            "questionNum": 29,
            "slug": "a1-reading-test",
            "mediaId": null,
            "difficulty": 1,
            "type": 1,
            "createdAt": "2025-09-05T11:00:24.132Z",
            "updatedAt": "2025-12-30T02:54:36.196Z",
            "orderIndex": 0,
            "media_data": null,
            "parent_topic": {
                "_id": "68bac29042820b374152eb20",
                "name": "Reading",
                "slug": "reading-test"
            },
            "children": [
                {
                    "_id": "68c3cd6b42820b374152ecf8",
                    "name": "Daily routines",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-daily-routines",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:36:11.197Z",
                    "updatedAt": "2025-12-30T02:54:22.383Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cd9242820b374152ecfe",
                    "name": "Family and relationships",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-family-and-relationships",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:36:50.420Z",
                    "updatedAt": "2025-12-30T02:54:22.402Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cdd142820b374152ed04",
                    "name": "Food and drinks",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-food-and-drinks",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:37:53.321Z",
                    "updatedAt": "2025-12-30T02:54:22.423Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce2642820b374152ed10",
                    "name": "Hobbies and leisure",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-hobbies-and-leisure",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:39:18.357Z",
                    "updatedAt": "2025-12-30T02:54:22.471Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68bac2f642820b374152eb2c",
                    "name": "Introducing yourself and friends",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-introducing-yourself-friends",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-05T11:01:10.057Z",
                    "updatedAt": "2025-12-30T02:54:22.352Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce8c42820b374152ed22",
                    "name": "Places in town",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-places-in-town",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:41:00.261Z",
                    "updatedAt": "2025-12-30T02:54:22.535Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce4942820b374152ed16",
                    "name": "Shopping",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-shopping",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:39:53.437Z",
                    "updatedAt": "2025-12-30T02:54:22.494Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce7242820b374152ed1c",
                    "name": "Transport",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-transport",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:40:34.228Z",
                    "updatedAt": "2025-12-30T02:54:22.515Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cdf542820b374152ed0a",
                    "name": "Weather and seasons",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-weather-and-seasons",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:38:29.017Z",
                    "updatedAt": "2025-12-30T02:54:22.440Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cebd42820b374152ed28",
                    "name": "Festivals and traditions",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 11,
                    "slug": "reading-a1-festivals-and-traditions",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:41:49.531Z",
                    "updatedAt": "2025-12-30T02:54:22.553Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                }
            ]
        },
        "exercise": {
            "_id": "68c3cebd42820b374152ed28",
            "name": "Festivals and traditions",
            "description": "",
            "appId": "68a206714c1620ed1d74c2ef",
            "parentId": "68bac2c842820b374152eb26",
            "questionNum": 11,
            "slug": "reading-a1-festivals-and-traditions",
            "mediaId": null,
            "difficulty": 1,
            "type": 2,
            "submitType": 1,
            "createdAt": "2025-09-12T07:41:49.531Z",
            "updatedAt": "2025-12-30T02:54:22.553Z",
            "media_data": null,
            "parent_topic": {
                "_id": "68bac2c842820b374152eb26",
                "name": "A1 Reading - Elementary",
                "slug": "a1-reading-test"
            }
        },
        "cards": [
            {
                "_id": "68c3e6f042820b374152edf1",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Every country has special festivals. In Japan, people celebrate Hanami in <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\"> . Families and friends go to the park to see the cherry blossoms. They eat food, sing songs, and enjoy the flowers.<br data-start=\"421\" data-end=\"424\">In Mexico, people celebrate the&nbsp;<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">&nbsp;in November. Families make colorful decorations, visit cemeteries, and remember loved ones.<br data-start=\"563\" data-end=\"566\">In Thailand,&nbsp;<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">&nbsp;is the New Year festival in April. People throw water on each other in the streets. It is a fun way to celebrate and stay cool in the hot weather.<br data-start=\"734\" data-end=\"737\">Festivals help people spend time together, remember traditions, and enjoy life.</p>"
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
                        "_id": "68c3e76f42820b374152edf6",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "spring",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:27:11.900Z",
                        "updatedAt": "2025-09-12T09:35:35.762Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "68c3e82b42820b374152ee10",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "Day of the Dead",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:30:19.533Z",
                        "updatedAt": "2025-09-12T09:30:19.533Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "68c3e8a842820b374152ee16",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "Songkran",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:32:24.660Z",
                        "updatedAt": "2025-09-12T09:32:24.660Z",
                        "isActive": true,
                        "isDeleted": false
                    }
                ],
                "createdAt": "2025-09-12T09:25:04.405Z",
                "updatedAt": "2025-10-08T02:40:42.478Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d83c42820b374152ed99",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>When is Thanksgiving celebrated in the United States?</p>"
                },
                "explanation": "In November",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "In December",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "In November",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "In October",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "In January",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:22:20.067Z",
                "updatedAt": "2025-09-12T08:25:22.441Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d92742820b374152edb7",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do families in China do during the Mid-Autumn Festival?</p>"
                },
                "explanation": "Eat mooncakes and watch the moon",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Decorate houses with lamps",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Eat mooncakes and watch the moon",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Play music in the streets",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Eat turkey with pumpkin pie",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:26:15.732Z",
                "updatedAt": "2025-09-12T08:26:15.732Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dc3842820b374152edcb",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do people usually eat during Thanksgiving?</p>"
                },
                "explanation": "Turkey and pumpkin pie",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Rice and soup",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Mooncakes and tea",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Turkey and pumpkin pie",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Bread and butter",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:39:20.586Z",
                "updatedAt": "2025-09-12T08:39:20.586Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dd7342820b374152edd5",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which country celebrates Holi, the Festival of Colors?</p>"
                },
                "explanation": "India",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Germany",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "India",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Brazil",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "China",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:44:35.394Z",
                "updatedAt": "2025-09-12T08:44:35.394Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d8e442820b374152eda8",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which festival is popular in Brazil?</p>"
                },
                "explanation": "Carnival",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Diwali",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Carnival",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Thanksgiving",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Mid-Autumn Festival",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:25:08.896Z",
                "updatedAt": "2025-09-12T08:25:08.896Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dc0742820b374152edc6",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What is the main activity during Carnival in Brazil?</p>"
                },
                "explanation": "Dancing in the streets",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Watching the moon",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Dancing in the streets",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Eating turkey",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Playing football",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:38:31.107Z",
                "updatedAt": "2025-09-12T08:38:31.107Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dd4c42820b374152edd0",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do families do at Christmas?</p>"
                },
                "explanation": "Decorate a tree and give presents",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Eat dumplings",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Throw colored powder",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Decorate a tree and give presents",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Visit cemeteries",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:43:56.875Z",
                "updatedAt": "2025-09-12T08:43:56.875Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d89942820b374152ed9e",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p><strong data-start=\"411\" data-end=\"459\">What do people in India do during Diwali?</strong></p>"
                },
                "explanation": "Decorate houses with lamps",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Watch the full moon",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Wear costumes and dance",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Decorate houses with lamps",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Eat turkey with family",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:23:53.143Z",
                "updatedAt": "2025-09-12T08:25:15.475Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d94e42820b374152edbc",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which word best describes festivals?</p>"
                },
                "explanation": "Family time",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Busy work",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Family time",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "School lessons",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Morning routines",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:26:54.504Z",
                "updatedAt": "2025-09-12T08:26:54.504Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dda042820b374152edda",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p><strong data-start=\"1081\" data-end=\"1129\">What do families eat at Chinese New Year?</strong></p>"
                },
                "explanation": "Dumplings",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Dumplings",
                        "isCorrect": true
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Turkey",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Sausages",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Mooncakes",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:45:20.540Z",
                "updatedAt": "2025-09-12T08:45:20.540Z",
                "isActive": true,
                "isDeleted": false
            }
        ],
        "seo": {
            "_id": "68c3d13c42820b374152ed73",
            "slug": "reading-a1-festivals-and-traditions",
            "title": "Reading A1 – Festivals and Traditions Practice",
            "description": "Explore beginner A1 English reading texts about festivals and traditions from around the world.",
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
            "titleH1": "A1 Reading Practice: Festivals and Traditions",
            "appId": "68a206714c1620ed1d74c2ef",
            "summary": "",
            "content": "",
            "jsonLd": [],
            "locale": "en",
            "seo301": "",
            "status": 1,
            "createdAt": "2025-09-12T07:52:28.071Z",
            "updatedAt": "2025-09-12T07:52:28.071Z"
        },
        "siblingTopics": [
            {
                "_id": "68c3cebd42820b374152ed28",
                "name": "Festivals and traditions",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 11,
                "slug": "reading-a1-festivals-and-traditions",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:41:49.531Z",
                "updatedAt": "2025-12-30T02:54:22.553Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce8c42820b374152ed22",
                "name": "Places in town",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-places-in-town",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:41:00.261Z",
                "updatedAt": "2025-12-30T02:54:22.535Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce7242820b374152ed1c",
                "name": "Transport",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-transport",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:40:34.228Z",
                "updatedAt": "2025-12-30T02:54:22.515Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce4942820b374152ed16",
                "name": "Shopping",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-shopping",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:39:53.437Z",
                "updatedAt": "2025-12-30T02:54:22.494Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce2642820b374152ed10",
                "name": "Hobbies and leisure",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-hobbies-and-leisure",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:39:18.357Z",
                "updatedAt": "2025-12-30T02:54:22.471Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cdf542820b374152ed0a",
                "name": "Weather and seasons",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-weather-and-seasons",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:38:29.017Z",
                "updatedAt": "2025-12-30T02:54:22.440Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cdd142820b374152ed04",
                "name": "Food and drinks",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-food-and-drinks",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:37:53.321Z",
                "updatedAt": "2025-12-30T02:54:22.423Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cd9242820b374152ecfe",
                "name": "Family and relationships",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-family-and-relationships",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:36:50.420Z",
                "updatedAt": "2025-12-30T02:54:22.402Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cd6b42820b374152ecf8",
                "name": "Daily routines",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-daily-routines",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:36:11.197Z",
                "updatedAt": "2025-12-30T02:54:22.383Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68bac2f642820b374152eb2c",
                "name": "Introducing yourself and friends",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-introducing-yourself-friends",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-05T11:01:10.057Z",
                "updatedAt": "2025-12-30T02:54:22.352Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            }
        ]
    } as any,
};
export const QuizOneByOneCheckOnSubmit: Story = {
    args: {
        "showType": "one-by-one",
        "shouldShowReviewResults": true,
        "topic": {
            "_id": "68bac2c842820b374152eb26",
            "name": "A1 Reading - Elementary",
            "description": "",
            "appId": "68a206714c1620ed1d74c2ef",
            "parentId": "68bac29042820b374152eb20",
            "questionNum": 29,
            "slug": "a1-reading-test",
            "mediaId": null,
            "difficulty": 1,
            "type": 1,
            "createdAt": "2025-09-05T11:00:24.132Z",
            "updatedAt": "2025-12-30T02:54:36.196Z",
            "orderIndex": 0,
            "media_data": null,
            "parent_topic": {
                "_id": "68bac29042820b374152eb20",
                "name": "Reading",
                "slug": "reading-test"
            },
            "children": [
                {
                    "_id": "68c3cd6b42820b374152ecf8",
                    "name": "Daily routines",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-daily-routines",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:36:11.197Z",
                    "updatedAt": "2025-12-30T02:54:22.383Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cd9242820b374152ecfe",
                    "name": "Family and relationships",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-family-and-relationships",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:36:50.420Z",
                    "updatedAt": "2025-12-30T02:54:22.402Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cdd142820b374152ed04",
                    "name": "Food and drinks",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-food-and-drinks",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:37:53.321Z",
                    "updatedAt": "2025-12-30T02:54:22.423Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce2642820b374152ed10",
                    "name": "Hobbies and leisure",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-hobbies-and-leisure",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:39:18.357Z",
                    "updatedAt": "2025-12-30T02:54:22.471Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68bac2f642820b374152eb2c",
                    "name": "Introducing yourself and friends",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-introducing-yourself-friends",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-05T11:01:10.057Z",
                    "updatedAt": "2025-12-30T02:54:22.352Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce8c42820b374152ed22",
                    "name": "Places in town",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-places-in-town",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:41:00.261Z",
                    "updatedAt": "2025-12-30T02:54:22.535Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce4942820b374152ed16",
                    "name": "Shopping",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-shopping",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:39:53.437Z",
                    "updatedAt": "2025-12-30T02:54:22.494Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce7242820b374152ed1c",
                    "name": "Transport",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-transport",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:40:34.228Z",
                    "updatedAt": "2025-12-30T02:54:22.515Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cdf542820b374152ed0a",
                    "name": "Weather and seasons",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-weather-and-seasons",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:38:29.017Z",
                    "updatedAt": "2025-12-30T02:54:22.440Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cebd42820b374152ed28",
                    "name": "Festivals and traditions",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 11,
                    "slug": "reading-a1-festivals-and-traditions",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:41:49.531Z",
                    "updatedAt": "2025-12-30T02:54:22.553Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                }
            ]
        },
        "exercise": {
            "_id": "68c3cebd42820b374152ed28",
            "name": "Festivals and traditions",
            "description": "",
            "appId": "68a206714c1620ed1d74c2ef",
            "parentId": "68bac2c842820b374152eb26",
            "questionNum": 11,
            "slug": "reading-a1-festivals-and-traditions",
            "mediaId": null,
            "difficulty": 1,
            "type": 2,
            "submitType": 2,
            "createdAt": "2025-09-12T07:41:49.531Z",
            "updatedAt": "2025-12-30T02:54:22.553Z",
            "media_data": null,
            "parent_topic": {
                "_id": "68bac2c842820b374152eb26",
                "name": "A1 Reading - Elementary",
                "slug": "a1-reading-test"
            }
        },
        "cards": [
            {
                "_id": "68c3e6f042820b374152edf1",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Every country has special festivals. In Japan, people celebrate Hanami in <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\"> . Families and friends go to the park to see the cherry blossoms. They eat food, sing songs, and enjoy the flowers.<br data-start=\"421\" data-end=\"424\">In Mexico, people celebrate the&nbsp;<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">&nbsp;in November. Families make colorful decorations, visit cemeteries, and remember loved ones.<br data-start=\"563\" data-end=\"566\">In Thailand,&nbsp;<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">&nbsp;is the New Year festival in April. People throw water on each other in the streets. It is a fun way to celebrate and stay cool in the hot weather.<br data-start=\"734\" data-end=\"737\">Festivals help people spend time together, remember traditions, and enjoy life.</p>"
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
                        "_id": "68c3e76f42820b374152edf6",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "spring",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:27:11.900Z",
                        "updatedAt": "2025-09-12T09:35:35.762Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "68c3e82b42820b374152ee10",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "Day of the Dead",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:30:19.533Z",
                        "updatedAt": "2025-09-12T09:30:19.533Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "68c3e8a842820b374152ee16",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "Songkran",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:32:24.660Z",
                        "updatedAt": "2025-09-12T09:32:24.660Z",
                        "isActive": true,
                        "isDeleted": false
                    }
                ],
                "createdAt": "2025-09-12T09:25:04.405Z",
                "updatedAt": "2025-10-08T02:40:42.478Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d83c42820b374152ed99",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>When is Thanksgiving celebrated in the United States?</p>"
                },
                "explanation": "In November",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "In December",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "In November",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "In October",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "In January",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:22:20.067Z",
                "updatedAt": "2025-09-12T08:25:22.441Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d92742820b374152edb7",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do families in China do during the Mid-Autumn Festival?</p>"
                },
                "explanation": "Eat mooncakes and watch the moon",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Decorate houses with lamps",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Eat mooncakes and watch the moon",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Play music in the streets",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Eat turkey with pumpkin pie",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:26:15.732Z",
                "updatedAt": "2025-09-12T08:26:15.732Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dc3842820b374152edcb",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do people usually eat during Thanksgiving?</p>"
                },
                "explanation": "Turkey and pumpkin pie",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Rice and soup",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Mooncakes and tea",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Turkey and pumpkin pie",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Bread and butter",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:39:20.586Z",
                "updatedAt": "2025-09-12T08:39:20.586Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dd7342820b374152edd5",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which country celebrates Holi, the Festival of Colors?</p>"
                },
                "explanation": "India",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Germany",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "India",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Brazil",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "China",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:44:35.394Z",
                "updatedAt": "2025-09-12T08:44:35.394Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d8e442820b374152eda8",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which festival is popular in Brazil?</p>"
                },
                "explanation": "Carnival",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Diwali",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Carnival",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Thanksgiving",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Mid-Autumn Festival",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:25:08.896Z",
                "updatedAt": "2025-09-12T08:25:08.896Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dc0742820b374152edc6",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What is the main activity during Carnival in Brazil?</p>"
                },
                "explanation": "Dancing in the streets",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Watching the moon",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Dancing in the streets",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Eating turkey",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Playing football",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:38:31.107Z",
                "updatedAt": "2025-09-12T08:38:31.107Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dd4c42820b374152edd0",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do families do at Christmas?</p>"
                },
                "explanation": "Decorate a tree and give presents",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Eat dumplings",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Throw colored powder",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Decorate a tree and give presents",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Visit cemeteries",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:43:56.875Z",
                "updatedAt": "2025-09-12T08:43:56.875Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d89942820b374152ed9e",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p><strong data-start=\"411\" data-end=\"459\">What do people in India do during Diwali?</strong></p>"
                },
                "explanation": "Decorate houses with lamps",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Watch the full moon",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Wear costumes and dance",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Decorate houses with lamps",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Eat turkey with family",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:23:53.143Z",
                "updatedAt": "2025-09-12T08:25:15.475Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d94e42820b374152edbc",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which word best describes festivals?</p>"
                },
                "explanation": "Family time",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Busy work",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Family time",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "School lessons",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Morning routines",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:26:54.504Z",
                "updatedAt": "2025-09-12T08:26:54.504Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dda042820b374152edda",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p><strong data-start=\"1081\" data-end=\"1129\">What do families eat at Chinese New Year?</strong></p>"
                },
                "explanation": "Dumplings",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Dumplings",
                        "isCorrect": true
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Turkey",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Sausages",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Mooncakes",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:45:20.540Z",
                "updatedAt": "2025-09-12T08:45:20.540Z",
                "isActive": true,
                "isDeleted": false
            }
        ],
        "seo": {
            "_id": "68c3d13c42820b374152ed73",
            "slug": "reading-a1-festivals-and-traditions",
            "title": "Reading A1 – Festivals and Traditions Practice",
            "description": "Explore beginner A1 English reading texts about festivals and traditions from around the world.",
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
            "titleH1": "A1 Reading Practice: Festivals and Traditions",
            "appId": "68a206714c1620ed1d74c2ef",
            "summary": "",
            "content": "",
            "jsonLd": [],
            "locale": "en",
            "seo301": "",
            "status": 1,
            "createdAt": "2025-09-12T07:52:28.071Z",
            "updatedAt": "2025-09-12T07:52:28.071Z"
        },
        "siblingTopics": [
            {
                "_id": "68c3cebd42820b374152ed28",
                "name": "Festivals and traditions",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 11,
                "slug": "reading-a1-festivals-and-traditions",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:41:49.531Z",
                "updatedAt": "2025-12-30T02:54:22.553Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce8c42820b374152ed22",
                "name": "Places in town",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-places-in-town",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:41:00.261Z",
                "updatedAt": "2025-12-30T02:54:22.535Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce7242820b374152ed1c",
                "name": "Transport",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-transport",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:40:34.228Z",
                "updatedAt": "2025-12-30T02:54:22.515Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce4942820b374152ed16",
                "name": "Shopping",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-shopping",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:39:53.437Z",
                "updatedAt": "2025-12-30T02:54:22.494Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce2642820b374152ed10",
                "name": "Hobbies and leisure",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-hobbies-and-leisure",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:39:18.357Z",
                "updatedAt": "2025-12-30T02:54:22.471Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cdf542820b374152ed0a",
                "name": "Weather and seasons",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-weather-and-seasons",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:38:29.017Z",
                "updatedAt": "2025-12-30T02:54:22.440Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cdd142820b374152ed04",
                "name": "Food and drinks",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-food-and-drinks",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:37:53.321Z",
                "updatedAt": "2025-12-30T02:54:22.423Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cd9242820b374152ecfe",
                "name": "Family and relationships",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-family-and-relationships",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:36:50.420Z",
                "updatedAt": "2025-12-30T02:54:22.402Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cd6b42820b374152ecf8",
                "name": "Daily routines",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-daily-routines",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:36:11.197Z",
                "updatedAt": "2025-12-30T02:54:22.383Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68bac2f642820b374152eb2c",
                "name": "Introducing yourself and friends",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-introducing-yourself-friends",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-05T11:01:10.057Z",
                "updatedAt": "2025-12-30T02:54:22.352Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            }
        ]
    } as any,
};
export const QuizAllCheckOnAnswer: Story = {
    args: {
        "showType": "all",
        "shouldShowReviewResults": true,
        "topic": {
            "_id": "68bac2c842820b374152eb26",
            "name": "A1 Reading - Elementary",
            "description": "",
            "appId": "68a206714c1620ed1d74c2ef",
            "parentId": "68bac29042820b374152eb20",
            "questionNum": 29,
            "slug": "a1-reading-test",
            "mediaId": null,
            "difficulty": 1,
            "type": 1,
            "createdAt": "2025-09-05T11:00:24.132Z",
            "updatedAt": "2025-12-30T02:54:36.196Z",
            "orderIndex": 0,
            "media_data": null,
            "parent_topic": {
                "_id": "68bac29042820b374152eb20",
                "name": "Reading",
                "slug": "reading-test"
            },
            "children": [
                {
                    "_id": "68c3cd6b42820b374152ecf8",
                    "name": "Daily routines",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-daily-routines",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:36:11.197Z",
                    "updatedAt": "2025-12-30T02:54:22.383Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cd9242820b374152ecfe",
                    "name": "Family and relationships",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-family-and-relationships",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:36:50.420Z",
                    "updatedAt": "2025-12-30T02:54:22.402Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cdd142820b374152ed04",
                    "name": "Food and drinks",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-food-and-drinks",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:37:53.321Z",
                    "updatedAt": "2025-12-30T02:54:22.423Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce2642820b374152ed10",
                    "name": "Hobbies and leisure",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-hobbies-and-leisure",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:39:18.357Z",
                    "updatedAt": "2025-12-30T02:54:22.471Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68bac2f642820b374152eb2c",
                    "name": "Introducing yourself and friends",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-introducing-yourself-friends",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-05T11:01:10.057Z",
                    "updatedAt": "2025-12-30T02:54:22.352Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce8c42820b374152ed22",
                    "name": "Places in town",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-places-in-town",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:41:00.261Z",
                    "updatedAt": "2025-12-30T02:54:22.535Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce4942820b374152ed16",
                    "name": "Shopping",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-shopping",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:39:53.437Z",
                    "updatedAt": "2025-12-30T02:54:22.494Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce7242820b374152ed1c",
                    "name": "Transport",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-transport",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:40:34.228Z",
                    "updatedAt": "2025-12-30T02:54:22.515Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cdf542820b374152ed0a",
                    "name": "Weather and seasons",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-weather-and-seasons",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:38:29.017Z",
                    "updatedAt": "2025-12-30T02:54:22.440Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cebd42820b374152ed28",
                    "name": "Festivals and traditions",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 11,
                    "slug": "reading-a1-festivals-and-traditions",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:41:49.531Z",
                    "updatedAt": "2025-12-30T02:54:22.553Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                }
            ]
        },
        "exercise": {
            "_id": "68c3cebd42820b374152ed28",
            "name": "Festivals and traditions",
            "description": "",
            "appId": "68a206714c1620ed1d74c2ef",
            "parentId": "68bac2c842820b374152eb26",
            "questionNum": 11,
            "slug": "reading-a1-festivals-and-traditions",
            "mediaId": null,
            "difficulty": 1,
            "type": 2,
            "submitType": 1,
            "createdAt": "2025-09-12T07:41:49.531Z",
            "updatedAt": "2025-12-30T02:54:22.553Z",
            "media_data": null,
            "parent_topic": {
                "_id": "68bac2c842820b374152eb26",
                "name": "A1 Reading - Elementary",
                "slug": "a1-reading-test"
            }
        },
        "cards": [
            {
                "_id": "68c3e6f042820b374152edf1",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Every country has special festivals. In Japan, people celebrate Hanami in <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\"> . Families and friends go to the park to see the cherry blossoms. They eat food, sing songs, and enjoy the flowers.<br data-start=\"421\" data-end=\"424\">In Mexico, people celebrate the&nbsp;<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">&nbsp;in November. Families make colorful decorations, visit cemeteries, and remember loved ones.<br data-start=\"563\" data-end=\"566\">In Thailand,&nbsp;<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">&nbsp;is the New Year festival in April. People throw water on each other in the streets. It is a fun way to celebrate and stay cool in the hot weather.<br data-start=\"734\" data-end=\"737\">Festivals help people spend time together, remember traditions, and enjoy life.</p>"
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
                        "_id": "68c3e76f42820b374152edf6",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "spring",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:27:11.900Z",
                        "updatedAt": "2025-09-12T09:35:35.762Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "68c3e82b42820b374152ee10",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "Day of the Dead",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:30:19.533Z",
                        "updatedAt": "2025-09-12T09:30:19.533Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "68c3e8a842820b374152ee16",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "Songkran",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:32:24.660Z",
                        "updatedAt": "2025-09-12T09:32:24.660Z",
                        "isActive": true,
                        "isDeleted": false
                    }
                ],
                "createdAt": "2025-09-12T09:25:04.405Z",
                "updatedAt": "2025-10-08T02:40:42.478Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d83c42820b374152ed99",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>When is Thanksgiving celebrated in the United States?</p>"
                },
                "explanation": "In November",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "In December",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "In November",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "In October",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "In January",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:22:20.067Z",
                "updatedAt": "2025-09-12T08:25:22.441Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d92742820b374152edb7",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do families in China do during the Mid-Autumn Festival?</p>"
                },
                "explanation": "Eat mooncakes and watch the moon",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Decorate houses with lamps",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Eat mooncakes and watch the moon",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Play music in the streets",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Eat turkey with pumpkin pie",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:26:15.732Z",
                "updatedAt": "2025-09-12T08:26:15.732Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dc3842820b374152edcb",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do people usually eat during Thanksgiving?</p>"
                },
                "explanation": "Turkey and pumpkin pie",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Rice and soup",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Mooncakes and tea",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Turkey and pumpkin pie",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Bread and butter",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:39:20.586Z",
                "updatedAt": "2025-09-12T08:39:20.586Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dd7342820b374152edd5",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which country celebrates Holi, the Festival of Colors?</p>"
                },
                "explanation": "India",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Germany",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "India",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Brazil",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "China",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:44:35.394Z",
                "updatedAt": "2025-09-12T08:44:35.394Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d8e442820b374152eda8",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which festival is popular in Brazil?</p>"
                },
                "explanation": "Carnival",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Diwali",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Carnival",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Thanksgiving",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Mid-Autumn Festival",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:25:08.896Z",
                "updatedAt": "2025-09-12T08:25:08.896Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dc0742820b374152edc6",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What is the main activity during Carnival in Brazil?</p>"
                },
                "explanation": "Dancing in the streets",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Watching the moon",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Dancing in the streets",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Eating turkey",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Playing football",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:38:31.107Z",
                "updatedAt": "2025-09-12T08:38:31.107Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dd4c42820b374152edd0",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do families do at Christmas?</p>"
                },
                "explanation": "Decorate a tree and give presents",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Eat dumplings",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Throw colored powder",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Decorate a tree and give presents",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Visit cemeteries",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:43:56.875Z",
                "updatedAt": "2025-09-12T08:43:56.875Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d89942820b374152ed9e",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p><strong data-start=\"411\" data-end=\"459\">What do people in India do during Diwali?</strong></p>"
                },
                "explanation": "Decorate houses with lamps",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Watch the full moon",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Wear costumes and dance",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Decorate houses with lamps",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Eat turkey with family",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:23:53.143Z",
                "updatedAt": "2025-09-12T08:25:15.475Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d94e42820b374152edbc",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which word best describes festivals?</p>"
                },
                "explanation": "Family time",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Busy work",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Family time",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "School lessons",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Morning routines",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:26:54.504Z",
                "updatedAt": "2025-09-12T08:26:54.504Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dda042820b374152edda",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p><strong data-start=\"1081\" data-end=\"1129\">What do families eat at Chinese New Year?</strong></p>"
                },
                "explanation": "Dumplings",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Dumplings",
                        "isCorrect": true
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Turkey",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Sausages",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Mooncakes",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:45:20.540Z",
                "updatedAt": "2025-09-12T08:45:20.540Z",
                "isActive": true,
                "isDeleted": false
            }
        ],
        "seo": {
            "_id": "68c3d13c42820b374152ed73",
            "slug": "reading-a1-festivals-and-traditions",
            "title": "Reading A1 – Festivals and Traditions Practice",
            "description": "Explore beginner A1 English reading texts about festivals and traditions from around the world.",
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
            "titleH1": "A1 Reading Practice: Festivals and Traditions",
            "appId": "68a206714c1620ed1d74c2ef",
            "summary": "",
            "content": "",
            "jsonLd": [],
            "locale": "en",
            "seo301": "",
            "status": 1,
            "createdAt": "2025-09-12T07:52:28.071Z",
            "updatedAt": "2025-09-12T07:52:28.071Z"
        },
        "siblingTopics": [
            {
                "_id": "68c3cebd42820b374152ed28",
                "name": "Festivals and traditions",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 11,
                "slug": "reading-a1-festivals-and-traditions",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:41:49.531Z",
                "updatedAt": "2025-12-30T02:54:22.553Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce8c42820b374152ed22",
                "name": "Places in town",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-places-in-town",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:41:00.261Z",
                "updatedAt": "2025-12-30T02:54:22.535Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce7242820b374152ed1c",
                "name": "Transport",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-transport",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:40:34.228Z",
                "updatedAt": "2025-12-30T02:54:22.515Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce4942820b374152ed16",
                "name": "Shopping",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-shopping",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:39:53.437Z",
                "updatedAt": "2025-12-30T02:54:22.494Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce2642820b374152ed10",
                "name": "Hobbies and leisure",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-hobbies-and-leisure",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:39:18.357Z",
                "updatedAt": "2025-12-30T02:54:22.471Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cdf542820b374152ed0a",
                "name": "Weather and seasons",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-weather-and-seasons",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:38:29.017Z",
                "updatedAt": "2025-12-30T02:54:22.440Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cdd142820b374152ed04",
                "name": "Food and drinks",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-food-and-drinks",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:37:53.321Z",
                "updatedAt": "2025-12-30T02:54:22.423Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cd9242820b374152ecfe",
                "name": "Family and relationships",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-family-and-relationships",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:36:50.420Z",
                "updatedAt": "2025-12-30T02:54:22.402Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cd6b42820b374152ecf8",
                "name": "Daily routines",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-daily-routines",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:36:11.197Z",
                "updatedAt": "2025-12-30T02:54:22.383Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68bac2f642820b374152eb2c",
                "name": "Introducing yourself and friends",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-introducing-yourself-friends",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-05T11:01:10.057Z",
                "updatedAt": "2025-12-30T02:54:22.352Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            }
        ]
    } as any,
};
export const QuizAllCheckOnSubmit: Story = {
    args: {
        "showType": "all",
        "shouldShowReviewResults": true,
        "topic": {
            "_id": "68bac2c842820b374152eb26",
            "name": "A1 Reading - Elementary",
            "description": "",
            "appId": "68a206714c1620ed1d74c2ef",
            "parentId": "68bac29042820b374152eb20",
            "questionNum": 29,
            "slug": "a1-reading-test",
            "mediaId": null,
            "difficulty": 1,
            "type": 1,
            "createdAt": "2025-09-05T11:00:24.132Z",
            "updatedAt": "2025-12-30T02:54:36.196Z",
            "orderIndex": 0,
            "media_data": null,
            "parent_topic": {
                "_id": "68bac29042820b374152eb20",
                "name": "Reading",
                "slug": "reading-test"
            },
            "children": [
                {
                    "_id": "68c3cd6b42820b374152ecf8",
                    "name": "Daily routines",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-daily-routines",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:36:11.197Z",
                    "updatedAt": "2025-12-30T02:54:22.383Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cd9242820b374152ecfe",
                    "name": "Family and relationships",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-family-and-relationships",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:36:50.420Z",
                    "updatedAt": "2025-12-30T02:54:22.402Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cdd142820b374152ed04",
                    "name": "Food and drinks",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-food-and-drinks",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:37:53.321Z",
                    "updatedAt": "2025-12-30T02:54:22.423Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce2642820b374152ed10",
                    "name": "Hobbies and leisure",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-hobbies-and-leisure",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:39:18.357Z",
                    "updatedAt": "2025-12-30T02:54:22.471Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68bac2f642820b374152eb2c",
                    "name": "Introducing yourself and friends",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-introducing-yourself-friends",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-05T11:01:10.057Z",
                    "updatedAt": "2025-12-30T02:54:22.352Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce8c42820b374152ed22",
                    "name": "Places in town",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-places-in-town",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:41:00.261Z",
                    "updatedAt": "2025-12-30T02:54:22.535Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce4942820b374152ed16",
                    "name": "Shopping",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-shopping",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:39:53.437Z",
                    "updatedAt": "2025-12-30T02:54:22.494Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3ce7242820b374152ed1c",
                    "name": "Transport",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-transport",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:40:34.228Z",
                    "updatedAt": "2025-12-30T02:54:22.515Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cdf542820b374152ed0a",
                    "name": "Weather and seasons",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 2,
                    "slug": "a1-reading-weather-and-seasons",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:38:29.017Z",
                    "updatedAt": "2025-12-30T02:54:22.440Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                },
                {
                    "_id": "68c3cebd42820b374152ed28",
                    "name": "Festivals and traditions",
                    "description": "",
                    "appId": "68a206714c1620ed1d74c2ef",
                    "parentId": "68bac2c842820b374152eb26",
                    "questionNum": 11,
                    "slug": "reading-a1-festivals-and-traditions",
                    "mediaId": null,
                    "difficulty": 1,
                    "type": 2,
                    "submitType": 1,
                    "createdAt": "2025-09-12T07:41:49.531Z",
                    "updatedAt": "2025-12-30T02:54:22.553Z",
                    "media_data": null,
                    "parent_topic": {
                        "_id": "68bac2c842820b374152eb26",
                        "name": "A1 Reading - Elementary",
                        "slug": "a1-reading-test"
                    },
                    "children": []
                }
            ]
        },
        "exercise": {
            "_id": "68c3cebd42820b374152ed28",
            "name": "Festivals and traditions",
            "description": "",
            "appId": "68a206714c1620ed1d74c2ef",
            "parentId": "68bac2c842820b374152eb26",
            "questionNum": 11,
            "slug": "reading-a1-festivals-and-traditions",
            "mediaId": null,
            "difficulty": 1,
            "type": 2,
            "submitType": 2,
            "createdAt": "2025-09-12T07:41:49.531Z",
            "updatedAt": "2025-12-30T02:54:22.553Z",
            "media_data": null,
            "parent_topic": {
                "_id": "68bac2c842820b374152eb26",
                "name": "A1 Reading - Elementary",
                "slug": "a1-reading-test"
            }
        },
        "cards": [
            {
                "_id": "68c3e6f042820b374152edf1",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Every country has special festivals. In Japan, people celebrate Hanami in <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\"> . Families and friends go to the park to see the cherry blossoms. They eat food, sing songs, and enjoy the flowers.<br data-start=\"421\" data-end=\"424\">In Mexico, people celebrate the&nbsp;<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">&nbsp;in November. Families make colorful decorations, visit cemeteries, and remember loved ones.<br data-start=\"563\" data-end=\"566\">In Thailand,&nbsp;<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">&nbsp;is the New Year festival in April. People throw water on each other in the streets. It is a fun way to celebrate and stay cool in the hot weather.<br data-start=\"734\" data-end=\"737\">Festivals help people spend time together, remember traditions, and enjoy life.</p>"
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
                        "_id": "68c3e76f42820b374152edf6",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "spring",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:27:11.900Z",
                        "updatedAt": "2025-09-12T09:35:35.762Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "68c3e82b42820b374152ee10",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 4,
                                "textId": "D",
                                "content": "Day of the Dead",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:30:19.533Z",
                        "updatedAt": "2025-09-12T09:30:19.533Z",
                        "isActive": true,
                        "isDeleted": false
                    },
                    {
                        "_id": "68c3e8a842820b374152ee16",
                        "topicId": "68c3cebd42820b374152ed28",
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
                        "parentId": "68c3e6f042820b374152edf1",
                        "choices": [
                            {
                                "id": 1,
                                "textId": "A",
                                "content": "Songkran",
                                "isCorrect": true
                            }
                        ],
                        "mapLangChoice": {},
                        "defaultChoiceLang": "en",
                        "cardGame": 1,
                        "childCards": [],
                        "createdAt": "2025-09-12T09:32:24.660Z",
                        "updatedAt": "2025-09-12T09:32:24.660Z",
                        "isActive": true,
                        "isDeleted": false
                    }
                ],
                "createdAt": "2025-09-12T09:25:04.405Z",
                "updatedAt": "2025-10-08T02:40:42.478Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d83c42820b374152ed99",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>When is Thanksgiving celebrated in the United States?</p>"
                },
                "explanation": "In November",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "In December",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "In November",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "In October",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "In January",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:22:20.067Z",
                "updatedAt": "2025-09-12T08:25:22.441Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d92742820b374152edb7",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do families in China do during the Mid-Autumn Festival?</p>"
                },
                "explanation": "Eat mooncakes and watch the moon",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Decorate houses with lamps",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Eat mooncakes and watch the moon",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Play music in the streets",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Eat turkey with pumpkin pie",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:26:15.732Z",
                "updatedAt": "2025-09-12T08:26:15.732Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dc3842820b374152edcb",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do people usually eat during Thanksgiving?</p>"
                },
                "explanation": "Turkey and pumpkin pie",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Rice and soup",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Mooncakes and tea",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Turkey and pumpkin pie",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Bread and butter",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:39:20.586Z",
                "updatedAt": "2025-09-12T08:39:20.586Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dd7342820b374152edd5",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which country celebrates Holi, the Festival of Colors?</p>"
                },
                "explanation": "India",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Germany",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "India",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Brazil",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "China",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:44:35.394Z",
                "updatedAt": "2025-09-12T08:44:35.394Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d8e442820b374152eda8",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which festival is popular in Brazil?</p>"
                },
                "explanation": "Carnival",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Diwali",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Carnival",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Thanksgiving",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Mid-Autumn Festival",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:25:08.896Z",
                "updatedAt": "2025-09-12T08:25:08.896Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dc0742820b374152edc6",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What is the main activity during Carnival in Brazil?</p>"
                },
                "explanation": "Dancing in the streets",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Watching the moon",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Dancing in the streets",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Eating turkey",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Playing football",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:38:31.107Z",
                "updatedAt": "2025-09-12T08:38:31.107Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dd4c42820b374152edd0",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>What do families do at Christmas?</p>"
                },
                "explanation": "Decorate a tree and give presents",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Eat dumplings",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Throw colored powder",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Decorate a tree and give presents",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Visit cemeteries",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:43:56.875Z",
                "updatedAt": "2025-09-12T08:43:56.875Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d89942820b374152ed9e",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p><strong data-start=\"411\" data-end=\"459\">What do people in India do during Diwali?</strong></p>"
                },
                "explanation": "Decorate houses with lamps",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Watch the full moon",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Wear costumes and dance",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Decorate houses with lamps",
                        "isCorrect": true
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Eat turkey with family",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:23:53.143Z",
                "updatedAt": "2025-09-12T08:25:15.475Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3d94e42820b374152edbc",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>Which word best describes festivals?</p>"
                },
                "explanation": "Family time",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Busy work",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Family time",
                        "isCorrect": true
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "School lessons",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Morning routines",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:26:54.504Z",
                "updatedAt": "2025-09-12T08:26:54.504Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "68c3dda042820b374152edda",
                "topicId": "68c3cebd42820b374152ed28",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p><strong data-start=\"1081\" data-end=\"1129\">What do families eat at Chinese New Year?</strong></p>"
                },
                "explanation": "Dumplings",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": null,
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "Dumplings",
                        "isCorrect": true
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "Turkey",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "Sausages",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Mooncakes",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2025-09-12T08:45:20.540Z",
                "updatedAt": "2025-09-12T08:45:20.540Z",
                "isActive": true,
                "isDeleted": false
            }
        ],
        "seo": {
            "_id": "68c3d13c42820b374152ed73",
            "slug": "reading-a1-festivals-and-traditions",
            "title": "Reading A1 – Festivals and Traditions Practice",
            "description": "Explore beginner A1 English reading texts about festivals and traditions from around the world.",
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
            "titleH1": "A1 Reading Practice: Festivals and Traditions",
            "appId": "68a206714c1620ed1d74c2ef",
            "summary": "",
            "content": "",
            "jsonLd": [],
            "locale": "en",
            "seo301": "",
            "status": 1,
            "createdAt": "2025-09-12T07:52:28.071Z",
            "updatedAt": "2025-09-12T07:52:28.071Z"
        },
        "siblingTopics": [
            {
                "_id": "68c3cebd42820b374152ed28",
                "name": "Festivals and traditions",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 11,
                "slug": "reading-a1-festivals-and-traditions",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:41:49.531Z",
                "updatedAt": "2025-12-30T02:54:22.553Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce8c42820b374152ed22",
                "name": "Places in town",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-places-in-town",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:41:00.261Z",
                "updatedAt": "2025-12-30T02:54:22.535Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce7242820b374152ed1c",
                "name": "Transport",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-transport",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:40:34.228Z",
                "updatedAt": "2025-12-30T02:54:22.515Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce4942820b374152ed16",
                "name": "Shopping",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-shopping",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:39:53.437Z",
                "updatedAt": "2025-12-30T02:54:22.494Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3ce2642820b374152ed10",
                "name": "Hobbies and leisure",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-hobbies-and-leisure",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:39:18.357Z",
                "updatedAt": "2025-12-30T02:54:22.471Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cdf542820b374152ed0a",
                "name": "Weather and seasons",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-weather-and-seasons",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:38:29.017Z",
                "updatedAt": "2025-12-30T02:54:22.440Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cdd142820b374152ed04",
                "name": "Food and drinks",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-food-and-drinks",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:37:53.321Z",
                "updatedAt": "2025-12-30T02:54:22.423Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cd9242820b374152ecfe",
                "name": "Family and relationships",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-family-and-relationships",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:36:50.420Z",
                "updatedAt": "2025-12-30T02:54:22.402Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68c3cd6b42820b374152ecf8",
                "name": "Daily routines",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-daily-routines",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-12T07:36:11.197Z",
                "updatedAt": "2025-12-30T02:54:22.383Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            },
            {
                "_id": "68bac2f642820b374152eb2c",
                "name": "Introducing yourself and friends",
                "description": "",
                "appId": "68a206714c1620ed1d74c2ef",
                "parentId": "68bac2c842820b374152eb26",
                "questionNum": 2,
                "slug": "a1-reading-introducing-yourself-friends",
                "mediaId": null,
                "difficulty": 1,
                "type": 2,
                "submitType": 1,
                "createdAt": "2025-09-05T11:01:10.057Z",
                "updatedAt": "2025-12-30T02:54:22.352Z",
                "media_data": null,
                "parent_topic": {
                    "_id": "68bac2c842820b374152eb26",
                    "name": "A1 Reading - Elementary",
                    "slug": "a1-reading-test"
                }
            }
        ]
    } as any,
};
