// import { v4 as uuid } from "uuid"
import PlantSchema from './src/models/Plant'

export const createPlants = async () => {
  // check for an existing plant

  let plant = await PlantSchema.findOne({ name: 'Aloe vera' })

  try {
    if (!plant) {
      // create a new plant
      await PlantSchema.create({
        name: 'Aloe vera',
        discoveredAt: '2019-03-02',
        benefits:
          'ALOE VERA: PIEL RADIANTE De la familia de las Asphodelaceae, pertenece al género Aloe, que cuenta con más de 350 especies vegetales. El aloe vera, muy habitual entre las plantas de interior, es una planta medicinal que tiene infinidad de aplicaciones en diversos remedios naturales, especialmente para los de la piel. Entre ellas, la de aliviar las quemaduras, rozaduras e, incluso, psoriasis y picaduras de insectos. Además, regenera y mantiene joven la piel gracias a su gran cantidad de agua, que da oxígeno a las células epiteliales.',
        discoveredAt: '2019-03-02',
        medicinal: 'Yes',
        flower: 'Yes',
        maximumHeight: 18,
        model: 'Medicinal',
      })

      console.log('Aloe vera created!')
    }
  } catch (error) {
    console.log(error)
  }
  // check for an existing plant

  plant = await PlantSchema.findOne({ name: 'Valeriana' })

  try {
    if (!plant) {
      // create a new plant
      await PlantSchema.create({
        name: 'Valeriana',
        discoveredAt: '2019-03-02',
        benefits:
          'VALERIANA: REDUCE EL ESTRÉS La valeriana o Valeriana officinalis es una de las plantas medicinales más empleadas en la fitoterapia. Y es normal, ya que tiene infinidad de beneficios pero quizás el más conocido sea el ayudar a relajarnos. La valeriana es una planta que disminuye la ansiedad y ayuda a dormir. Pero además, es buena para las diarreas, para reducir temblores leves, para aliviar el dolor de cabeza y el de la menstruación.',
        discoveredAt: '2019-03-02',
        medicinal: 'Yes',
        flower: "Yes",
        maximumHeight: 18.2,
        model: 'Medicinal',
      })

      console.log('Valeriana created!')
    }
  } catch (error) {
    console.log(error)
  }
  // check for an existing plant

  plant = await PlantSchema.findOne({ name: 'Alcachofa' })

  try {
    if (!plant) {
      // create a new plant
      await PlantSchema.create({
        name: 'Alcachofa',
        discoveredAt: '2019-03-02',
        benefits:
          'ALCACHOFA: ELIMINA GRASAS La alcachofa o Cynara scolymus es una planta medicina que, además, es muy habitual en nuestras recetas del día a día. Pues bien, esta planta tiene multitud de beneficios. Destaca su gran aporte de calcio y fósforo, así como otros minerales como hierro, potasio, magnesio y zinc. También su acción depurativa es muy conocida para ayudar a adelgazar, perder grasa y regular el colesterol.',
        discoveredAt: '2019-03-02',
        medicinal: 'Not',
        flower: 'Not',
        maximumHeight: 18.2,
        model: 'Medicinal',
      })

      console.log('Alcachofa created!')
    }
  } catch (error) {
    console.log(error)
  }
  // check for an existing plant

  plant = await PlantSchema.findOne({ name: 'Amapola' })

  try {
    if (!plant) {
      // create a new plant
      await PlantSchema.create({
        name: 'Amapola',
        discoveredAt: '2019-03-02',
        benefits:
          'AMAPOLA: PREVIENE AFECCIONES EN LA PIEL La amapola o Papaver rhoeas L., es una planta medicinal con propiedades curativas de la que se usan las semillas. Con estas semillas se consigue prevenir enfermedades cardiovasculares, anemias o afecciones de la piel. Su consumo es bien simple: solo tienes que añadirlas por ejemplo a las meriendas en un yogur o batido.',
        discoveredAt: '2019-03-02',
        medicinal: 'Yes',
        flower: 'Not',
        maximumHeight: 18.2,
        model: 'Medicinal',
      })

      console.log('Amapola created!')
    }
  } catch (error) {
    console.log(error)
  }
  // check for an existing plant

  plant = await PlantSchema.findOne({ name: 'Eucalipto' })

  try {
    if (!plant) {
      // create a new plant
      await PlantSchema.create({
        name: 'Eucalipto',
        discoveredAt: '2019-03-02',
        benefits:
          'EUCALIPTO: ALIVIA LOS SÍNTOMAS DEL RESFRIADO El eucalipto o eucaliptas es una de las plantas que más usamos para decorar la casa. Son plantas muy resistentes y perfectas para añadir a cualquier centro de mesa. Pero además de decorar el interior de nuestra casa, los eucaliptos son plantas medicinales muy beneficiosas para la salud. Entre sus propiedades más conocidas está la de aliviar los síntomas de los resfriados, en concreto afecciones respiratorias (tos, bronquitis, neumonía, asma...).',
        discoveredAt: '2019-03-02',
        medicinal: 'Not',
        flower: 'Yes',
        maximumHeight: 18.2,
        model: 'Medicinal',
      })

      console.log('Eucalipto created!')
    }
  } catch (error) {
    console.log(error)
  }
}
