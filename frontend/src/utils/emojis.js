export const emojiArray = [
  "🤹‍♂️",
  "🎨",
  "🤯",
  "🎭",
  "🪄",
  "👾",
  "🤖",
  "🎢",
  "🪅",
  "🕺",
  "💃",
  "🍩",
  "🛸",
  "✨",
  "🐙",
  "🎸",
  "🎮",
  "🥷",
  "🦄",
  "🎷",
];

export const getRandomEmoji = () => {
  return emojiArray[Math.floor(Math.random() * emojiArray.length)];
};
