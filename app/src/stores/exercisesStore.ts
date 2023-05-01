import { Exercise } from '@/model/exercise';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useExercisesStore = defineStore('exercisesStore', () => {
  const exercises = ref<Exercise[]>([
    {
      name: 'Kätekõverdused jala tõstega',
      description: 'Tavalised kätekõverdused korda mööda jalga tõstes',
    },
    {
      name: 'Slaalomhüpped',
      description: 'Kükist hüpped küljelt küljele',
    },
    {
      name: 'Alt läbi jooks',
      description: 'Toenglamangus jooksmine',
    },
  ]);

  const addExercise = (exercise: Exercise) => {
    exercises.value.push(exercise);
  };

  return { exercises, addExercise };
});
