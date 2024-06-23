document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Load tasks from Local Storage
    loadTasks();
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      addTask(taskInput.value);
      taskInput.value = '';
    });
  
    taskList.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete')) {
        deleteTask(event.target.parentElement);
      } else if (event.target.tagName === 'LI') {
        toggleComplete(event.target);
      }
    });
  
    function addTask(task) {
      if (task.trim() === '') return;
  
      const li = document.createElement('li');
      li.textContent = task;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete');
      li.appendChild(deleteBtn);
  
      taskList.appendChild(li);
      saveTasks();
    }
  
    function deleteTask(taskItem) {
      taskList.removeChild(taskItem);
      saveTasks();
    }
  
    function toggleComplete(taskItem) {
      taskItem.classList.toggle('completed');
      saveTasks();
    }
  
    function saveTasks() {
      const tasks = [];
      taskList.querySelectorAll('li').forEach(taskItem => {
        tasks.push({
          text: taskItem.firstChild.textContent,
          completed: taskItem.classList.contains('completed')
        });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.completed) {
          li.classList.add('completed');
        }
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        li.appendChild(deleteBtn);
  
        taskList.appendChild(li);
      });
    }
  });
  