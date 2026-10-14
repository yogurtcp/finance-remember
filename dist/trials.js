// Keep old links working as the guided format becomes the whole course.
import {guidedLessons} from './lesson-content.js';
import {mountGuidedCourse} from './guided-ui.js';
export const bondTrials=guidedLessons.filter(l=>['promise','price','yield'].includes(l.id));
export function mountBondTrials(root,route,options){
 const destination=route.startsWith('trial/')?'lesson/'+route.split('/')[1]:'chapter/bonds';
 return mountGuidedCourse(root,destination,options);
}
