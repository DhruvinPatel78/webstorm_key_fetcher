import './App.css'

const App = () => {

    const pageChange = () => {
        let iframe = document.getElementById("webstorm-key");
        window.alert(iframe.contentWindow.document.querySelector('div:nth-child(26) > pre > code').innerText);
    }

    return (
        <div className={"App"}>
            <h2>Webstorm Key Fetcher</h2>
            <button className={"Button"} onClick={pageChange}>Hello</button>
            <iframe id="webstorm-key" title={"Webstorm Key"} src="https://blog.cpming.top/p/jetbrains-ide-activation-code"
                    style={{width: 500, height: 200}}/>
        </div>
    );
}

export default App;
