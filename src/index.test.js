import {
  renderLists,
  renderTaskCount,
  colorTasks,
  openOrCloseAddTaskForm,
  openOrCloseUpdateTaskForm,
  renderTasks,
  render,
  renderAndSave,
  editTask,
  createList,
  createTask,
  removeTask,
  closeModal,
} from './index.js';

describe('createList', () => {
  it('should return a HTML Object', () => {
    expect(typeof createList).toBe('object');
  });

  it('should not be array', () => {
    expect(typeof createList).not.toBe('array');
  });
});