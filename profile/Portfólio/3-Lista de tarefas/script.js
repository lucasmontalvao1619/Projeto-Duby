document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task');
    const tasksContainer = document.getElementById('tasks-container');
    const taskCountElement = document.getElementById('task-count');
    
    let tasks = [];
    
  
    function updateTaskCount() {
        taskCountElement.textContent = tasks.length;
    }
    
   
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Por favor, digite uma descrição para a tarefa!');
            return;
        }
        
       
        const task = {
            id: Date.now(),
            text: taskText
        };
        
        tasks.push(task);
        renderTasks();
        taskInput.value = '';
        updateTaskCount();
    }
    

    function removeTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
        updateTaskCount();
    }
    

    function renderTasks() {
        tasksContainer.innerHTML = '';
        
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            
            const taskTextElement = document.createElement('span');
            taskTextElement.className = 'task-text';
            taskTextElement.textContent = task.text;
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-task';
            removeBtn.textContent = 'Remover';
            removeBtn.addEventListener('click', () => removeTask(task.id));
            
            taskElement.appendChild(taskTextElement);
            taskElement.appendChild(removeBtn);
            
            tasksContainer.appendChild(taskElement);
        });
    }
    
    
    addTaskBtn.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    
    updateTaskCount();
});