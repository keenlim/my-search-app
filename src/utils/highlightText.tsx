import React from 'react';
import { Highlight } from '../types/Highlights';

const highlightText = (text: string, highlights: Highlight[]) : JSX.Element => {
    // If there's no highlights being set, then return the original text
    if (!highlights || highlights.length === 0) {
        return <>{text}</>
    }

    // Sort highlights by BeginOffset to ensure correct processing order
    const sortedHighlights = [...highlights].sort((a,b) => a.BeginOffset - b.BeginOffset);
    console.log(sortedHighlights)

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    sortedHighlights.forEach((highlight, index) => {
        const {BeginOffset, EndOffset} = highlight;

        // Add non-highlighted text before the current highlight
        if (BeginOffset > lastIndex) {
            parts.push(text.substring(lastIndex, BeginOffset))
        }

        // Add highlighted text
        const highlightedText = text.substring(BeginOffset, EndOffset);
        parts.push(
            <span key={index} className="font-extrabold">
                {highlightedText}
            </span>
        );
        lastIndex = EndOffset;
    })

    // Add any remaining non-highlighted text after the last highlight
    if (lastIndex<text.length){
        parts.push(text.substring(lastIndex))
    }

    return (
        <>{parts}</>
    )

}

export default highlightText;