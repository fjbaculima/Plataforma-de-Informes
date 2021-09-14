const report = () => {
    //let nombre = document.querySelector('#name')

    let userName = document.querySelector('#name')
    let userSenescyt = document.querySelector('#senescytCode')
    let userProffesion = document.querySelector('#profession')

    let userProject = document.querySelector('#projectName')
    let userCustomer = document.querySelector('#client')
    let userAddress = document.querySelector('#address')
    let userProjectCoord =document.querySelector('#projectCoord')
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

    let userMainBeamImg = document.querySelector('#mainBeamImg')
    let userMainBeamDescription = document.querySelector('#mainBeamDescription')
    let userSecondaryBeamImg = document.querySelector('#secondaryBeamImg')
    let userSecondaryBeamDescription = document.querySelector('#secondaryBeamDescription')

    let userMainColumnDescription = document.querySelector('#mainColumnDescription')
    let userMainColumnImg = document.querySelector('#mainColumnImg')
    let userSecondaryColumnDescription = document.querySelector('#secondaryColumnDescription')
    let userSecondaryColumnImg = document.querySelector('#secondaryColumnImg')

    let userBeamColumnConnectionImg = document.querySelector('#beamColumnConnectionImg')

    let userSlabDescription = document.querySelector('#slabDescription')
    let userSlabImg = document.querySelector('#slabImg')

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
                text: `${userCustomer.value} en calidad de cliente ha contratado los servicios profesionales de ${userName.value}, profesional de la ${userProffesion.options[userProffesion.selectedIndex].text} que tiene como número de registro de SENESCYT ${userSenescyt.value} para el diseño estructural del proyecto ${userProject.value}. El proyecto consta de ${userFloors.value} plantas con una altura total de ${userElevation.value} m sobre la rasante. El material principal del sistema estructural será concreto reforzado. La estructura estará conformada por vigas, columnas y losas. Esta deberá presentar disipación sísmica y comportamiento adecuado ante estas fuerzas laterales con incursión en rango no lineal sin pérdida de rigidez y resistencia. La categoría considerada para el diseño es ${userCategory.options[userCategory.selectedIndex].text}, según la NEC-15. El uso que se le dará a la edificación es ${userUsage.value} y, en ante el efecto de cargas extraordinarias, esta debe garantizar la integridad física de sus ocupantes. El proyecto se ubica en ${userAddress.value} en las coordenadas: ${userProjectCoord.value}.`,
                style: 'paragraph'
            },

            ' ',

            {
                image: 'croquis',
                width: 525
            },

            {
                text: [
                    {text: 'Figura 1. ', style: 'figID'},
                    {text: 'Ubicación del proyecto.', style: 'figDescrip'}
                ]
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
            {
                text: [
                    {text: 'Tabla 1. ', style: 'figID'},
                    {text: 'Detalles del proyecto.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: 'Características por planta',
                style: 'subHeader'
            },

            {
                text: `Según los planos arquitectónicos, la edificación presenta las siguientes características por planta:`,
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
            {
                text: [
                    {text: 'Tabla 2. ', style: 'figID'},
                    {text: 'Características por planta.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: 'Normas de diseño',
                style: 'header',
                tocItem: true
            },

            {
                text: `El diseño del proyecto ${userProject.value} se efectuó con base en los códigos y normativas nacionales e internacionales aplicables en Ecuador. Estas son: `,
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
                text: 'Los materiales estructurales deberán cumplir con los estándares mínimos de calidad establecidos para el territorio nacional. A continuación, se resumen las propiedades principales:',
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
                text: 'Según ASTM A706.',
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    `Esfuerzo de fluencia, fy=${userSteelFlow.value} kg/cm².`,
                    `Módulo de elasticidad, Es=${userModulusOfElasticity.value} kg/cm².`
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
                text: 'El diseño sismoresistente se fundamenta en que la resistencia lateral de la estructura (cortante basal) debe ser mayor o igual que el sismo de diseño. Es decir, V_base ≤ V_MR. Donde:',
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    'V_base: Demanda por sismo de diseño o cortante basal.',
                    'V_MR: Resistencia lateral de la estructura.'
                ]
            },

            {
                text: 'El cortante basal se obtiene con la fórmula: V_base = Z*C*W/R, donde:',
                style: 'paragraph'
            },

            ' ',

            {
                ul: [
                    'Z: Factor de zona sísmica (ver NEC-SE-DS 15, sección 3.1.1).',
                    'C: Coeficiente de respuesta sísmica.',
                    'W: Peso sísmico efectivo de la estructura (ver NEC-SE-CG 15).',
                    'R: Factor de reducción de resistencia sísmica.'
                ]
            },

            ' ',

            {
                text: 'Para la determinación de las cargas sísmicas se consideró las zonas sísmicas del Ecuador brindadas por la NEC-15 que se muestran en el cuadro a continuación.',
                style: 'paragraph'
            },

            ' ',
            
            {
                image: 'seismicZonesEcuador',
                width: 300
            },
            {
                text: [
                    {text: 'Figura 2. ', style: 'figID'},
                    {text: 'Zonas sísmicas de Ecuador, NEC-15.', style: 'figDescrip'}
                ]
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
                text: 'Por otra parte, para el espectro de diseño se consideraron los siguientes parámetros:',
                style: 'paragraph'
            },

            ' ',

            {
                image: 'designSpectrum',
                width: 500
            },
            {
                text: [
                    {text: 'Figura 3. ', style: 'figID'},
                    {text: 'Espectro de diseño, NEC-15.', style: 'figDescrip'}
                ]
            },


            ' ',
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
            {
                text: [
                    {text: 'Tabla 3. ', style: 'figID'},
                    {text: 'Resultados del análisis sísmico.', style: 'figDescrip'}
                ]
            },

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
                width: 400
            },
            {
                text: [
                    {text: 'Figura 4. ', style: 'figID'},
                    {text: 'Perfil de suelo.', style: 'figDescrip'}
                ]
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
                width: 400
            },
            {
                text: [
                    {text: 'Figura 5. ', style: 'figID'},
                    {text: 'Modelo matemático del sistema estructural.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: 'Derivas de piso',
                style: 'subHeader'
            },

            {
                image: 'derivaX',
                width: 300
            },
            {
                text: [
                    {text: 'Figura 6. ', style: 'figID'},
                    {text: 'Derivas de piso en X.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                image: 'derivaY',
                width: 300
            },
            {
                text: [
                    {text: 'Figura 7. ', style: 'figID'},
                    {text: 'Derivas de piso en Y.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: 'Cortante basal',
                style: 'subHeader'
            },

            {
                image: 'cortanteBasalX',
                width: 300
            },
            {
                text: [
                    {text: 'Figura 8. ', style: 'figID'},
                    {text: 'Cortante basal en X.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                image: 'cortanteBasalY',
                width: 300
            },
            {
                text: [
                    {text: 'Figura 9. ', style: 'figID'},
                    {text: 'Cortante basal en Y.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: 'Masa movilizada',
                style: 'subHeader'
            },

            {
                image: 'movilizadaX',
                width: 300
            },
            {
                text: [
                    {text: 'Figura 10. ', style: 'figID'},
                    {text: 'Moasa movilizada en X.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                image: 'movilizadaY',
                width: 300
            },
            {
                text: [
                    {text: 'Figura 11. ', style: 'figID'},
                    {text: 'Masa movilizada en Y.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: 'Distribución de columnas',
                style: 'subHeader'
            },

            {
                image: 'columnDistro',
                width: 400
            },
            {
                text: [
                    {text: 'Figura 12. ', style: 'figID'},
                    {text: 'Vista en planta de columnas.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: 'Relación demanda/capaidad en columnas',
                style: 'subHeader'
            },

            {
                image: 'demandaCapCol',
                width: 400
            },
            {
                text: [
                    {text: 'Tabla 4. ', style: 'figID'},
                    {text: 'Relación demanda/capacidad en columnas.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: 'Relación demanda/capaidad en vigas',
                style: 'subHeader'
            },
            
            {
                image: 'demandaCapBeam',
                width: 400
            },
            {
                text: [
                    {text: 'Tabla 5. ', style: 'figID'},
                    {text: 'Relación demanda/capacidad en vigas.', style: 'figDescrip'}
                ]
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
                image: 'mainBeamImg',
                width: 525
            },
            {
                text: [
                    {text: 'Figura 13. ', style: 'figID'},
                    {text: 'Detalle de vigas principales.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: `${userMainBeamDescription.value}.`, 
                style: 'paragraph'
            },

            ' ',

            {
                text: 'Vigas secundarias',
                style: 'subHeader'
            },

            ' ',

            {
                image: 'secondaryBeamImg',
                width: 525
            },
            {
                text: [
                    {text: 'Figura 14. ', style: 'figID'},
                    {text: 'Detalle de vigas secundarias.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: `${userSecondaryBeamDescription.value}.`,
                style: 'paragraph'
            },

            ' ',

            {
                text: 'Columnas principales',
                style: 'subHeader'
            },

            {
                image: 'mainColumnImg',
                width: 375
            },
            {
                text: [
                    {text: 'Figura 15. ', style: 'figID'},
                    {text: 'Detalle de columnas principales.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: `${userMainColumnDescription.value}.`, 
                style: 'paragraph'
            },

            ' ', 

            {
                text: 'Columnas secundarias',
                style: 'subHeader'
            },

            {
                image: 'secondaryColumnImg',
                width: 375
            },
            {
                text: [
                    {text: 'Figura 16. ', style: 'figID'},
                    {text: 'Detalle de columnas secundarias.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: `${userSecondaryColumnDescription.value}.`,
                style: 'paragraph'
            },

            ' ',

            {
                text: 'Losa',
                style: 'subHeader'
            },

            ' ',

            {
                image: 'slabImg',
                width: 525
            },
            {
                text: [
                    {text: 'Figura 17. ', style: 'figID'},
                    {text: 'Detalle de losa.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: `${userSlabDescription.value}.`
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
            {
                text: [
                    {text: 'Figura 18. ', style: 'figID'},
                    {text: 'Conexiones viga-columna.', style: 'figDescrip'}
                ]
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
                width: 300
            },
            {
                text: [
                    {text: 'Figura 19. ', style: 'figID'},
                    {text: 'Cimentación de la estructura.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                image: 'foundationDeformationX',
                width: 300
            },
            {
                text: [
                    {text: 'Figura 20. ', style: 'figID'},
                    {text: 'Deformación de cimentación en X.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                image: 'foundationDeformationY',
                width: 300
            },
            {
                text: [
                    {text: 'Figura 21. ', style: 'figID'},
                    {text: 'Deformación de cimentación en Y.', style: 'figDescrip'}
                ]
            },

            ' ',

            {
                text: `El diseño de la cimentación se fundamentó en NEC-SE-CM GEOTECNIA Y CIMENTACIONES. Para el diseño de la cimentación tipo ${userFoundationType.value} se utilizó el software ${userFoundationSoftware.value}. Dado que la cimentación tiene una profundidad de ${userFoundationDepth.value} m, esta se considera adecuada para un correcto desempeño.`,
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
            },
            figID: {
                fontSize: 10,
                bold: true
            },
            figDescrip: {
                fontSize: 10,
            }
        },
        images: {
            croquis: croquisUser.value,
            seismicZonesEcuador: 'https://i.ibb.co/0CTX04S/seismic-Zones-Ecuador-NEC15.png',
            designSpectrum: 'https://i.ibb.co/SV6HGj8/design-Spectrum-NEC15.png',
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
            mainBeamImg: userMainBeamImg.value,
            secondaryBeamImg: userSecondaryBeamImg.value,
            mainColumnImg: userMainColumnImg.value,
            secondaryColumnImg: userSecondaryColumnImg.value,
            slabImg: userSlabImg.value,
            conectionsImg: userBeamColumnConnectionImg.value,
            foundationImage: userFoundationImage.value,
            foundationDeformationX: userFoundationDeformationX.value,
            foundationDeformationY: userFoundationDeformationY.value,
        }
    }

    pdfMake.createPdf(elTexto).open();

}

export default report 

