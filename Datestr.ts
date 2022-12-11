import { formatDistanceToNow } from "date-fns";
import { enGB } from "date-fns/locale";

import { MarkdownRenderChild } from "obsidian";

export class Datestr extends MarkdownRenderChild {
  constructor(containerEl: HTMLElement) {
    super(containerEl);
  }

  onload() {
    const text = this.containerEl.innerText;

    const deadlineDates = text.match(/\d{4}-\d{2}-\d{2}/g);

    deadlineDates?.forEach(deadlineDate => {
      const dist = formatDistanceToNow(Date.parse(deadlineDate), {addSuffix: true, locale: enGB});
      console.log(new Date(deadlineDate))

      this.containerEl.innerHTML = this.containerEl.innerHTML.replace(
        deadlineDate,
        `${deadlineDate} (${dist})`
      );
    });
  }
}