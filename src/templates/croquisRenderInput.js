const croquisRenderInput = () => {
    const view = `
    <label class="label" for="croquisInput">Sube una imagen del croquis</label>
    <input class="input" type="file" name="croquisInput" id="croquisInput">

    <div id="croquisDisplayArea"></div>
    `

    return view
}

export default croquisRenderInput