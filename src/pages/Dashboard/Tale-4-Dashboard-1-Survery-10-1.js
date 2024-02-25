// In the parent component where you use EmojiComponent

import React, { useState } from 'react';
import EmojiComponent from './EmojiComponent';

const ParentComponent = () => {
    const [selectedEmoji, setSelectedEmoji] = useState(null); // State to track selected emoji

    // Function to handle emoji selection
    const handleEmojiSelect = (index) => {
        setSelectedEmoji(index); // Update selected emoji state
    };

    return (
        <div>
            <h1>Select an Emoji:</h1>
            <EmojiComponent onEmojiSelect={handleEmojiSelect} selectedEmoji={selectedEmoji} />
        </div>
    );
};

export default ParentComponent;

