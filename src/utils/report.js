const report = () => {
    //let nombre = document.querySelector('#name')

    let userName = document.querySelector('#name')
    let userSenescyt = document.querySelector('#senescytCode')
    let userProffesion = document.querySelector('#profession')

    let userProject = document.querySelector('#projectName')
    let userCustomer = document.querySelector('#client')
    let userAddress = document.querySelector('#address')
    let croquisUser = document.querySelector('#croquisInput')
    let userFloors = document.querySelector('#floors')
    let userUnderground = document.querySelector('#underground')
    let userElevation = document.querySelector('#elevation')
    let userCategory = document.querySelector('#category')
    let userUsage = document.querySelector('#usage')
    let userConstructionArea = document.querySelector('#constructionArea')

    if(userUnderground.checked === true) {
        var userUndergroundBuild = 'sí'
    } else {
        var userUndergroundBuild = 'no'
    }

    let userUndergroundLevel = document.querySelector('#undergroundLevel')
    let userGroundFloorLevel = document.querySelector('#groundFloorLevel')
    let userFirstFloorLevel = document.querySelector('#firstFloorLevel')
    let userSecondFloorLevel = document.querySelector('#secondFloorLevel')
    let userThirdFloorLevel = document.querySelector('#thirdFloorLevel')
    let userFourthFloorLevel =  document.querySelector('#fourthFloorLevel')

    let userUndergroundArea = document.querySelector('#undergroundArea')
    let userGroundFloorArea = document.querySelector('#groundFloorArea')
    let userFirstFloorArea = document.querySelector('#firstFloorArea')
    let userSecondFloorArea = document.querySelector('#secondFloorArea')
    let userThirdFloorArea = document.querySelector('#thirdFloorArea')
    let userFourthFloorArea =  document.querySelector('#fourthFloorArea')

    let userUndergroundUsage = document.querySelector('#undergroundUsage')
    let userGroundFloorUsage = document.querySelector('#groundFloorUsage')
    let userFirstFloorUsage = document.querySelector('#firstFloorUsage')
    let userSecondFloorUsage = document.querySelector('#secondFloorUsage')
    let userThirdFloorUsage = document.querySelector('#thirdFloorUsage')
    let userFourthFloorUsage =  document.querySelector('#fourthFloorUsage')


    let userNEC15 = document.querySelector('#NEC15')
    let userACI = document.querySelector('#ACI')
    let userASCE = document.querySelector('#ASCE')
    let userASTM = document.querySelector('#ASTM')
    let userOtraNorma = document.querySelector('#otraNormaCheckbox')
    let userOtraNormaInput = document.querySelector('#otraNorma')

    if(userNEC15.checked === true) {
        var userNEC15Standard = userNEC15.labels[0].innerText
    } else {
        var userNEC15Standard = ''
    }

    if(userACI.checked === true) {
        var userACIStandard = userACI.labels[0].innerText
    } else {
        var userACIStandard = ''
    }

    if(userASCE.checked === true) {
        var userASCEStandard = userASCE.labels[0].innerText
    } else {
        var userASCEStandard = ''
    }

    if(userASTM.checked === true) {
        var userASTMStandard = userASTM.labels[0].innerText
    } else {
        var userASTMStandard = ''
    }

    if(userOtraNorma.checked === true) {
        var userOtraNormaStandard = userOtraNormaInput.value
    } else {
        var userOtraNormaStandard = ''
    }

    let userConcrete = document.querySelector('#concrete')
    let userSteelFlow = document.querySelector('#steel-flow')
    let userModulusOfElasticity = document.querySelector('#modulus-of-elasticity')

    let userStructureWeight = document.querySelector('#structure-weight')
    let userSteelWeight = document.querySelector('#steel-weight')
    let userDeadLoad = document.querySelector('#deadLoad')
    let userLiveLoad = document.querySelector('#liveLoad')

    let userParroquia = document.querySelector('#parroquia')
    let userCanton = document.querySelector('#canton')
    let userProvince = document.querySelector('#province')
    let userSeismicZone = document.querySelector('#seismicZone')
    let userSoilType = document.querySelector('#soilType')
    let userImportanceCoeff = document.querySelector('#importanceCoeff')
    let userBasal = document.querySelector('#basal')
    let userReductionFactor = document.querySelector('#reductionFactor')
    let userZ = document.querySelector('#Z')
    let userN = document.querySelector('#n')
    let userCt = document.querySelector('#Ct')
    let userAlpha = document.querySelector('#alpha')
    let userFa = document.querySelector('#Fa')
    let userFd = document.querySelector('#Fd')
    let userFs = document.querySelector('#Fs')
    let userR = document.querySelector('#r')
    let userPhiP = document.querySelector('#phiP')
    let userPhiE = document.querySelector('#phiE')
    let userG = document.querySelector('#g')
    let userT = document.querySelector('#T')
    let userTt = document.querySelector('#Tt')
    let userTO = document.querySelector('#TO')
    let userTC = document.querySelector('#TC')
    let userTL = document.querySelector('#TL')
    let userSa = document.querySelector('#Sa')
    let userSao = document.querySelector('#Sao')
    let userF = document.querySelector('#f')
    let userMovilizedMass = document.querySelector('#movilizedMass')
    let userVibrationModes = document.querySelector('#vibrationModes')
    let userVibrationModesNinety = document.querySelector('#vibrationModesNinety')

    let userWindCoefHeight = document.querySelector('#windCoefHeight')
    let userWindCoefIncl = document.querySelector('#windCoefIncl')
    let userWindCoefLocation = document.querySelector('#windCoefLocation')
    let userWindPressureBar = document.querySelector('#windPressureBar')
    let userWindPressureSot = document.querySelector('#windPressureSot')

    let userQAd = document.querySelector('#qAd')
    let userGeotechSoilType = document.querySelector('#geotechSoilType')
    let userAngleFrict = document.querySelector('#angleFrict')
    let userWet = document.querySelector('#wet')
    let userGeotechSoilProfileInput = document.querySelector('#geotechSoilProfileInput')

    let userEQ1 = document.querySelector('#EQ1')
    let userEQ2 = document.querySelector('#EQ2')
    let userEQ3 = document.querySelector('#EQ3')
    let userEQ4 = document.querySelector('#EQ4')
    let userEQ5 = document.querySelector('#EQ5')
    let userEQ6 = document.querySelector('#EQ6')
    let userEQ7 = document.querySelector('#EQ7')

    if(userEQ1.checked === true) {
        var userEQ1Combination = userEQ1.labels[0].innerText
    } else {
        var userEQ1Combination = ''
    }

    if(userEQ2.checked === true) {
        var userEQ2Combination = userEQ2.labels[0].innerText
    } else {
        var userEQ2Combination = ''
    }

    if(userEQ3.checked === true) {
        var userEQ3Combination = userEQ3.labels[0].innerText
    } else {
        var userEQ3Combination = ''
    }

    if(userEQ4.checked === true) {
        var userEQ4Combination = userEQ4.labels[0].innerText
    } else {
        var userEQ4Combination = ''
    }

    if(userEQ5.checked === true) {
        var userEQ5Combination = userEQ5.labels[0].innerText
    } else {
        var userEQ5Combination = ''
    }

    if(userEQ6.checked === true) {
        var userEQ6Combination = userEQ6.labels[0].innerText
    } else {
        var userEQ6Combination = ''
    }

    if(userEQ7.checked === true) {
        var userEQ7Combination = userEQ7.labels[0].innerText
    } else {
        var userEQ7Combination = ''
    }

    let userDisplacement = document.querySelector('#displacement')

    let userSoftware = document.querySelector('#software')
    let userSistemaEstructural = document.querySelector('#sistemaEstructural')
    let userMathModel = document.querySelector('#mathModel')
    let userDeriveX = document.querySelector('#deriveX')
    let userDeriveY = document.querySelector('#deriveY')
    let userBasalX = document.querySelector('#basalX')
    let userBasalY = document.querySelector('#basalY')
    let userMovilizadaMassX = document.querySelector('#movilizadaMassX')
    let userMovilizadaMassY = document.querySelector('#movilizadaMassY')
    let userColumnDist = document.querySelector('#columnDist')
    let userDemandCapacity = document.querySelector('#demandCapacity')
    let userDemandCapacityBeams = document.querySelector('#demandCapacityBeams')
    let userFoundation = document.querySelector('#foundation')

    //

    let userMainBeamCover = document.querySelector('#mainBeamCover')
    let userMainBeamBase = document.querySelector('#mainBeamBase')
    let userMainBeamHeight = document.querySelector('#mainBeamHeight')
    let userMainBeamUpperDiam = document.querySelector('#mainBeamUpperDiam')
    let userMainBeamUpperNum = document.querySelector('#mainBeamUpperNum')
    let userMainBeamLowerDiam = document.querySelector('#mainBeamLowerDiam')
    let userMainBeamLowerNum = document.querySelector('#mainBeamLowerNum')
    let userSecondaryBeamCover = document.querySelector('#secondaryBeamCover')
    let userSecondaryBeamBase = document.querySelector('#secondaryBeamBase')
    let userSecondaryBeamHeight = document.querySelector('#secondaryBeamHeight')
    let userSecondaryBeamUpperDiam = document.querySelector('#secondaryBeamUpperDiam')
    let userSecondaryBeamUpperNum = document.querySelector('#secondaryBeamUpperNum')
    let userSecondaryBeamLowerDiam = document.querySelector('#secondaryBeamLowerDiam')
    let userSecondaryBeamLowerNum = document.querySelector('#secondaryBeamLowerNum')

    let userColumnCover = document.querySelector('#columnCover')
    let userColumnBase = document.querySelector('#columnBase')
    let userColumnHeight = document.querySelector('#columnHeight')
    let userColumnSteelArea = document.querySelector('#columnSteelArea')

    let userSlabThickness = document.querySelector('#slabThickness')

    let userFoundationSoftware = document.querySelector('#foundationSoftware')
    let userFoundationType = document.querySelector('#foundationType')
    let userFoundationDepth = document.querySelector('#foundationDepth')
    let userFoundationImage = document.querySelector('#foundationImage')
    let userFoundationDeformationX = document.querySelector('#foundationDeformationX')
    let userFoundationDeformationY = document.querySelector('#foundationDeformationY')

    let userConclusions = document.querySelector('#conclusions')

    const elTexto = {
        footer: function(currentPage) { return {text:`${currentPage.toString()}`, alignment:'center'} },

        content: [

            {
                toc: {
                  title: {text: 'Contenidos', style: 'header' }
                }
            },

            {
                text: `
                



















                
                
                
                
                
                
                
                
                
                






                `
            },

            {
                text: 'Antecedentes',
                style: 'header',
                tocItem: true
            },
            {
                text: `${userCustomer.value} en calidad de cliente ha contratado los servicios profesionales de ${userName.value}, profesional de la ${userProffesion.options[userProffesion.selectedIndex].text} que tiene como registro de senescyt el ${userSenescyt.value} para el diseño estructural del proyecto ${userProject.value} de ${userFloors.value} plantas con una elevación de ${userElevation.value} m de altura en total, mediante el uso del material Concreto Reforzado, que genere una estructura conformada por vigas, columnas y losas la cual presente disipación sísmica y comportamiento adecuado ante estas fuerzas laterales con incursión en rango no lineal sin pérdida de rigidez y resistencia, a través de un diseño por desempeño para la categoría ${userCategory.options[userCategory.selectedIndex].text}. El uso que se le dará a la edificación es ${userUsage.value} y, en caso de sismo, esta debe garantizar la integridad física de sus ocupantes. El proyecto se ubica en ${userAddress.value}.`,
                style: 'paragraph'
            },

            ' ',

            {
                image: 'croquis',
                width: 525
            },

            ' ',

            {
                text: 'Detalles del proyecto',
                style: 'header',
                tocItem: true
            },

            {
                text: 'Las características principales del proyecto estructural se resumen en la siguiente tabla.',
                style: 'paragraph'
            },

            ' ',

            {
                table: {
                    headerRows: 1,
                    body: [
                        [{text: 'Característica', style: 'tableHeader'}, {text: 'Descipción', style: 'tableHeader'}],
                        ['Material estructural', 'Concreto Reforzado'],
                        ['Número de plantas', userFloors.value],
                        ['Área total de construcción', `${userConstructionArea.value} m²`],
                        ['Subsuelo', userUndergroundBuild],
                        ['Elevación', `${userElevation.value} m`],
                        ['Categoría de la estructura', userCategory.options[userCategory.selectedIndex].text],
                        ['Tipo de uso', userUsage.value]
                    ]
                }
            },

            ' ',
            ' ',

            {
                text: 'Características por planta',
                style: 'subHeader'
            },

            {
                text: `Según los planos arquitectónicos, la edificación de ${userFloors.value} plantas presenta sus características por planta de la siguiente manera.`,
                style: 'paragraph'
            },

            ' ',

            {
                table: {
                    headerRows: 1,
                    body: [
                        [{text: 'Planta', style: 'tableHeader'}, {text: 'Nivel (m)', style: 'tableHeader'}, {text: 'Área (m²)', style: 'tableHeader'}, {text: 'Uso', style: 'tableHeader'}],
                        ['Subsuelo', userUndergroundLevel.value, userUndergroundArea.value, userUndergroundUsage.value],
                        ['Planta baja', userGroundFloorLevel.value, userGroundFloorArea.value, userGroundFloorUsage.value],
                        ['Primera planta alta', userFirstFloorLevel.value, userFirstFloorArea.value, userFirstFloorUsage.value],
                        ['Segunda planta alta', userSecondFloorLevel.value, userSecondFloorArea.value, userSecondFloorUsage.value],
                        ['Tercera planta alta', userThirdFloorLevel.value, userThirdFloorArea.value, userThirdFloorUsage.value],
                        ['Cuarta planta alta', userFourthFloorLevel.value, userFourthFloorArea.value, userFourthFloorUsage.value],
                    ]
                }
            },

            ' ',

            {
                text: 'Normas de diseño',
                style: 'header',
                tocItem: true
            },

            {
                text: `El diseño del proyecto ${userProject.value} se efectuó con base en los códigos y normativas nacionales e internacionales que se aplican en el territorio nacional. Estas son: `,
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    userNEC15Standard,
                    userACIStandard,
                    userASCEStandard,
                    userASTMStandard,
                    userOtraNormaStandard
                ]


            },

            ' ',

            {
                text: 'Materiales',
                style: 'header',
                tocItem: true
            },

            {
                text: 'Los materiales estructurales cumplen con los estándares mínimos de calidad para su correcto desempeño. A continuación se resumen las propiedades principales.',
                style: 'paragraph'
            },

            ' ',

            {
                text: 'Hormigón',
                style: 'subHeader'
            },

            {
                text: `Resistencia a la compresión a los 21 días, f'c=${userConcrete.value} kg/cm².`,
                style: 'paragraph'
            },

            ' ',

            {
                text: 'Acero de refuerzo',
                style: 'subHeader'
            },

            {
                text: 'Las barras de acero cumplirán con la norma ASTM A706.',
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    `El esfuerzo de fluencia del acero de refuerzo es de fy=${userSteelFlow.value} kg/cm².`,
                    `El módulo de elasticidad es de Es=${userModulusOfElasticity.value} kg/.`
                ]
            },

            ' ',

            {
                text: 'Cargas',
                style: 'header',
                tocItem: true
            },

            {
                text: 'Cargas gravitacionales totales',
                style: 'subHeader'
            },

            {
                ul: [
                    `Peso propio de la estructura: ${userStructureWeight.value} toneladas`,
                    `Peso del acero de refuerzo: ${userSteelWeight.value} toneladas`,
                    `Carga muerta total: ${userDeadLoad.value} toneladas`,
                    `Carga viva total: ${userLiveLoad.value} toneladas`
                ]
            },

            ' ',
            ' ',
            ' ',
            ' ',

            {
                text: 'Cargas sísimicas',
                style: 'subHeader'
            },

            {
                text: 'Para las cargas sísmicas tomamos en cuenta las zonas sísmicas del Ecuador brindadas por la NEC-15 que se muestran en el cuadro a continuación',
                style: 'paragraph'
            },

            ' ',
            
            {
                image: 'seismicZonesEcuador',
                width: 300
            },

            ' ',
            
            {
                text: 'Entonces los datos para el proyecto son:',
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    `Parroquia: ${userParroquia.value}.`,
                    `Cantón: ${userCanton.value}.`,
                    `Provincia: ${userProvince.value}.`,
                    `Tipo de suelo (A, B, C, D, E): ${userSoilType.value}.`,
                    `Zona sísmica: ${userSeismicZone.value}.`,
                    `Factor de aceleración de zona sísmica, Z: ${userZ.value}.`
                ]
            },

            ' ',

            {
                text: 'Por otra parte, para el espectro de diseño consideramos los parámetros siguientes:',
                style: 'paragraph'
            },

            ' ',

            {
                image: 'designSpectrum',
                width: 500
            },

            ' ',

            {
                table: {
                    headerRows: 1,
                    //widths: [ '*', '*', '*', '*' ],
                    body: [
                        [{text: 'Parámetro', style: 'tableHeader'}, {text: 'Variable', style: 'tableHeader'}, {text: 'Valor', style: 'tableHeader'}, {text: 'Unidades', style: 'tableHeader'}, {text: 'Referencia', style: 'tableHeader'}],
                        ['Factor de importancia', 'I', userImportanceCoeff.value, 's.u.', 'Tabla 6, Sec. 4.1'],
                        ['Factor de reducción de respuesta', 'R', userReductionFactor.value, 's.u.', 'Tabla 15, Sec.6.3.4'],
                        ['Zonificación sísmica', 'Zona', userSeismicZone.value, ' ', 'Tabla 1, Sec. 3.1.1'],
                        ['Factor de aceleración de la zona sísmica', 'Z', userZ.value, 'g', 'Tabla1, Sec.3.1.1'],
                        ['Relación de amplificación espectral', 'n', userN.value, 's.u.', 'Sec.3.1.3.1'],
                        ['Coeficiente Ct', 'Ct', userCt.value, 's.u.', 'Sec.6.3.3'],
                        ['Coeficiente para periodo', 'α', userAlpha.value, 's.u.', 'Sec.6.3.3'],
                        ['Tipo de suelo', ' ', userSoilType.value, 's.u.', 'Tabla 2, Sec.3.2.1'],
                        ['Factor de sitio Fa', 'Fa', userFa.value, 's.u.', 'Tabla 3, Sec.3.2.2'],
                        ['Factor de sitio Fd', 'Fd', userFd.value, 's.u.', 'Tabla 4, Sec.3.2.2'],
                        ['Factor de comportamiento inelástico', 'Fs', userFs.value, 's.u.', 'Tabla 5, Sec.3.2.2'],
                        ['Factor asociado al Tr', 'r', userR.value, 's.u.', 'Sec.3.3.1'],
                        ['Factor de irregularidad en planta', 'Øp', userPhiP.value, 's.u.', 'Tabla 13, Sec.5.2.3'],
                        ['Factor de irregularidad en elevación', 'Øe', userPhiE.value, 's.u.', 'Tabla 14, Sec.5.2.3'],
                        ['Aceleración de la gravedad', 'g', userG.value, 'm/s²', ' '],
                        ['Periodo método 1', 'T', userT.value, 's', 'Sec.6.3.3'],
                        ['Periodo menor al método 2', '1.3T', userTt.value, 's', 'Sec.6.3.3'],
                        ['Periodo Límite en T=TO', 'TO', userTO.value, 's', 'Sec.3.3.1'],
                        ['Periodo Límite en T=TC', 'TC', userTC.value, 's', 'Sec.3.3.1'],
                        ['Periodo Límite en T=TL', 'TL', userTL.value, 's', 'Sec.3.3.1'],
                        ['Aceleración en T=0', 'Sa', userSa.value, 'g', 'Sec.3.3.1'],
                        ['Aceleración en T=TO', 'Sao', userSao.value, 'g', 'Sec.3.3.1'],
                        ['Factor de reducción', 'f', userF.value, 's.u.', ' '],
                        ['Cortante Basal', 'Cv', userBasal.value, ' ', ' '],
                        ['Porcentaje de masa movilizada', '%MV', userMovilizedMass.value, ' ', ' '],
                        ['Número de modos de vibración', 'Modos', userVibrationModes.value, ' ', ' '],
                        ['M. de vibración para 90% MV', 'Cv', userVibrationModesNinety.value, ' ', ' '],
                    ]
                }
            },

            ' ',

            {
                text: 'Cargas de viento',
                style: 'subHeader'
            },

            {
                text: `Conforme se establece en la normativa NEC 2015, en su apartado 3.2.4., la velocidad del viento para cualquier tipo de estructura no será menor que 75 km/h (21 m/s). Por lo tanto, para este estudio se adopta una carga de viento con una velocidad de 21 m/s. La velocidad de la corrección del viento se realiza aplicando Vb = Vins × σ. El coeficiente σ se obtiene de la tabla siguiente:`,
                style: 'paragraph'
            },

            ' ',

            {
                image: 'windCoeff',
                width: 400
            },

            ' ',

            {
                text: 'Además, es necesario calcular la presión en kN/m² en sentido positivo hacia la estructura o barlovento y negativo o sotavente mediante la ecuación Pb = 0.5 × p × Vb2 × Ce × Cf.'
            },

            ' ',

            {
                text: 'El coeficiente Cf está en función de la inclinación de la estructura y lo encontramos mediante la siguente tabla:',
                style: 'paragraph'
            },

            ' ',

            {
                image: 'CfTableImage',
                width: 400
            },

            ' ',

            {
                text: 'Por otra parte, el coeficiente C𝑒 se obtuvo de la tabla siguiente:',
                style: 'paragraph'
            },

            ' ',

            {
                image: 'CeTableImage',
                width: 500
            },

            ' ',

            {
                text: 'Entonces, las cargas de viento se resumen en lo siguiente:',
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    `Coeficiente σ: ${userWindCoefHeight.value}.`,
                    `Coeficiente Cf: ${userWindCoefIncl.value}.`,
                    `Coeficiente Ce: ${userWindCoefLocation.value}.`,
                    `Presión a barlovento: ${userWindPressureBar.value} kN/m².`,
                    `Presión a sotavento: ${userWindPressureSot.value} kN/m².`
                ]
            },

            ' ',
            ' ',

            {
                text: 'Datos geotécnicos',
                style: 'header',
                tocItem: true
            },

            {
                ul: [
                   `Q admisible: ${userQAd.value} kg/cm².`,
                   `Tipo de suelo: ${userGeotechSoilType.value}.`,
                   `Ángulo de fricción: ${userAngleFrict.value}°.`,
                   `Contenido de humedad: ${userWet.value}%.`
                ]
            },

            ' ',

            {
                text: 'Perfil del suelo:',
                style: 'paragraph'
            },

            ' ',

            {
                image: 'soilProfile',
                width: 525
            },

            {
                text: 'Combinaciones de cargas de diseño',
                style: 'header',
                tocItem: true
            },

            {
                text: 'De acuerdo con el numeral 3.4.3 de la NEC-SE-CG, para este proyecto, se usará:',
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    userEQ1Combination,
                    userEQ2Combination,
                    userEQ3Combination,
                    userEQ4Combination,
                    userEQ5Combination,
                    userEQ6Combination,
                    userEQ7Combination
                ]
            },

            ' ',

            {
                text: 'Donde:',
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    'D: Carga permanente.',
                    'E: Carga de sismo.',
                    'L: sobrecarga (carga viva).',
                    'Lr: sobrecarga cubierta (carga viva).',
                    'S: carga granizo.',
                    'W: carga de viento.' 
                ]
            },

            ' ',

            {
                text: 'Derivas admisibles',
                style: 'header',
                tocItem: true
            }, 

            {
                text: 'De acuerdo al NEC-SE-DS numeral 4.2.2, se define el límite de la deformación de piso relativa a su altura de 0.02 como se observa en la Tabla 8',
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    userDisplacement.options[userDisplacement.selectedIndex].text
                ]
            },

            ' ',

            {
                text: 'Modelo matemático',
                style: 'header',
                tocItem: true
            },

            {
                text: `El modelo tridimensional de la estructura fue desarrollado con el software ${userSoftware.value}, desarollando un sistema ${userSistemaEstructural.value} para columnas y vigas.`,
                style: 'paragraph'
            },

            ' ',

            {
                text: 'Modelo matemático',
                style: 'subHeader'
            },

            ' ',

            {
                image: 'mathModelo',
                width: 525
            },

            {
                text: 'Derivas de piso en X, Y',
                style: 'subHeader'
            },

            {
                image: 'derivaX',
                width: 300
            },

            ' ',

            {
                image: 'derivaY',
                width: 300
            },

            ' ',

            {
                text: 'Cortante basal en X, Y',
                style: 'subHeader'
            },

            {
                image: 'cortanteBasalX',
                width: 300
            },

            ' ',

            {
                image: 'cortanteBasalY',
                width: 300
            },

            ' ',

            {
                text: 'Masa movilizada en X, Y',
                style: 'subHeader'
            },

            {
                image: 'movilizadaX',
                width: 300
            },

            ' ',

            {
                image: 'movilizadaY',
                width: 300
            },

            ' ',

            {
                text: 'Distribución de columnas',
                style: 'subHeader'
            },

            {
                image: 'columnDistro',
                width: 300
            },

            ' ',

            {
                text: 'Relación demanda/capaidad en columnas',
                style: 'subHeader'
            },

            {
                image: 'demandaCapCol',
                width: 525
            },

            ' ',

            {
                text: 'Relación demanda/capaidad en vigas',
                style: 'subHeader'
            },

            {
                image: 'demandaCapBeam',
                width: 525
            },

            ' ',


            {
                text: 'Elementos estructurales',
                style: 'header',
                tocItem: true
            },

            {
                text: 'Vigas principales',
                style: 'subHeader'
            },

            ' ', 

            {
                image: 'beamImg',
                width: 300
            },

            ' ',

            {
                text:'Las vigas principales son afueron diseñadas con las siguientes características, siguiendo las recomendaciones de las normas referidas anteriormente.',
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    `Recubrimiento: ${userMainBeamCover.value} mm.`,
                    `Base: ${userMainBeamBase.value} cm.`,
                    `Altura: ${userMainBeamHeight.value} cm.`,
                    `Armado superior: ${userMainBeamUpperNum.value} varillas.`,
                    `Diámetro varillas superiores: ${userMainBeamUpperDiam.value} mm.`,
                    `Armado inferior: ${userMainBeamLowerNum.value} varillas.`,
                    `Diámetro varillas inferiores: ${userMainBeamLowerDiam.value} mm.`
                ]
            },

            ' ',

            {
                text: 'Vigas secundarias',
                style: 'subHeader'
            },

            ' ',

            {
                text:'Por otra parte, las vigas secundarias son afueron diseñadas con las siguientes características, siguiendo las recomendaciones de las normas referidas anteriormente.',
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    `Recubrimiento: ${userSecondaryBeamCover.value} mm.`,
                    `Base: ${userSecondaryBeamBase.value} cm.`, 
                    `Altura: ${userSecondaryBeamHeight.value} cm.`,
                    `Armado superior: ${userSecondaryBeamUpperNum.value} varillas.`,
                    `Diámetro varillas superiores: ${userSecondaryBeamUpperDiam.value} mm.`,
                    `Armado inferior: ${userSecondaryBeamLowerNum.value} varillas.`,
                    `Diámetro varillas inferiores: ${userSecondaryBeamLowerDiam.value} mm.`
                ]
            },

            ' ',

            {
                text: 'Columnas',
                style: 'subHeader'
            },

            ' ',

            {
                image: 'columnImg',
                width: 525
            },

            ' ', 

            {
                text: 'Las columnas de hormigón y acero de refuerzo tienen las características siguientes.'
            },

            ' ',

            {
                ul: [
                    `Recubrimiento: ${userColumnCover.value} mm.`,
                    `Base: ${userColumnBase.value} cm.`, 
                    `Altura: ${userColumnHeight.value} cm.`,
                    `Área del acero transversal de refuerzo: ${userColumnSteelArea.value} cm².`,
                ]
            },

            ' ',

            {
                text: 'Losa',
                style: 'subHeader'
            },

            ' ',

            {
                image: 'slabImg',
                width: 400
            },

            ' ',

            {
                text: `La losa alivianda y armada en dos direcciones cuenta con bloque y su espesor es de ${userSlabThickness.value} cm.`
            },

            ' ',

            {
                text: 'Conexiones viga-columna',
                style: 'subHeader'
            },

            ' ',

            {
                image: 'conectionsImg',
                width: 525
            },
             
            ' ',

            {
                text: 'Deberán cumplir los requerimientos de ACI 318, Capítulo 21(Estructuras Sismo Resistentes) y ACI 352.',
                style: 'paragraph'
            },

            ' ',

            {
                text: 'Cimentación',
                style: 'subHeader'
            },

            ' ',

            {
                image: 'foundationImage',
                width: 400
            },

            ' ',

            {
                image: 'foundationDeformationX',
                widht: 400
            },

            ' ',

            {
                image: 'foundationDeformationY',
                width: 400
            },

            ' ',

            {
                text: `El diseño de la cimentación se fundamentó en NEC-SE-CM GEOTECNIA Y CIMENTACIONES. Para el diseño de la cimentación tipo ${userFoundationType.value} se utilizó el software ${userFoundationSoftware.value}. Dado que la cimentación tiene una profundidad de ${userFoundationDepth.value} m, esta se considera superficial.`,
                style: 'paragraph'
            },

            ' ',

            {
                text: 'Conclusiones y recomendaciones finales',
                style: 'header',
                tocItem: true
            },

            {
                text: `${userConclusions.value}`,
                style: 'paragraph'
            }
           
             
        ],
        styles : {
            header: {
                fontSize: 18,
                bold: true, 
                lineHeight: 1.4
            },
            subHeader: {
                fontSize: 16,
                bold: true,
                lineHeight: 1.2
            },
            paragraph: {
                alignment: 'justify',
                lineHeight: 1.2
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            }
        },
        images: {
            croquis: croquisUser.value,
            seismicZonesEcuador: 'https://i.ibb.co/0CTX04S/seismic-Zones-Ecuador-NEC15.png',
            designSpectrum: 'https://i.ibb.co/SV6HGj8/design-Spectrum-NEC15.png',
            windCoeff: 'https://i.ibb.co/pwgVSkR/coeff-Wind-Height.png',
            CfTableImage: 'https://i.ibb.co/dPVxTpy/coeff-Wind-Incl.png',
            CeTableImage: 'https://i.ibb.co/jDwd4fr/coeff-Wind-Location-NEC2011.png',
            soilProfile: userGeotechSoilProfileInput.value,
            mathModelo: userMathModel.value,
            derivaX: userDeriveX.value,
            derivaY: userDeriveY.value,
            cortanteBasalX: userBasalX.value,
            cortanteBasalY: userBasalY.value,
            movilizadaX: userMovilizadaMassX.value,
            movilizadaY: userMovilizadaMassY.value,
            columnDistro: userColumnDist.value,
            demandaCapCol: userDemandCapacity.value,
            demandaCapBeam: userDemandCapacityBeams.value,
            beamImg: 'https://i.ibb.co/txxxk9D/reinforced-Beam.png',
            columnImg: 'https://i.ibb.co/Q8LLXwc/column-Concrete.jpg',
            slabImg: 'https://i.ibb.co/m02NWh9/losa.jpg',
            conectionsImg: 'https://i.ibb.co/BzHj4mG/conection-Beam-Column.png',
            foundationImage: userFoundationImage.value,
            foundationDeformationX: userFoundationDeformationX.value,
            foundationDeformationY: userFoundationDeformationY.value,
        }
    }

    pdfMake.createPdf(elTexto).open();

}

export default report 

