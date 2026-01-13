import type { Meta, StoryObj } from '@storybook/react';
import ExerciseRunner from '../components/ExerciseRunner';
import {
  mockTopic,
  mockExercise,
  mockQuizCards,
  mockSpellingCards,
  mockParaGameCards,
  mockSeo,
  mockSiblingTopics,
} from './__mocks__/exerciseData';

const meta = {
  title: 'Components/ExerciseRunner',
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

// Spelling Exercise
export const SpellingExerciseShowAllCheckOnSubmit: Story = {
  args: {
    showType: 'all',
    shouldShowReviewResults: true,
    "topic": {
      "_id": "68c048ef42820b374152ec3f",
      "name": "C1 Writing - Advanced",
      "description": "",
      "appId": "68a206714c1620ed1d74c2ef",
      "parentId": "68c0484a42820b374152ec1a",
      "questionNum": 10,
      "slug": "c1-writing-test",
      "mediaId": null,
      "difficulty": 3,
      "type": 1,
      "createdAt": "2025-09-09T15:34:07.976Z",
      "updatedAt": "2025-12-30T02:54:36.531Z",
      "orderIndex": 4,
      "media_data": null,
      "parent_topic": {
        "_id": "68c0484a42820b374152ec1a",
        "name": "Writing",
        "slug": "writing-test"
      },
      "children": [
        {
          "_id": "68f746af2233090c874bdd67",
          "name": "Climate Policy & Responsibility",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-climate-policy-responsibility",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:39:11.882Z",
          "updatedAt": "2025-12-30T02:54:24.345Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746e52233090c874bdd7b",
          "name": "Education & Assessment Reform",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-education-assessment-reform",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:05.633Z",
          "updatedAt": "2025-12-30T02:54:24.365Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f747112233090c874bdd87",
          "name": "The Future of Work & Well-being",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-future-of-work-wellbeing",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:49.918Z",
          "updatedAt": "2025-12-30T02:54:24.400Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746fa2233090c874bdd81",
          "name": "Globalisation & Cultural Identity",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-globalisation-cultural-identity",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:26.340Z",
          "updatedAt": "2025-12-30T02:54:24.382Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746482233090c874bdd61",
          "name": "Technology & AI Regulation",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-technology-ai-regulation",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "createdAt": "2025-10-21T08:37:28.123Z",
          "updatedAt": "2025-12-30T02:54:24.326Z",
          "submitType": 1,
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        }
      ]
    },
    "exercise": {
      "_id": "68f746af2233090c874bdd67",
      "name": "Climate Policy & Responsibility",
      "description": "",
      "appId": "68a206714c1620ed1d74c2ef",
      "parentId": "68c048ef42820b374152ec3f",
      "questionNum": 2,
      "slug": "c1-writing-climate-policy-responsibility",
      "mediaId": null,
      "difficulty": 3,
      "type": 2,
      "submitType": 2,
      "createdAt": "2025-10-21T08:39:11.882Z",
      "updatedAt": "2025-12-30T02:54:24.345Z",
      "media_data": null,
      "parent_topic": {
        "_id": "68c048ef42820b374152ec3f",
        "name": "C1 Writing - Advanced",
        "slug": "c1-writing-test"
      }
    },
    "cards": [
      {
        "_id": "68f75b502233090c874bde59",
        "topicId": "68f746af2233090c874bdd67",
        "question": {
          "audio": null,
          "audio_data": null,
          "image": null,
          "image_data": null,
          "text": "<p>Fill each blank with&nbsp;<strong data-start=\"233\" data-end=\"245\">one word</strong>&nbsp;from the Word Bank. Use each word&nbsp;<strong data-start=\"280\" data-end=\"288\">once</strong> only.</p>\n<p>&nbsp;</p>\n<p>Word bank (choose 8)</p>\n<p>fossil-fuel subsidies &bull; consumption patterns &bull; carbon border adjustment &bull; life-cycle emissions &bull; demand-side measures &bull; carbon leakage &bull; nature-based solutions &bull; resilience</p>\n<p>&nbsp;</p>\n<p>Public campaigns target&nbsp;<strong data-start=\"197\" data-end=\"213\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">through labelling and nudges, but without phasing out&nbsp;<strong data-start=\"268\" data-end=\"284\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 2\" data-input-index=\"2\">, price signals remain distorted. To prevent industry flight to laxer jurisdictions, lawmakers consider a <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 3\" data-input-index=\"3\">&nbsp;<strong data-start=\"390\" data-end=\"406\">&nbsp;</strong>that equalises costs at the border. Cities invest in<strong data-start=\"460\" data-end=\"476\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 4\" data-input-index=\"4\"> by upgrading drainage and heat shelters, while ministries back&nbsp;<strong data-start=\"540\" data-end=\"556\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 5\" data-input-index=\"5\"> such as mangrove restoration that protect coasts and store carbon. Procurement rules should account for&nbsp;<strong data-start=\"661\" data-end=\"677\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 6\" data-input-index=\"6\">, not merely tailpipe metrics, steering contracts toward low-carbon cement and shipping. Alongside supply-side policies, calibrated<strong data-start=\"809\" data-end=\"825\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 7\" data-input-index=\"7\"> - from efficiency standards to modal shifts - cut energy waste. Finally, robust tracking and trade rules limit&nbsp;<strong data-start=\"933\" data-end=\"949\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 8\" data-input-index=\"8\"> as domestic ambition rises.</p>"
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
            "_id": "68f75ba72233090c874bde5f",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "consumption patterns",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:39.905Z",
            "updatedAt": "2025-10-21T10:08:39.905Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bb12233090c874bde65",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "fossil-fuel subsidies",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:49.321Z",
            "updatedAt": "2025-10-21T10:08:49.321Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bb92233090c874bde6b",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon border adjustment",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:57.691Z",
            "updatedAt": "2025-10-21T10:08:57.691Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bcd2233090c874bde71",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "resilience",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:17.051Z",
            "updatedAt": "2025-10-21T10:09:17.051Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bd62233090c874bde77",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "nature-based solutions",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:26.803Z",
            "updatedAt": "2025-10-21T10:09:26.803Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75be02233090c874bde7d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "life-cycle emissions",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:36.692Z",
            "updatedAt": "2025-10-21T10:09:36.692Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75be92233090c874bde83",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "demand-side measures",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:45.976Z",
            "updatedAt": "2025-10-21T10:09:45.976Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bf22233090c874bde89",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon leakage",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:54.073Z",
            "updatedAt": "2025-10-21T10:09:54.073Z",
            "isActive": true,
            "isDeleted": false
          }
        ],
        "createdAt": "2025-10-21T10:07:12.362Z",
        "updatedAt": "2025-12-31T04:44:48.578Z",
        "isActive": true,
        "isDeleted": false
      },
      {
        "_id": "68f7593f2233090c874bde17",
        "topicId": "68f746af2233090c874bdd67",
        "question": {
          "audio": null,
          "audio_data": null,
          "image": null,
          "image_data": null,
          "text": "<p>Fill each blank with&nbsp;<strong data-start=\"233\" data-end=\"245\">one word</strong>&nbsp;from the Word Bank. Use each word&nbsp;<strong data-start=\"280\" data-end=\"288\">once</strong> only.</p>\n<p>&nbsp;</p>\n<p>Word bank (choose 8)</p>\n<p>externalities &bull; abatement &bull; carbon pricing &bull; price corridor &bull; adaptation &bull; just transition &bull; MRV (monitoring, reporting and verification) &bull; enforcement</p>\n<p>&nbsp;</p>\n<p>Despite record pledges, emissions keep rising because measures prioritise optics over structural levers. Economists emphasise<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\"> to internalise&nbsp;<strong data-start=\"326\" data-end=\"342\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 2\" data-input-index=\"2\">, yet in the absence of credible&nbsp;<strong data-start=\"375\" data-end=\"391\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 3\" data-input-index=\"3\"> &nbsp;and a predictable <strong data-start=\"410\" data-end=\"426\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 4\" data-input-index=\"4\">, firms postpone&nbsp;<strong data-start=\"443\" data-end=\"459\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 5\" data-input-index=\"5\">. Cities must fund climate&nbsp;<strong data-start=\"486\" data-end=\"502\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 6\" data-input-index=\"6\"> -&nbsp;from urban cooling to flood defences - while national plans pair renewables with grid reform. A <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 7\" data-input-index=\"7\">&nbsp;<strong data-start=\"597\" data-end=\"613\">&nbsp;</strong>depends on revenue recycling for worker reskilling and regional support, and rigorous&nbsp;<strong data-start=\"700\" data-end=\"716\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 8\" data-input-index=\"8\"> &nbsp;to deter greenwashing and track progress.</p>"
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
            "_id": "68f759e12233090c874bde21",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon pricing",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:05.456Z",
            "updatedAt": "2025-10-21T10:01:05.456Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f759ed2233090c874bde27",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "externalities",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:17.731Z",
            "updatedAt": "2025-10-21T10:01:17.731Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f759f72233090c874bde2d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "enforcement",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:27.409Z",
            "updatedAt": "2025-10-21T10:01:27.409Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a042233090c874bde33",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "price corridor",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:40.102Z",
            "updatedAt": "2025-10-21T10:01:40.102Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a0e2233090c874bde39",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "abatement",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:50.587Z",
            "updatedAt": "2025-10-21T10:01:50.587Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a192233090c874bde3f",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "adaptation",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:01.602Z",
            "updatedAt": "2025-10-21T10:02:01.602Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a222233090c874bde45",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "just transition",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:10.993Z",
            "updatedAt": "2025-10-21T10:02:10.993Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a2c2233090c874bde4d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "MRV (monitoring, reporting and verification)",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:20.113Z",
            "updatedAt": "2025-10-21T10:02:20.113Z",
            "isActive": true,
            "isDeleted": false
          }
        ],
        "createdAt": "2025-10-21T09:58:23.243Z",
        "updatedAt": "2025-12-31T04:46:14.368Z",
        "isActive": true,
        "isDeleted": false
      }
    ],
    "seo": {
      "_id": "68f744032233090c874bdd44",
      "slug": "c1-writing-climate-policy-responsibility",
      "title": "C1 Writing Practice: Climate Policy & Responsibility",
      "description": "Strengthen C1 Writing on climate policy using gap-fills and MCQs. Key terms: carbon pricing, mitigation, enforcement, just transition, consumption patterns.",
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
      "titleH1": "C1 Writing Test - Climate Policy & Responsibility",
      "appId": "68a206714c1620ed1d74c2ef",
      "summary": "",
      "content": "",
      "jsonLd": [],
      "locale": "en",
      "seo301": "",
      "status": 1,
      "createdAt": "2025-10-21T08:27:47.079Z",
      "updatedAt": "2025-10-21T08:27:47.079Z"
    },
    "siblingTopics": [
      {
        "_id": "68f747112233090c874bdd87",
        "name": "The Future of Work & Well-being",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-future-of-work-wellbeing",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:49.918Z",
        "updatedAt": "2025-12-30T02:54:24.400Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746fa2233090c874bdd81",
        "name": "Globalisation & Cultural Identity",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-globalisation-cultural-identity",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:26.340Z",
        "updatedAt": "2025-12-30T02:54:24.382Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746e52233090c874bdd7b",
        "name": "Education & Assessment Reform",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-education-assessment-reform",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:05.633Z",
        "updatedAt": "2025-12-30T02:54:24.365Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746af2233090c874bdd67",
        "name": "Climate Policy & Responsibility",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-climate-policy-responsibility",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:39:11.882Z",
        "updatedAt": "2025-12-30T02:54:24.345Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746482233090c874bdd61",
        "name": "Technology & AI Regulation",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-technology-ai-regulation",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "createdAt": "2025-10-21T08:37:28.123Z",
        "updatedAt": "2025-12-30T02:54:24.326Z",
        "submitType": 1,
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      }
    ]
  } as any
};

