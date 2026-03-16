import type { Meta, StoryObj } from '@storybook/react';
import ExerciseRunner from '../components/ExerciseRunner';
import type { StudyProgressItem } from '../components/ExerciseRunner';
import { CardGame, CardStatus, Difficulty, SubmitType } from '../models';
import type { ICard } from '../models';

const meta = {
    title: 'Components/GameDev',
    component: ExerciseRunner,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ExerciseRunner>;

export default meta;
type Story = StoryObj<typeof meta>;

const quizCards: ICard[] = [
    {
        _id: 'card-quiz-1',
        topicId: 'topic-1',
        cardGame: CardGame.QUIZ,
        question: {
            text: 'Which planet is closest to the Sun?',
        },
        choices: [
            { id: 1, textId: 'c1', content: 'Mercury', isCorrect: true },
            { id: 2, textId: 'c2', content: 'Venus', isCorrect: false },
            { id: 3, textId: 'c3', content: 'Earth', isCorrect: false },
            { id: 4, textId: 'c4', content: 'Mars', isCorrect: false },
        ],
        explanation: 'Mercury is the closest planet to the Sun.',
        explanationLang: {},
        explanationDefaultLang: 'en',
        mapLangChoice: {},
        defaultChoiceLang: 'en',
        difficulty: Difficulty.EASY,
        status: CardStatus.ACTIVE,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
    },
    {
        _id: 'card-quiz-2',
        topicId: 'topic-1',
        cardGame: CardGame.QUIZ,
        question: {
            text: 'What is the chemical symbol for water?',
        },
        choices: [
            { id: 1, textId: 'c1', content: 'H2O', isCorrect: true },
            { id: 2, textId: 'c2', content: 'CO2', isCorrect: false },
            { id: 3, textId: 'c3', content: 'NaCl', isCorrect: false },
            { id: 4, textId: 'c4', content: 'O2', isCorrect: false },
        ],
        explanation: 'Water is composed of two hydrogen atoms and one oxygen atom (H2O).',
        explanationLang: {},
        explanationDefaultLang: 'en',
        mapLangChoice: {},
        defaultChoiceLang: 'en',
        difficulty: Difficulty.EASY,
        status: CardStatus.ACTIVE,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
    },
    {
        _id: 'card-quiz-3',
        topicId: 'topic-1',
        cardGame: CardGame.QUIZ,
        question: {
            text: 'What is the speed of light in a vacuum?',
        },
        choices: [
            { id: 1, textId: 'c1', content: '299,792,458 m/s', isCorrect: true },
            { id: 2, textId: 'c2', content: '150,000,000 m/s', isCorrect: false },
            { id: 3, textId: 'c3', content: '1,000,000 m/s', isCorrect: false },
            { id: 4, textId: 'c4', content: '3,000,000 m/s', isCorrect: false },
        ],
        explanation: 'The speed of light in a vacuum is approximately 299,792,458 metres per second.',
        explanationLang: {},
        explanationDefaultLang: 'en',
        mapLangChoice: {},
        defaultChoiceLang: 'en',
        difficulty: Difficulty.MEDIUM,
        status: CardStatus.ACTIVE,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
    },
];

const spellingCards: ICard[] = [
    {
        "_id": "697093de6d497f2b4d5190e1",
        "topicId": "697090ca6d497f2b4d518fef",
        "question": {
            "audio": null,
            "audio_data": null,
            "image": null,
            "image_data": null,
            "text": "<p>Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. <strong data-path-to-node=\"19\" data-index-in-node=\"120\">Do not change the word given.</strong> Use between <strong data-path-to-node=\"19\" data-index-in-node=\"162\">three and six</strong> words.</p>\n<p>&nbsp;</p>\n<h4 data-path-to-node=\"20\">1. Jack's constant complaining annoys me the most. (WHAT)</h4>\n<p>==&gt; <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 1\" data-input-index=\"1\">me the most is Jack's constant complaining.</p>\n<p>&nbsp;</p>\n<h4 data-path-to-node=\"23\">2. I only found out the truth when I read his letter. (IT)</h4>\n<p>==&gt; &nbsp;<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 2\" data-input-index=\"2\"> I read his letter that I found out the truth.</p>\n<p data-path-to-node=\"25,0,0\">&nbsp;</p>\n<h4 data-path-to-node=\"26\">3. He simply wanted to help, but he made things worse. (ALL)</h4>\n<p>==&gt; &nbsp;<input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 3\" data-input-index=\"3\">to help, but he made things worse.&nbsp;</p>\n<p>&nbsp;</p>\n<h4 data-path-to-node=\"29\">4. The heavy rain led to the cancellation of the match. (THAT)</h4>\n<p>==&gt;&nbsp; It was the heavy rain <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 4\" data-input-index=\"4\"> the match to be cancelled.</p>\n<p>&nbsp;</p>\n<h4 data-path-to-node=\"32\">5. You need to talk to the manager, not the receptionist. (IT)</h4>\n<p>==&gt; <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 5\" data-input-index=\"5\"> to whom you need to talk.</p>\n<p data-path-to-node=\"34,0,0\">&nbsp;</p>\n<h4 data-path-to-node=\"35\">6. I've never been so insulted in my entire life. (IS)</h4>\n<p>==&gt; What <input style=\"border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; background: #f9f9f9;\" type=\"text\" placeholder=\"Answer 6\" data-input-index=\"6\"> the way I've been insulted today.</p>\n<p data-path-to-node=\"37,0,0\">&nbsp;</p>\n<h3 data-path-to-node=\"39\">&nbsp;</h3>"
        },
        "explanation": "<p>1, What annoys&nbsp; |&nbsp; Converts the subject \"Jack's complaining\" into a What-cleft focus.<br>2, It was only when&nbsp; |&nbsp; Emphasizes the specific moment of discovery.<br>3,&nbsp; All he wanted was&nbsp; |&nbsp; \"All\" acts like \"The only thing that...\" for strong emphasis on his intention.<br>4, that caused&nbsp; |&nbsp; It + was + Noun + that: Standard It-cleft focusing on the cause.<br>5, It is the manager | Focuses on the person who needs to be contacted.<br>6,&nbsp; is so insulting is&nbsp; |&nbsp; A more complex cleft structure (Pseudo-cleft) used to express strong emotion.</p>",
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
                "_id": "6970942e6d497f2b4d519177",
                "topicId": "697090ca6d497f2b4d518fef",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<p>\u000f6</p>"
                },
                "explanation": "",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": "697093de6d497f2b4d5190e1",
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "is so insulting is",
                        "isCorrect": true
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2026-01-21T08:54:06.859Z",
                "updatedAt": "2026-01-21T08:54:21.235Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "697093f46d497f2b4d5190fa",
                "topicId": "697090ca6d497f2b4d518fef",
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
                "parentId": "697093de6d497f2b4d5190e1",
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "What annoys",
                        "isCorrect": true
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2026-01-21T08:53:08.279Z",
                "updatedAt": "2026-01-21T08:53:08.279Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "697094006d497f2b4d519113",
                "topicId": "697090ca6d497f2b4d518fef",
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
                "parentId": "697093de6d497f2b4d5190e1",
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "It was only when",
                        "isCorrect": true
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2026-01-21T08:53:20.517Z",
                "updatedAt": "2026-01-21T08:53:20.517Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "697094096d497f2b4d51912c",
                "topicId": "697090ca6d497f2b4d518fef",
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
                "parentId": "697093de6d497f2b4d5190e1",
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "All he wanted was",
                        "isCorrect": true
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2026-01-21T08:53:29.094Z",
                "updatedAt": "2026-01-21T08:53:29.094Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "697094146d497f2b4d519145",
                "topicId": "697090ca6d497f2b4d518fef",
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
                "parentId": "697093de6d497f2b4d5190e1",
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "that caused",
                        "isCorrect": true
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2026-01-21T08:53:40.725Z",
                "updatedAt": "2026-01-21T08:55:01.560Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "6970941e6d497f2b4d51915e",
                "topicId": "697090ca6d497f2b4d518fef",
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
                "parentId": "697093de6d497f2b4d5190e1",
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "It is the manager",
                        "isCorrect": true
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2026-01-21T08:53:50.515Z",
                "updatedAt": "2026-01-21T08:53:50.515Z",
                "isActive": true,
                "isDeleted": false
            }
        ],
        "createdAt": "2026-01-21T08:52:46.053Z",
        "updatedAt": "2026-01-21T08:52:46.053Z",
        "isActive": true,
        "isDeleted": false
    },
    {
        "_id": "6970920c6d497f2b4d51903f",
        "topicId": "697090ca6d497f2b4d518fef",
        "question": {
            "audio": null,
            "audio_data": null,
            "image": null,
            "image_data": null,
            "text": "<p>Choose the correct option to complete the emphasized sentence.</p>"
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
                "_id": "6970923c6d497f2b4d519057",
                "topicId": "697090ca6d497f2b4d518fef",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<h4 data-path-to-node=\"5\">I don't need a holiday; I just need a good night's sleep.</h4>\n<p data-path-to-node=\"6\"><span class=\"math-inline\" data-math=\"\\rightarrow\" data-index-in-node=\"0\">==&gt;&nbsp;</span> __________ a good night's sleep.</p>\n<ul data-path-to-node=\"7\">\n<li>\n<p data-path-to-node=\"7,0,0\">&nbsp;</p>\n</li>\n</ul>"
                },
                "explanation": "<p><strong data-path-to-node=\"40,1,2,0\" data-index-in-node=\"0\">What-cleft:</strong> Focuses on the object/need. Structure: <em data-path-to-node=\"40,1,2,0\" data-index-in-node=\"51\">What + clause + is/was + emphasized part</em>.</p>",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": "6970920c6d497f2b4d51903f",
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "What I need is",
                        "isCorrect": true
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "It is what I need",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "That I need is",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "What do I need is",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2026-01-21T08:45:48.428Z",
                "updatedAt": "2026-01-21T08:45:48.428Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "697092686d497f2b4d519070",
                "topicId": "697090ca6d497f2b4d518fef",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<h4 data-path-to-node=\"8\">The lack of communication caused the misunderstanding, not the budget.</h4>\n<p data-path-to-node=\"9\"><span class=\"math-inline\" data-math=\"\\rightarrow\" data-index-in-node=\"0\">==&gt;</span> It __________ communication that caused the misunderstanding.</p>"
                },
                "explanation": "<p><strong data-path-to-node=\"40,2,2,0\" data-index-in-node=\"0\">It-cleft:</strong> Focuses on the subject (the lack of communication). Use \"was\" to match the past tense \"caused\".</p>",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": "6970920c6d497f2b4d51903f",
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "was the lack of",
                        "isCorrect": true
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "is the lack of",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "had been the lack",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "was lacking in",
                        "isCorrect": false
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2026-01-21T08:46:32.616Z",
                "updatedAt": "2026-01-21T08:46:32.616Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "6970929a6d497f2b4d519089",
                "topicId": "697090ca6d497f2b4d518fef",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<h4 data-path-to-node=\"11\">She didn't realize her mistake until she saw the final report.</h4>\n<p data-path-to-node=\"12\"><span class=\"math-inline\" data-math=\"\\rightarrow\" data-index-in-node=\"0\">==&gt;</span> It was only __________ she realized her mistake.</p>"
                },
                "explanation": "<p><strong data-path-to-node=\"40,3,2,0\" data-index-in-node=\"0\">Time Cleft:</strong> \"It was only when... that...\" is a fixed C1 structure for emphasizing time.</p>",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": "6970920c6d497f2b4d51903f",
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "until she saw the final report when",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "seeing the final report when",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "then she saw the final report that",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "when she saw the final report that",
                        "isCorrect": true
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2026-01-21T08:47:22.267Z",
                "updatedAt": "2026-01-21T08:47:22.267Z",
                "isActive": true,
                "isDeleted": false
            },
            {
                "_id": "697092eb6d497f2b4d5190c8",
                "topicId": "697090ca6d497f2b4d518fef",
                "question": {
                    "audio": null,
                    "audio_data": null,
                    "image": null,
                    "image_data": null,
                    "text": "<h4 data-path-to-node=\"14\">We want to find a sustainable solution to this problem.</h4>\n<p data-path-to-node=\"15\">==&gt;&nbsp; __________ to find is a sustainable solution to this problem.</p>"
                },
                "explanation": "<p><strong data-path-to-node=\"40,4,2,0\" data-index-in-node=\"0\">All-cleft &amp; What-cleft:</strong> Both are used to emphasize \"the only thing\" or \"the specific thing\".</p>",
                "explanationLang": {},
                "explanationDefaultLang": "en",
                "difficulty": 1,
                "status": 1,
                "parentId": "6970920c6d497f2b4d51903f",
                "choices": [
                    {
                        "id": 1,
                        "textId": "A",
                        "content": "It is what we want",
                        "isCorrect": false
                    },
                    {
                        "id": 2,
                        "textId": "B",
                        "content": "All we want",
                        "isCorrect": false
                    },
                    {
                        "id": 3,
                        "textId": "C",
                        "content": "What we want",
                        "isCorrect": false
                    },
                    {
                        "id": 4,
                        "textId": "D",
                        "content": "Both B and C are correct",
                        "isCorrect": true
                    }
                ],
                "mapLangChoice": {},
                "defaultChoiceLang": "en",
                "cardGame": 1,
                "childCards": [],
                "createdAt": "2026-01-21T08:48:43.623Z",
                "updatedAt": "2026-01-21T08:48:43.623Z",
                "isActive": true,
                "isDeleted": false
            }
        ],
        "createdAt": "2026-01-21T08:45:00.671Z",
        "updatedAt": "2026-01-21T08:45:00.671Z",
        "isActive": true,
        "isDeleted": false
    }
] as any;

