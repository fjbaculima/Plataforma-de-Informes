const Concrete = () => {
    const view = `

    <div class="container-h1">
           <h1 class="h1">Crea tu informe estructural de concreto</h1>
       </div>
        <form class="form">
            <div class="personal-data field">
                <div class="container-h2">
                    <h2 class="h2">Ingresa tus datos personales</h2>
                </div>

                <div class="personal-data-input field-input">
                    <div class="personal-data-container input-container">
                        <label class="label" for="name">Tu nombre</label>
                        <input class="input" type="text" name="name" id="name" placeholder="Tu nombre...">
                    </div>

                    <div class="personal-data-container input-container">
                        <label class="label" for="senescytCode">Tu registro de la Senescyt</label>
                        <input class="input" type="text" name="senescytCode" id="senescytCode" placeholder="Número de registro">
                    </div>

                    <div class="personal-data-container input-container"> 
                        <label class="label" for="profession">Tu profesión</label>
                        <select class="input" name="profession" id="profession">
                            <option  value="ingenieroCivil">Ingeniería Civil</option>
                            <option value="ingenieroMecanico">Ingeniería Mecánica</option>
                            <option value="arquitecto">Arquitectura</option>
                        </select>
                    </div>  
                </div>
            </div>

            <div class="project-data field">
                <div class="container-h2">
                    <h2 class="h2">Ingresa los datos del proyecto</h2>
                </div>
                <div class="project-data-input field-input">

                    <div class="project-data-container input-container">
                        <label class="label" for="projectName">Proyecto</label>
                        <input class="input" type="text" name="projectName" id="projectName" placeholder="Nombre del proyecto">
                    </div>

                    <div class="project-data-container input-container">
                        <label class="label" for="client">Cliente</label>
                        <input class="input" type="text" name="client" id="client" placeholder="Nombre de tu cliente...">
                    </div>

                    <div class="project-data-container input-container">
                        <label class="label" for="address">Dirección</label>
                        <input class="input" type="text" name="address" id="address" placeholder="Calle, cantón, provincia...">
                    </div>

                    <!-- <div class="project-data-container input-container">
                        <button type="button" class="button button-input" id="croquisButton">Subir croquis</button> 
                    </div> -->

                    <div class="project-data-container input-container" id="croquisRenderInput">
                    
                        <label class="label" for="croquisInput">Sube la URL de la imagen del croquis</label>
                        <input class="input" type="text" name="croquisInput" id="croquisInput" placeholder="Croquis URL">

                    </div>

                </div>
            </div>

            <div class="standard-data field">
                <div class="container-h2">
                    <h2 class="h2">Selecciona las normas de diseño</h2>
                </div>
                <div class="standard-data-input field-input">
                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="NEC15" id="NEC15">
                        <label class="label label-checkbox" for="NEC15">Norma Ecuatoriana de la construcción (NEC 2015)</label>
                    </div>

                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="ACI" id="ACI">
                        <label class="label label-checkbox" for="ACI">Building Code Requirements for Structural Concrete (ACI 318-19)</label>
                    </div>

                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="ASCE" id="ASCE">
                        <label class="label label-checkbox" for="ASCE">Minimum Design Loads for Buildings and Other Structures (ASCE 7-10)</label>
                    </div>

                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="ASTM" id="ASTM">
                        <label class="label label-checkbox" for="ASTM">ASTM A706</label>
                    </div>

                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="otraNorma" id="otraNormaCheckbox">
                        <input class="input" type="text" name="otraNorma" id="otraNorma" placeholder="Otra Norma">
                    </div>
                </div>
            </div>

            <div class="personal-data field">
                <div class="container-h2">
                    <h2 class="h2">Ingresa las caracterísitcas de los materiales</h2>
                </div>
                <div class="material-data-input field-input">
                    <div class="container-h3">
                        <h3 class="h3">Concreto</h3>
                    </div>

                    <div class="material-data-container input-container">
                        
                        <label class="label" for="concrete">Resistencia a la compresión a los 28 días (f'c), kg/cm²</label>
                        <input class="input" type="text" name="concrete" id="concrete" placeholder="Resistencia en kg/cm²">
                    </div>

                    <div class="container-h3">
                        <h3 class="h3">Acero</h3>
                    </div>

                    <div class="material-data-container input-container">
                       
                        <label class="label" for="steel-flow">Resistencia a la fluencia del acero (fy), kg/cm²</label>
                        <input class="input" type="text" name="steel-flow" id="steel-flow" placeholder="Resistencia en kg/cm²">
                    </div>
                    <div class="material-data-container input-container">
                        <label class="label" for="modulus-of-elasticity">Módulo de elasticidad (E), kg/cm²</label>
                        <input class="input" type="text" name="modulus-of-elasticity" id="modulus-of-elasticity" placeholder="Módulo de elasticidad en kg/cm²">
                    </div>    
                    
                </div>
            </div>

            <div class="personal-data field">
                <div class="container-h2">
                    <h2 class="h2">Cargas</h2>
                </div>

                <div class="load-data-input field-input">

                    <div class="container-h3">
                        <h3 class="h3">Cargas Gravitacionales Totales</h3>
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="structure-weight">Peso propio de la estructura de hormigón</label>
                        <input class="input" type="text" name="structure-weight" id="structure-weight" placeholder="Peso propio de la estructura">
                    </div>    

                    <div class="material-data-container input-container">   
                        <label class="label" for="structure-weight">Peso propiol acero de refuerzo</label>
                        <input class="input" type="text" name="steel-weight" id="steel-weight" placeholder="Peso propio del acero de refuerzo">
                    </div>    

                    <div class="material-data-container input-container">
                        <label class="label" for="deadLoad">Carga muerta adicional</label>
                        <input class="input" type="text" name="deadLoad" id="deadLoad" placeholder="Peso propio del acero de refuerzo">
                    </div>
                    
                    <div class="material-data-container input-container">
                        <label class="label" for="liveLoad">Cargas vivas, Toneladas</label>
                        <input class="input" type="text" name="liveLoad" id="liveLoad" placeholder="Cargas vivas totales">
                    </div>

                    <div class="container-h3">
                        <h3 class="h3">Cargas Sísmicas</h3>
                    </div>

                    
                    <div class="load-data-container input-container">
                        <label class="label" for="parroquia">Parroquia</label>
                        <input class="input" type="text" name="parroquia" id="parroquia" placeholder="parroquia">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="canton">Cantón</label>
                        <input class="input" type="text" name="canton" id="canton" placeholder="Cantón...">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="province">Provincia</label>
                        <input class="input" type="text" name="province" id="province" placeholder="province">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="seismicZone">Zona sísimica</label>
                        <input class="input" type="text" name="seismicZone" id="seismicZone" placeholder="Zona sísmica: I, II, II, IV, V">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="soilType">Tipo de suelo</label>
                        <select class="input" name="soilType" id="soilType">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="importanceCoeff">Coeficiente de importancia</label>
                        <input class="input" type="text" name="importanceCoeff" id="importanceCoeff" placeholder="Coeficiente de importancia según tipo de estructura">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="basal">Cortante basal</label>
                        <input class="input" type="text" name="basal" id="basal" placeholder="Cortante basal">
                    </div>
                    
                    <div class="load-data-container input-container">
                        <label class="label" for="reducción">Factor de reducción</label>
                        <input class="input" type="text" name="reductionFactor" id="reductionFactor" placeholder="Factor de reducción de respuesta">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="Z">Factor de aceleración de zona sísmica (Z)</label>
                        <input class="input" type="text" name="Z" id="Z" placeholder="Factor Z">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="n">Relación de amplificación espectral (n)</label>
                        <input class="input" type="text" name="n" id="n" placeholder="Relación de amplificación espectral">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="Ct">Coeficiente Ct</label>
                        <input class="input" type="text" name="Ct" id="Ct" placeholder="Coeficiente Ct">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="alpha">Coeficiente para periodo (&alpha;)</label>
                        <input class="input" type="text" name="alpha" id="alpha" placeholder="Coeficiente para periodo">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="Fa">Factor de sitio (Fa)</label>
                        <input class="input" type="text" name="Fa" id="Fa" placeholder="Factor de sitio (Fa)">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="Fd">Factor de sitio (Fd)</label>
                        <input class="input" type="text" name="Fd" id="Fd" placeholder="Factor de sitio (Fd)">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="Fs">Factor de comportamiento inelástico (Fs)</label>
                        <input class="input" type="text" name="Fs" id="Fs" placeholder="Factor Fs">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="r">Factor asociado al Tr (r)</label>
                        <input class="input" type="text" name="r" id="r" placeholder="Factor asociado al Tr (r)">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="phiP">Factor de irregularidad en planta (&Phi;p)</label>
                        <input class="input" type="text" name="phiP" id="phiP" placeholder="Factor de irregularidad en planta">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="phiE">Factor de irregularidad en elevación (&Phi;e)</label>
                        <input class="input" type="text" name="phiE" id="phiE" placeholder="Factor de irregularidad en elevación">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="g">Aceleración de la gravedad</label>
                        <input class="input" type="text" name="g" id="g" placeholder="Aceleración de la gravedad (g)">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="T">Periodo método 1 (T)</label>
                        <input class="input" type="text" name="T" id="T" placeholder="Periodo m[étodo 1 (T)">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="Tt">Periodo menor al método 2 (1.3T)</label>
                        <input class="input" type="text" name="Tt" id="Tt" placeholder="Periodo menor al método 2 (1.3T)">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="TO">Periodo límite en T=TO</label>
                        <input class="input" type="text" name="TO" id="TO" placeholder="TO">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="TC">Periodo límite en T=TC</label>
                        <input class="input" type="text" name="TC" id="TC" placeholder="TC">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="TL">Periodo límite en T=TL</label>
                        <input class="input" type="text" name="TL" id="TL" placeholder="TL">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="Sa">Aceleración en T=0 (Sa)</label>
                        <input class="input" type="text" name="Sa" id="Sa" placeholder="Sa">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="Sao">Aceleración en T=TO (Sao)</label>
                        <input class="input" type="text" name="Sao" id="Sao" placeholder="Sao">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="f">Factor de reducción (f)</label>
                        <input class="input" type="text" name="f" id="f" placeholder="f">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="movilizedMass">Porcentaje de masa movilizada</label>
                        <input class="input" type="text" name="movilizedMass" id="movilizedMass" placeholder="Porcentaje de masa movilizada">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="vibrationModes">Número de modos de vibración</label>
                        <input class="input" type="text" name="vibrationModes" id="vibrationModes" placeholder="Modos de vibración">
                    </div>

                    <div class="load-data-container input-container">
                        <label class="label" for="vibrationModesNinety">Número de modos de vibración para llegar al 90% de masa movilizada</label>
                        <input class="input" type="text" name="vibrationModesNinety" id="vibrationModesNinety" placeholder="Modos de vibración para alcanzar el 90% de masa movilizada">
                    </div>

                </div>

            </div>

            <div class="personal-data field">
                <div class="container-h2">
                    <h2 class="h2">Datos Geotécnicos</h2>
                </div>

                <div class="geotech-data-input field-input">

                    <div class="geotech-data-container input-container">
                        <label class="label" for="qAd">Q admisible</label>
                        <input class="input" type="text" name="qAd" id="qAd" placeholder="Q admisible">
                    </div>

                    <div class="geotech-data-container input-container">
                        <label class="label" for="geotechSoilType">Tipo de suelo</label>
                        <input class="input" type="text" name="geotechSoilType" id="geotechSoilType" placeholder="Suelo">
                    </div>

                    <div class="geotech-data-container input-container">
                        <label class="label" for="angleFrict">Ángulo de fricción</label>
                        <input class="input" type="text" name="angleFrict" id="angleFrict" placeholder="Ángulo de fricción">
                    </div>

                    <div class="geotech-data-container input-container">
                        <label class="label" for="wet">Contenido de humedad</label>
                        <input class="input" type="text" name="wet" id="wet" placeholder="Contenido de humedad">
                    </div>

                    <div class="geotech-data-container input-container">
                    
                        <label class="label" for="geotechSoilProfileInput">Sube la URL de la imagen del perfil de suelo</label>
                        <input class="input" type="text" name="geotechSoilProfileInput" id="geotechSoilProfileInput" placeholder="Perfil de suelo URL">

                    </div>

                </div>

            </div>

            <div class="personal-data field">
                <div class="container-h2">
                    <h2 class="h2">Combinaciones de cargas de diseño</h2>
                </div>
                <div class="standard-data-input field-input">

                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="EQ1" id="EQ1">
                        <label class="label label-checkbox" for="EQ1">1.4D</label>
                    </div>

                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="EQ2" id="EQ2">
                        <label class="label label-checkbox" for="EQ2">1.2D + 1.6L + 0.5max(Lr, S, R)</label>
                    </div>

                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="EQ3" id="EQ3">
                        <label class="label label-checkbox" for="EQ3">1.2D + 1.6max(Lr, S, R) + max(Lr, 0.5W)</label>
                    </div>

                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="EQ4" id="EQ4">
                        <label class="label label-checkbox" for="EQ4">1.2D + W + L + 0.5max(Lr, S, 0.5W)</label>
                    </div>

                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="EQ5" id="EQ5">
                        <label class="label label-checkbox" for="EQ5">1.2D + E + L + 0.2S</label>
                    </div>

                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="EQ6" id="EQ6">
                        <label class="label label-checkbox" for="EQ6">0.9D + W</label>
                    </div>

                    <div class="standard-data-container input-container">
                        <input type="checkbox" name="EQ7" id="EQ7">
                        <label class="label label-checkbox" for="EQ7">0.9D + E</label>
                    </div>
                </div>
            </div>

            <div class="displacement-data field">
                <div class="container-h2">
                    <h2 class="h2">Derivas admisibles</h2>
                </div>
                <div class="displacement-data-input field-input">
                    <div class="displacement-data-container input-container">
                        <label class="label" for="displacement">Estructura de: </label>
                        <select class="input" name="displacement" id="displacement">
                            <option value="concrete">Hormigón armado, metálica y madera, con desplazamiento máximo de 0.02</option>
                            <option value="masonry">Mampostería, con desplazamiento máximo de 0.01</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="math-data field">
                <div class="container-h2">
                    <h2 class="h2">Modelo matemático</h2>
                </div>

                <div class="math-data-input field-input">

                    <div class="personal-data-container input-container">
                        <label class="label" for="software">Software</label>
                        <input class="input" type="text" name="software" id="software" placeholder="Software que usaste">
                    </div>

                    <div class="personal-data-container input-container">
                    <label class="label" for="sitemaEstructural">Sistema estructural</label>
                    <input class="input" type="text" name="sistemaEstructural" id="sistemaEstructural" placeholder="Aporticado" value="Aporticado">
                    </div>

                    <!-- <div class="project-data-container input-container">
                        <button class="button button-input" id="mathModel">Subir Modelo Matemático</button>
                    </div> -->

                    <div                        class="personal-data-contain    er input-container">
                        <label class="label" for="mathModel">Modelo matemático</label>
                        <input class="input" type="text" name="mathModel" id="mathModel" placeholder="URL del modelo matemático">
                    </div>

                    <div class="personal-data-container input-container">
                        <label class="label" for="deriveX">Derivas de piso en X y Y</label>
                        <input class="input" type="text" name="deriveX" id="deriveX" placeholder="URL de la deriva de piso en X">
                        <input class="input" type="text" name="deriveY" id="deriveY" placeholder="URL de la deriva de piso en Y">
                    </div>

                    <div class="personal-data-container input-container">
                    <label class="label" for="basalX">Cortante basal X, Y</label>
                    <input class="input" type="text" name="basalX" id="basalX" placeholder="URL del cortante basal en X">
                    <input class="input" type="text" name="basalY" id="basalY" placeholder="URL del cortante basal en Y">
                    </div>

                    <div class="personal-data-container input-container">
                        <label class="label" for="movilizadaMassX">Masa movilizada X, Y</label>
                        <input class="input" type="text" name="movilizadaMassX" id="movilizadaMassX" placeholder="URL de la masa movilizada en X">
                        <input class="input" type="text" name="movilizadaMassY" id="movilizadaMassY" placeholder="URL de la masa movilizada en Y">
                    </div>

                    <div class="personal-data-container input-container">
                        <label class="label" for="columnDist">Distribución de columnas</label>
                        <input class="input" type="text" name="columnDist" id="columnDist" placeholder="URL de la distribución de columnas">
                    </div>

                    <div class="personal-data-container input-container">
                        <label class="label" for="demandCapacity">Relación demanda/capacidad de columnas</label>
                        <input class="input" type="text" name="demandCapacity" id="demandCapacity" placeholder="URL de la demanda/capacidad de columnas">
                    </div>

                    <div class="personal-data-container input-container">
                        <label class="label" for="demandCapacityBeams">Relación demanda/capacidad de vigas</label>
                        <input class="input" type="text" name="demandCapacityBeams" id="demandCapacityBeams" placeholder="URL de la demanda/capacidad de vigas">
                    </div>

                    <div class="personal-data-container input-container">
                        <label class="label" for="foundation">Cimentación</label>
                        <input class="input" type="text" name="foundation" id="foundation" placeholder="URL de la cimentación">
                    </div>

                </div>
            </div>

            <div class="generate-pdf field">
                <div class="field-input">
                    <div class="project-data-container input-container">
                        <button type="button" class="button button-input" id="genPDF">Generar Informe</button>
                    </div>
                </div>
            </div>
        </form>
    
    `
    return view    	
}

export default Concrete