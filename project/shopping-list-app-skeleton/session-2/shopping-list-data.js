// shopping-list-data.js - Data access module with async/Promise pattern

// In-memory data store - organized by userId
const userLists = {
    1: [  // alice's lists
        {
            id: 1,
            name: 'Grocery Shopping',
            items: [
                { id: 1, name: 'Milk', quantity: 2, bought: false },
                { id: 2, name: 'Bread', quantity: 1, bought: true },
                { id: 3, name: 'Eggs', quantity: 12, bought: false }
            ]
        }
    ],
    2: [  // bob's lists
        {
            id: 1,
            name: 'Hardware Store',
            items: [
                { id: 1, name: 'Hammer', quantity: 1, bought: false },
                { id: 2, name: 'Nails', quantity: 100, bought: true }
            ]
        }
    ],
    3: [] // charlie's lists (empty)
};

// Get all lists for a user
async function getAllLists(userId) {
    // TODO: Implement this function
    // Should return the lists for the given userId
    // Return empty array if userId not found
    // Use Promise.resolve() to return the result
    return Promise.reject(new Error('getAllLists not implemented'));
}

// Get a specific list by ID
async function getListById(userId, listId) {
    const lists = userLists[userId] || [];
    const list = lists.find(l => l.id === parseInt(listId));
    
    if (list) {
        return Promise.resolve(list);
    } else {
        return Promise.reject(new Error('List not found'));
    }
}

// Create a new list
async function createList(userId, name) {
    if (!userLists[userId]) {
        userLists[userId] = [];
    }
    
    const newList = {
        id: Date.now(),
        name,
        items: []
    };
    
    userLists[userId].push(newList);
    return Promise.resolve(newList);
}

// Delete a list
async function deleteList(userId, listId) {
    if (!userLists[userId]) {
        return Promise.reject(new Error('List not found'));
    }
    
    const index = userLists[userId].findIndex(l => l.id === parseInt(listId));
    
    if (index === -1) {
        return Promise.reject(new Error('List not found'));
    }
    
    userLists[userId].splice(index, 1);
    return Promise.resolve({ success: true });
}

// Add item to list
async function addItem(userId, listId, itemData) {
    const list = await getListById(userId, listId);
    
    const newItem = {
        id: Date.now(),
        name: itemData.name,
        quantity: itemData.quantity,
        bought: false
    };
    
    list.items.push(newItem);
    return Promise.resolve(newItem);
}

// Toggle item bought status
async function toggleBought(userId, listId, itemId) {
    const list = await getListById(userId, listId);
    const item = list.items.find(i => i.id === parseInt(itemId));
    
    if (!item) {
        return Promise.reject(new Error('Item not found'));
    }
    
    item.bought = !item.bought;
    return Promise.resolve(item);
}

// Delete item from list
async function deleteItem(userId, listId, itemId) {
    const list = await getListById(userId, listId);
    const index = list.items.findIndex(i => i.id === parseInt(itemId));
    
    if (index === -1) {
        return Promise.reject(new Error('Item not found'));
    }
    
    list.items.splice(index, 1);
    return Promise.resolve({ success: true });
}

export { getAllLists, getListById, createList, deleteList, addItem, toggleBought, deleteItem };
