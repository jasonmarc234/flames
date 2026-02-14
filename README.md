# FLAMES Game 🔥

An interactive web-based implementation of the classic FLAMES relationship game.

## About FLAMES

FLAMES is a popular game among friends to determine the relationship between two people. The name stands for:

- **F** - Friends
- **L** - Lovers
- **A** - Affectionate
- **M** - Marriage
- **E** - Enemies
- **S** - Siblings

## How It Works

1. Enter two names in the input fields
2. The game finds all common letters between the names
3. Counts the total occurrences of these common letters in both names
4. Uses this count to determine the relationship by counting through F-L-A-M-E-S
5. The letter you land on reveals the relationship!

### Example

**Names:** Jason and Jhoanna

**Common letters:** j, a, o, n
- In "jason": j(1) + a(1) + o(1) + n(1) = 4
- In "jhoanna": j(1) + o(1) + a(2) + n(2) = 6
- **Total count: 10**

**Counting:** F(1), L(2), A(3), M(4), E(5), S(6), F(7), L(8), A(9), M(10)

**Result:** Marriage! 💑

## Features

- 🎨 Beautiful gradient design with warm colors
- ✨ Smooth animations and transitions
- 🎯 Visual highlighting of the result
- 📱 Responsive design
- ⌨️ Keyboard support (Enter key)
- ❌ Input validation with error messages

## Technologies Used

- HTML5
- CSS3 (with gradients and animations)
- Vanilla JavaScript

## Color Palette

- Classic Rose: `#A10100`
- Bishop: `#DA1F05`
- Tribal Orange: `#F33C04`
- Bold Orange: `#FE650D`
- Lightning Yellow: `#FFC11F`
- Glossy Yellow: `#FFF75D`

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/flames-game.git
```

2. Navigate to the project directory:
```bash
cd flames-game
```

3. Open `index.html` in your web browser

That's it! No build process or dependencies required.

## File Structure

```
flames-game/
│
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── script.js       # Game logic
└── README.md       # Project documentation
```

## Usage

Simply open the `index.html` file in any modern web browser. Enter two names and click the "Pair" button to see your relationship destiny!

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created with ❤️ for fun and learning

---

*Note: This is just a fun game and has no scientific basis for determining relationships!*
