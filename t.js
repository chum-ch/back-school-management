
const examSchema = {
  sections: [
    {
      title: 'Section 1',
      questions: [
        {
          type: 'answer',
          text: 'What is the capital of France?',
          points: 5,
          correctAnswer: 'Paris',
          userAnswer: 'Paris'
        },
        {
          type: 'checkbox',
          text: 'Which of the following are fruits?',
          points: 5,
          userAnswer: [
            { text: 'Apple', isCorrect: true },
            { text: 'Banana', isCorrect: true },

          ],
          options: [
            { text: 'Apple', isCorrect: true },
            { text: 'Carrot', isCorrect: false },
            { text: 'Banana', isCorrect: true },
            { text: 'Potato', isCorrect: false }
          ]
        },
        {
          type: 'option',
          text: 'Who painted the Mona Lisa?',
          points: 5,
          userAnswer: { text: 'Leonardo da Vinci', isCorrect: true },
          options: [
            { text: 'Leonardo da Vinci', isCorrect: true },
            { text: 'Pablo Picasso', isCorrect: false },
            { text: 'Vincent van Gogh', isCorrect: false },
            { text: 'Michelangelo', isCorrect: false }
          ]
        }
      ]
    },
    // Add more sections and questions as needed
  ]
};

function calculateTotalScore(schema) {
  let totalScore = 0;
  schema.sections.forEach(section => {
    section.questions.forEach(question => {
      if (question.type === 'answer') {
        if (question.userAnswer.toLowerCase() === question.correctAnswer.toLowerCase()) {
          totalScore += question.points;
        }
      } else if (question.type === 'checkbox') {
        const userSelectedOptions = question.userAnswer.map(option => option.text);
        const correctOptions = question.options.filter(option => option.isCorrect).map(option => option.text);
        const isCorrect = arraysEqual(userSelectedOptions, correctOptions);
        if (isCorrect) {
          totalScore += question.points;
        }
      } else if (question.type === 'option') {
        const userSelectedOption = question.userAnswer.text;
        const correctOption = question.options.find(option => option.isCorrect).text;
        if (userSelectedOption === correctOption) {
          totalScore += question.points;
        }
      }
    });
  });
  return totalScore;
}

function arraysEqual(userSelectedOptionsArray, correctOptionsArray) {
  if (userSelectedOptionsArray.length !== correctOptionsArray.length) {
    return false;
  }
  for (let i = 0; i < userSelectedOptionsArray.length; i++) {
    if (userSelectedOptionsArray[i] !== correctOptionsArray[i]) {
      return false;
    }
  }
  return true;
}

// // Calculate the total score for the exam schema
const totalScore = calculateTotalScore(examSchema);
console.log('Total Score:', totalScore);
// const code = Math.floor(100000 + Math.random() * 900000);
// console.log(code);

const employeeTemplateHeaders = {
  NSSF_employment_type: {
    Path: 'EmploymentType',
    // HeaderGroup: headerGroup.Insurance,
    Rules: [
      {
        Require: false,
      },
      {
        ValueType: 'enum',
      },
      {
        Options: ['ក្នុងប្រព័ន្ធ', 'ក្រៅប្រព័ន្ធ']
      }
    ],
    ErrorMessage: '',
  },
  NSSF_employment_status: {
    Path: 'EmploymentStatus',
    // // HeaderGroup: headerGroup.Insurance,
    Rules: [
      {
        Require: false,
      },
      {
        ValueType: 'enum',
      },
      {
        Options: ['កំពុងធ្វើការ', 'លំហែរមាតុភាព', 'កំពុងព្យាបាលជំងឺ']
      }
    ],
    ErrorMessage: '',
  },
  Personal_contact_type: {
    Path: 'PersonalContactType',
    // // HeaderGroup: headerGroup.PersonalContact,
    Rules: [
      {
        Require: false,
      },
      {
        ValueType: 'string',
      }
    ],
    ErrorMessage: '',
  },
  Personal_contact_value: {
    Path: 'PersonalContactValue',
    // // HeaderGroup: headerGroup.PersonalContact,
    Rules: [
      {
        Require: false,
      },
      {
        ValueType: 'string',
      }
    ],
    ErrorMessage: '',
  },
}
const cellData = 'លំហែរមាតុភាព';
for (const colKey of Object.keys(employeeTemplateHeaders)) {
  const rules = employeeTemplateHeaders[colKey];
  for (const rule of rules.Rules) {
    for (const keyRule of Object.keys(rule)) {
      console.log('keyrule', keyRule);
    }
  }
}

class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = "Filled rectangle";
    this.color = color;
  }
}
console.log(new FilledRectangle('red'))