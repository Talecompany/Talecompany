import React, { useState, useRef, useEffect } from 'react';

import emojilove from '../images/emoji.png';
import emojilaugh from '../images/emoji@2x-1.png';
import emojipocker from '../images/emoji-2.png';
import emojisad from '../images/emoji-3.png';
import emojismile from '../images/emoji-6.png';
<<<<<<< HEAD
import emojiangry from '../images/Emoji_angry.png';
=======
import emojiangry from '../images/emoji_angry.png';
>>>>>>> origin/FrontEnd-Chadi

const EmojiComponent = ({ onEmojiSelect, selectedEmoji }) => {
  const emojis = [
    { name: 'Emoji_love', src: emojilove },
    { name: 'Emoji_laugh', src: emojilaugh },
    { name: 'Emoji_smile', src: emojismile },
    { name: 'Emoji_pocker', src: emojipocker },
    { name: 'Emoji_sad', src: emojisad },
    { name: 'Emoji_angry', src: emojiangry }
  ];
  const emojiSize = '80px'; // Adjust this value to your desired size
  const angryEmojiSize = '80px'; // Adjust this value for the angry emoji
  const [isPressed, setIsPressed] = useState(false);

  const handleEmojiClick = (emojiSrc) => {
    onEmojiSelect(emojiSrc);
  };

  const handlePressEnd = () => {
    setTimeout(() => setIsPressed(false), 200);
  };

  const divRef = useRef(null);

  useEffect(() => {
    const element = divRef.current;
    if (element) {
      element.addEventListener('mousedown', handlePressEnd);
      return () => element.removeEventListener('mousedown', handlePressEnd); // Cleanup
    }
  }, [divRef]);

  const styles = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const divStyle = {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '7px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out', // Transition for hover effect
  };

  const pressedStyle = {
    backgroundColor: 'white',
    transition: 'background-color 0.2s ease-out', // Animate color change on press end
  };

  const hoverStyle = {
    backgroundColor: 'lightblue', // Apply light blue background on hover
  };

  const imgStyle = {
    width: emojiSize,
    height: emojiSize,
    border: '2px solid transparent', // Add default border for cleaner visual cues
  };

  const imgSelectedStyle = {
    backgroundColor: 'white', // Apply yellow background on selection
  };

  const imgAngryStyle = {
    width: angryEmojiSize,
    height: angryEmojiSize, // Apply styles for the angry emoji
  };

  return (
    <div style={styles}>
      {emojis.map((emoji, index) => (
        <div
          key={index}
          ref={divRef}
          style={{
            ...divStyle,
            ...(isPressed && pressedStyle),
            ...(selectedEmoji === emoji.src && imgSelectedStyle),
            ...(selectedEmoji === emoji.src && hoverStyle), // Hover effect for selected emoji
          }}
          onMouseDown={() => handleEmojiClick(emoji.src)}
        >
          <img src={emoji.src} alt={emoji.name} style={emoji.name === 'Emoji_angry' ? { ...imgStyle, ...imgAngryStyle } : imgStyle} />
          {emoji.name === 'Emoji_angry' && <p>Very Disatisfied</p>}
          {emoji.name === 'Emoji_love' && <p>Very Satisfied</p>}
        </div>
      ))}
    </div>
  );
};

export default EmojiComponent;
