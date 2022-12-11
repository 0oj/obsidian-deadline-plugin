import { formatDistanceToNow } from "date-fns";
import { MarkdownRenderChild } from "obsidian";

export class Datestr extends MarkdownRenderChild {
  constructor(containerEl: HTMLElement) {
    super(containerEl);
  }

  onload() {
    const text = this.containerEl.innerText;

    const deadlineDates = text.match(/\d{1,2}[-/]\d{1,2}[-/]\d{4}/g);

    if (!deadlineDates) return;

    deadlineDates.forEach(deadlineDate => {
      const dist = formatDistanceToNow(new Date(deadlineDate), {addSuffix: true});

      this.containerEl.innerHTML = this.containerEl.innerHTML.replace(
        deadlineDate,
        `${deadlineDate} (${dist})`
      );
    });
  }
}