export const SpellingExerciseShowAllCheckOnAnswer: Story = {
  args: {
    showType: 'all',
    shouldShowReviewResults: true,
    "topic": {
      "_id": "68c048ef42820b374152ec3f",
      "name": "C1 Writing - Advanced",
      "description": "",
      "appId": "68a206714c1620ed1d74c2ef",
      "parentId": "68c0484a42820b374152ec1a",
      "questionNum": 10,
      "slug": "c1-writing-test",
      "mediaId": null,
      "difficulty": 3,
      "type": 1,
      "createdAt": "2025-09-09T15:34:07.976Z",
      "updatedAt": "2025-12-30T02:54:36.531Z",
      "orderIndex": 4,
      "media_data": null,
      "parent_topic": {
        "_id": "68c0484a42820b374152ec1a",
        "name": "Writing",
        "slug": "writing-test"
      },
      "children": [
        {
          "_id": "68f746af2233090c874bdd67",
          "name": "Climate Policy & Responsibility",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-climate-policy-responsibility",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:39:11.882Z",
          "updatedAt": "2025-12-30T02:54:24.345Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746e52233090c874bdd7b",
          "name": "Education & Assessment Reform",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-education-assessment-reform",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:05.633Z",
          "updatedAt": "2025-12-30T02:54:24.365Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f747112233090c874bdd87",
          "name": "The Future of Work & Well-being",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-future-of-work-wellbeing",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:49.918Z",
          "updatedAt": "2025-12-30T02:54:24.400Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746fa2233090c874bdd81",
          "name": "Globalisation & Cultural Identity",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-globalisation-cultural-identity",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:26.340Z",
          "updatedAt": "2025-12-30T02:54:24.382Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746482233090c874bdd61",
          "name": "Technology & AI Regulation",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-technology-ai-regulation",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "createdAt": "2025-10-21T08:37:28.123Z",
          "updatedAt": "2025-12-30T02:54:24.326Z",
          "submitType": 1,
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        }
      ]
    },
    "exercise": {
      "_id": "68f746af2233090c874bdd67",
      "name": "Climate Policy & Responsibility",
      "description": "",
      "appId": "68a206714c1620ed1d74c2ef",
      "parentId": "68c048ef42820b374152ec3f",
      "questionNum": 2,
      "slug": "c1-writing-climate-policy-responsibility",
      "mediaId": null,
      "difficulty": 3,
      "type": 2,
      "submitType": 1,
      "createdAt": "2025-10-21T08:39:11.882Z",
      "updatedAt": "2025-12-30T02:54:24.345Z",
      "media_data": null,
      "parent_topic": {
        "_id": "68c048ef42820b374152ec3f",
        "name": "C1 Writing - Advanced",
        "slug": "c1-writing-test"
      }
    },
    "cards": [
      {
        "_id": "68f75b502233090c874bde59",
        "topicId": "68f746af2233090c874bdd67",
        "question": {
          "audio": null,
          "audio_data": null,
          "image": null,
          "image_data": null,
          "text": "<p>Fill each blank with&nbsp;<strong data-start=\"233\" data-end=\"245\">one word</strong>&nbsp;from the Word Bank. Use each word&nbsp;<strong data-start=\"280\" data-end=\"288\">once</strong> only.</p>\n<p>&nbsp;</p>\n<p>Word bank (choose 8)</p>\n<p>fossil-fuel subsidies &bull; consumption patterns &bull; carbon border adjustment &bull; life-cycle emissions &bull; demand-side measures &bull; carbon leakage &bull; nature-based solutions &bull; resilience</p>\n<p>&nbsp;</p>\n<p>Public campaigns target&nbsp;<strong data-start=\"197\" data-end=\"213\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">through labelling and nudges, but without phasing out&nbsp;<strong data-start=\"268\" data-end=\"284\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 2\" data-input-index=\"2\">, price signals remain distorted. To prevent industry flight to laxer jurisdictions, lawmakers consider a <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 3\" data-input-index=\"3\">&nbsp;<strong data-start=\"390\" data-end=\"406\">&nbsp;</strong>that equalises costs at the border. Cities invest in<strong data-start=\"460\" data-end=\"476\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 4\" data-input-index=\"4\"> by upgrading drainage and heat shelters, while ministries back&nbsp;<strong data-start=\"540\" data-end=\"556\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 5\" data-input-index=\"5\"> such as mangrove restoration that protect coasts and store carbon. Procurement rules should account for&nbsp;<strong data-start=\"661\" data-end=\"677\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 6\" data-input-index=\"6\">, not merely tailpipe metrics, steering contracts toward low-carbon cement and shipping. Alongside supply-side policies, calibrated<strong data-start=\"809\" data-end=\"825\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 7\" data-input-index=\"7\"> - from efficiency standards to modal shifts - cut energy waste. Finally, robust tracking and trade rules limit&nbsp;<strong data-start=\"933\" data-end=\"949\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 8\" data-input-index=\"8\"> as domestic ambition rises.</p>"
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
            "_id": "68f75ba72233090c874bde5f",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "consumption patterns",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:39.905Z",
            "updatedAt": "2025-10-21T10:08:39.905Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bb12233090c874bde65",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "fossil-fuel subsidies",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:49.321Z",
            "updatedAt": "2025-10-21T10:08:49.321Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bb92233090c874bde6b",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon border adjustment",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:57.691Z",
            "updatedAt": "2025-10-21T10:08:57.691Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bcd2233090c874bde71",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "resilience",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:17.051Z",
            "updatedAt": "2025-10-21T10:09:17.051Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bd62233090c874bde77",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "nature-based solutions",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:26.803Z",
            "updatedAt": "2025-10-21T10:09:26.803Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75be02233090c874bde7d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "life-cycle emissions",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:36.692Z",
            "updatedAt": "2025-10-21T10:09:36.692Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75be92233090c874bde83",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "demand-side measures",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:45.976Z",
            "updatedAt": "2025-10-21T10:09:45.976Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bf22233090c874bde89",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon leakage",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:54.073Z",
            "updatedAt": "2025-10-21T10:09:54.073Z",
            "isActive": true,
            "isDeleted": false
          }
        ],
        "createdAt": "2025-10-21T10:07:12.362Z",
        "updatedAt": "2025-12-31T04:44:48.578Z",
        "isActive": true,
        "isDeleted": false
      },
      {
        "_id": "68f7593f2233090c874bde17",
        "topicId": "68f746af2233090c874bdd67",
        "question": {
          "audio": null,
          "audio_data": null,
          "image": null,
          "image_data": null,
          "text": "<p>Fill each blank with&nbsp;<strong data-start=\"233\" data-end=\"245\">one word</strong>&nbsp;from the Word Bank. Use each word&nbsp;<strong data-start=\"280\" data-end=\"288\">once</strong> only.</p>\n<p>&nbsp;</p>\n<p>Word bank (choose 8)</p>\n<p>externalities &bull; abatement &bull; carbon pricing &bull; price corridor &bull; adaptation &bull; just transition &bull; MRV (monitoring, reporting and verification) &bull; enforcement</p>\n<p>&nbsp;</p>\n<p>Despite record pledges, emissions keep rising because measures prioritise optics over structural levers. Economists emphasise<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\"> to internalise&nbsp;<strong data-start=\"326\" data-end=\"342\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 2\" data-input-index=\"2\">, yet in the absence of credible&nbsp;<strong data-start=\"375\" data-end=\"391\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 3\" data-input-index=\"3\"> &nbsp;and a predictable <strong data-start=\"410\" data-end=\"426\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 4\" data-input-index=\"4\">, firms postpone&nbsp;<strong data-start=\"443\" data-end=\"459\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 5\" data-input-index=\"5\">. Cities must fund climate&nbsp;<strong data-start=\"486\" data-end=\"502\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 6\" data-input-index=\"6\"> -&nbsp;from urban cooling to flood defences - while national plans pair renewables with grid reform. A <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 7\" data-input-index=\"7\">&nbsp;<strong data-start=\"597\" data-end=\"613\">&nbsp;</strong>depends on revenue recycling for worker reskilling and regional support, and rigorous&nbsp;<strong data-start=\"700\" data-end=\"716\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 8\" data-input-index=\"8\"> &nbsp;to deter greenwashing and track progress.</p>"
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
            "_id": "68f759e12233090c874bde21",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon pricing",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:05.456Z",
            "updatedAt": "2025-10-21T10:01:05.456Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f759ed2233090c874bde27",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "externalities",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:17.731Z",
            "updatedAt": "2025-10-21T10:01:17.731Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f759f72233090c874bde2d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "enforcement",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:27.409Z",
            "updatedAt": "2025-10-21T10:01:27.409Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a042233090c874bde33",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "price corridor",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:40.102Z",
            "updatedAt": "2025-10-21T10:01:40.102Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a0e2233090c874bde39",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "abatement",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:50.587Z",
            "updatedAt": "2025-10-21T10:01:50.587Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a192233090c874bde3f",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "adaptation",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:01.602Z",
            "updatedAt": "2025-10-21T10:02:01.602Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a222233090c874bde45",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "just transition",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:10.993Z",
            "updatedAt": "2025-10-21T10:02:10.993Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a2c2233090c874bde4d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "MRV (monitoring, reporting and verification)",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:20.113Z",
            "updatedAt": "2025-10-21T10:02:20.113Z",
            "isActive": true,
            "isDeleted": false
          }
        ],
        "createdAt": "2025-10-21T09:58:23.243Z",
        "updatedAt": "2025-12-31T04:46:14.368Z",
        "isActive": true,
        "isDeleted": false
      }
    ],
    "seo": {
      "_id": "68f744032233090c874bdd44",
      "slug": "c1-writing-climate-policy-responsibility",
      "title": "C1 Writing Practice: Climate Policy & Responsibility",
      "description": "Strengthen C1 Writing on climate policy using gap-fills and MCQs. Key terms: carbon pricing, mitigation, enforcement, just transition, consumption patterns.",
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
      "titleH1": "C1 Writing Test - Climate Policy & Responsibility",
      "appId": "68a206714c1620ed1d74c2ef",
      "summary": "",
      "content": "",
      "jsonLd": [],
      "locale": "en",
      "seo301": "",
      "status": 1,
      "createdAt": "2025-10-21T08:27:47.079Z",
      "updatedAt": "2025-10-21T08:27:47.079Z"
    },
    "siblingTopics": [
      {
        "_id": "68f747112233090c874bdd87",
        "name": "The Future of Work & Well-being",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-future-of-work-wellbeing",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:49.918Z",
        "updatedAt": "2025-12-30T02:54:24.400Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746fa2233090c874bdd81",
        "name": "Globalisation & Cultural Identity",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-globalisation-cultural-identity",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:26.340Z",
        "updatedAt": "2025-12-30T02:54:24.382Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746e52233090c874bdd7b",
        "name": "Education & Assessment Reform",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-education-assessment-reform",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:05.633Z",
        "updatedAt": "2025-12-30T02:54:24.365Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746af2233090c874bdd67",
        "name": "Climate Policy & Responsibility",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-climate-policy-responsibility",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:39:11.882Z",
        "updatedAt": "2025-12-30T02:54:24.345Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746482233090c874bdd61",
        "name": "Technology & AI Regulation",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-technology-ai-regulation",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "createdAt": "2025-10-21T08:37:28.123Z",
        "updatedAt": "2025-12-30T02:54:24.326Z",
        "submitType": 1,
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      }
    ]
  } as any
};

