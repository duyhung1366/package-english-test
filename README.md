# @english-test-free/exercise-system

Exercise system components for English Test Free platform.

## Features

- 🎯 **ExerciseRunner**: Main component for running exercises
- 🎮 **GameRenderer**: Smart renderer for different game types
- ❓ **Quiz**: Multiple choice quiz component
- ✍️ **Spelling**: Fill-in-the-blank spelling component
- 📝 **ParaGame**: Paragraph-based exercise component
- 📊 **ReviewResults**: Results review component
- 🎨 **CircularScore**: Circular score display component

## Installation

See [INSTALL_PACKAGE.md](../../INSTALL_PACKAGE.md) in the root project for installation instructions.

## Usage

```tsx
import { ExerciseRunner } from '@english-test-free/exercise-system';

function MyExercisePage() {
  return (
    <ExerciseRunner
      topic={topic}
      exercise={exercise}
      cards={cards}
      seo={seo}
      showType="one-by-one"
    />
  );
}
```

## Components

### ExerciseRunner

Main component for running exercises with support for different game types.

**Props:**
- `topic`: ITopic - The topic object
- `exercise`: ITopic - The exercise object
- `cards`: ICard[] - Array of cards
- `seo`: ISeo | null - SEO data
- `breadcrumbItems?`: ITopic[] - Breadcrumb items
- `siblingTopics?`: ITopic[] - Sibling topics for sidebar
- `showType?`: 'all' | 'one-by-one' - Display mode

### GameRenderer

Renders different game types based on card.cardGame.

### Quiz

Multiple choice quiz component with instant or delayed feedback.

### Spelling

Fill-in-the-blank spelling exercise component.

### ParaGame

Paragraph-based exercise with nested questions.

### ReviewResults

Shows review of all answers with correct/incorrect feedback.

### CircularScore

Displays score in a circular progress indicator.

## Models

The package includes all necessary TypeScript interfaces and enums:

- `ICard`, `Card` - Card data models
- `ITopic` - Topic data model
- `CardGame` - Game type enum
- `SubmitType` - Submit type enum
- `Difficulty` - Difficulty level enum

## Utilities

- `cryptoUtils` - Encryption/decryption utilities
- `exerciseUtils` - Exercise-related utilities
- `shuffleArray` - Array shuffling utility

## Development

```bash
# Install dependencies
yarn install

# Build the package
yarn build

# Watch mode for development
yarn dev

# Clean build artifacts
yarn clean
```

## Publishing

See [PUBLISH.md](./PUBLISH.md) for detailed publishing instructions.

## License

MIT

