import {getJournalEntries} from "./journalData.js"
import { journalEntryComponent } from "./journalEntry.js"

const entryLog = document.querySelector("#entryLog")

export const entryListComponent = () => {
    const entries = getJournalEntries()

    for (const entry of entries) {
    entryLog.innerHTML += journalEntryComponent(entry)
    }

}
