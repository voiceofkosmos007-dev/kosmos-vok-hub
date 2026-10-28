<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Import the committed image files directly and PDFs with `?url` for GitHub Pages; Vite then emits media with the configured repository base path instead of relying on Lovable-only asset endpoints.
- Keep static prerendering limited to the explicit page list with link crawling disabled so supporting documents are never treated as HTML pages.