const paraCards: ICard[] = [
    {
        _id: 'card-para-1',
        topicId: 'topic-1',
        cardGame: CardGame.PARA,
        question: {
            text: 'Read the passage and answer the questions below.',
        },
        choices: [],
        childCards: [
            {
                _id: 'para-child-1',
                topicId: 'topic-1',
                cardGame: CardGame.QUIZ,
                parentId: 'card-para-1',
                question: { text: 'According to the passage, what is the main topic?' },
                choices: [
                    { id: 1, textId: 'c1', content: 'Science', isCorrect: true },
                    { id: 2, textId: 'c2', content: 'History', isCorrect: false },
                    { id: 3, textId: 'c3', content: 'Literature', isCorrect: false },
                    { id: 4, textId: 'c4', content: 'Mathematics', isCorrect: false },
                ],
                explanation: 'The passage is about science.',
                explanationLang: {},
                explanationDefaultLang: 'en',
                mapLangChoice: {},
                defaultChoiceLang: 'en',
                difficulty: Difficulty.MEDIUM,
                status: CardStatus.ACTIVE,
                createdAt: new Date('2024-01-01'),
                updatedAt: new Date('2024-01-01'),
            },
            {
                _id: 'para-child-2',
                topicId: 'topic-1',
                cardGame: CardGame.QUIZ,
                parentId: 'card-para-1',
                question: { text: 'Which word best describes the tone of the passage?' },
                choices: [
                    { id: 1, textId: 'c1', content: 'Informative', isCorrect: true },
                    { id: 2, textId: 'c2', content: 'Humorous', isCorrect: false },
                    { id: 3, textId: 'c3', content: 'Sarcastic', isCorrect: false },
                    { id: 4, textId: 'c4', content: 'Melancholic', isCorrect: false },
                ],
                explanation: 'The tone is informative.',
                explanationLang: {},
                explanationDefaultLang: 'en',
                mapLangChoice: {},
                defaultChoiceLang: 'en',
                difficulty: Difficulty.MEDIUM,
                status: CardStatus.ACTIVE,
                createdAt: new Date('2024-01-01'),
                updatedAt: new Date('2024-01-01'),
            },
        ],
        explanation: '',
        explanationLang: {},
        explanationDefaultLang: 'en',
        mapLangChoice: {},
        defaultChoiceLang: 'en',
        difficulty: Difficulty.MEDIUM,
        status: CardStatus.ACTIVE,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
    },
];

