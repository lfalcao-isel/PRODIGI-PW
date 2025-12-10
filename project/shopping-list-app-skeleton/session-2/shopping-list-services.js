// shopping-list-services.js - Business logic and validation layer

import * as data from './shopping-list-data.js';

// Get all lists for a user
async function getAllLists(userId) {
    return await data.getAllLists(userId);
}

// Get a specific list
async function getList(userId, listId) {
    return await data.getListById(userId, listId);
}

// Create new list with validation
async function createNewList(userId, name) {
    if (!name || name.trim() === '') {
        throw new Error('List name cannot be empty');
    }
    
    return await data.createList(userId, name.trim());
}

// Remove list
async function removeList(userId, listId) {
    return await data.deleteList(userId, listId);
}

// Add item with validation
async function addItemToList(userId, listId, name, quantity) {
    if (!name || name.trim() === '') {
        throw new Error('Item name cannot be empty');
    }
    
    if (!quantity || quantity <= 0) {
        throw new Error('Quantity must be greater than 0');
    }
    
    return await data.addItem(userId, listId, {
        name: name.trim(),
        quantity
    });
}

// Toggle item status
async function toggleItem(userId, listId, itemId) {
    return await data.toggleBought(userId, listId, itemId);
}

// Remove item
async function removeItem(userId, listId, itemId) {
    return await data.deleteItem(userId, listId, itemId);
}

export { getAllLists, getList, createNewList, removeList, addItemToList, toggleItem, removeItem };
