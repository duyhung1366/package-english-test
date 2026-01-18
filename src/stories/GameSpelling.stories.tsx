import type { Meta, StoryObj } from '@storybook/react';
import ExerciseRunner from '../components/ExerciseRunner';

const meta = {
    title: 'Components/GameSpelling',
    component: ExerciseRunner,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ExerciseRunner>;

export default meta;
type Story = StoryObj<typeof meta>;

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