export const QuizOneByOne: Story = {
    args: {
        topicSlug: 'science-basics',
        topicName: 'Science Basics',
        exerciseName: 'Solar System Quiz',
        title: 'Test Your Solar System Knowledge',
        description: 'Answer questions about the solar system',
        cards: quizCards,
        submitType: SubmitType.CHECK_ON_ANSWER,
        showType: 'one-by-one',
        shouldShowReviewResults: true,
    },
};

export const QuizShowAll: Story = {
    args: {
        topicSlug: 'science-basics',
        topicName: 'Science Basics',
        exerciseName: 'Solar System Quiz',
        cards: quizCards,
        submitType: SubmitType.CHECK_ON_SUBMIT,
        showType: 'all',
        shouldShowReviewResults: true,
    },
};

export const SpellingGame: Story = {
    args: {
        topicSlug: 'english-spelling',
        topicName: 'English Spelling',
        exerciseName: 'Spelling Practice',
        cards: spellingCards,
        submitType: SubmitType.CHECK_ON_ANSWER,
        showType: 'one-by-one',
        shouldShowReviewResults: true,
    },
};

export const ParagraphGame: Story = {
    args: {
        topicSlug: 'reading-comprehension',
        topicName: 'Reading Comprehension',
        exerciseName: 'Passage Questions',
        cards: paraCards,
        submitType: SubmitType.CHECK_ON_ANSWER,
        showType: 'one-by-one',
        shouldShowReviewResults: true,
    },
};