export const SpellingExerciseShowOneCheckOnAnswer: Story = {
  args: {
    showType: 'one-by-one',
    shouldShowReviewResults: true,
    "topic": {
      "_id": "68c048ef42820b374152ec3f",
      "name": "C1 Writing - Advanced",
      "description": "",
      "appId": "68a206714c1620ed1d74c2ef",
      "parentId": "68c0484a42820b374152ec1a",
      "questionNum": 10,
      "slug": "c1-writing-test",
      "mediaId": null,
      "difficulty": 3,
      "type": 1,
      "createdAt": "2025-09-09T15:34:07.976Z",
      "updatedAt": "2025-12-30T02:54:36.531Z",
      "orderIndex": 4,
      "media_data": null,
      "parent_topic": {
        "_id": "68c0484a42820b374152ec1a",
        "name": "Writing",
        "slug": "writing-test"
      },
      "children": [
        {
          "_id": "68f746af2233090c874bdd67",
          "name": "Climate Policy & Responsibility",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-climate-policy-responsibility",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:39:11.882Z",
          "updatedAt": "2025-12-30T02:54:24.345Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746e52233090c874bdd7b",
          "name": "Education & Assessment Reform",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-education-assessment-reform",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:05.633Z",
          "updatedAt": "2025-12-30T02:54:24.365Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f747112233090c874bdd87",
          "name": "The Future of Work & Well-being",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-future-of-work-wellbeing",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:49.918Z",
          "updatedAt": "2025-12-30T02:54:24.400Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746fa2233090c874bdd81",
          "name": "Globalisation & Cultural Identity",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-globalisation-cultural-identity",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:26.340Z",
          "updatedAt": "2025-12-30T02:54:24.382Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746482233090c874bdd61",
          "name": "Technology & AI Regulation",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-technology-ai-regulation",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "createdAt": "2025-10-21T08:37:28.123Z",
          "updatedAt": "2025-12-30T02:54:24.326Z",
          "submitType": 1,
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        }
      ]
    },
    "exercise": {
      "_id": "68f746af2233090c874bdd67",
      "name": "Climate Policy & Responsibility",
      "description": "",
      "appId": "68a206714c1620ed1d74c2ef",
      "parentId": "68c048ef42820b374152ec3f",
      "questionNum": 2,
      "slug": "c1-writing-climate-policy-responsibility",
      "mediaId": null,
      "difficulty": 3,
      "type": 2,
      "submitType": 1,
      "createdAt": "2025-10-21T08:39:11.882Z",
      "updatedAt": "2025-12-30T02:54:24.345Z",
      "media_data": null,
      "parent_topic": {
        "_id": "68c048ef42820b374152ec3f",
        "name": "C1 Writing - Advanced",
        "slug": "c1-writing-test"
      }
    },
    "cards": [
      {
        "_id": "68f75b502233090c874bde59",
        "topicId": "68f746af2233090c874bdd67",
        "question": {
          "audio": null,
          "audio_data": null,
          "image": null,
          "image_data": null,
          "text": "<p>Fill each blank with&nbsp;<strong data-start=\"233\" data-end=\"245\">one word</strong>&nbsp;from the Word Bank. Use each word&nbsp;<strong data-start=\"280\" data-end=\"288\">once</strong> only.</p>\n<p>&nbsp;</p>\n<p>Word bank (choose 8)</p>\n<p>fossil-fuel subsidies &bull; consumption patterns &bull; carbon border adjustment &bull; life-cycle emissions &bull; demand-side measures &bull; carbon leakage &bull; nature-based solutions &bull; resilience</p>\n<p>&nbsp;</p>\n<p>Public campaigns target&nbsp;<strong data-start=\"197\" data-end=\"213\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">through labelling and nudges, but without phasing out&nbsp;<strong data-start=\"268\" data-end=\"284\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 2\" data-input-index=\"2\">, price signals remain distorted. To prevent industry flight to laxer jurisdictions, lawmakers consider a <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 3\" data-input-index=\"3\">&nbsp;<strong data-start=\"390\" data-end=\"406\">&nbsp;</strong>that equalises costs at the border. Cities invest in<strong data-start=\"460\" data-end=\"476\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 4\" data-input-index=\"4\"> by upgrading drainage and heat shelters, while ministries back&nbsp;<strong data-start=\"540\" data-end=\"556\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 5\" data-input-index=\"5\"> such as mangrove restoration that protect coasts and store carbon. Procurement rules should account for&nbsp;<strong data-start=\"661\" data-end=\"677\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 6\" data-input-index=\"6\">, not merely tailpipe metrics, steering contracts toward low-carbon cement and shipping. Alongside supply-side policies, calibrated<strong data-start=\"809\" data-end=\"825\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 7\" data-input-index=\"7\"> - from efficiency standards to modal shifts - cut energy waste. Finally, robust tracking and trade rules limit&nbsp;<strong data-start=\"933\" data-end=\"949\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 8\" data-input-index=\"8\"> as domestic ambition rises.</p>"
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
            "_id": "68f75ba72233090c874bde5f",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "consumption patterns",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:39.905Z",
            "updatedAt": "2025-10-21T10:08:39.905Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bb12233090c874bde65",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "fossil-fuel subsidies",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:49.321Z",
            "updatedAt": "2025-10-21T10:08:49.321Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bb92233090c874bde6b",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon border adjustment",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:57.691Z",
            "updatedAt": "2025-10-21T10:08:57.691Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bcd2233090c874bde71",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "resilience",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:17.051Z",
            "updatedAt": "2025-10-21T10:09:17.051Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bd62233090c874bde77",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "nature-based solutions",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:26.803Z",
            "updatedAt": "2025-10-21T10:09:26.803Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75be02233090c874bde7d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "life-cycle emissions",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:36.692Z",
            "updatedAt": "2025-10-21T10:09:36.692Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75be92233090c874bde83",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "demand-side measures",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:45.976Z",
            "updatedAt": "2025-10-21T10:09:45.976Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bf22233090c874bde89",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon leakage",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:54.073Z",
            "updatedAt": "2025-10-21T10:09:54.073Z",
            "isActive": true,
            "isDeleted": false
          }
        ],
        "createdAt": "2025-10-21T10:07:12.362Z",
        "updatedAt": "2025-12-31T04:44:48.578Z",
        "isActive": true,
        "isDeleted": false
      },
      {
        "_id": "68f7593f2233090c874bde17",
        "topicId": "68f746af2233090c874bdd67",
        "question": {
          "audio": null,
          "audio_data": null,
          "image": null,
          "image_data": null,
          "text": "<p>Fill each blank with&nbsp;<strong data-start=\"233\" data-end=\"245\">one word</strong>&nbsp;from the Word Bank. Use each word&nbsp;<strong data-start=\"280\" data-end=\"288\">once</strong> only.</p>\n<p>&nbsp;</p>\n<p>Word bank (choose 8)</p>\n<p>externalities &bull; abatement &bull; carbon pricing &bull; price corridor &bull; adaptation &bull; just transition &bull; MRV (monitoring, reporting and verification) &bull; enforcement</p>\n<p>&nbsp;</p>\n<p>Despite record pledges, emissions keep rising because measures prioritise optics over structural levers. Economists emphasise<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\"> to internalise&nbsp;<strong data-start=\"326\" data-end=\"342\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 2\" data-input-index=\"2\">, yet in the absence of credible&nbsp;<strong data-start=\"375\" data-end=\"391\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 3\" data-input-index=\"3\"> &nbsp;and a predictable <strong data-start=\"410\" data-end=\"426\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 4\" data-input-index=\"4\">, firms postpone&nbsp;<strong data-start=\"443\" data-end=\"459\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 5\" data-input-index=\"5\">. Cities must fund climate&nbsp;<strong data-start=\"486\" data-end=\"502\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 6\" data-input-index=\"6\"> -&nbsp;from urban cooling to flood defences - while national plans pair renewables with grid reform. A <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 7\" data-input-index=\"7\">&nbsp;<strong data-start=\"597\" data-end=\"613\">&nbsp;</strong>depends on revenue recycling for worker reskilling and regional support, and rigorous&nbsp;<strong data-start=\"700\" data-end=\"716\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 8\" data-input-index=\"8\"> &nbsp;to deter greenwashing and track progress.</p>"
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
            "_id": "68f759e12233090c874bde21",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon pricing",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:05.456Z",
            "updatedAt": "2025-10-21T10:01:05.456Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f759ed2233090c874bde27",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "externalities",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:17.731Z",
            "updatedAt": "2025-10-21T10:01:17.731Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f759f72233090c874bde2d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "enforcement",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:27.409Z",
            "updatedAt": "2025-10-21T10:01:27.409Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a042233090c874bde33",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "price corridor",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:40.102Z",
            "updatedAt": "2025-10-21T10:01:40.102Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a0e2233090c874bde39",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "abatement",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:50.587Z",
            "updatedAt": "2025-10-21T10:01:50.587Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a192233090c874bde3f",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "adaptation",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:01.602Z",
            "updatedAt": "2025-10-21T10:02:01.602Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a222233090c874bde45",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "just transition",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:10.993Z",
            "updatedAt": "2025-10-21T10:02:10.993Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a2c2233090c874bde4d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "MRV (monitoring, reporting and verification)",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:20.113Z",
            "updatedAt": "2025-10-21T10:02:20.113Z",
            "isActive": true,
            "isDeleted": false
          }
        ],
        "createdAt": "2025-10-21T09:58:23.243Z",
        "updatedAt": "2025-12-31T04:46:14.368Z",
        "isActive": true,
        "isDeleted": false
      }
    ],
    "seo": {
      "_id": "68f744032233090c874bdd44",
      "slug": "c1-writing-climate-policy-responsibility",
      "title": "C1 Writing Practice: Climate Policy & Responsibility",
      "description": "Strengthen C1 Writing on climate policy using gap-fills and MCQs. Key terms: carbon pricing, mitigation, enforcement, just transition, consumption patterns.",
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
      "titleH1": "C1 Writing Test - Climate Policy & Responsibility",
      "appId": "68a206714c1620ed1d74c2ef",
      "summary": "",
      "content": "",
      "jsonLd": [],
      "locale": "en",
      "seo301": "",
      "status": 1,
      "createdAt": "2025-10-21T08:27:47.079Z",
      "updatedAt": "2025-10-21T08:27:47.079Z"
    },
    "siblingTopics": [
      {
        "_id": "68f747112233090c874bdd87",
        "name": "The Future of Work & Well-being",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-future-of-work-wellbeing",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:49.918Z",
        "updatedAt": "2025-12-30T02:54:24.400Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746fa2233090c874bdd81",
        "name": "Globalisation & Cultural Identity",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-globalisation-cultural-identity",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:26.340Z",
        "updatedAt": "2025-12-30T02:54:24.382Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746e52233090c874bdd7b",
        "name": "Education & Assessment Reform",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-education-assessment-reform",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:05.633Z",
        "updatedAt": "2025-12-30T02:54:24.365Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746af2233090c874bdd67",
        "name": "Climate Policy & Responsibility",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-climate-policy-responsibility",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:39:11.882Z",
        "updatedAt": "2025-12-30T02:54:24.345Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746482233090c874bdd61",
        "name": "Technology & AI Regulation",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-technology-ai-regulation",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "createdAt": "2025-10-21T08:37:28.123Z",
        "updatedAt": "2025-12-30T02:54:24.326Z",
        "submitType": 1,
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      }
    ]
  } as any
};

