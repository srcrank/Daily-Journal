export const journalEntryComponent = (entry) => {
    return `<section id="entry--${entry.id}" class="journalEntry">
    <h3 class="entry-concept">${entry.concept}</h3>
    <ul>
        <li class="entry-details">date: ${entry.date}</li>
        <li class="entry-details">${entry.entry}</li>
        <li class="entry-details">mood: ${entry.mood}</li>
    </ul>
    </section>
    `
}