export const EmptyCards: Story = {
    args: {
        topicSlug: 'science-basics',
        topicName: 'Science Basics',
        exerciseName: 'Empty Exercise',
        cards: [],
    },
};

export const data: Story = {
    args: {
        topicSlug: 'science-basics',
        topicName: 'Science Basics',
        exerciseName: 'Solar System Quiz',
        cards: quizCards,
        submitType: SubmitType.CHECK_ON_ANSWER,
        showType: 'one-by-one',
        shouldShowReviewResults: true,
    },
};

// ---------------------------------------------------------------------------
// Study-progress flow stories
// ---------------------------------------------------------------------------

// Shared mock callbacks (log everything to console)
const studyProgressHandlers = {
    onUpdateStudyProgress: async (data: StudyProgressItem) => {
        console.log('[onUpdateStudyProgress]', data);
    },
    onUpdateStudyProgressAll: async (data: StudyProgressItem[]) => {
        console.log('[onUpdateStudyProgressAll]', data);
    },
    onUpdateProgressStatus: async (status: string) => {
        console.log('[onUpdateProgressStatus]', status);
    },
};

// Mock studyData: user answered card-quiz-1 correctly and card-quiz-2 incorrectly
const partialStudyData = {
    mapCardCorrections: {
        'card-quiz-1': {
            game: CardGame.QUIZ,
            isCorrect: true,
            selectedChoice: 1, // Mercury (correct)
            answer: '',
        },
        'card-quiz-2': {
            game: CardGame.QUIZ,
            isCorrect: false,
            selectedChoice: 3, // NaCl (wrong)
            answer: '',
        },
    },
};

