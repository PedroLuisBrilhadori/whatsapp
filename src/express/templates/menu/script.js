function draggableTasks(isDraggable) {
   let tasks = document.querySelectorAll('.kanban-drag');

   tasks.forEach((task) => {
      task.draggable = isDraggable;
   });
}
