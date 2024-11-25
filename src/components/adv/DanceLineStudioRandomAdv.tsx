import { component$ } from '@builder.io/qwik'

import DLSHipHopAdv from './DLSHipHopAdv.tsx'
import DLSHighHeelsAdv from './DLSHighHeelsAdv.tsx'
import DLSContemporaryAdv from './DLSContemporaryAdv.tsx'
import DLSBachataCoupleAdv from './DLSBachataCoupleAdv.tsx'
import DLSBachataLadyStyleAdv from './DLSBachataLadyStyleAdv.tsx'


export default component$(() => {
    const components = [DLSBachataCoupleAdv, DLSBachataLadyStyleAdv, DLSContemporaryAdv, DLSHighHeelsAdv, DLSHipHopAdv]
    const randomAdv = Math.floor(Math.random() * 5)
    const RandomComponent = components[randomAdv]

    return <RandomComponent />
})