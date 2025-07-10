import { library } from '@fortawesome/fontawesome-svg-core';
import { faDatabase, faFont, faBacon, faAtom, faFlask, faFire, faBan, faWater, faVenusMars, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';

library.add(faDatabase, faFont, faBacon, faAtom, faFlask, faFire, faBan, faWater, faVenusMars, faSeedling );
ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);