export const SpellingExerciseShowOneCheckOnSubmit: Story = {
  args: {
    showType: 'one-by-one',
    shouldShowReviewResults: true,
    "topic": {
      "_id": "68c048ef42820b374152ec3f",
      "name": "C1 Writing - Advanced",
      "description": "",
      "appId": "68a206714c1620ed1d74c2ef",
      "parentId": "68c0484a42820b374152ec1a",
      "questionNum": 10,
      "slug": "c1-writing-test",
      "mediaId": null,
      "difficulty": 3,
      "type": 1,
      "createdAt": "2025-09-09T15:34:07.976Z",
      "updatedAt": "2025-12-30T02:54:36.531Z",
      "orderIndex": 4,
      "media_data": null,
      "parent_topic": {
        "_id": "68c0484a42820b374152ec1a",
        "name": "Writing",
        "slug": "writing-test"
      },
      "children": [
        {
          "_id": "68f746af2233090c874bdd67",
          "name": "Climate Policy & Responsibility",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-climate-policy-responsibility",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:39:11.882Z",
          "updatedAt": "2025-12-30T02:54:24.345Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746e52233090c874bdd7b",
          "name": "Education & Assessment Reform",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-education-assessment-reform",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:05.633Z",
          "updatedAt": "2025-12-30T02:54:24.365Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f747112233090c874bdd87",
          "name": "The Future of Work & Well-being",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-future-of-work-wellbeing",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:49.918Z",
          "updatedAt": "2025-12-30T02:54:24.400Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746fa2233090c874bdd81",
          "name": "Globalisation & Cultural Identity",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-globalisation-cultural-identity",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "submitType": 1,
          "createdAt": "2025-10-21T08:40:26.340Z",
          "updatedAt": "2025-12-30T02:54:24.382Z",
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        },
        {
          "_id": "68f746482233090c874bdd61",
          "name": "Technology & AI Regulation",
          "description": "",
          "appId": "68a206714c1620ed1d74c2ef",
          "parentId": "68c048ef42820b374152ec3f",
          "questionNum": 2,
          "slug": "c1-writing-technology-ai-regulation",
          "mediaId": null,
          "difficulty": 3,
          "type": 2,
          "createdAt": "2025-10-21T08:37:28.123Z",
          "updatedAt": "2025-12-30T02:54:24.326Z",
          "submitType": 1,
          "media_data": null,
          "parent_topic": {
            "_id": "68c048ef42820b374152ec3f",
            "name": "C1 Writing - Advanced",
            "slug": "c1-writing-test"
          },
          "children": []
        }
      ]
    },
    "exercise": {
      "_id": "68f746af2233090c874bdd67",
      "name": "Climate Policy & Responsibility",
      "description": "",
      "appId": "68a206714c1620ed1d74c2ef",
      "parentId": "68c048ef42820b374152ec3f",
      "questionNum": 2,
      "slug": "c1-writing-climate-policy-responsibility",
      "mediaId": null,
      "difficulty": 3,
      "type": 2,
      "submitType": 2,
      "createdAt": "2025-10-21T08:39:11.882Z",
      "updatedAt": "2025-12-30T02:54:24.345Z",
      "media_data": null,
      "parent_topic": {
        "_id": "68c048ef42820b374152ec3f",
        "name": "C1 Writing - Advanced",
        "slug": "c1-writing-test"
      }
    },
    "cards": [
      {
        "_id": "68f75b502233090c874bde59",
        "topicId": "68f746af2233090c874bdd67",
        "question": {
          "audio": null,
          "audio_data": null,
          "image": null,
          "image_data": null,
          "text": "<p>Fill each blank with&nbsp;<strong data-start=\"233\" data-end=\"245\">one word</strong>&nbsp;from the Word Bank. Use each word&nbsp;<strong data-start=\"280\" data-end=\"288\">once</strong> only.</p>\n<p>&nbsp;</p>\n<p>Word bank (choose 8)</p>\n<p>fossil-fuel subsidies &bull; consumption patterns &bull; carbon border adjustment &bull; life-cycle emissions &bull; demand-side measures &bull; carbon leakage &bull; nature-based solutions &bull; resilience</p>\n<p>&nbsp;</p>\n<p>Public campaigns target&nbsp;<strong data-start=\"197\" data-end=\"213\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">through labelling and nudges, but without phasing out&nbsp;<strong data-start=\"268\" data-end=\"284\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 2\" data-input-index=\"2\">, price signals remain distorted. To prevent industry flight to laxer jurisdictions, lawmakers consider a <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 3\" data-input-index=\"3\">&nbsp;<strong data-start=\"390\" data-end=\"406\">&nbsp;</strong>that equalises costs at the border. Cities invest in<strong data-start=\"460\" data-end=\"476\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 4\" data-input-index=\"4\"> by upgrading drainage and heat shelters, while ministries back&nbsp;<strong data-start=\"540\" data-end=\"556\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 5\" data-input-index=\"5\"> such as mangrove restoration that protect coasts and store carbon. Procurement rules should account for&nbsp;<strong data-start=\"661\" data-end=\"677\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 6\" data-input-index=\"6\">, not merely tailpipe metrics, steering contracts toward low-carbon cement and shipping. Alongside supply-side policies, calibrated<strong data-start=\"809\" data-end=\"825\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 7\" data-input-index=\"7\"> - from efficiency standards to modal shifts - cut energy waste. Finally, robust tracking and trade rules limit&nbsp;<strong data-start=\"933\" data-end=\"949\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 8\" data-input-index=\"8\"> as domestic ambition rises.</p>"
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
            "_id": "68f75ba72233090c874bde5f",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "consumption patterns",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:39.905Z",
            "updatedAt": "2025-10-21T10:08:39.905Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bb12233090c874bde65",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "fossil-fuel subsidies",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:49.321Z",
            "updatedAt": "2025-10-21T10:08:49.321Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bb92233090c874bde6b",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon border adjustment",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:08:57.691Z",
            "updatedAt": "2025-10-21T10:08:57.691Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bcd2233090c874bde71",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "resilience",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:17.051Z",
            "updatedAt": "2025-10-21T10:09:17.051Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bd62233090c874bde77",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "nature-based solutions",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:26.803Z",
            "updatedAt": "2025-10-21T10:09:26.803Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75be02233090c874bde7d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "life-cycle emissions",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:36.692Z",
            "updatedAt": "2025-10-21T10:09:36.692Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75be92233090c874bde83",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "demand-side measures",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:45.976Z",
            "updatedAt": "2025-10-21T10:09:45.976Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75bf22233090c874bde89",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f75b502233090c874bde59",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon leakage",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:09:54.073Z",
            "updatedAt": "2025-10-21T10:09:54.073Z",
            "isActive": true,
            "isDeleted": false
          }
        ],
        "createdAt": "2025-10-21T10:07:12.362Z",
        "updatedAt": "2025-12-31T04:44:48.578Z",
        "isActive": true,
        "isDeleted": false
      },
      {
        "_id": "68f7593f2233090c874bde17",
        "topicId": "68f746af2233090c874bdd67",
        "question": {
          "audio": null,
          "audio_data": null,
          "image": null,
          "image_data": null,
          "text": "<p>Fill each blank with&nbsp;<strong data-start=\"233\" data-end=\"245\">one word</strong>&nbsp;from the Word Bank. Use each word&nbsp;<strong data-start=\"280\" data-end=\"288\">once</strong> only.</p>\n<p>&nbsp;</p>\n<p>Word bank (choose 8)</p>\n<p>externalities &bull; abatement &bull; carbon pricing &bull; price corridor &bull; adaptation &bull; just transition &bull; MRV (monitoring, reporting and verification) &bull; enforcement</p>\n<p>&nbsp;</p>\n<p>Despite record pledges, emissions keep rising because measures prioritise optics over structural levers. Economists emphasise<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\"> to internalise&nbsp;<strong data-start=\"326\" data-end=\"342\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 2\" data-input-index=\"2\">, yet in the absence of credible&nbsp;<strong data-start=\"375\" data-end=\"391\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 3\" data-input-index=\"3\"> &nbsp;and a predictable <strong data-start=\"410\" data-end=\"426\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 4\" data-input-index=\"4\">, firms postpone&nbsp;<strong data-start=\"443\" data-end=\"459\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 5\" data-input-index=\"5\">. Cities must fund climate&nbsp;<strong data-start=\"486\" data-end=\"502\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 6\" data-input-index=\"6\"> -&nbsp;from urban cooling to flood defences - while national plans pair renewables with grid reform. A <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 7\" data-input-index=\"7\">&nbsp;<strong data-start=\"597\" data-end=\"613\">&nbsp;</strong>depends on revenue recycling for worker reskilling and regional support, and rigorous&nbsp;<strong data-start=\"700\" data-end=\"716\">&nbsp;</strong><input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 8\" data-input-index=\"8\"> &nbsp;to deter greenwashing and track progress.</p>"
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
            "_id": "68f759e12233090c874bde21",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "carbon pricing",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:05.456Z",
            "updatedAt": "2025-10-21T10:01:05.456Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f759ed2233090c874bde27",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "externalities",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:17.731Z",
            "updatedAt": "2025-10-21T10:01:17.731Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f759f72233090c874bde2d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "enforcement",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:27.409Z",
            "updatedAt": "2025-10-21T10:01:27.409Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a042233090c874bde33",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "price corridor",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:40.102Z",
            "updatedAt": "2025-10-21T10:01:40.102Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a0e2233090c874bde39",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "abatement",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:01:50.587Z",
            "updatedAt": "2025-10-21T10:01:50.587Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a192233090c874bde3f",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "adaptation",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:01.602Z",
            "updatedAt": "2025-10-21T10:02:01.602Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a222233090c874bde45",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "just transition",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:10.993Z",
            "updatedAt": "2025-10-21T10:02:10.993Z",
            "isActive": true,
            "isDeleted": false
          },
          {
            "_id": "68f75a2c2233090c874bde4d",
            "topicId": "68f746af2233090c874bdd67",
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
            "parentId": "68f7593f2233090c874bde17",
            "choices": [
              {
                "id": 1,
                "textId": "A",
                "content": "MRV (monitoring, reporting and verification)",
                "isCorrect": true
              }
            ],
            "mapLangChoice": {},
            "defaultChoiceLang": "en",
            "cardGame": 1,
            "childCards": [],
            "createdAt": "2025-10-21T10:02:20.113Z",
            "updatedAt": "2025-10-21T10:02:20.113Z",
            "isActive": true,
            "isDeleted": false
          }
        ],
        "createdAt": "2025-10-21T09:58:23.243Z",
        "updatedAt": "2025-12-31T04:46:14.368Z",
        "isActive": true,
        "isDeleted": false
      }
    ],
    "seo": {
      "_id": "68f744032233090c874bdd44",
      "slug": "c1-writing-climate-policy-responsibility",
      "title": "C1 Writing Practice: Climate Policy & Responsibility",
      "description": "Strengthen C1 Writing on climate policy using gap-fills and MCQs. Key terms: carbon pricing, mitigation, enforcement, just transition, consumption patterns.",
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
      "titleH1": "C1 Writing Test - Climate Policy & Responsibility",
      "appId": "68a206714c1620ed1d74c2ef",
      "summary": "",
      "content": "",
      "jsonLd": [],
      "locale": "en",
      "seo301": "",
      "status": 1,
      "createdAt": "2025-10-21T08:27:47.079Z",
      "updatedAt": "2025-10-21T08:27:47.079Z"
    },
    "siblingTopics": [
      {
        "_id": "68f747112233090c874bdd87",
        "name": "The Future of Work & Well-being",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-future-of-work-wellbeing",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:49.918Z",
        "updatedAt": "2025-12-30T02:54:24.400Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746fa2233090c874bdd81",
        "name": "Globalisation & Cultural Identity",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-globalisation-cultural-identity",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:26.340Z",
        "updatedAt": "2025-12-30T02:54:24.382Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746e52233090c874bdd7b",
        "name": "Education & Assessment Reform",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-education-assessment-reform",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:40:05.633Z",
        "updatedAt": "2025-12-30T02:54:24.365Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746af2233090c874bdd67",
        "name": "Climate Policy & Responsibility",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-climate-policy-responsibility",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "submitType": 1,
        "createdAt": "2025-10-21T08:39:11.882Z",
        "updatedAt": "2025-12-30T02:54:24.345Z",
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      },
      {
        "_id": "68f746482233090c874bdd61",
        "name": "Technology & AI Regulation",
        "description": "",
        "appId": "68a206714c1620ed1d74c2ef",
        "parentId": "68c048ef42820b374152ec3f",
        "questionNum": 2,
        "slug": "c1-writing-technology-ai-regulation",
        "mediaId": null,
        "difficulty": 3,
        "type": 2,
        "createdAt": "2025-10-21T08:37:28.123Z",
        "updatedAt": "2025-12-30T02:54:24.326Z",
        "submitType": 1,
        "media_data": null,
        "parent_topic": {
          "_id": "68c048ef42820b374152ec3f",
          "name": "C1 Writing - Advanced",
          "slug": "c1-writing-test"
        }
      }
    ]
  } as any
};

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
      },
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