// Mock studyData: user answered all 3 cards
const fullStudyData = {
    mapCardCorrections: {
        'card-quiz-1': {
            game: CardGame.QUIZ,
            isCorrect: true,
            selectedChoice: 1,
            answer: '',
        },
        'card-quiz-2': {
            game: CardGame.QUIZ,
            isCorrect: false,
            selectedChoice: 3,
            answer: '',
        },
        'card-quiz-3': {
            game: CardGame.QUIZ,
            isCorrect: true,
            selectedChoice: 1,
            answer: '',
        },
    },
};

/** Brand-new session — onUpdateProgressStatus("inprogress") is called on mount */
export const ProgressNew: Story = {
    args: {
        topicSlug: 'science-basics',
        topicName: 'Science Basics',
        exerciseName: 'Solar System Quiz',
        cards: quizCards,
        submitType: SubmitType.CHECK_ON_ANSWER,
        showType: 'one-by-one',
        shouldShowReviewResults: true,
        gameStatus: 'new',
        studyData: { mapCardCorrections: {} },
        ...studyProgressHandlers,
    },
};

/**
 * Resumed session (CHECK_ON_ANSWER) — first 2 cards are already answered and
 * show correct/incorrect immediately. Exercise starts at card 3.
 */
export const ProgressInProgressCheckOnAnswer: Story = {
    args: {
        topicSlug: 'science-basics',
        topicName: 'Science Basics',
        exerciseName: 'Solar System Quiz',
        cards: quizCards,
        submitType: SubmitType.CHECK_ON_ANSWER,
        showType: 'one-by-one',
        shouldShowReviewResults: true,
        gameStatus: 'inprogress',
        studyData: partialStudyData,
        ...studyProgressHandlers,
    },
};

/**
 * Resumed session (CHECK_ON_SUBMIT) — first 2 cards show previous selections
 * but no correct/incorrect feedback yet. Exercise starts at card 3.
 */
export const ProgressInProgressCheckOnSubmit: Story = {
    args: {
        topicSlug: 'science-basics',
        topicName: 'Science Basics',
        exerciseName: 'Solar System Quiz',
        cards: quizCards,
        submitType: SubmitType.CHECK_ON_SUBMIT,
        showType: 'all',
        shouldShowReviewResults: true,
        gameStatus: 'inprogress',
        studyData: partialStudyData,
        ...studyProgressHandlers,
    },
};

/**
 * Completed session — goes straight to the review screen with results
 * calculated from studyData (2/3 correct → 67%).
 */
export const ProgressCompleted: Story = {
    args: {
        topicSlug: 'science-basics',
        topicName: 'Science Basics',
        exerciseName: 'Solar System Quiz',
        cards: quizCards,
        submitType: SubmitType.CHECK_ON_ANSWER,
        showType: 'one-by-one',
        shouldShowReviewResults: true,
        gameStatus: 'completed',
        studyData: fullStudyData,
        ...studyProgressHandlers,
    },
};
