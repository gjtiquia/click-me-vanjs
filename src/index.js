import { van } from "./lib/index.js"

const { button, div, p } = van.tags

function App() {

    const counter = van.state(1)

    return (
        div(
            p(counter),
            button({ onclick: () => counter.val++ },
                "Click Me"
            )
        )
    )
}

van.add(document.body, App)