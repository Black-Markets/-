// Todo List Application with Local Storage

class TodoApp {
    constructor() {
        // DOM Elements
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.emptyState = document.getElementById('emptyState');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.clearCompletedBtn = document.getElementById('clearCompletedBtn');
        this.clearAllBtn = document.getElementById('clearAllBtn');
        this.toast = document.getElementById('toast');
        this.totalTasksEl = document.getElementById('totalTasks');
        this.completedTasksEl = document.getElementById('completedTasks');
        this.activeTasksEl = document.getElementById('activeTasks');

        // State
        this.todos = [];
        this.currentFilter = 'all';

        // Initialize
        this.loadFromStorage();
        this.setupEventListeners();
        this.render();
    }

    // Event Listeners
    setupEventListeners() {
        // Add todo
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });

        // Filter
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => this.setFilter(btn.dataset.filter));
        });

        // Clear buttons
        this.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());
        this.clearAllBtn.addEventListener('click', () => this.clearAll());
    }

    // Add new todo
    addTodo() {
        const text = this.todoInput.value.trim();

        if (!text) {
            this.showToast('Silakan masukkan tugas!', 'warning');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            priority: 'medium', // low, medium, high
            createdAt: new Date().toLocaleDateString('id-ID')
        };

        this.todos.unshift(todo);
        this.saveToStorage();
        this.render();
        this.todoInput.value = '';
        this.todoInput.focus();
        this.showToast('✓ Tugas ditambahkan!', 'success');
    }

    // Toggle todo completion
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.render();
            const message = todo.completed ? '✓ Tugas selesai!' : 'Tugas diaktifkan kembali';
            this.showToast(message, 'success');
        }
    }

    // Delete todo
    deleteTodo(id) {
        const index = this.todos.findIndex(t => t.id === id);
        if (index > -1) {
            this.todos.splice(index, 1);
            this.saveToStorage();
            this.render();
            this.showToast('✓ Tugas dihapus!', 'success');
        }
    }

    // Set filter
    setFilter(filter) {
        this.currentFilter = filter;
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        event.target.closest('.filter-btn').classList.add('active');
        this.render();
    }

    // Clear completed todos
    clearCompleted() {
        const completedCount = this.todos.filter(t => t.completed).length;
        if (completedCount === 0) {
            this.showToast('Tidak ada tugas selesai untuk dihapus', 'warning');
            return;
        }

        if (confirm(`Hapus ${completedCount} tugas selesai?`)) {
            this.todos = this.todos.filter(t => !t.completed);
            this.saveToStorage();
            this.render();
            this.showToast(`✓ ${completedCount} tugas dihapus!`, 'success');
        }
    }

    // Clear all todos
    clearAll() {
        if (this.todos.length === 0) {
            this.showToast('Tidak ada tugas untuk dihapus', 'warning');
            return;
        }

        if (confirm('Hapus SEMUA tugas? Tindakan ini tidak dapat dibatalkan!')) {
            this.todos = [];
            this.saveToStorage();
            this.render();
            this.showToast('✓ Semua tugas dihapus!', 'success');
        }
    }

    // Get filtered todos
    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(t => !t.completed);
            case 'completed':
                return this.todos.filter(t => t.completed);
            default:
                return this.todos;
        }
    }

    // Update statistics
    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const active = total - completed;

        this.totalTasksEl.textContent = total;
        this.completedTasksEl.textContent = completed;
        this.activeTasksEl.textContent = active;
    }

    // Render todos
    render() {
        const filtered = this.getFilteredTodos();

        // Clear list
        this.todoList.innerHTML = '';

        // Show empty state
        if (this.todos.length === 0) {
            this.emptyState.style.display = 'flex';
            this.updateStats();
            return;
        }

        this.emptyState.style.display = 'none';

        // Render todos
        filtered.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''} ${todo.priority}-priority new-item`;
            li.innerHTML = `
                <input 
                    type="checkbox" 
                    class="todo-checkbox" 
                    ${todo.completed ? 'checked' : ''}
                    onchange="app.toggleTodo(${todo.id})"
                >
                <span class="priority-badge ${todo.priority}">${todo.priority}</span>
                <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                <span class="todo-date">${todo.createdAt}</span>
                <div class="todo-actions">
                    <button class="delete-todo" onclick="app.deleteTodo(${todo.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;

            this.todoList.appendChild(li);
        });

        // Update stats
        this.updateStats();

        // Remove animation class after animation
        setTimeout(() => {
            document.querySelectorAll('.new-item').forEach(item => {
                item.classList.remove('new-item');
            });
        }, 300);
    }

    // Show toast notification
    showToast(message, type = 'info') {
        this.toast.textContent = message;
        this.toast.className = `toast show ${type}`;
        setTimeout(() => {
            this.toast.classList.remove('show');
        }, 3000);
    }

    // Escape HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Save to Local Storage
    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    // Load from Local Storage
    loadFromStorage() {
        const stored = localStorage.getItem('todos');
        if (stored) {
            try {
                this.todos = JSON.parse(stored);
            } catch (error) {
                console.error('Error loading todos from storage:', error);
                this.todos = [];
            }
        }
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TodoApp();
});