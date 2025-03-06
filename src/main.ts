import './styles/home.css'



// DOM's Shortcuts :
const START_NEW_GAME_BTN = document.querySelector("#start-button")!

async function startNewGame() {
    alert("Game hasn't been implemented.");

    /*
    MENU.classList.add("notplaying");
    Game.engine.displayLoadingUI();
    await Game.buildScene();
    await Game.initPlayer();
    Game.engine.hideLoadingUI();
    Game.playCutscene();
    Game.play();
    */
}

START_NEW_GAME_BTN.addEventListener("click", startNewGame);
