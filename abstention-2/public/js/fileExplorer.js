async function loadFileExplorer() {
    selectedCity = 'nantes';
    selectedCityData = await fetchCityData(selectedCity);
    const citiesRq = await fetch('api/cities/');
    citiesMap = await citiesRq.json();
    const metropoleRq = await fetch('api/metropole/');
    metropoleData = await metropoleRq.json();
    metropoleData = metropoleData[selectedCity];
    const container = document.getElementById('container');

    const fileExplorerHtml = await loadTemplate('templates/file_explorer/file_explorer.ejs', FOLDER_TITLES);
    container.innerHTML = fileExplorerHtml;

    const fileProgressBars = document.getElementsByClassName('file-explorer-item-file-progress-bar');

    let i = 0;
    let folderElement;
    for (const fileData of FOLDER_TITLES.filesData) {
        if (fileData.progress !== 100) {
            fileProgressBars[i].style.width = `${fileData.progress}%`;
            i++;
        }
        if (fileData.progress === 100) {
            folderElement = document.getElementById(fileData.tag).addEventListener('click', () => {
                loadFolder(fileData.folderName);
            });
        }
    }
};
